---
comments: true
date:
    created: 2025-10-07
    updated: 2025-10-09
authors:
    - Xiaokang2022
categories:
    - 开源软件
tags:
    - 开源
    - 工具
    - 网络
    - 文档
draft: true
---

# 开源工具 Nginx：部署 Mkdocs 文档的一大利器

只要你是个资深的开发者，那想必 Nginx 的大名你肯定是听过的，知道它的功能多且非常强大。这么多的功能想全部了解肯定是要花费很多时间的，但我们程序员都很“懒”的，肯定是要用最少的时间学到最多的东西。那这篇文章将教你怎么用 Nginx 搭建一个静态的文档网站，又或是怎么通过反向代理加速访问一个你想要访问的文档网站。

别以为这很简单，有些地方有坑的！

<!-- more -->

## 一、引言

先提前说明，本文所用到的静态网站源文件是通过开源文档框架 `mkdocs` 构建得到的。事实上，`mkdocs` 是有一个**实时预览**的功能的，可以临时作为一个服务器来搭建静态文档网站，但 `mkdocs` 官方也提到了，不要将该功能用于生产环境，因为该功能几乎没有并发，访问的人一多，就会炸！所以我才考虑使用传说中的神器 Nginx 来试一下。

前面也提到，我很懒，那么为什么不直接用 `mkdocs` 的实时预览功能呢？反正压根就没几个人会逛我的网站不是吗（惨）？实际上这对于我来说是有契机，因为前段时间我确实遇到了需要保证文档网站性能的情况了 —— 团队内多人浏览文档网站。这不是个人博客那样惨淡的访问量，而是可能十几人甚至几十上百人同一时刻访问文档网站的情况，迫不得已，只能上黑科技了！

好了下面正式开始教程。

### 1.1 前置条件

/// info | 假设

读这篇文章之前，我假设你已经掌握了 `mkdocs` 和 `mkdocs-material` 的使用。如果没有，那可能部分内容会让你感到困惑。

///

我构建静态文档网站的框架是 Python 开源的 `mkdocs`，带上开源的主题 `mkdocs-material`。这套组合可以将 Markdown 文件转换为 HTML，无需自己搓前端的内容，并且具有极强的扩展性。但是呢，这套框架的某些功能开启之后，产生的静态文件还不是简单的静态文件，如果用 Nginx 默认的那套配置，又或是使用 Python 的 `http.server` 模块搭建，都会丢失一些功能，后面会专门说明怎么处理的。

下面是写这篇文章时的环境信息：

- OS: 随你，只要能跑 Nginx 和 Python
- Python: `3.14.0`
- Nginx: `1.28.0`
- Mkdocs: `1.6.1`

### 1.2 前置资源

下面是 Nginx 的 GitHub 存储库链接以及官网链接：

<div markdown class="grid cards">

