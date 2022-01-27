"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2239],{9482:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a={key:"v-50005bf2",path:"/pl_PL/dsiware-backups.html",title:"Kopie zapasowe DSiWare",lang:"pl-PL",frontmatter:{title:"Kopie zapasowe DSiWare"},excerpt:"",headers:[{level:2,title:"Wymagania",slug:"wymagania",children:[]},{level:2,title:"Nintendo DSi - Instrukcje",slug:"nintendo-dsi-instrukcje",children:[{level:3,title:"Section I - Identifying the desired DSiWare",slug:"section-i-identifying-the-desired-dsiware",children:[]},{level:3,title:"Section II - Extracting the DSiWare",slug:"section-ii-extracting-the-dsiware",children:[]},{level:3,title:"Section III - Extracting the save file (optional)",slug:"section-iii-extracting-the-save-file-optional",children:[]}]}],filePathRelative:"pl_PL/dsiware-backups.md",git:{updatedTime:164329047e4}}},5293:(e,i,t)=>{t.r(i),t.d(i,{default:()=>h});var a=t(6252);const o=(0,a._)("h2",{id:"wymagania",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#wymagania","aria-hidden":"true"},"#"),(0,a.Uk)(" Wymagania")],-1),l=(0,a.Uk)("Najnowsza wersja "),n={href:"https://github.com/RocketRobz/godmode9i/releases",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("GodMode9i"),r=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("Pobierz archiwum, rozpakuj zawartość i umieść "),(0,a._)("code",null,"GodMode9i.nds"),(0,a.Uk)(" w dowolnym miejscu na karcie SD")])],-1),c=(0,a.uE)('<h2 id="nintendo-dsi-instrukcje" tabindex="-1"><a class="header-anchor" href="#nintendo-dsi-instrukcje" aria-hidden="true">#</a> Nintendo DSi - Instrukcje</h2><h3 id="section-i-identifying-the-desired-dsiware" tabindex="-1"><a class="header-anchor" href="#section-i-identifying-the-desired-dsiware" aria-hidden="true">#</a> Section I - Identifying the desired DSiWare</h3><ol><li>Launch GodMode9i and select <code>[nand:] SYSNAND</code></li><li>Navigate to the <code>title</code> folder</li><li>Choose the folder according to whichever category you&#39;re looking for <ul><li><code>00030004</code>: Standard DSiWare</li><li><code>00030005</code>: Pre-installed Fun Tools</li><li><code>0003000f</code>: System Data (non-DSiWare files, can&#39;t be run)</li><li><code>00030015</code>: System Base Tools</li><li><code>00030017</code>: Launcher</li></ul></li><li>Once you have chosen which type of DSiWare you would like to extract, enter a subfolder, and then enter <code>content</code></li><li>There should now be an <code>.app</code> file visible. Select the file, and choose <code>Show NDS file info</code>. This will tell you if it&#39;s the DSiWare that you are looking for <ul><li>If it is not the DSiWare title that you were looking for, continue searching in other folders until you find it</li><li>Files in <code>0003000f</code> cannot have their NDS file info viewed because they are not launchable DSiWare and do not contain a valid banner</li></ul></li></ol><h3 id="section-ii-extracting-the-dsiware" tabindex="-1"><a class="header-anchor" href="#section-ii-extracting-the-dsiware" aria-hidden="true">#</a> Section II - Extracting the DSiWare</h3><ol><li>Highlight the <code>.app</code> file, then press <kbd class="face">Y</kbd> to add it to the clipboard</li><li>Navigate your SD card to the directory where you&#39;d like to place the dumped DSiWare title</li><li>Press <kbd class="face">Y</kbd> again to paste the DSiWare title in the directory you are currently navigating <ul><li>You can change the name of the file after pasting it by pressing <kbd class="face">X</kbd> while holding <kbd class="R">R</kbd></li><li>Repeat this for all files you wish to copy to the same directory</li></ul></li></ol><p>You should now see the DSiWare title in TWiLight Menu++ or the Unlaunch Filemenu.</p><h3 id="section-iii-extracting-the-save-file-optional" tabindex="-1"><a class="header-anchor" href="#section-iii-extracting-the-save-file-optional" aria-hidden="true">#</a> Section III - Extracting the save file (optional)</h3><ol><li>In the same folder as <code>content</code> for your specified DSiWare, there will be a folder named <code>data</code></li><li>Inside the <code>data</code> folder is the save file. Copy this file to your SD card in the same way you did for the DSiWare title itself <ul><li>Unlaunch and nds-bootstrap use the <code>.pub</code> and <code>.prv</code> file extensions for DSiWare save files. If your DSiWare save file was originally titled <code>public.sav</code>, use the <code>.pub</code> extension, and if the save file was originally titled <code>private.sav</code>, use the <code>.prv</code> extension</li><li>If you wish to use the DSiWare save file with TWiLight Menu++, make sure to place it in the <code>saves</code> folder at the location of your ROM</li></ul></li></ol>',8),s={},h=(0,t(3744).Z)(s,[["render",function(e,i){const t=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("ul",null,[(0,a._)("li",null,[l,(0,a._)("a",n,[d,(0,a.Wm)(t)]),r])]),c],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const t=e.__vccOpts||e;for(const[e,a]of i)t[e]=a;return t}}}]);