---
comments: true
date:
    created: 2024-04-12
    updated: 2024-04-12
authors:
    - Xiaokang2022
categories:
    - CSDN
tags:
    - GitHub
    - Python
    - 博客
    - 搭建教程
draft: true
---

# 利用 Python 与 GitHub Pages 搭建超美观的个人博客

## 一、效果展示

先上我搭建的个人博客的模板项目及其演示链接吧！

完成下面的内容基本无需写任何代码，只要你会用 Markdown 写文档！

GitHub 项目地址（希望大家能多多支持本项目）：
Xiaokang2022/Fucking-Code: Everything about the fucking code! A demo gh-pages of mkdocs with material theme. (github.com)
https://github.com/Xiaokang2022/Fucking-Code

个人博客演示地址：

开始 - Fucking Code (xiaokang2022.github.io)
https://xiaokang2022.github.io/Fucking-Code/

<!-- more -->

下面是给 GitHub 上不去的朋友们看的效果图片（多图警告）：


个人博客主页

更新日志界面

一般文本效果

多标签代码块

表格与公式


带标题代码块

提示框

评论系统

搜索功能

## 二、搭建前事项

### 2.1 需求准备




### 2.2 实现方式解释

通过 Python 第三方文档库 mkdocs 以及其最美观的主题 Material 将 Markdown 文件编译成前端文件并通过 git 的方式上传到 GitHub 中开启了 gh pages 的项目里，让其自动更新 gh pages 页面的内容，这样我们就可以通过 Web 浏览器查看我们个人博客的展示效果了。







### 三、基本搭建

#### 3.1 Python 环境搭建

此部分较为常规，不赘述，不会的可见我之前写的一篇文章：Python 教程 02：Python 编程环境的搭建与 IDE 的选择-CSDN博客

#### 3.2 安装 mkdocs 及其主题库 material

在 Python 环境下输入以下命令安装 mkdocs

pip install mkdocs
以及主题库 material

pip install mkdocs-material

#### 3.3 创建 GitHub 账号并新建一个公开项目

此部分也比较常规，不赘述，GitHub 也可也用其它有 Pages 服务的代码托管平台替代（如 Gitee 和 GitLab）。

这里着重说一点，新建项目必须处于公开状态，不然 Pages 用不了。

### 3.4 clone 新建的项目到本地并初始化仓库

clone 到本地就不提了，很常规的操作。说说仓库文档的结构吧，必须保证一定的文件结构，mkdocs 才能正确识别并转换相应的 Markdown 文件为 HTML 文件等。

#### 3.4.1 源 Markdown 文件夹

源 Markdown 文件的文件夹名称默认为 docs（后面可以修改的，但一般不改，没必要），其位于项目根目录下，其没有强制性的结构要求，但有几个默认的规则：

若文件夹中存在 index.md 或者 index.html，则会将此文件的内容作为该文件夹的“导引”页。

一般来说，docs 文件夹中要有一个 index.md 作为网站首页内容。

#### 3.4.2 转换后生成的文件夹

通过 mkdocs 转换后会在项目根目录下生成一个名为 site 的文件夹，这个文件夹就是 mkdocs 将 docs 文件夹中的内容转换后生成的前端文件，我们不去修改它（但要保留它，上传的时候需要）。每次重新生成网站文件时，会自动修改里面的内容。

#### 3.4.3 其它关键文件

一般来说，项目根目录下需要存在以下文件（红色表示一般是必须的）：





我们一般会在 .gitignore 里面添加 site/，防止 site 文件夹被 git 直接上传（它的上传不是通过 git 上传的，而是通过 mkdocs）

下面是我的 .gitignore 文件，供大家参考

# .gitignore 文件自身没必要上传
.gitignore

# site 文件夹不要上传
site/
 配置文件比较复杂，这里先不讲解，后面会详述。

### 3.5 mkdocs 相关命令

一般来说，做到这里就可以试着将 Markdown 文件转换为前端文件了。下面是一些 mkdocs 常用的命令：

命令	描述
mkdocs build	转换 docs 文件夹内容并生成名为 site 的前端文件夹
mkdocs serve	自动转换并在本地预览网站的效果（默认 IP 为：127.0.0.1:8000 ）
mkdocs gh-deploy	自动转换并上传 site 文件的内容到云端仓库对应分支（默认为 gh-pages）
上面三个中，最后两个最常用，其实第一个一般都用不到，因为后面两个在执行的时候会自动执行第一个命令。

这里着重说一下第二个本地实时预览的功能，本地预览启动后，无论你在源文件夹 docs 中修改了什么内容，mkdocs 都会立刻转换它们并实时在对应 IP 上实时更改，非常方便于测试和修改我们的网站。

当全部内容都确定后，就可以使用最后一个命令进行上传了。

### 3.6 配置文件

配置文件可谓是 mkdocs 的核心！

mkdocs 本身的配置和 material 主题的配置都是写在 mkdocs.yml 文件（ Yaml 格式的配置文件）中的，这里给出两个官网：



