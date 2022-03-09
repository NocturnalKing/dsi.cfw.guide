"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1476],{5367:(e,i,l)=>{l.r(i),l.d(i,{data:()=>r});const r={key:"v-c09bde68",path:"/zh_CN/",title:"首页",lang:"zh-CN",frontmatter:{home:!0,title:"首页",header:{overlay_image:"/assets/images/home-page-feature.png",overlay_filter:.5}},excerpt:"",headers:[{level:2,title:"自制程序（Homebrew）是什么 ？",slug:"自制程序-homebrew-是什么",children:[]},{level:2,title:"这个指南要对我的掌机做什么？",slug:"这个指南要对我的掌机做什么",children:[]},{level:2,title:"修改系统能做什么？",slug:"修改系统能做什么",children:[]},{level:2,title:"在哪里能找到自制软件？",slug:"在哪里能找到自制软件",children:[]},{level:2,title:"开始之前我应该知道什么？",slug:"开始之前我应该知道什么",children:[]}],filePathRelative:"zh_CN/index.md"}},6815:(e,i,l)=>{l.r(i),l.d(i,{default:()=>S});var r=l(6252);const a={class:"custom-container tip"},n=(0,r._)("p",{class:"custom-container-title"},"TIP",-1),t=(0,r.Uk)("欲了解其他设备的自制程序和自定义固件的完整指南，请参阅 "),o={href:"https://cfw.guide/",target:"_blank",rel:"noopener noreferrer"},h=(0,r.Uk)("CFW.Guide"),s=(0,r._)("div",{class:"custom-container tip"},[(0,r._)("p",{class:"custom-container-title"},"TIP"),(0,r._)("p",null,"在继续之前，请详细阅读包括本页在内的全部介绍页面。")],-1),d=(0,r._)("h2",{id:"自制程序-homebrew-是什么",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#自制程序-homebrew-是什么","aria-hidden":"true"},"#"),(0,r.Uk)(" 自制程序（Homebrew）是什么 ？")],-1),u={href:"https://en.wikipedia.org/wiki/Homebrew_(video_games)",target:"_blank",rel:"noopener noreferrer"},c=(0,r.Uk)("自制"),p=(0,r.Uk)(" 软件 是指为一个封闭生态的系统上开发并使用非正常渠道安装的软件，例如我们将会提到的 Nintendo DSi. 这些软件涵盖实用工具到自制游戏。"),_=(0,r.uE)('<p>自制软件可以在所有 Nintendo DSi 机器上免费、自由地运行，与固件版本或区域无关。 您需要的只是一个入口点和一个SD卡来存储您的自制程序。 本指南中使用的主要入口点将称为 Memory Pit. 但如果 Memory Pit 不可用，您还可以使用其他入口点。</p><h2 id="这个指南要对我的掌机做什么" tabindex="-1"><a class="header-anchor" href="#这个指南要对我的掌机做什么" aria-hidden="true">#</a> 这个指南要对我的掌机做什么？</h2><p>这个指南是以线性方式设计的， 当然你可以决定你要走多远。</p><ul><li>我们将设置一个入口点来通过 Memory Pit 启动基本的自制程序，这是对”Nintendo DSi Camera“应用程序的漏洞利用</li><li>然后我们将备份你的NAND，这个备份是有用的恢复点，以防你稍后陷入困境。</li><li>最后，对于想要访问DSi全部功能的用户，我们将引导他们安装 Unlaunch. Unlaunch允许自制程序获得更多的权限（例如Slot-1访问）和打开设备时代替系统菜单启动 <ul><li>安装 Unlaunch 时，在极个别情况下，可能会使设备<strong>变砖</strong>。 如果你想防止设备变砖，在此之前可以给NAND做一个备份</li></ul></li></ul><h2 id="修改系统能做什么" tabindex="-1"><a class="header-anchor" href="#修改系统能做什么" aria-hidden="true">#</a> 修改系统能做什么？</h2><ul><li>直接从DSi的SD卡上运行Nintendo DS游戏，而不需要烧录卡</li><li>从SD卡启动任何DSiWare (跨区和/或3DS专用版本)</li><li>在Nintendo DSi开机时通过长按特定的按钮来启动至DSiWare和自制程序。</li><li>用各种模拟器玩老游戏</li><li>使用通常情况下不兼容的烧录卡</li><li>将 NAND 重定向到 SD 卡中安装的 hiyaCFW</li><li>使用 MPEG4Player（一个DS(i)可用的MP4播放器）观看喜欢的电影</li><li>在启动时显示自定义图像（取代原生启动动画）</li><li>玩自制游戏</li></ul><h2 id="在哪里能找到自制软件" tabindex="-1"><a class="header-anchor" href="#在哪里能找到自制软件" aria-hidden="true">#</a> 在哪里能找到自制软件？</h2>',7),m={href:"https://db.universal-team.net/ds",target:"_blank",rel:"noopener noreferrer"},f=(0,r.Uk)("Universal-DB"),g=(0,r.Uk)(" 拥有最新的现代自制软件，并且可以通过搜索和排序快速寻找想要的软件"),b={href:"https://www.gamebrew.org/wiki/List_of_all_DS_homebrew",target:"_blank",rel:"noopener noreferrer"},k=(0,r.Uk)("GameBrew"),w=(0,r.Uk)(" 拥有较旧的自制软件，这些软件可能只能在烧录卡上运行"),D=(0,r.uE)('<h2 id="开始之前我应该知道什么" tabindex="-1"><a class="header-anchor" href="#开始之前我应该知道什么" aria-hidden="true">#</a> 开始之前我应该知道什么？</h2><ul><li>在Windows上，如果您正在使用默认的文件资源管理器，建议 <a href="file-extensions-%28windows%29">显示文件扩展名</a></li><li>唯一会使设备变砖的风险来自 Unlaunch，但机率微乎其微</li><li>如果您没有经验将文件复制到SD卡，我们有可用的辅助工具帮助您。</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>开始 <a href="launching-the-exploit">触发漏洞</a></p></div>',3),v={},S=(0,l(3744).Z)(v,[["render",function(e,i){const l=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",a,[n,(0,r._)("p",null,[t,(0,r._)("a",o,[h,(0,r.Wm)(l)])])]),s,d,(0,r._)("p",null,[(0,r._)("a",u,[c,(0,r.Wm)(l)]),p]),_,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",m,[f,(0,r.Wm)(l)]),g]),(0,r._)("li",null,[(0,r._)("a",b,[k,(0,r.Wm)(l)]),w])]),D],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const l=e.__vccOpts||e;for(const[e,r]of i)l[e]=r;return l}}}]);