-   :material-github: <https://github.com/nginx/nginx>

    ---

    The official Nginx Open Source repository.

    [:octicons-arrow-right-24: Releases](https://github.com/nginx/nginx/releases){target=_blank}

-   :material-github: <https://nginx.org>

    ---

    Nginx is an HTTP web server, reverse proxy, content cache, load balancer, TCP/UDP proxy server, and mail proxy server.

</div>

多的不说了，朋友们，开搞！

## 二、简谈 Nginx

稍稍简单说明一下 Nginx 的一些大框架上的东西，免得看后面的内容时不知所云……

### 2.1 Nginx 运作方式

分发的 Nginx 二进制包在下载之后是一个压缩包的形式，解压后会得到一个文件夹，文件结构大致如下（此处为 Windows 系统下）：

```tree linenums="0"
nginx-1.28.0/
    conf/  # 配置文件
    contrib/
    html/  # 静态网页文件
    logs/  # 日志文件
    temp/
    nginx.exe
```

启动方式可以是双击 nginx.exe，也可以通过命令行来运行。不过我推荐使用命令行来运行，因为双击后只是一闪而过，没有什么东西留下，没看清楚的话你都不知道它到底有没有启动。

/// warning | 不要使用单一文件夹的 Nginx 多开

Nginx 是以一个这样的文件夹来运作的，也就是说，它不能多开，或者说，使用同一个文件夹内 Nginx 去多开。

如果要在一个服务器或者设备上多开，应该复制一份这个文件夹，在另外一个地方以同样的方式操作。

///

### 2.2 如何控制 Nginx

一般都是通过命令行去控制 Nginx 的，比如：

```shell linenums="0"
./nginx -s quit
```

Nginx 1.28.0 的帮助如下：

```shell linenums="0"
$ ./nginx -h
nginx version: nginx/1.28.0
Usage: nginx [-?hvVtTq] [-s signal] [-p prefix]
             [-e filename] [-c filename] [-g directives]

Options:
  -?,-h         : this help
  -v            : show version and exit
  -V            : show version and configure options then exit
  -t            : test configuration and exit
  -T            : test configuration, dump it and exit
  -q            : suppress non-error messages during configuration testing
  -s signal     : send signal to a master process: stop, quit, reopen, reload
  -p prefix     : set prefix path (default: NONE)
  -e filename   : set error log file (default: logs/error.log)
  -c filename   : set configuration file (default: conf/nginx.conf)
  -g directives : set global directives out of configuration file
```

下面是一些常用的命令：

| 操作         | 命令                | 返回                   | 备注             |
| ------------ | ------------------- | ---------------------- | ---------------- |
| 启动         | `./nginx`           |                        |                  |
| 检查配置文件 | `./nginx -t`        | 配置文件不正确会有提示 |                  |
| 强制终止     | `./nginx -s stop`   |                        | 不推荐使用       |
| 停止并退出   | `./nginx -s quit`   |                        |                  |
| 重新加载配置 | `./nginx -s reload` | 配置文件不正确会有提示 | 改配置文件时常用 |

/// table-caption

Nginx 常用命令

///

## 三、本地部署流程

本地部署相对来说比较简单，只需要稍稍注意常规的 Nginx 配置可能无法支持 `mkdocs-material` 的某些功能，需要根据需求进行修改。

/// tip | 特别说明

这里指的本地，是指在属于你自己的设备上部署，不一定是你当前使用的设备，也可以是你能够控制的服务器。这与后面的章节 [四、反向代理流程](#四反向代理流程) 不同。流程大致是这样的：

```mermaid
flowchart LR
    1(文档托管服务器（本地）)
    2(用户)
    1 --直接访问--> 2
```

反向代理的流程见 [后文](#41-流程差异)。

///

### 3.1 下载 Nginx

先去官网下载最新稳定版的 [Nginx](https://nginx.org/en/download.html "下载 Nginx"){ target="_blank" }，这里基于本博客编写的时间下载了最新的稳定版：`1.28.0`。

得到的是一个 zip 压缩包，解压后我们需要在其中新建两个文件夹：

```tree linenums="0" hl_lines="7 8"
nginx-1.28.0/
    conf/
    contrib/
    html/
    logs/
    temp/
    _raw/  # 原始文件
    site/  # 静态文件
    nginx.exe
```

- `_raw/`: 用于支持 `mkdocs-material` 的 **查看本页的源代码** 的功能；
- `site/`: `mkdocs` 构建后的静态网页文件；

### 3.2 复制网页文件到对应位置

关于 `mkdocs` 以及 `mkdocs-material` 我就不多说了。构建之后会产生一个名为 `site/` 的目录，这个目录就是上面我们所需的 `site` 文件夹，直接复制或者移动过去就行。

而 `_raw/` 目录一般就是指 `docs` 文件夹，重命名后移动过去即可。这个名称其实不重要，你也可以改成其它不是 `_raw/` 的名称。

/// warning | 构建 `site` 文件夹前需注意

为了使 `mkdocs` 构建出来的文档页面上的 **查看本页的源代码** 点击后跳转到 `_raw/` 目录下，在 `mkdocs` 的配置文件 mkdocs.yml 中某些地方需要进行修改：

```yaml linenums="0" title="mkdocs.yml"
edit_uri: http://localhost:8080/_raw/ # 编辑地址
```

///

这里访问原文的内容是通过访问本地的文件实现的，而当我们使用第三方的文档托管服务时，如 GitHub Pages，实际这个地址是由 GitHub 提供的，点击后会跳转到 <https://raw.githubusercontent.com> 并访问一些内容，方式其实也类似于这种（你可以点击本页右上角的 **查看本页的源代码** 的按钮试试）。

### 3.3 配置 Nginx

配置 Nginx 是最重要的步骤。在 Nginx 的配置目录 `conf/` 下有很多配置文件，但这里我们只需要关注名为 `nginx.conf` 的配置文件即可。

/// warning | 备份你的配置文件

无论怎样，都最好先备份你现在的配置文件，尽管它现在是默认的内容，这样后续调整出了什么问题还可以进行恢复。

///

下面我们需要的配置文件：

```conf { .blur hl_lines="31-66" title="nginx.conf" }
worker_processes auto;

events {
    worker_connections 1024;
}

http {
    include mime.types;
    default_type application/octet-stream;

    sendfile on;
    tcp_nopush on;
    keepalive_timeout 65;
    keepalive_requests 1000;

    gzip on;
    gzip_comp_level 5;
    gzip_min_length 256;
    gzip_vary on;
    gzip_types
        text/plain
        text/css
        text/javascript
        application/javascript
        application/json
        application/xml
        application/rss+xml
        application/atom+xml
        image/svg+xml;

    types {
        text/plain md;  # 让 md 文件以纯文本形式查看（避免直接下载）
    }

    server {
        listen 8080;  # 端口
        server_name localhost;  # 地址，如果有必要就改成你想要的

        root site;  # 根目录
        index index.html;  # index 位置

        location /_raw/ {  # 原始文件位置
            alias _raw/;  # 网页访问位置
            charset utf-8;  # UTF-8 编码
            autoindex on;  # 启用目录
            autoindex_format html;  # 目录启用 HTML 格式
            autoindex_localtime on;  # 目录启用本地时间
            autoindex_exact_size off;  # 目录启用非精确大小（带单位）
        }

        location / {
            try_files $uri $uri/ =404;  # 即时加载机制
        }

        location ~* \.(?:ico|css|js|map|gif|jpe?g|png|woff2?|eot|ttf|svg|json)$ {
            try_files $uri =404;
            expires 1M;  # 缓存一个月
            access_log off;
            add_header Cache-Control "public";
        }

        error_page 404 /404.html;  # 404 位置
        location = /404.html {
            internal;  # 不允许直接访问
            root site;
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root html;
        }
    }
}
```

按照上面的内容修改配置文件即可。

/// danger | 必须注意的一点

配置项 `server_name` 必须和你在浏览器中访问的地址一致，否则即时加载机制将会失效！（退化成默认的访问方式）

///

### 3.4 启动 Nginx

很简单，先把这整个 Nginx 文件夹移动到你想要移动的位置，然后再在当前位置下启动终端或者启动终端后切换到当前目录。然后输入以下语句：

```shell linenums="0"
./nginx
```

如果没有任何异常说明启动成功了，这时打开 [对应网页](http://localhost:8080 "localhost:8080"){ target="_blank" } 看看有没有对应的内容，并测试一下对应的功能是否正常运行了。

## 四、反向代理流程

除了自己搭建和部署文档之外，还可以使用第三方的服务。有些第三方文档托管服务是免费的，比如 GitHub Pages、Netlify 等，但它们往往访问比较慢，甚至无法访问，而这时反向代理就可以发挥它的用处了（当然它不只这个用处）。

我们可以使用 Nginx 的反向代理功能加速用户对文档的访问。

### 4.1 流程差异

这里所说的反向代理是文档托管在 GitHub Pages 等第三方的服务上时，如何通过 Nginx 反向代理来达到加速访问的目的。

前面也提到了，与本地部署的流程不同，反向代理相当于一个“中间商”，大致流程如下：

```mermaid
flowchart LR
    1(文档托管服务器)
    2(反向代理服务器)
    3(用户)
    1 --> 2 --加速访问--> 3
    1 --原速访问--> 3
```

由于文档本身并不在我们这里，所以反向代理只需要修改配置文件即可。当然，想利用反向代理加速还有一个前提，就是反向代理服务器连接文档托管服务器应该要比用户直接访问快，不然就无法起到加速的作用了。

### 4.2 修改配置文件

所需要的配置文件内容如下：

<!-- TODO -->

```conf title="nginx.conf"

```

将上述对于内容改成你需要的，然后跟之前一样跑一下看看，然后访问对应的网站看看是不是比之前快一些。

## 五、丐版文档托管

此处是讲一个特殊情况，假设说，你的服务器上没有 Nginx，也没办法下载的情况，该怎么使用纯 Python 的方式模拟上面那一套（或者说，你就是只想用纯 Python 的方式）。当然，这种情况应该不可能出现吧……

先说结论，可以用 Python 完成上述功能，但跟之前说过的一样，几乎没有并发（不排除未来几年会实现并发），不过这对于 10 人以下应该还是勉强可以应付的。

### 5.1 `mkdocs serve` 访问文档

对于文档访问就很简单了，直接使用 `mkdocs` 的 `serve` 命令即可实现，在配置文件 mkdocs.yml 中修改相关内容即可。关键配置项如下：

```yaml linenums="0" title="mkdocs.yml"
dev_addr: 127.0.0.1:8080 # 预览模式地址
```

改好相关配置后，直接在终端调用命令进行启动：

```shell linenums="0"
mkdocs serve
```

如果想要进一步提高性能，可以关闭实时更新文档功能：

```shell linenums="0"
mkdocs serve --no-livereload
```

~~究竟是多么想不开才会直接用这个嘞？？？~~

/// question | 猜你想问：为啥不直接用 `http.server` 部署静态文件呢？

可以的，只不过无法支持某些功能（如即时加载）

///

### 5.2 `http.server` 查看原始文档

`http` 是 Python 的一个内置包，其子模块 `server` 有相关命令行的接口，可以快速实现浏览器访问文件夹的功能。

在你需要访问的根目录下打开终端，输入命令来启动一个访问文件的服务，命令行帮助如下：

```shell linenums="0"
$ python3 -m http.server -h
usage: python.exe -m http.server [-h] [--cgi] [-b ADDRESS] [-d DIRECTORY] [-p VERSION] [--tls-cert PATH] [--tls-key PATH] [--tls-password-file PATH] [port]

positional arguments:
  port                  bind to this port (default: 8000)

options:
  -h, --help            show this help message and exit
  --cgi                 run as CGI server
  -b, --bind ADDRESS    bind to this address (default: all interfaces)
  -d, --directory DIRECTORY
                        serve this directory (default: current directory)
  -p, --protocol VERSION
                        conform to this HTTP version (default: HTTP/1.0)
  --tls-cert PATH       path to the TLS certificate chain file
  --tls-key PATH        path to the TLS key file
  --tls-password-file PATH
                        path to the password file for the TLS key
```

一个简单的示例：

```shell linenums="0"
python3 -m http.server 8081 -b localhost
```

/// failure | 无法在同一端口启动

`mkdocs` 和 `http.server` 这两个无法在同一个端口启用，在 `mkdocs` 的相关配置项中需要特别注意（这里是配合上面的命令进行示例的）：

```yaml linenums="0" title="mkdocs.yml"
edit_uri: http://localhost:8081/ # 编辑地址
```

///

直接这样启动，你会发现一个问题，点击查看 Markdown 文件时浏览器会给你直接下载……所以我们需要自己定义浏览器处理 Markdown 类型文件的方式，具体是写一个脚本：

<!-- TODO -->

```python title="file_server.py"

```

然后不再使用 Python 运行 `http.server` 包，而是运行这个脚本：

```shell linenums="0"
python3 -m file_server.py
```

这时你再尝试访问 Markdown 文件，浏览器就会以纯文本的方式显示给你看了。