由于这俩网站加载速度都稍微有些慢，而且全是英文的，想全部整明白非常麻烦，于是我给大家整理好了我自己的配置文件（这个东西花了我数十小时！十分滴珍贵啊！）。

若是觉得此配置文件对你的帮助很大，请务必给我的项目点 Star！白嫖可耻！本项目链接在文章顶部，谢谢各位。

本文章此处的配置文件不会同步与我项目中的更新，为此在此处放上地址（不过大体上应该不会有太多变化）：Fucking-Code/mkdocs.yml at main · Xiaokang2022/Fucking-Code (github.com)

下面是配置文件内容，我会尽量对每一项做出解释，某些内容大家根据自己的需求进行更改（配置文件是无法直接复制使用的，有些需要下载对应的插件）。

site_name: Fucking Code # 站点名称
site_url: https://Xiaokang2022.github.io/Fucking-Code/ # 站点链接
repo_url: https://github.com/Xiaokang2022/Fucking-Code/ # 仓库地址
repo_name: Xiaokang2022/Fucking-Code # 仓库名称
edit_uri: edit/main/docs/ # 编辑地址（页面会出现编辑按钮）
site_description: Everything about the fucking code. # 站点描述
site_author: Xiaokang2022 # 站点作者
copyright: Copyright &copy; 2024 小康2022 # 版权信息（会出现在左下角）
remote_branch: gh-pages # GitHub Pages 分支名称（默认值）
remote_name: origin # 远程分支的名称（默认值）
docs_dir: docs # 文档目录（默认值）
site_dir: site # 网站目录（默认值）
strict: false # 严格模式，不太懂（默认值）
dev_addr: 127.0.0.1:8000 # 开发模式下的 IP 地址（默认值）

