"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1539],{4184:(l,e,n)=>{n.r(e),n.d(e,{data:()=>i});const i={key:"v-7979e2b3",path:"/zh_CN/installing-unlaunch.html",title:"安装 Unlaunch",lang:"zh-CN",frontmatter:{title:"安装 Unlaunch"},excerpt:"",headers:[{level:2,title:"第一节 - SD 卡设置",slug:"第一节-sd-卡设置",children:[]},{level:2,title:"第二节——安装/更新Unlaunch",slug:"第二节——安装-更新unlaunch",children:[]},{level:2,title:"第三部分 - 启动后配置",slug:"第三部分-启动后配置",children:[]},{level:2,title:"第四部分 - 清理你的 SD 卡",slug:"第四部分-清理你的-sd-卡",children:[]}],filePathRelative:"zh_CN/installing-unlaunch.md"}},620:(l,e,n)=>{n.r(e),n.d(e,{default:()=>Z});var i=n(6252);const a=(0,i.uE)('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Unlaunch 不适用于Nintendo DSi开发机。</p></div><p>Unlaunch是系统启动时触发的一种漏洞。 这个漏洞拥有比普通Memory Pit更高的权限，这使得它能够做以下事情：</p><ul><li>通过组合键，在启动时启动应用程序(homebrew 或 DSiWare)</li><li>访问 Slot-1，可允许您备份游戏卡带，并启动不兼容的烧录卡</li><li>移除DSi增强/独占游戏的区域锁定</li><li>通过 nds-bootstrap-hb 运行旧的 Nintendo DS homebrew</li><li>砖机保护</li><li>The following for Memory Pit users (other exploits already allow these): <ul><li>Using a Windows, Linux or macOS device? 使用 Windows、Linux 或 macOS 设备？使用 <a href="lazy-dsi-downloader">Lazy DSi Downloader</a> 来自动设置您的 SD 卡。</li><li>在 GBARunner2 中实现更好的声音</li></ul></li></ul>',3),o={class:"custom-container danger"},t=(0,i._)("p",{class:"custom-container-title"},"DANGER",-1),u=(0,i.Uk)("If you have not yet done so, please follow "),c=(0,i._)("a",{href:"dumping-nand"},"Dumping NAND",-1),r=(0,i.Uk)(". 虽然概率较低，Unlaunch仍有可能使DSi变砖。 A NAND backup + "),d={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},s=(0,i.Uk)("hardmod"),h=(0,i.Uk)(" would allow you to restore this backup, provided you know how to solder."),k=(0,i.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>请确保您的机器在后续过程中被充电。 突然断电可能会造成严重的损坏。</p></div><h2 id="第一节-sd-卡设置" tabindex="-1"><a class="header-anchor" href="#第一节-sd-卡设置" aria-hidden="true">#</a> 第一节 - SD 卡设置</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>正在使用Windows、Linux或 macOS 设备？ 使用 <a href="lazy-dsi-downloader">Lazy DSi Downloader</a> 来自动设置您的 SD 卡。</p></div>',3),p=(0,i.Uk)("下载最新版本的"),b={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},m=(0,i.Uk)(" Unlaunch "),f=(0,i.Uk)("使用"),U={href:"https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},g=(0,i.Uk)("镜像链接"),D=(0,i.Uk)("，如果上述链接无法工作 1.从"),S=(0,i._)("code",null,"unlaunch.zip",-1),w=(0,i.Uk)("中解压"),_=(0,i._)("code",null,"UNLAUNH.DSI",-1),N=(0,i.Uk)("并复制到你SD卡的任意位置 1.确认你的SD卡上仍然有TWiLight菜单++"),W=(0,i._)("li",null,[(0,i.Uk)("从SD卡中删除"),(0,i._)("code",null,"UNLAUNH.DSI"),(0,i.Uk)("文件")],-1),T=(0,i.Uk)("确认你的SD卡上仍然有 TWiLight 菜单++ "),L=(0,i.Uk)("如果您不确定，请按照 "),v=(0,i.Uk)("启动漏洞"),A=(0,i.Uk)(" 进行操作。"),y=(0,i._)("h2",{id:"第二节——安装-更新unlaunch",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#第二节——安装-更新unlaunch","aria-hidden":"true"},"#"),(0,i.Uk)(" 第二节——安装/更新Unlaunch")],-1),O=(0,i.uE)('<li>打开TWiLight Menu++ <ul><li>如果这是您第一次安装 Unlaunch，请通过您使用的漏洞重新启动 TWiLight Menu++</li><li>如果您已经安装了Unlaunch并恢复更新，在启动时选择<kbd class="face">A</kbd> + <kbd class="face">B</kbd>选择<code>TWiLight菜单+ +</code>,当<code>BOOT.NDS</code>显示在底部屏幕时。</li></ul></li><li>启动 TWiLight Menu++ 设置 <ul><li>如果您没有更改主题，请按“启动漏洞”页面中的步骤操作。 否则，请参阅TWiLight 菜单++ 手册</li></ul></li><li>点击 <kbd class="l">L</kbd> / <kbd class="r">R</kbd> 或 <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> 直到您到达 <code>Unlaunch settings</code> 页面</li>',3),E=(0,i.Uk)("If you want to change Unlaunch's background image, select "),I=(0,i._)("code",null,"Background",-1),M=(0,i.Uk)(" and choose the one you want "),R=(0,i.Uk)("If you want to create your own Unlaunch background, see the "),x={href:"https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds",target:"_blank",rel:"noopener noreferrer"},z=(0,i.Uk)("DS-Homebrew Wiki page"),B=(0,i.uE)('<li>If you want the Health and Safety screen and DSi Menu music and sounds when using the official Nintendo DSi Menu, then set <code>Launcher Patches</code> to <code>Off</code><ul><li>This will also keep the region locking and card whitelist, meaning that some flashcards won&#39;t be usable from the DSi Menu</li></ul></li><li>退出 TWiLight 菜单++ 设置</li><li>想要原生DSi菜单，请选择<code>Launcher</code></li><li>选择install选项 <ul><li>如果未启动成功在<code>ERROR: MISMATCH IN FAT COPIES 排</code>，请查看我们<a href="%E7%96%91%E9%9A%BE%E8%A7%A3%E7%AD%94">故障查询</a>页面</li></ul></li><li>完成后，重启您的系统</li>',5),C=(0,i.uE)('<p>如果您此时看到 Unlaunch Filemenu 的屏幕，说明您已成功地破解了您的Nintendo DSi。</p><ul><li>If you see a black screen, please take a look at the <a href="troubleshooting">Troubleshooting</a> page</li></ul><h2 id="第三部分-启动后配置" tabindex="-1"><a class="header-anchor" href="#第三部分-启动后配置" aria-hidden="true">#</a> 第三部分 - 启动后配置</h2><p>目前，Unlaunch默认为在启动时启动其FileMenu，但可以更改任何您想要启动启动页面。</p><ol><li>摁住 <kbd class="face">A</kbd> 和 <kbd class="face">B</kbd>键 后，再摁下 Dsi 的电源键 <ul><li>这应该能启动到Unlaunch Filemenu</li></ul></li><li>导航到 <code>OPTIONS</code>, 并查看可用的选项 <ul><li><kbd class="face">A</kbd> + <kbd class="face">B</kbd>被硬编码启动到Unlaunch的菜单，因此无法更改</li><li>“NO BUTTON”和“BUTTON A / B / X / Y”选项可以根据您的喜好进行设置，并根据按住的按钮选择 DSi 在启动时加载的内容。您可以选择任何 DSiWare、自制软件、Slot-1 卡、wifiboot 或 Unlaunch 的文件菜单 您可以选择任何DSIWare，Homebrew，Slot-1卡，Wifiboot或Unlaunch能引导的文件 <ul><li>想要TWiLight Menu++，请在<code>BOOT.NDS</code>出现在下屏幕时，选择<code>TWiLight Menu++</code>选项</li><li>想要原生 DSi 菜单，请选择 <code>Launcher</code></li></ul></li><li><code>LOAD ERROR</code>出现时说明加载出现问题，例如SD卡未插入</li></ul></li><li>选择SAVE &amp; EXIT以保存设置，然后关闭您的DSI</li></ol><h2 id="第四部分-清理你的-sd-卡" tabindex="-1"><a class="header-anchor" href="#第四部分-清理你的-sd-卡" aria-hidden="true">#</a> 第四部分 - 清理你的 SD 卡</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>这个部分是可选的，可以清理掉你不需要的文件</p></div>',7),H=(0,i.Uk)("如果您想创建自己的 Unlaunch 背景，请参阅 "),P={href:"https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds",target:"_blank",rel:"noopener noreferrer"},F=(0,i.Uk)("DS-Homebrew Wiki 页面"),G=(0,i._)("ul",null,[(0,i._)("li",null,"如果您使用了其他漏洞，请删除有关该漏洞的文件，而不是上面这个")],-1),X=(0,i._)("li",null,[(0,i.Uk)("从SD卡中删除"),(0,i._)("code",null,"sd:/private/ds/app/484E494A/pit.bin"),(0,i.Uk)("文件")],-1),Y={},Z=(0,n(3744).Z)(Y,[["render",function(l,e){const n=(0,i.up)("OutboundLink"),Y=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("div",o,[t,(0,i._)("p",null,[u,c,r,(0,i._)("a",d,[s,(0,i.Wm)(n)]),h])]),k,(0,i._)("ol",null,[(0,i._)("li",null,[p,(0,i._)("a",b,[m,(0,i.Wm)(n)]),(0,i._)("ul",null,[(0,i._)("li",null,[f,(0,i._)("a",U,[g,(0,i.Wm)(n)]),D,S,w,_,N])])]),W,(0,i._)("li",null,[T,(0,i._)("ul",null,[(0,i._)("li",null,[L,(0,i.Wm)(Y,{to:"/zh_CN/launching-the-exploit.html#twilight-menu"},{default:(0,i.w5)((()=>[v])),_:1}),A])])])]),y,(0,i._)("ol",null,[O,(0,i._)("li",null,[E,I,M,(0,i._)("ul",null,[(0,i._)("li",null,[R,(0,i._)("a",x,[z,(0,i.Wm)(n)])])])]),B]),C,(0,i._)("ul",null,[(0,i._)("li",null,[H,(0,i._)("a",P,[F,(0,i.Wm)(n)]),G]),X])],64)}]])},3744:(l,e)=>{e.Z=(l,e)=>{const n=l.__vccOpts||l;for(const[l,i]of e)n[l]=i;return n}}}]);