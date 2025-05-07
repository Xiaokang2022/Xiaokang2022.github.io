---
comments: true
date:
    created: 2024-04-19
    updated: 2024-04-19
authors:
    - Xiaokang2022
categories:
    - CSDN
tags:
    - GitHub
    - 美化
draft: true
---

# GitHub 个人主页的究极美化攻略：当一个外链战士

这次我来介绍一下如何使用最简单的方式来美化你的 GitHub 主页（无需 GitHub Action，只需写几行 Markdown），并达到一个比较好的效果！

如标题所述，这篇文章不会让你去弄相对比较复杂的 GitHub Action 等来实现网上的那些炫酷的效果，这篇文章几乎只需要你复制粘贴加略微修改网页链接就能实现同样非常炫酷的效果。当然，能实现这些全都要依靠其他大佬的开源项目，有了他们的付出和努力，我们才能用如此简单的方式实现如此美观的个人主页！

<!-- more -->

附：这些项目是我从 100+ 相关项目中精心挑选出来的！好用记得给我的主页仓库点 Star！

## 一、主页效果展示

### 1.1 明亮主题下的效果
​
明亮主题

### 1.2 暗黑主题下的效果
​
暗黑主题

好了，展示完毕，现在开始教学！ 

## 二、前置准备

### 2.1 有一个 GitHub 账号

这，应该不用介绍怎么注册 GitHub 账号吧？毕竟这篇文章就是讲 GitHub 个人主页的美化……

### 2.2 创建同名仓库

这里说的同名，指的是和自己 GitHub 用户名相同的仓库，当仓库名与用户名相同时，此仓库会被视作特殊仓库，其 README.md（自述文件）会展示在 GitHub 个人主页，而我们就是利用这个机制来自定义并美化个人主页的！

这里以我的 GitHub 举例，我 GitHub 用户名是 Xiaokang2022，于是我就要创建一个名为 Xiaokang2022 的仓库，同时有一点必须注意！

此仓库必须设置为公开状态！

### 2.3 注册 WakaTime 账号（非必须，但建议）

为什么要注册这个呢？首先，WakaTime 非常好用（公认的），其次，美化中有一个小部件要用到它。

#### 2.3.1 什么是 WakaTime？

WakaTime 官网：WakaTime - Dashboards for developers

WakaTime 是用来统计你写代码的语言种类以及时长的，它是免费的。尽管它有 Pro 版的，但是一般没必要，基础版足够了。它不是一款软件，而是一款插件，一款在几乎所有 IDE 中都能下载的插件。

​
WakaTime 官网插图

#### 2.3.2 注册 WakaTime 账号

这里，我们注册的时候，选择使用 GitHub 账号注册并绑定： 

进入官网（上面给了链接），点击右上角的 “Log in”（登录），此时我们没有账号，我们点击页面底部的 “Sign up”（注册），此时会跳转到注册页面，再点击 “Sign up with GitHub” 便可以完成注册！这样，WakaTime 就和我们的 GitHub 绑定了。

#### 2.3.3 WakaTime 的使用

在 WakaTime 官网登录账号，即可看到数据面板，点击右上角用户头像，可以配置一些选项，在其中找到名为 Secret API Key 的字样，其后面有一段密钥，这段密钥是与你 WakaTime 账号绑定在一起的，唯一的一个。

打开任意主流的 IDE，搜索并下载插件/扩展：WakaTime，重启 IDE 激活插件/扩展后，它会要求你输入一段密钥，把上面得到的密钥输入进去，IDE 就会记录你写代码的时长、语种等数据，并发送到 WakaTime 官网进行统计。（放心，这段密钥只需要输入一次，除非你卸载重装 WakaTime 插件）

## 三、编写 README.md

前面的准备工作准备好之后，我们就可以开始白嫖各路大佬的开源项目，并美化我们的个人主页了！

首先，上面提到的仓库里面，README.md 中是有一段默认内容的，我们将其删除，以方便改写成我们自己想要的内容。如果你不想看我的教程，想直接看我的个人主页是怎么弄的，那下面给出我个人 GitHub 主页对应的仓库，大家自行查看：

Xiaokang2022/Xiaokang2022: Personal repository (github.com)

觉得不错记得给我的仓库点赞呐！支持开源，点个赞不难的！ 谢谢！

### 3.1 页面顶部和底部的动图

#### ​3.1.1 开源项目

GitHub - kyechan99/capsule-render: 🌈 Dynamic Coloful Image Render
🌈 Dynamic Coloful Image Render. Contribute to kyechan99/capsule-render development by creating an account on GitHub.
https://github.com/kyechan99/capsule-render