markdown_extensions:
  # === 从这里开始到下面，是 pymdown-extensions 库的 markdown_extensions 配置 ===
  # 需求：pip install pymdown-extensions （不过一般应该都装了）

  - pymdownx.keys # 按键高亮，类似于行内代码那种，如 <kbd>Ctrl</kbd>，或者带图标的格式（强制小写）++ctrl++，也可组合 ++ctrl+s++（推荐第二种方式，第二种自带图标）
  - pymdownx.mark # 允许文本下划线，即 ^^Text^^
  - pymdownx.caret # 允许文本高亮，即 ==Text==
  - pymdownx.tilde # 允许文本删除线，即 ~~Text~~
  - pymdownx.details # 允许提示框与文本左右布局，而非原来的上下布局，如 !!! note inline "Hint"（左），!!! note inline end（右）
  - pymdownx.snippets # 允许外联任何内容
  - pymdownx.striphtml # 去除 HTML 中不需要的注释和 / 或标记属性，可减小 HTML 大小
  - pymdownx.smartsymbols # 允许上下标，如 x^2^（x²）
  - pymdownx.inlinehilite # 支持行内代码块高亮，如 `#!python range()`
  - pymdownx.smartsymbols # 智能符号，如 (c) 就是 ©️

  - pymdownx.b64 # 允许使用 base64 编码嵌入本地 PNG、JPEG 和 GIF 图像引用（pymdownx 支持，mkdocs 暂时不支持）
  - pymdownx.escapeall # 允许使用反斜杠（pymdownx 支持，mkdocs 貌似部分支持，不完全支持）
  - pymdownx.magiclink # 自动识别超链接（pymdownx 支持，mkdocs 暂时不支持）
  - pymdownx.progressbar # 允许进度条语法（pymdownx 支持，mkdocs 暂时不支持）
  - pymdownx.saneheaders # “#title” 也是标题，虽然中间没有空格（pymdownx 支持，mkdocs 暂时不支持）

  - pymdownx.blocks.tab # 支持更高级的标签块写法（危：可能与 pymdownx.tabbed 冲突）
  - pymdownx.blocks.html # 支持一些更高级的 md 内嵌 HTML 语法（pymdownx.blocks 默认开启）
  - pymdownx.blocks.details # 支持更高级的提示框布局（危：可能与 pymdownx.details 冲突）
  - pymdownx.blocks.admonition # 支持更高级提示框语法（危：可能与 admonition 冲突）
  - pymdownx.blocks.definition # 支持更高级的定义块语法（危：可能与 def_list）

  - pymdownx.arithmatex: # 允许数学表达式，即 $$y=x+1$$，或行内的 $x=1$
      generic: true

  - pymdownx.betterem: # 允许斜体和加粗
      smart_enable: all

  - pymdownx.critic: # 允许批注，批注详情见 https://mkdoc-material.llango.com/reference/formatting/
      mode: view # 批注模式，可为 view，accept 和 reject，不懂干啥的

  - pymdownx.highlight: # 允许代码块语法高亮
      use_pygments: true # 使用 pygments 而不是 javascript，啥意思不懂
      linenums: true # 全部显示行号，若为 false，也可指定起始行号，如 ```python linenums="2"，也可指定高亮行，如 hl_lines="2-3"
      linenums_style: pymdownx-inline # 行号样式 pymdownx-inline 或者 inline 和 table（最好不要使用其它的值，会有 bug，如代码复制按钮错位）
      anchor_linenums: true # 用锚链接包装代码行号，便于超链接和共享（就是行号可以像锚点一样被点击）
      line_spans: __span # 这对于行突出显示等功能正常工作至关重要，不懂
      pygments_lang_class: true # 对于自定义注释标记的功能至关重要，不懂
      # auto_title: true # 自动为所有代码块添加一个标题

  - pymdownx.emoji: # 允许 Emoji 表情
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg

  - pymdownx.superfences: # 允许各种嵌套
      custom_fences:
        - name: mermaid # 允许 mermaid 图表语法
          class: mermaid
          format:
            !!python/name:pymdownx.superfences.fence_code_format # 不清楚干啥的


  - pymdownx.tabbed: # 允许块（如代码块）添加标签，实现多语言等效果
      alternate_style: true # 唯一支持的样式，不打开等于用不了
      combine_header_slug: true # 后面的不知道干啥的
      slugify: !!python/object/apply:pymdownx.slugs.slugify
        kwds:
          case: lower

  - pymdownx.tasklist: # 允许 Todo 列表清单
      custom_checkbox: true # 允许修改其样式，不然用默认样式就很丑
      clickable_checkbox: true # 是否可通过点击切换状态（但无实际更改，只有视觉效果）

  # === 从这里开始到下面，是 Python-Markdown（MkDocs 默认的） 的 markdown_extensions 配置 ===

  - meta # 允许元标记，页面源代码顶上那几行被横线保住的内容就是元标记，为了支持某些功能使用
  - abbr # 允许文本悬浮提示，就是 ToolTip，例如：*[Text]: 啊吧啊吧
  - tables # 允许用简单语法创建表格
  - smarty # 貌似是为了提高兼容性的，不太清楚
  - def_list # 允许“定义列表”的语法，详细见 https://mkdoc-material.llango.com/reference/lists/
  - attr_list # 允许给 md 元素增加 HTML 和 CSS 属性，如一个按钮 [Subscribe to our mailing list](#){: .md-button }，甚至图标，详细见 https://mkdoc-material.llango.com/reference/buttons/
  - wikilinks # 支持快捷链接语法，例如 [[a link]]，会变成 ./a_link/
  - admonition # 允许各种各样的提示框，或代码框，样式见 https://mkdoc-material.llango.com/reference/admonitions/
  - md_in_html # 允许 md 内嵌在 HTML 中
  - sane_lists # 理智列表，避免旧版 md 抽风（强烈推荐开启）
  # - nl2br # 换行符硬断裂，即文本不像旧版 md 那样，可以直接换行
  # - codehilite # 被 pymdownx 相关扩展取代了，不建议使用这个
  # - fenced_code # 被 pymdownx 相关扩展取代了，不建议使用这个

  - footnotes: # 允许脚注
      BACKLINK_TITLE: 返回脚注 {} # 底部脚注的提示词，建议改一下，默认是英文的
      # SUPERSCRIPT_TEXT: {} # 脚注名称，默认就是 {}，表示标号

  - toc: # 目录设置
      title: 目录 # 在右侧导航侧边栏中设置目录的标题
      permalink_title: 点击定位到锚点 # 设置锚点链接的提示词
      permalink: "#" # 启用目录锚点，并设置符号为 “#”
      slugify:
        !!python/object/apply:pymdownx.slugs.slugify # 这啥玩意儿，不懂，抄官网的
        kwds:
          case: lower

