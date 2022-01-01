"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6306],{5763:(e,n,i)=>{i.r(n),i.d(n,{data:()=>l});const l={key:"v-e92b6440",path:"/installing-unlaunch.html",title:"Installing Unlaunch",lang:"en-US",frontmatter:{title:"Installing Unlaunch"},excerpt:"",headers:[{level:2,title:"Section I - SD card setup",slug:"section-i-sd-card-setup",children:[]},{level:2,title:"Section II - Installing/Updating Unlaunch",slug:"section-ii-installing-updating-unlaunch",children:[]},{level:2,title:"Section III - Post-Unlaunch configuration",slug:"section-iii-post-unlaunch-configuration",children:[]},{level:2,title:"Section IV - Cleaning up your SD card",slug:"section-iv-cleaning-up-your-sd-card",children:[]}],filePathRelative:"installing-unlaunch.md",git:{updatedTime:1641080616e3}}},6561:(e,n,i)=>{i.r(n),i.d(n,{default:()=>R});var l=i(6252);const o=(0,l.uE)('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Unlaunch is not compatible with Nintendo DSi development consoles.</p></div><p>Unlaunch is an exploit that takes place on system boot. This allows it to have higher privileges than normal DSiWare exploits such as Memory Pit, which makes it able to do the following:</p><ul><li>Launching applications at boot (homebrew or DSiWare), with optional button combinations</li><li>Access to Slot-1, allowing you to dump Game Cards and launch incompatible flashcards</li><li>Region locks removed on DSi-Enhanced / Exclusive Game Cards</li><li>Run old Nintendo DS homebrew via nds-bootstrap-hb</li><li>Brick-protection</li><li>The following for Memory Pit users (other exploits already allow these): <ul><li>Improved compatibility with DSiWare launched from the SD card</li><li>Better sound in GBARunner2</li></ul></li></ul>',3),t={class:"custom-container danger"},a=(0,l._)("p",{class:"custom-container-title"},"DANGER",-1),c=(0,l.Uk)("If you have not yet done so, please follow "),u=(0,l._)("a",{href:"dumping-nand"},"Dumping NAND",-1),s=(0,l.Uk)(". While the chances are slim, Unlaunch can accidentally brick your Nintendo DSi. A NAND backup + "),r={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},h=(0,l.Uk)("hardmod"),d=(0,l.Uk)(" would allow you to restore this backup, provided you know how to solder."),p=(0,l.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Make sure your console is charged when following this process. A sudden power loss could result in serious damage.</p></div><h2 id="section-i-sd-card-setup" tabindex="-1"><a class="header-anchor" href="#section-i-sd-card-setup" aria-hidden="true">#</a> Section I - SD card setup</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Using a Windows, Linux or macOS device? Use <a href="lazy-dsi-downloader">Lazy DSi Downloader</a> to automatically setup your SD card.</p></div>',3),g=(0,l.Uk)("Download the latest version of "),f={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},k=(0,l.Uk)("Unlaunch"),b={href:"https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},m=(0,l.Uk)("Mirror link"),w=(0,l.Uk)(", if the above doesn't work"),y=(0,l._)("li",null,[(0,l.Uk)("Extract "),(0,l._)("code",null,"UNLAUNCH.DSI"),(0,l.Uk)(" from the "),(0,l._)("code",null,"unlaunch.zip"),(0,l.Uk)(" archive and place it anywhere on your SD card")],-1),S=(0,l.Uk)("Verify you still have TWiLight Menu++ on your SD card "),U=(0,l.Uk)("If you are unsure, follow the instructions from the "),v=(0,l.Uk)("Launching the Exploit"),D=(0,l.Uk)(" page"),I=(0,l._)("h2",{id:"section-ii-installing-updating-unlaunch",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#section-ii-installing-updating-unlaunch","aria-hidden":"true"},"#"),(0,l.Uk)(" Section II - Installing/Updating Unlaunch")],-1),_=(0,l.uE)('<li>Open TWiLight Menu++ <ul><li>If this is your first time installing Unlaunch, relaunch TWiLight Menu++ through the exploit that you used</li><li>If you have already installed Unlaunch and are looking to update it, hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while booting and select the <code>TWiLight Menu++</code> where <code>BOOT.NDS</code> is shown on the bottom screen</li></ul></li><li>Launch TWiLight Menu++ Settings <ul><li>If you haven&#39;t changed your theme, follow the steps in the &quot;Launching the Exploit&quot; page. Otherwise, see the TWiLight Menu++ Manual</li></ul></li><li>Hit <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> until you reach the <code>Unlaunch settings</code> page</li>',3),T=(0,l.Uk)("If you want to change Unlaunch's background image, select "),N=(0,l._)("code",null,"Background",-1),L=(0,l.Uk)(" and choose the one you want "),W=(0,l.Uk)("If you want to create your own Unlaunch background, see the "),A={href:"https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds",target:"_blank",rel:"noopener noreferrer"},M=(0,l.Uk)("DS-Homebrew Wiki page"),x=(0,l.uE)('<li>If you want the Health and Safety screen and DSi Menu music and sounds when using the official Nintendo DSi Menu, then set <code>Launcher Patches</code> to <code>Off</code><ul><li>This will also keep the region locking and card whitelist, meaning that some flashcards won&#39;t be usable from the DSi Menu</li></ul></li><li>Exit TWiLight Menu++ Settings</li><li>In the file navigation menu, launch <code>Unlaunch DSi Installer</code></li><li>Select the install option <ul><li>If Unlaunch freezes at <code>ERROR: MISMATCH IN FAT COPIES</code>, please take a look at the <a href="troubleshooting">Troubleshooting</a> page</li></ul></li><li>When completed, reboot your system</li>',5),E=(0,l.uE)('<p>If you see Unlaunch&#39;s Filemenu screen at this point, you have successfully modded your Nintendo DSi.</p><ul><li>If you see a black screen, please take a look at the <a href="troubleshooting">Troubleshooting</a> page</li></ul><h2 id="section-iii-post-unlaunch-configuration" tabindex="-1"><a class="header-anchor" href="#section-iii-post-unlaunch-configuration" aria-hidden="true">#</a> Section III - Post-Unlaunch configuration</h2><p>Currently, Unlaunch defaults to launching its Filemenu on boot, but this can be changed launch whatever you want.</p><ol><li>Power on your console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd><ul><li>This should launch the Unlaunch Filemenu</li></ul></li><li>Navigate to <code>OPTIONS</code>, and look at the available options <ul><li><kbd class="face">A</kbd> + <kbd class="face">B</kbd> is hardcoded to launch into Unlaunch&#39;s menu, and as such cannot be changed</li><li>The <code>NO BUTTON</code> and <code>BUTTON A / B / X / Y</code> options can be set however you like and will choose what your DSi loads at boot depending on which buttons are held. You can select any DSiWare, homebrew, the Slot-1 card, wifiboot, or Unlaunch&#39;s Filemenu <ul><li>For TWiLight Menu++, select the <code>TWiLight Menu++</code> option where <code>BOOT.NDS</code> is shown on the bottom screen</li><li>For the original DSi Menu, select <code>Launcher</code></li></ul></li><li><code>LOAD ERROR</code> is what your DSi will load if loading what you have set fails, such as the SD card not being inserted</li></ul></li><li>Select <code>SAVE &amp; EXIT</code> to save your settings, then turn off your DSi</li></ol><h2 id="section-iv-cleaning-up-your-sd-card" tabindex="-1"><a class="header-anchor" href="#section-iv-cleaning-up-your-sd-card" aria-hidden="true">#</a> Section IV - Cleaning up your SD card</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This section is optional and only serves for keeping your SD card tidy of files you won&#39;t need.</p></div><ul><li>Delete the <code>sd:/private/ds/app/484E494A/pit.bin</code> file from your SD card <ul><li>If you used another exploit, delete the files from that exploit instead</li></ul></li><li>Delete the <code>UNLAUNCH.DSI</code> file from your SD card</li></ul>',8),O={},R=(0,i(3744).Z)(O,[["render",function(e,n){const i=(0,l.up)("OutboundLink"),O=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[o,(0,l._)("div",t,[a,(0,l._)("p",null,[c,u,s,(0,l._)("a",r,[h,(0,l.Wm)(i)]),d])]),p,(0,l._)("ol",null,[(0,l._)("li",null,[g,(0,l._)("a",f,[k,(0,l.Wm)(i)]),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",b,[m,(0,l.Wm)(i)]),w])])]),y,(0,l._)("li",null,[S,(0,l._)("ul",null,[(0,l._)("li",null,[U,(0,l.Wm)(O,{to:"/launching-the-exploit.html#twilight-menu"},{default:(0,l.w5)((()=>[v])),_:1}),D])])])]),I,(0,l._)("ol",null,[_,(0,l._)("li",null,[T,N,L,(0,l._)("ul",null,[(0,l._)("li",null,[W,(0,l._)("a",A,[M,(0,l.Wm)(i)])])])]),x]),E],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const i=e.__vccOpts||e;for(const[e,l]of n)i[e]=l;return i}}}]);