#### 3.1.2 页面顶部（section=header）

<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=300&&section=header&text={TITLE}&fontSize=90&fontAlign=50&fontAlignY=30&desc={SUB_TITLE}&descAlign=50&descSize=30&descAlignY=60&animation=twinkling" />
</p>
其中，{TITLE} 替换成你想要的大标题，{SUB_TITLE} 替换成你想要的小标题。 

#### 3.1.3 页面底部（section=footer）

<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=300&&section=footer&text={TITLE}&fontSize=90&fontAlign=50&fontAlignY=70&desc={SUB_TITLE}&descAlign=50&descSize=30&descAlignY=40&animation=twinkling" />
</p>
同上，此外，需要配置更多个性化的选项，见上方此开源项目的链接。 

### 3.2 打字机效果的动图

#### ​3.2.1 开源项目

GitHub - DenverCoder1/readme-typing-svg: ⚡ Dynamically generated, customizable SVG that gives the appearance of typing and deleting text for use on your profile page, repositories, or website.
⚡ Dynamically generated, customizable SVG that gives the appearance of typing and deleting text for use on your profile page, repositories, or website. - DenverCoder1/readme-typing-svg
https://github.com/DenverCoder1/readme-typing-svg

#### 3.2.2 使用方式

这个不多讲，官方有专门生成这个的网站：Readme Typing SVG - Demo Site (demolab.com) 

生成之后，将 Markdown 代码复制到自己的 README.md 中即可。

### 3.3 GitHub 数据概览

​#### 3.3.1 开源项目

GitHub - anuraghazra/github-readme-stats: :zap: Dynamically generated stats for your github readmes
:zap: Dynamically generated stats for your github readmes - anuraghazra/github-readme-stats
https://github.com/anuraghazra/github-readme-stats

#### 3.3.2 使用方式

<img align="center" width="400" src="https://github-readme-stats.vercel.app/api?username={YOUR_USERNAME}&theme=transparent&include_all_commits=true&show_icons=true&hide_border=true" />
将上述代码中的 {YOUR_USERNAME} 替换为你自己的用户名，复制粘贴即可。更多自定义选项见开源项目。

这个开源项目的可玩性和自由度非常高，可以仔细阅读一下该项目的自述文件。

### 3.4 连续贡献数据记录

​#### 3.4.1 开源项目

GitHub - DenverCoder1/github-readme-streak-stats: 🔥 Stay motivated and show off your contribution streak! 🌟 Display your total contributions, current streak, and longest streak on your GitHub profile README
🔥 Stay motivated and show off your contribution streak! 🌟 Display your total contributions, current streak, and longest streak on your GitHub profile README - DenverCoder1/github-readme-streak-stats
https://github.com/DenverCoder1/github-readme-streak-stats

#### 3.4.2 使用方式

这个不多讲，官方有专门生成这个的网站：GitHub Readme Streak Stats Demo (demolab.com)

### 3.5 贡献图

​#### 3.5.1 开源项目

GitHub - Ashutosh00710/github-readme-activity-graph: A dynamically generated activity graph to show your GitHub activities of last 31 days.
A dynamically generated activity graph to show your GitHub activities of last 31 days. - Ashutosh00710/github-readme-activity-graph
https://github.com/Ashutosh00710/github-readme-activity-graph

#### 3.5.2 使用方式

<img width="800" src="https://github-readme-activity-graph.vercel.app/graph?username={YOUR_USERNAME}&theme=github-compact&hide_border=true&area=true" />
将上述代码中的 {YOUR_USERNAME} 替换成你 GitHub 用户名即可。更多配置选项见开源项目。

### 3.6 代码编写总时长（WakaTime）

#### 3.6.1 开源项目

这个项目和之前 3.3 小节提到的是同一个哈，这里不再重复给出链接。

#### 3.6.2 使用方式

参数非常多啊，这里只给出我使用的，也就是上图中的效果：

<img align="center" src="https://github-readme-stats.vercel.app/api/wakatime?username={YOUR_USERNAME}&theme=transparent&hide_border=true&layout=compact&langs_count=22" />
将代码中的 {YOUR_USERNAME} 改成你自己的就行。还有其它很多的展示形式，大家自行去开源项目的自述文件中看吧！

### 3.7 项目语言比例

#### 3.7.1 开源项目

这个项目也是和之前 3.3 小节提到的是同一个哈，这里不再重复给出链接。

#### 3.7.2 使用方式

参数也是非常多啊，这里只给出我使用的，也就是上图中的效果：

