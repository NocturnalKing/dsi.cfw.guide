"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9474],{86:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i={key:"v-878b3f50",path:"/dumping-nand.html",title:"Dumping NAND",lang:"en-US",frontmatter:{title:"Dumping NAND"},excerpt:"",headers:[{level:2,title:"Section I - SD card setup",slug:"section-i-sd-card-setup",children:[]},{level:2,title:"Section II - Dumping the NAND",slug:"section-ii-dumping-the-nand",children:[]}],filePathRelative:"dumping-nand.md",git:{updatedTime:1641080616e3}}},6626:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var i=n(6252);const o=(0,i.uE)('<p>This page is for making a NAND backup, which is a copy of the data on the Nintendo DSi&#39;s internal storage. It can be used to set up hiyaCFW, as well as no$gba and melonDS for DSi emulation.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>It is highly recommended that you do this. A NAND backup can be used as a restore point in the future, in case of a brick.</p></div><h2 id="section-i-sd-card-setup" tabindex="-1"><a class="header-anchor" href="#section-i-sd-card-setup" aria-hidden="true">#</a> Section I - SD card setup</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Using a Windows, Linux or macOS device? Use <a href="lazy-dsi-downloader">Lazy DSi Downloader</a> to automatically setup your SD card.</p></div>',4),a=(0,i.Uk)("Download the latest release of "),l={href:"https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds",target:"_blank",rel:"noopener noreferrer"},s=(0,i.Uk)("dumpTool"),c=(0,i._)("li",null,[(0,i.Uk)("Place "),(0,i._)("code",null,"dumpTool.nds"),(0,i.Uk)(" anywhere on your SD card")],-1),u=(0,i.uE)('<h2 id="section-ii-dumping-the-nand" tabindex="-1"><a class="header-anchor" href="#section-ii-dumping-the-nand" aria-hidden="true">#</a> Section II - Dumping the NAND</h2><ol><li>Launch <code>dumpTool</code> through TWiLight Menu++</li><li>Hit the <kbd class="face">A</kbd> button on your Nintendo DSi to start dumping your NAND <ul><li>A NAND backup typically takes around 7 minutes</li></ul></li><li>When the NAND backup is complete, hit the <kbd>START</kbd> button on your Nintendo DSi to exit dumpTool</li><li>Power off your console and insert your SD card back into your device</li><li>Store this backup somewhere safe, where you won&#39;t lose it <ul><li>If possible, make multiple backups across different storage devices</li><li>Once you&#39;ve backed it up elsewhere, you can delete it from the SD card</li></ul></li></ol>',2),d={class:"custom-container warning"},r=(0,i._)("p",{class:"custom-container-title"},"WARNING",-1),h=(0,i.Uk)("The SHA1 hash of the "),p=(0,i._)("code",null,"nand.bin",-1),m=(0,i.Uk)(" will not match the hash stored in "),k=(0,i._)("code",null,"nand.bin.sha1",-1),f=(0,i.Uk)(". This is because dumpTool adds additional data known as a no$gba footer to the "),b=(0,i._)("code",null,"nand.bin",-1),g=(0,i.Uk)(" file after the SHA1 hash is calculated. You can use the "),D={href:"https://github.com/mondul/HiyaCFW-Helper/releases",target:"_blank",rel:"noopener noreferrer"},y=(0,i.Uk)("hiyaCFW Helper"),N=(0,i.Uk)(" to create a copy without the footer."),S=(0,i._)("div",{class:"custom-container tip"},[(0,i._)("p",{class:"custom-container-title"},"TIP"),(0,i._)("p",null,[(0,i.Uk)("Continue to "),(0,i._)("a",{href:"installing-unlaunch"},"Installing Unlaunch"),(0,i.Uk)(" (Optional, not compatible with Nintendo DSi development consoles)")])],-1),w={},_=(0,n(3744).Z)(w,[["render",function(e,t){const n=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,(0,i._)("ol",null,[(0,i._)("li",null,[a,(0,i._)("a",l,[s,(0,i.Wm)(n)])]),c]),u,(0,i._)("div",d,[r,(0,i._)("p",null,[h,p,m,k,f,b,g,(0,i._)("a",D,[y,(0,i.Wm)(n)]),N])]),S],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,i]of t)n[e]=i;return n}}}]);