theme: # 主题设置
  name: material # 第三方主题名称
  custom_dir: docs/overrides # 覆盖部分原来的主题（重载目录）
  language: zh # material 语言
  features:
    # - header.autohide # 顶栏自动隐藏
    - content.tooltips # 提示框（以前有的样式变好看了，此外还支持更高级的提示框语法）
    - content.code.copy # 例如：``` python { .yaml .copy } 默认开启，{ .yaml .no-copy } 关闭
    - content.code.annotate # 允许内联代码注释
    - content.tabs.link # 同样的标签，整个网站的同步切换，如 C -> C++，则其它类似的全部标签都同步切换
    - content.action.edit # 允许页面被编辑（会出现编辑按钮）
    - content.action.view # 允许查看页面的源代码（会出现查看源代码按钮）
    - announce.dismiss # 公告栏可以被关闭
    # - navigation.expand # 左侧边栏节点默认全部展开（与 navigation.prune 不兼容）
    # - navigation.prune # 左侧栏节点至多展开一个，以此来减小站点的构建大小（对于页数100+的网站很有用，但是！与 navigation.expand 不兼容）
    - navigation.tabs # 页面顶部导航栏
    - navigation.footer # 页面底下换页的支持
    - navigation.indexes # 左侧边栏大节点是否可以被导向到 index.md
    - navigation.instant # 页面不会重复加载（已加载页面不会再次加载）
    - navigation.instant.progress # 加载速度慢时，在页面顶部显示加载进度（400ms 以上加载时间才会显示它）
    # - navigation.tabs.sticky # 导航栏标题栏位置固定
    # - navigation.sections # 左侧边栏节点是否保持展开
    - navigation.top # 回到顶部的按钮
    - navigation.tracking # 锚点跟踪
    - search.share # 搜索栏分享按钮
    - search.suggest # 搜索栏内容建议
    - search.highlight # 搜索栏内容高亮
    - toc.follow # 锚点关注，侧边栏自动滚动，使锚点总是可见
    # - toc.integrate # 右边侧栏是否集成到左侧边栏
  palette: # 界面整体样式
    - media: "(prefers-color-scheme)" # 系统主题
      toggle: # 切换按钮
        icon: material/theme-light-dark # 图标
        name: 切换至明亮主题 # 提示词
    - media: "(prefers-color-scheme: light)" # 亮色主题
      scheme: default
      # primary: grey # 标题栏颜色（建议自定义 CSS 调整，因为 footer 不会被此参数影响！）
      accent: purple # 链接高亮颜色
      toggle:
        icon: material/weather-sunny
        name: 切换至暗黑主题
    - media: "(prefers-color-scheme: dark)" # 暗色主题
      scheme: slate
      primary: black
      # accent: yellow
      toggle:
        icon: material/weather-night
        name: 切换至系统主题
  font: false # 避免从谷歌加载字体导致网页加载变慢（具体参数可以在自定义 CSS 中指定）
  logo: logo.png # 页面左上角徽标
  favicon: logo.png # 网页的图标
  icon: # 图标重载，替换掉默认的图标
    previous: fontawesome/solid/angle-left # 左下角向前翻页的图标
    next: fontawesome/solid/angle-right # 右下角向后翻页的图标
    repo: fontawesome/brands/github # 右上角仓库图标
    edit: material/pencil # 页面编辑的图标
    view: material/eye # 页面查看源代码的图标
    # annotation: material/arrow-right-circle # 提示按钮的图标，详细操作见 https://squidfunk.github.io/mkdocs-material/reference/annotations/#in-content-tabs-tab-1

extra: # 额外设定
  homepage: . # 左上角徽标链接的地址（此处为一个点，也就是主页）
  annotate: # 允许代码块非注释内的提示，我也不太懂什么意思，貌似是可以在代码里面加悬浮提示框，而不只是在注释中（感觉这样不好，虽然我不用，但不能没有）
    json: [.s2]
  social: # 联系方式（页面右下角内容）
    - icon: fontawesome/brands/github # 图标（可以去官网看有哪些）
      link: https://github.com/Xiaokang2022/Fucking-Code/ # 链接
      name: GitHub 仓库 # 提示词
    - icon: fontawesome/solid/house
      link: https://xiaokang2022.github.io/Fucking-Code/
      name: 主页
    - icon: fontawesome/solid/paper-plane
      link: mailto:2951256653@qq.com
      name: 联系作者

extra_javascript: # 额外 JS
  - extra/js/shortcuts.js # 绑定左右键换页的键盘快捷键（这是我原创滴！）
  - extra/js/tongji.baidu.js # 百度统计脚本
  - extra/js/mathjax.js # 保证数学表达式能正确显示的运行时环境（下面两个也是）
  - https://polyfill.io/v3/polyfill.min.js?features=es6
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
  - https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js # 不蒜子统计脚本
  - https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js # 不蒜子数据修正需求文件
  - extra/js/modify.js # 不蒜子数据修正（这个要放在需求文件的后面）

extra_css: # 额外 CSS
  - extra/css/extra.css # 加载自定义的样式
  - https://cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css # 访问统计转圈加载样式
  - https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-webfont@1.1.0/style.css # 自定义文本字体（霞鹜文楷）

plugins: # 插件
  - search: # 搜索插件（内置）
      separator: '[\s\u200b\-_,:!=\[\]()"`/]+|\.(?!\d)|&[lg]t;|(?!\b)(?=[A-Z][a-z])' # 分隔符，我也不懂，我从官方那里找来的
      lang: # 支持的语言
        - zh # 中文
  - git-revision-date-localized: # 文章日期显示插件（pip install mkdocs-git-revision-date-localized-plugin）注意：build 时此插件加载非常缓慢！
      enable_creation_date: true # 显示创建的日期
      type: datetime # 每页底下显示最后更新日期，类型是 datatime（日期+时间），或者 data（只有日期）等
      locale: zh # 换成中文显示
  - git-authors: # 文章作者显示插件（pip install mkdocs-git-authors-plugin）注意：build 时此插件加载非常缓慢！
      show_contribution: true # 显示贡献比例
      show_line_count: true # 记录行数
      show_email_address: true # 显示邮箱
      count_empty_lines: false # 记录空行的贡献
      fallback_to_empty: false # 不懂
      sort_authors_by: contribution # 贡献者名单排序方式 (name, contribution)
      authorship_threshold_percent: 0 # 筛选掉贡献比例低于该百分比的贡献者
  - glightbox: # 图像缩放插件（pip install mkdocs-glightbox）
      touchNavigation: true # 启用或禁用触摸导航（轻扫），应该是便于手机用户吧
      loop: false # 换图时循环
      effect: zoom # 打开图时的效果(zoom, fade, none)
      slide_effect: slide # 切换图片时的效果(slide, zoom, fade, none)
      width: auto # 内联元素和 iframe 的宽度。您可以使用任何单位或者 auto
      height: auto # 同上
      zoomable: false # 启用或禁用可缩放图像，不懂干啥的
      draggable: true # 启用或禁用鼠标拖动以转到上一张和下一张图片
      auto_caption: false # 自动启用或禁用使用图像的替代文本作为标题
      caption_position: bottom # 标题位置 (bottom, top, left, right)
      background: none # 背景颜色
      shadow: true # 启用或禁用图像阴影
  - changelog # 日志插件（pip install mkdocs-changelog-plugin）
  - statistics: # 数据统计插件（pip install mkdocs-statistics-plugin）
      codelines_per_minute: 15 # 每分钟可看的代码行数
      words_per_minute: 150 # 每分钟可看的文本数
  - minify: # 压缩文件的插件（pip install mkdocs-minify-plugin）
      minify_html: true
      minify_js: true
      minify_css: true
      htmlmin_opts:
        remove_comments: true
      cache_safe: true