<img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username={YOUR_USERNAME}&theme=transparent&hide_border=true&layout=donut-vertical&langs_count=6" />
将代码中的 {YOUR_USERNAME} 改成你自己的就行。还有其它很多的展示形式，大家自行去开源项目的自述文件中看吧！

### 3.8 技术栈图标展示

​#### 3.8.1 开源项目

GitHub - tandpfun/skill-icons: Showcase your skills on your Github readme or resumé with ease ✨
Showcase your skills on your Github readme or resumé with ease ✨ - tandpfun/skill-icons
https://github.com/tandpfun/skill-icons

#### 3.8.2 使用方式

<img align="center" src="https://skillicons.dev/icons?i={YOUR_TECH_STACK}&theme=light" />
将上述代码中的 {YOUR_TECH_STACK} 改成你想要的，多个以逗号方式间隔，支持的图标以及更多的配置选项见开源项目的自述文件。

### 3.9 小徽章

#### 3.9.1 开源项目

这一部分的小徽章涉及到了两个开源项目，一个普通的小徽章开源项目：

badges/shields: Concise, consistent, and legible badges in SVG and raster format (github.com)
https://github.com/badges/shields
 还有一部分是 GitHub Profile Page 访问统计小徽章的开源项目：

GitHub - antonkomarev/github-profile-views-counter: It counts how many times your GitHub profile has been viewed. Free cloud micro-service.
It counts how many times your GitHub profile has been viewed. Free cloud micro-service. - antonkomarev/github-profile-views-counter
https://github.com/antonkomarev/github-profile-views-counter

#### 3.9.2 普通小徽章

这部分内容非常多且已被大多数博主介绍过，此处限于篇幅，此处不对其进行介绍，大家可以自行百度。我个人还是建议大家去官网查看相关的使用方法：Shields.io | Shields.io

#### 3.9.3 访问统计小徽章

<img src="https://komarev.com/ghpvc/?username={YOUR_USERNAME}&abbreviated=true" />
将上述代码中的 {YOUR_USERNAME} 替换成你自己的用户名即可。更多配置选项见开源项目自述文件。

## 四、完整 README.md 示例

下面给出我个人主页完整的 README.md 内容，大家可以根据其内容自行更改，以满足自己的需要：

<!-- https://github.com/kyechan99/capsule-render -->
<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=300&&section=header&text=HI%20THERE!&fontSize=90&fontAlign=50&fontAlignY=30&desc=I%20am%20Xiaokang2022!&descAlign=50&descSize=30&descAlignY=60&animation=twinkling">
</p>

<!-- https://github.com/DenverCoder1/readme-typing-svg -->
<p align="center">
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=25&pause=1000&center=true&vCenter=true&random=false&width=600&lines=Welcome+to+my+GitHub+profile+page!;I+am+super+obsessed+with+programming!" />
</p>

<p align="center">
<!-- https://github.com/anuraghazra/github-readme-stats -->
<img align="center" width="400" src="https://github-readme-stats.vercel.app/api?username=Xiaokang2022&theme=transparent&include_all_commits=true&show_icons=true&hide_border=true" />
<!-- https://github.com/DenverCoder1/github-readme-streak-stats -->
<img align="center" width="400" src="https://streak-stats.demolab.com?user=Xiaokang2022&theme=transparent&date_format=%5BY.%5Dn.j&hide_border=true" />
<br/>
<!-- https://github.com/Ashutosh00710/github-readme-activity-graph -->
<img width="800" src="https://github-readme-activity-graph.vercel.app/graph?username=Xiaokang2022&theme=github-compact&hide_border=true&area=true">
<br/>
<!-- https://github.com/anuraghazra/github-readme-stats -->
<img align="center" src="https://github-readme-stats.vercel.app/api/wakatime?username=Xiaokang2022&theme=transparent&hide_border=true&layout=compact&langs_count=22" />
<!-- https://github.com/anuraghazra/github-readme-stats -->
<img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Xiaokang2022&theme=transparent&hide_border=true&layout=donut-vertical&langs_count=6" />
<br/>
<!-- https://github.com/tandpfun/skill-icons -->
<img align="center" src="https://skillicons.dev/icons?i=py,c,cpp,cs,java,html,css,js,ts,md,matlab&theme=light" />
</p>

