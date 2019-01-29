---
sidebar: auto
---

# Mac 初始化

## Homebrew 安装

  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  
  brew install wget
  
  brew install nodejs
  
  brew install tree

## 修改主机名

sudo scutil --set HostName 新的主机名

## github remote: Permission to .git denied to user.

解决方案

这个解决方案其实很简单。首先，我用的是mac电脑，mac电脑有个keychain的应用即钥匙串访问，这里存储了github先前访问的密码，所以每次push的时候都会读取这个本地用户名及密码，所以才被github denied。

解决步骤哦依次如下：打开 应用程序 ----> 钥匙串访问 ---->双击，即可进入到钥匙串访问记录保存页面，选择github.com名称的应用，右键删除即可。


## 修改磁盘名

  diskutil info disk1s1

  diskutil rename oldname  newname

## Mac下解决LC_CTYPE警告的最简单方法

  [terminal 去掉set locale environment](https://jingyan.baidu.com/article/fdbd4277c564c8b89e3f48eb.html)