watch: # serve 实时预览模式下检测更改的目录或文件
  - docs/
  - sources/
  - pythontutor/
  - mkdocs.yml

nav: # 导航栏
  - 主页:
      - 开始: index.md
      - 使用指南: Guide.md
      - 关于本站: About.md
      - 贡献指南: Contributing.md
      - 更新日志: ChangeLog.md
      - 项目许可证: LICENSE.md
      - 建议区: Suggest.md

  - 数据结构:
      - 数据结构简介: Data Structure/index.md

  - 算法:
      - 算法简介: Algorithm/index.md
      - 排序:
          - 排序简介: Algorithm/sort/index.md
          - 直接插入排序: Algorithm/sort/straight_insertion_sort.md
          - 二分插入排序: Algorithm/sort/binary_insertion_sort.md
          - 分组插入排序（希尔排序）: Algorithm/sort/shell_sort.md
          - 直接选择排序: Algorithm/sort/straight_selection_sort.md
          - 树形选择排序（锦标赛排序）: Algorithm/sort/tournament_sort.md
          - 简单交换排序（冒泡排序）: Algorithm/sort/bubble_sort.md
          - 标记交换排序（改进的冒泡排序）: Algorithm/sort/improved_bubble_sort.md
          - 分区交换排序（快速排序）: Algorithm/sort/quick_sort.md
          - 随机基准分区交换排序（改进的快速排序）: Algorithm/sort/random_quick_sort.md
          - 三数取中分区交换排序（改进的快速排序）: Algorithm/sort/improved_quick_sort.md
          - 归并排序: Algorithm/sort/merge_sort.md
          - 计数排序: Algorithm/sort/counting_sort.md
          - 基数排序: Algorithm/sort/radix_sort.md
          - 堆排序: Algorithm/sort/heap_sort.md
          - 桶排序: Algorithm/sort/bucket_sort.md
          - tim_sort: Algorithm/sort/tim_sort.md
          - pdq_sort: Algorithm/sort/pdq_sort.md
      - 查找:
          - 查找简介: Algorithm/search/index.md
          - 顺序查找: Algorithm/search/seq_search.md
          - 分块查找（改进的顺序查找）: Algorithm/search/block_search.md
          - 二分查找: Algorithm/search/binary_search.md
          - 散列查找: Algorithm/search/hash_search.md

  - 数值计算:
      - 数值计算简介: Numerical Calculation/index.md
  - 设计模式:
      - 设计模式简介: Design Pattern/index.md
  - 数据库:
      - 数据库简介: Database/index.md
  - C:
      - C 简介: C/index.md
  - C++:
      - C++ 简介: C++/index.md
  - Python:
      - Python 简介: Python/index.md
      - 搭建开发环境: Python/01.md
  - Java:
      - Java 简介: Java/index.md
  - C#:
      - C# 简介: C#/index.md
  - TypeScript:
      - TypeScript 简介: TypeScript_/index.md
  - HTML:
      - HTML 简介: HTML_/index.md
  - CSS:
      - CSS 简介: CSS_/index.md
  - Markdown:
      - Markdown 简介: Markdown/index.md
温馨提示：部分你搞不清楚的，可以先将其注释掉，一点点试着运行

这上面的配置文件几乎涵盖了所有可以配置的选项，还有一小部分没有，因为那部分是 material 第三方主题库付费预览版的功能，稳定版无法使用（寄）。

下面说明一些特别注意的问题：

theme: custom_dir 是覆盖文件，可以覆盖原主题的一些文件

theme: logo: logo.png 是网站页面左上角的徽标，logo.png 是一个文件，位于 docs 目录中

extra_javascript 是额外加载的 JS 文件，类似的，extra_css 是额外加载的 CSS 文件，可以是 docs 文件夹下的，也可也是来源互联网的（如各大 CDN 站点）

