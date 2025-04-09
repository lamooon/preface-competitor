(function(){"use strict";var e={6317:function(e,t,r){var s=r(5130),o=(r(8111),r(7588),r(6768)),a=r(4232),n=r.p+"img/main.9bf62eb7.jpg",l=r(144);const i={class:"bg-white shadow-sm fixed w-full top-0 z-50"},d={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},c={class:"flex justify-between h-16 items-center"},u={class:"flex-shrink-0 flex items-center"},p={class:"hidden sm:ml-6 sm:flex sm:space-x-8"},g={class:"flex items-center sm:hidden"},h={key:0,class:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},v={key:1,class:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},m={key:0,class:"sm:hidden absolute w-full bg-white border-b border-gray-200"},x={class:"pt-2 pb-3 space-y-1"},f={id:"news",class:"bg-gray-50 py-16"},k={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},b={key:0,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},w={key:1,class:"p-4 bg-red-50 text-red-600 rounded-lg"},y={key:2,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},L=["src","alt"],C={key:1,class:"h-48 bg-gray-200 flex items-center justify-center text-gray-500"},E={class:"p-4"},j={class:"font-semibold text-lg mb-2 line-clamp-2"},M={class:"text-gray-600 mb-4 line-clamp-3"},F=["href"];var T={__name:"App",setup(e){const t=(0,l.KR)(!1),r=(0,l.KR)("home"),s=e=>{r.value=e},T=e=>{s(e),t.value=!1},B=()=>{alert("Content TBD")},A=(0,l.KR)([]),O=(0,l.KR)(!0),X=(0,l.KR)(null),z=()=>{const e=["home","features","news","contact"],t=window.scrollY+300;for(const s of e){const e=document.getElementById(s);if(e){const o=e.offsetTop,a=e.offsetHeight;if(t>=o&&t<o+a){r.value=s;break}}}},V=()=>{document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href"),r=document.querySelector(t);r&&window.scrollTo({top:r.offsetTop-64,behavior:"smooth"})}))}))},H=async()=>{try{O.value=!0;const e=await fetch("/api/news");if(!e.ok)throw new Error(`Failed to fetch news (${e.status}): ${e.statusText}`);A.value=await e.json()}catch(X){console.error("Error fetching news:",X),X.value=X.message||"Failed to load news"}finally{O.value=!1}};return(0,o.sV)((()=>{V(),H(),z(),window.addEventListener("scroll",z)})),(e,l)=>((0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("nav",i,[(0,o.Lk)("div",d,[(0,o.Lk)("div",c,[(0,o.Lk)("div",u,[(0,o.Lk)("a",{href:"#home",onClick:l[0]||(l[0]=e=>s("home")),class:"text-pink-500 font-bold text-xl hover:text-pink-600 transition-colors"},"Postface")]),(0,o.Lk)("div",p,[(0,o.Lk)("a",{href:"#home",onClick:l[1]||(l[1]=e=>s("home")),class:(0,a.C4)(["home"===r.value?"border-pink-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"])}," Home ",2),(0,o.Lk)("a",{href:"#features",onClick:l[2]||(l[2]=e=>s("features")),class:(0,a.C4)(["features"===r.value?"border-pink-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"])}," Features ",2),(0,o.Lk)("a",{href:"#news",onClick:l[3]||(l[3]=e=>s("news")),class:(0,a.C4)(["news"===r.value?"border-pink-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"])}," News ",2),(0,o.Lk)("a",{href:"#contact",onClick:l[4]||(l[4]=e=>s("contact")),class:(0,a.C4)(["contact"===r.value?"border-pink-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"])}," Contact ",2)]),l[13]||(l[13]=(0,o.Lk)("div",{class:"hidden sm:flex items-center"},[(0,o.Lk)("button",{class:"ml-8 px-4 py-2 rounded-md bg-pink-500 text-white font-medium hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"}," Sign Up ")],-1)),(0,o.Lk)("div",g,[(0,o.Lk)("button",{onClick:l[5]||(l[5]=e=>t.value=!t.value),type:"button",class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"},[l[12]||(l[12]=(0,o.Lk)("span",{class:"sr-only"},"Open main menu",-1)),t.value?((0,o.uX)(),(0,o.CE)("svg",v,l[11]||(l[11]=[(0,o.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)]))):((0,o.uX)(),(0,o.CE)("svg",h,l[10]||(l[10]=[(0,o.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])))])])])]),t.value?((0,o.uX)(),(0,o.CE)("div",m,[(0,o.Lk)("div",x,[(0,o.Lk)("a",{href:"#home",onClick:l[6]||(l[6]=e=>T("home")),class:(0,a.C4)(["home"===r.value?"bg-pink-50 border-pink-500 text-pink-700":"border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700","block pl-3 pr-4 py-2 border-l-4 text-base font-medium"])}," Home ",2),(0,o.Lk)("a",{href:"#features",onClick:l[7]||(l[7]=e=>T("features")),class:(0,a.C4)(["features"===r.value?"bg-pink-50 border-pink-500 text-pink-700":"border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700","block pl-3 pr-4 py-2 border-l-4 text-base font-medium"])}," Features ",2),(0,o.Lk)("a",{href:"#news",onClick:l[8]||(l[8]=e=>T("news")),class:(0,a.C4)(["news"===r.value?"bg-pink-50 border-pink-500 text-pink-700":"border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700","block pl-3 pr-4 py-2 border-l-4 text-base font-medium"])}," News ",2),(0,o.Lk)("a",{href:"#contact",onClick:l[9]||(l[9]=e=>T("contact")),class:(0,a.C4)(["contact"===r.value?"bg-pink-50 border-pink-500 text-pink-700":"border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700","block pl-3 pr-4 py-2 border-l-4 text-base font-medium"])}," Contact ",2)]),l[14]||(l[14]=(0,o.Lk)("div",{class:"pt-4 pb-3 border-t border-gray-200 px-4"},[(0,o.Lk)("a",{href:"#",class:"block w-full text-center px-4 py-2 text-base font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-md"}," Sign Up ")],-1))])):(0,o.Q3)("",!0)]),l[22]||(l[22]=(0,o.Lk)("div",{class:"h-16"},null,-1)),(0,o.Lk)("div",{id:"home",class:"relative isolate overflow-hidden bg-gray-50 pt-8"},[(0,o.Lk)("div",{class:"mx-auto max-w-7xl p-6 lg:px-8"},[(0,o.Lk)("div",{class:"grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-5 lg:items-start lg:gap-y-10"},[l[18]||(l[18]=(0,o.Lk)("div",{class:"order-3 lg:order-none lg:sticky lg:top-4 lg:col-span-2 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"},[(0,o.Lk)("img",{class:"hidden lg:block w-full max-w-none rounded-xl",src:n,alt:"Education concept"}),(0,o.Lk)("img",{class:"block lg:hidden w-full h-[50vh] object-cover rounded-xl px-4",src:n,alt:"Education concept mobile"})],-1)),(0,o.Lk)("div",{class:"order-first lg:order-none lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:grid lg:grid-cols-3 lg:gap-x-8"},[(0,o.Lk)("div",{class:"lg:pr-4 lg:col-span-3"},[(0,o.Lk)("div",{class:"lg:max-w-2xl"},[l[17]||(l[17]=(0,o.Fv)('<h1 class="mt-2 lg:pt-32 text-pretty tracking-tight text-gray-800 sm:text-5xl"> Education is about <span class="text-pink-500">teaching.</span></h1><p class="mt-6 text-gray-900 font-semibold text-[56px] leading-tight"><span class="block">Spend your time</span><span class="block">where it matters <span class="relative inline-block"> most <div class="absolute -bottom-4 left-0 w-full h-2 bg-pink-400 rounded-full"></div></span></span></p>',2)),(0,o.Lk)("div",{class:"max-w-2xl text-base/7 text-gray-600 mt-8"},[l[16]||(l[16]=(0,o.Lk)("p",null,[(0,o.eW)(" Teaching is already demanding enough without spending hours writing questions. Not just basic questions, but "),(0,o.Lk)("span",{class:"text-gray-900 font-semibold"},"THOUGHTFUL. MEANINGFUL. QUESTIONS."),(0,o.eW)(" Drop in your lesson content, and we'll take care of the rest. Because your time is better spent doing what you love - actually teaching. ")],-1)),(0,o.Lk)("div",{class:"mt-6"},[(0,o.Lk)("button",{onClick:B,class:"relative inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition-colors"},l[15]||(l[15]=[(0,o.eW)(" Let's do this "),(0,o.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,o.Lk)("path",{d:"M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"})],-1)]))])])])])])])])]),l[23]||(l[23]=(0,o.Fv)('<div id="features" class="bg-white py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center"><h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Features</h2><p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"> Tools designed for educators, by educators. </p></div><div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"><div class="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"><div class="absolute top-6 right-6 bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div><h3 class="mt-8 text-lg font-medium text-gray-900">AI-Powered Question Generation</h3><p class="mt-2 text-base text-gray-500"> Generate thoughtful questions from any lesson content in seconds, saving you hours of preparation time. </p></div><div class="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"><div class="absolute top-6 right-6 bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg></div><h3 class="mt-8 text-lg font-medium text-gray-900">Customizable Templates</h3><p class="mt-2 text-base text-gray-500"> Choose from a variety of question types and customize them to fit your teaching style and curriculum. </p></div><div class="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"><div class="absolute top-6 right-6 bg-pink-100 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div><h3 class="mt-8 text-lg font-medium text-gray-900">Secure Data Handling</h3><p class="mt-2 text-base text-gray-500"> Your lesson content and generated questions are always secure and private, with strong encryption at every step. </p></div></div></div></div>',1)),(0,o.Lk)("div",f,[(0,o.Lk)("div",k,[l[21]||(l[21]=(0,o.Lk)("h2",{class:"text-3xl font-bold text-gray-900 text-center mb-8"},"Latest Tech News",-1)),O.value?((0,o.uX)(),(0,o.CE)("div",b,[((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)(3,(e=>(0,o.Lk)("div",{key:e,class:"border rounded-lg overflow-hidden shadow-sm bg-white"},l[19]||(l[19]=[(0,o.Fv)('<div class="h-48 bg-gray-200 animate-pulse"></div><div class="p-4"><div class="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div><div class="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div><div class="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div><div class="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div></div>',2)])))),64))])):X.value?((0,o.uX)(),(0,o.CE)("div",w,[l[20]||(l[20]=(0,o.Lk)("p",{class:"font-medium"},"Failed to load news",-1)),(0,o.Lk)("p",null,(0,a.v_)(X.value),1)])):((0,o.uX)(),(0,o.CE)("div",y,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(A.value,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:"border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow"},[e.urlToImage?((0,o.uX)(),(0,o.CE)("img",{key:0,src:e.urlToImage,alt:e.title,class:"h-48 w-full object-cover"},null,8,L)):((0,o.uX)(),(0,o.CE)("div",C,"No image available")),(0,o.Lk)("div",E,[(0,o.Lk)("h3",j,(0,a.v_)(e.title),1),(0,o.Lk)("p",M,(0,a.v_)(e.description),1),(0,o.Lk)("a",{href:e.url,target:"_blank",class:"text-pink-500 font-medium hover:text-pink-600"},"Read more",8,F)])])))),128))]))])]),l[24]||(l[24]=(0,o.Fv)('<footer id="contact" class="bg-gray-900 text-white"><div class="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 class="text-xl font-bold mb-4">Postface</h3><p class="text-gray-300 mb-6"> Empowering educators with AI tools to create better learning experiences. </p><div class="flex space-x-4 mb-6"><a href="#" class="text-gray-400 hover:text-white"><span class="sr-only">Facebook</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-gray-400 hover:text-white"><span class="sr-only">Twitter</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a><a href="#" class="text-gray-400 hover:text-white"><span class="sr-only">GitHub</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></a></div></div><div><h3 class="text-xl font-bold mb-4">Contact Us</h3><ul class="space-y-3 text-gray-300"><li class="flex items-start"><svg class="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span>support@postface.ai</span></li><li class="flex items-start"><svg class="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span>+852 1234-4567</span></li><li class="flex items-start"><svg class="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span>Shop G08<br>3/F - 6/F Tower 535, 535 Jaffe Road, Causeway Bay, HK</span></li></ul><div class="mt-6"><a href="mailto:support@postface.ai" class="inline-flex items-center px-4 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition-colors"> Email Us </a></div></div></div><div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"><p>© 2025 Postface</p></div></div></footer>',1))],64))}};const B=T;var A=B;(0,s.Ef)(A).mount("#app")}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,s,o,a){if(!s){var n=1/0;for(c=0;c<e.length;c++){s=e[c][0],o=e[c][1],a=e[c][2];for(var l=!0,i=0;i<s.length;i++)(!1&a||n>=a)&&Object.keys(r.O).every((function(e){return r.O[e](s[i])}))?s.splice(i--,1):(l=!1,a<n&&(n=a));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[s,o,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,a,n=s[0],l=s[1],i=s[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(i)var c=i(r)}for(t&&t(s);d<n.length;d++)a=n[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},s=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[504],(function(){return r(6317)}));s=r.O(s)})();
//# sourceMappingURL=app.0272f69b.js.map