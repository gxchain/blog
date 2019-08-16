# blog.gxchain.org
![Travis](https://travis-ci.org/blockfe/blockfe.github.io.svg?branch=hexo)

blog.gxchain.org是一个托管于Github的静态博客，基于[o2team.github.io](https://github.com/o2team/o2team.github.io)搭建。

<!-- more -->

## 使用指引

1. 安装hexo

    ```
    npm i hexo-cli -g
    ```

2. 将blog.gxchain.org的源码拉到本地

    ```
    git clone git@github.com:gxchain/blog.git
    ```

3. 切换Git分支至"Hexo"

4. 安装nodejs包

    ```
    npm install
    ```

5. 运行`hexo s --watch`

    运行上述命令后，浏览器打开 [http://localhost:4000](http://localhost:4000) 即可本地访问我们的网站
    
## 创建文章

有两种方法创建文章，可任选其一：

> 注意：文件名不要出现中文!!!

1. 使用`hexo new` 命令
  
  ``` bash
  $ hexo new "My New Post"
  ```

2. 拷贝现有的文章进行修改
  
  hexo使用markdown来编辑文章，在multi_source目录下，选择不同语言对应的文件夹，拷贝任意md文件进行创建新的文章。具体可参考下hexo的官方说明

## 文章规范

1. 使用markdown写博文 
2. 博文图片图床请使用[misc](https://github.com/blockfe/misc)(请阅读misc图床的Readme文档).
3. 为了保证博客整体美观，每个文章需要一张配图(大小：840x340)
4. 指明文章的副标题、作者信息、封面图片地址

    ```
    subtitle: "blog.gxchain.org博客是一个托管于Github的静态博客，基于HEXO搭建..."
    date: 2019-03-28 17:20:35
    cover: "封面图片地址"
    tags:
    - Hexo
    author:
        nick: xLogic
        github_name: xlogic92

    ```
5. 利用`<!-- more --> `设置文章的摘要

    示例：
    ```
    title: 文章标题
    ---
    这部分是文章摘要，这部分是文章摘要。在hexo模版里可通过 {% raw %}{{ post.excerpt }}{% endraw %} 来引用。
    <!-- more --> 
    这里是文章的剩余部分。在hexo模版里可通过{% raw %}{{ post.more }}{% endraw %} 来引用。
    ```

    实际使用请参考[本文]({{ raw_link('_post/2019-03-28-blockfe-blog-v1.md') }})。

## 关于博客的发布

为了便于统一维护，博客的发布由`xLogic`负责。同学们写好博文并在本地预览OK后直接提交Github即可。  