注意！某些 JS 文件别直接用我的，每个人不一样的啊！！！比如统计脚本，别直接用我的，导致搞乱我网站数据了！强调强调，再强调啊！

watch 是实时预览时检测的目录，因项目而异，别直接复制我的！我这是给你演示用的。

nav 是导航栏以及目录栏，也是因项目而异，自己对照我的网站就明白格式了。

关于插件项和额外 JS 以及 CSS 文件，后面会详述，此处不赘述。

### 3.7 编辑与发布

流程是这样的，我们在 docs 文件夹中编写我们自己的笔记或者文档，并以一定的方式放置好他们（建立多个文件夹进行分类），然后再在配置文件中编写你想要的目录结构（修改 nav 选项），然后在当前环境下启动终端，输入 mkdocs serve 命令进行本地预览，若是没有任何问题，终端会看到一个 IP 地址，点进去自动打开浏览器进行预览。

根据预览的效果，我们可以实时地对内容进行修改，当我们满意之后，关掉终端，停止预览。之后，后面的步骤非常关键！一定，一定，要先把当前分支的内容通过 git 上传到 GitHub 的云端仓库中，再输入 mkdocs gh-deploy 上传 site 文件夹到 gh-pages 分支去。这一步的顺序最好不要颠倒！

因为有很多插件是依赖于 git 的，你没将内容保存到 git（提交修改内容），部分插件无法获取对应的数据，导致最终插件没能达到预期的效果。

下面给个伪流程图：

create --> modify --> local preview --YES--> gh-deploy
             ↑              |
             +------NO------+

## 四、额外优化

### 4.1 字体与配色

#### 4.1.1 字体美化 

字体没有直接使用内置的，因为内置的字体实际是加载 Google 那边的，导致国内加载变慢，为了美观，我们使用 GitHub 开源字体：霞鹜文楷的屏幕阅读版

lxgw/LxgwWenKai: An open-source Chinese font derived from Fontworks' Klee One. 一款开源中文字体，基于 FONTWORKS 出品字体 Klee One 衍生。 (github.com)

然后代码块的文本使用与 VSCode 一致的 Consolas。Consolas 是大多数平台都有的，但霞鹜文楷的屏幕阅读版并没有，需要我们自己为我们的个人博客配置上。

首先，在 extra_css 配置项中加入霞鹜文楷的屏幕阅读版的 CDN 链接，保证其资源被加载进来，然后在自定义一个 CSS 文件（我的项目中是 docs/extra/css/extra.css），位置你随意，知道在哪里就行，将其也加入到 extra_css 的配置配置项中，然后在该 CSS 文件中加入如下内容：

:root {
    /*文本字体*/
    --md-text-font: "LXGW WenKai Screen";
    /*代码字体*/
    --md-code-font: "Consolas";
}
这部分在我的项目中也有：docs/extra/css/extra.css

如果你想用自己的字体，操作和上面的差不多，加载资源，配置资源即可。

#### 4.1.2 配色美化

material 的配色实际已经非常好看了，但是吧，它有一些缺点，比如切换主题时，页面底部的 footer 无法改变配色，而想细致地更改颜色，就必须自定义 CSS 并覆盖原来的值。不过大家可以参考我的配色，不说很好看，但至少是能让大众普遍接受的。我们只需要在自定义 CSS 文件中加入下面的内容就行：

[data-md-color-scheme="default"] {
    /*亮色样式*/
    --md-default-fg-color: #333;
    --md-default-fg-color--light: #333;
    --md-primary-fg-color: #efefef;
    --md-primary-bg-color: #1f1f1f;
    --md-typeset-a-color: #007800;
    --md-footer-fg-color: #222;
    --md-footer-bg-color: #efefef;
    --md-footer-bg-color--dark: #efefef;
    --md-footer-fg-color--light: #222;
    --md-footer-fg-color--lighter: #222;
    --md-code-hl-comment-color: #999;
}

/*
0 1 2 3 4 5 6 7 8 9 A B C D E F
F E D C B A 9 8 7 6 5 4 3 2 1 0
*/

[data-md-color-scheme="slate"] {
    /*暗色样式*/
    --md-default-fg-color: #bbb;
    --md-default-fg-color--light: #bbb;
    --md-accent-fg-color: #cccc00;
    --md-footer-fg-color: #ccc;
    --md-footer-bg-color: #0d0d0d;
    --md-footer-bg-color--dark: #0d0d0d;
    --md-footer-fg-color--light: #ccc;
    --md-footer-fg-color--lighter: #ccc;
    --md-code-hl-comment-color: #777;
}
这基本上是所有可以修改的值了，大家也可以自己修改对应的值来符合自己的预期（但是不建议，因为我半天都没搞明白这些值的含义，因为明暗主题中对应的内容居然不同……）。

这部分在我的自定义 CSS 中也有了，大家可以直接复制过来使用。

### 4.2 自定义功能

我们也可以在个人博客中加入一些属于自己的功能，比如快捷键！

我们自定义一个 JS 文件，和自定义 CSS 类似，放到 extra_javascript 配置选项中，并在其中加入下面的内容，我们就可以实现按下键盘左右键快捷翻页的功能了！