<!-- https://github.com/badges/shields -->
<p align="center">
<a href="https://github.com/Xiaokang2022"><img src="https://img.shields.io/badge/GitHub-Xiaokang2022-blue?logo=github" /></a>
<a href="https://xiaokang2022.blog.csdn.net"><img src="https://img.shields.io/badge/CSDN-小康2022-red?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAB+FBMVEUAAABqMy7wroeAUEvuso1vOTNwOzbxt5WKYFyniYm/qKLe3s1sNTBsNjGQVkhvODR6Rj7ip4XutZOCU07wtpXxupnst5eKXFmJXlrwu5qKbWryv6Hzx62gfXuwiYb44tNvODNWNSuKUUbwr4iKUkXwsImCVUZ3Qjt5UkN3QjvwsYtGLSfws454SERyPzp4RD/ws4/ws49xPzvvtI/xtJBPODJ7S0Z7SkXWnIFiTkbVnIGCU0/ps5TxvaDwvqGSaWWSaGiOaGSTb2uPamXzx7HxyrCjhHrwrYVqMi3wrITuq4RrMy63eF9jPS/Cg2fupoLqqIHopoDfn3rXlnXAfmSwcluNWkfioHzmkXrihXXccW2zdFypbFehZlKFWUVzSTlwSTh7QThuNS9VMyjto4HlpH7ionzjh3bXmXXOkG/Mi22tb1l/UUB9TT15TDxtRzZcNytZNypRMCVPLiTrnn/cnXnZm3fZmHbhgXTddG7IiGvMgGrPY2S2gGK+e2K1dl7CXV6uel28WlqocFika1WnalWdbFOaYk6dYE6SYUySVkaQVUaIVkSCV0OHVEOJTkF4UD2CRTxmQTJaLCZXKyVNKyJJJR9EIx0+IRrTknLffXLabWzZbGzFi2u5emGucFqicVeXaFCSXUp1STpdOy1hNyxdMilXMCfoEl0hAAAAR3RSTlMA/vqLn+7meVAWDgX59/X13LSGgoF7c2hdVlJQLSklEff18/Ly7+zs5ubi4djX1szHxMG5uLSjnZaJhn1pXldEPT05Ny4nGbaUVn8AAAIPSURBVDjLvdNFlxpBEMDxBgLsknX3jbu7e1I1wzC4OyzusO7u7nFPvmYGwr4HWZJc8vI71at/H/rQTf65g3/pReclTX/qj0rKL175fW4ViBCRd0HQWjC/uFGCWaU3i/f3hyLMIXq873alKJVma3oqL8rvTw7Ns+qeALOCuMIEetTsvPBpbpdUsBSk0SMjdGag2ApJzgEBC4qxJdtQJtJDNtuYAjSCvfpMfKeMUslkOp3MoQTwxNLTup4uuyVuSfcqPoTeUfbIicN2JqoDsEW1p9zh6CowIeDXEXIfaMNasHtr+fb1nWXG7fEmGXvT2e2ZlCq4ZqChmVwC46Ar+DYe2dndjAzHk6nEsGx7d+NTPNDvGvTBVXKGMo3ie3/K8n3jm0WT6PK7NTNbm1/Nya4QjvbBOXIZjOPoVK4vmq1mzdwSUKtzGq2VWYwpnTjug2vkAdADiFa12z45EZZ5AVRfwhOTnxPdVsQBit9MiJivkqJ0Vv0x5vig1FOU3jPtcEz7Z7mlil9LOC33TiOiUwEAL139rEvNDQontzpZ95z8VI2IC8BRar16rSI9LXCrarKnWIhogTwWRGHOo2jgoRnA4Ms0ymgA0CKvgeS4y5sC6DAZ5UB19PbJAaZ4ApKn/gjNnXj1xmR63ct1+lg9+UVbJXDknZ1y4FS2Ffgytcch62hN4f/T3lhzgFPV2E7+qx9xsqq+PsbsOwAAAABJRU5ErkJggg==" /></a>
<a href="https://space.bilibili.com/498105668"><img src="https://img.shields.io/badge/哔哩哔哩-小康2022-pink?logo=bilibili" /></a>
<img src="https://img.shields.io/badge/QQ-2951256653-green?logo=tencentqq" />
<!-- https://github.com/antonkomarev/github-profile-views-counter -->
<img src="https://komarev.com/ghpvc/?username=Xiaokang2022&abbreviated=true&color=yellow" />
</p>

<!-- https://github.com/kyechan99/capsule-render -->
<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=300&&section=footer&text=THE%20END!&fontSize=90&fontAlign=50&fontAlignY=70&desc=Hope%20your%20program%20is%20bug-free!&descAlign=50&descSize=30&descAlignY=40&animation=twinkling">
</p>
 收集这么多操作简单的开源项目并不容易，好用记得也给我的仓库点一个赞哈（就是点 Star）：

Xiaokang2022/Xiaokang2022: Personal repository (github.com)
https://github.com/Xiaokang2022/Xiaokang2022

本文到此就结束啦，只用了外链就实现了这些效果，不知你是否也成为 “外链战士” 了呢？