keyboard$.subscribe(function (key) {  // 键盘左键上一页
    if (key.mode === "global" && key.type === "ArrowLeft") {
        /* Add custom keyboard handler here */
        var elements = document.getElementsByClassName('md-footer__link md-footer__link--prev');
        if (elements.length)
            elements[0].click();
        key.claim()
    }
})

keyboard$.subscribe(function (key) {  // 键盘右键下一页
    if (key.mode === "global" && key.type === "ArrowRight") {
        /* Add custom keyboard handler here */
        var elements = document.getElementsByClassName('md-footer__link md-footer__link--next');
        if (elements.length)
            elements[0].click();
        key.claim()
    }
})
这部分在我的项目对应的文件是：docs/extra/js/shortcuts.js

想加入其它功能的方法也类似上面的操作。

另外，大家可以试试能不能把个人博客经典的 “看板娘” 功能加进去（我试过，我反正失败了，页面会渲染错位，悲 ……）。 

### 4.3 公告消息

这个实际上是 material 主题自带的功能，只不过公告默认为空，所以不展示而已。当存在公告消息时，它会展示在页面顶部。

由于这个是主题自带的，所以我们要用覆盖的方式添加，而不是自定义 CSS 或 JS 的方式添加。

我们新建一个名为 overrides 文件夹（一般是这个名字，可以改，但官方推荐这个），在其中新建一个名为 main.html 的文件来覆盖主题原来的 main.html 文件。

在我的项目中此文件位于：docs/overrides/main.html

在其中加入以下内容：

{% extends "base.html" %}

<!-- 类别详细见 https://squidfunk.github.io/mkdocs-material/customization/ -->

<!-- 页面顶部公告 -->
{% block announce %}
{{ super() }}
<p>这里是公告的内容，可以是任何 HTML 格式的内容</p>
{% endblock %}

### 4.4 评论系统

评论系统并非自带的，但也不是插件实现的，而是由第三方开源项目 giscus 实现的，这是他们的网站：giscus

按照他们网站上的教程，配合 material 主题中添加评论系统的教程，就可以实现了。但 material 上的是英文，所以这里还是我来给大家讲述一下吧。

首先，按照 giscus 给的教程，最终可以得到一段 HTML 代码，保留这段代码，后续会用到。

然后和上面公告的实现方式一样，创建新的内容覆盖原有的主题，具体是 docs 中创建名为 overrides 文件夹，并在其中创建名为 partials 的文件夹，再在其中创建名为 comments 的 HTML 文件。这在我的项目中对应的文件是：docs/overrides/partials/comments.html

最后在里面插入如下这段代码：

{% if page.meta.comments %}

<!-- 这里插入之前在 giscus 中得到的那段代码 -->

<!-- Synchronize Giscus theme with palette -->
<script>
    var giscus = document.querySelector("script[src*=giscus]")

    // Set palette on initial load
    var palette = __md_get("__palette")
    if (palette && typeof palette.color === "object") {
        var theme = palette.color.scheme === "slate"
            ? "dark"  /*此处需要改成 dark，不然很难看的*/
            : "light"

        // Instruct Giscus to set theme
        giscus.setAttribute("data-theme", theme)
    }

    // Register event handlers after documented loaded
    document.addEventListener("DOMContentLoaded", function () {
        var ref = document.querySelector("[data-md-component=palette]")
        ref.addEventListener("change", function () {
            var palette = __md_get("__palette")
            if (palette && typeof palette.color === "object") {
                var theme = palette.color.scheme === "slate"
                    ? "dark"  /*此处和上面类似，需要改成 dark，不然很难看的*/
                    : "light"

                // Instruct Giscus to change theme
                var frame = document.querySelector(".giscus-frame")
                frame.contentWindow.postMessage(
                    { giscus: { setConfig: { theme } } },
                    "https://giscus.app"
                )
            }
        })
    })
</script>
{% endif %}
 按照上述代码中的内容，将之前在 giscus 中得到的代码片段加入到其中。关于 giscus，有一点说一下，如果你想配合我之前给的配色，那么在 giscus 中评论区的配色主题推荐选择“用户偏好的配色方案”，这样颜色会比较搭，当然你也可以选择其他的。

另外提一嘴，在评论区中评论实际是在代码仓库的 Discussion 板块中 “评论”。

他们的开源项目是：

giscus/giscus: A comment system powered by GitHub Discussions. :speech_balloon: :gem:

### 4.5 图片与源文件压缩

当个人网站越来越大的时候，内容变多会不仅会导致本地预览时转换的时间变长，也会导致访问自己网站的速度变慢，为此不得不将图片，甚至 HTML 源文件的大小压缩。

#### 4.5.1 图片压缩

图片压缩由 TinyPNG 提供，网址在这，自取：TinyPNG – 智能压缩您的WebP、JPEG和PNG图片 (tinify.cn)

不得不说，TinyPNG 是真的牛逼（不瞎吹，极致的压缩，且压缩前后几乎看不出区别） 

#### 4.5.2 源文件压缩

源文件压缩是通过插件实现的。此插件可以将 HTML、CSS 等里面的注释什么的都删去，减小这些文件的大小，从而加快网站的加载速度。

此插件不自带，需要通过 pip 安装：

pip install mkdocs-minify-plugin
安装之后，在配置文件中加入如下内容即可生效：

plugins: # 插件
  - minify: # 压缩文件的插件（pip install mkdocs-minify-plugin）
      minify_html: true
      minify_js: true
      minify_css: true
      htmlmin_opts:
        remove_comments: true
      cache_safe: true
在上面的配置文件中大家应该也看见这部分了。

### 4.6 贡献者列表

贡献者列表，就是文章顶部第一张主页图片最底下的那个，会显示此项目的贡献者，当然，个人博客一般不需要这个（但说不定哪天你需要了呢？）

通过这个开源项目即可实现：lacolaco/contributors-img (github.com)

其教程很简单，就是输入对应项目的网址，然后获取对应图片的链接并复制到自己的文档中就行。

网址为：contrib.rocks

### 4.7 Star 趋势图

与上面类似，Star 趋势图也是一样的，其开源项目地址为：star-history/star-history: The missing star history graph of GitHub repos - https://star-history.com

官方网址为：GitHub Star History (star-history.com) 

操作方式与上面一样，此处不再赘述。 

### 4.8 访问统计

访问统计有很多方式去构建，最简单的是不蒜子了，不过这个貌似有一定的问题，大家自行斟酌要不要考虑使用，百度统计也是可以的，但操作稍显复杂，本文重点不在于此，大家可以自行研究研究。

不蒜子：不蒜子 - 极简网页计数器 (ibruce.info)

百度统计：百度统计——一站式智能数据分析与应用平台 

### 4.9 其他插件

还有一些实用的插件，下面列出它们及其开源项目地址：

changelog 日志插件：GitHub - TonyCrane/mkdocs-changelog-plugin: A MkDocs plugin that create changelog in a page

statistic 数据统计插件：GitHub - TonyCrane/mkdocs-statistics-plugin: A MkDocs plugin that generate statistic data of a site

glightbox 图片放大插件：GitHub - blueswen/mkdocs-glightbox: A MkDocs plugin supports image lightbox (zoom effect) with GLightbox.

git-authors 作者显示插件：GitHub - timvink/mkdocs-git-authors-plugin: MkDocs plugin to display git authors of a page.

git-revision-date-localized 文章创建及修改日期显示插件：GitHub - timvink/mkdocs-git-revision-date-localized-plugin: MkDocs plugin to add a last updated date to your site pages

相关的配置选项都在配置文件中写了，大家可自行对照查看，若想看其他的配置选项，请自行去对应插件的官方文档网站查阅（全是英文的）。 

## 五、疑难解答

### 5.1 网页中部分炫酷的效果如何实现？Markdown 好像没有对应的写法啊？

这是 material 主题提供的渲染，实际扩展版本的 Markdown 有这些写法，可以参考 material 官方文档网站进行查看，里面会告诉你第三方模块 pymdownx 的官方文档，material 是通过这个渲染的。同时，Python 的 markdown 模块的官方文档也可以参考一下，因为配置文件中关于 Markdown 的配置项是由两部分组成的，即 markdown 模块和 pymdownx 模块的。

markdown 是 mkdocs 直接支持的，而 pymdownx 是 material 支持的。

### 5.2 为什么我有些显示效果和博主的不一样啊？

你可以看看我的项目中自定义的 CSS，里面部分代码是有注释的。看看你是不是有什么缺少了。

### 5.3 ……

这里会随着文章评论区内容的更新而更新，尽可能地帮大家解决问题！

## 六、参考文档汇总

下面是本开源项目所参考的全部文档：

mkdocs 模块官方文档：MkDocs

material 主题官方文档：Material for MkDocs (squidfunk.github.io)

markdown 模块官方文档：Python-Markdown — Python-Markdown 3.6 documentation

pymdownx 模块官方文档：Pymdown Extensions - PyMdown Extensions Documentation (facelessuser.github.io)

mermaid 画图语法官方文档：Mermaid | Diagramming and charting tool 

changelog 插件官方文档：TonyCrane/mkdocs-changelog-plugin: A MkDocs plugin that create changelog in a page (github.com)

statistic 插件官方文档：TonyCrane/mkdocs-statistics-plugin: A MkDocs plugin that generate statistic data of a site (github.com)

glightbox 插件官方文档：MkDocs GLightbox (blueswen.github.io)

minify 插件官方文档：byrnereese/mkdocs-minify-plugin: A mkdocs plugin to minify the HTML of a page before it is written to disk. (github.com)

git-authors 插件官方文档：git-authors Plugin (timvink.github.io)

git-revision-date-localized 插件官方文档：mkdocs-git-revision-date-localized-plugin (timvink.github.io)

就这么多，这么多文档查阅不易，还请大家在看我给出的配置文件的同时，不要忘记给我的项目点 Star  了，饮水思源，白嫖可耻！
