!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t.el,this.viewpagers=t.viewpagers,this.interval=t.interval||1e3,this.autoplay=t.autoplay||!0,this.index=0,this.render(),this.start()}var t,n,r;return t=e,(n=[{key:"render",value:function(){this.$el.innerHTML='<div class="viewpager-wrap"></div>',this.$wrap=this.$el.firstElementChild,this.$wrap.style.width="".concat(100*this.viewpagers.length,"%"),this.$wrap.innerHTML=this.viewpagers.map(function(e){return'\n            <div class="viewpager-item">\n                <a href="'.concat(e.link,'">\n                    <img src="').concat(e.image,'">\n                </a>\n            </div>\n            ')}).join("")}},{key:"start",value:function(){setInterval(this.next.bind(this),this.interval)}},{key:"next",value:function(){this.index+=1,this.index===this.viewpagers.length&&(this.$wrap.style.transform="translate(0)",this.index=0);var e="-".concat(100*this.index/this.viewpagers.length,"%");this.$wrap.style.transform="translate(".concat(e,")")}}])&&i(t.prototype,n),r&&i(t,r),e}(),s="https://qq-music-api.now.sh/search",a="https://qq-music-api.now.sh/lyrics";function o(e){var t,n,i,r,s=[].slice.call(e),a=(t=function(){if(0===s.length)return window.removeEventListener("scroll",a);(s=s.filter(function(e){return e.classList.contains("lazyload")})).forEach(function(e){(function(e){var t=e.getBoundingClientRect(),n=t.top,i=t.bottom,r=document.documentElement.clientHeight;return n>0&&n<r||i>0&&i<r})(e)&&function(e){var t=new Image;t.src=e.dataset.src,t.onload=function(){e.src=t.src,e.classList.remove("lazyload")}}(e)})},n=500,function e(){var s=Date.now(),a=s-i;!i||a>n?(t(),i=s):a<n&&(clearTimeout(r),r=setTimeout(e,n-a))});window.addEventListener("scroll",a),window.dispatchEvent(new Event("scroll"))}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t}var t,n,i;return t=e,(n=[{key:"launch",value:function(){var e=this;return console.log("https://qq-music-api.now.sh"),fetch("https://qq-music-api.now.sh").then(function(e){return e.json()}).then(function(t){return e.json=t}).then(function(){return e.render()}),this}},{key:"render",value:function(){this.renderviewpager(this.json.data.slider),this.renderRadio(this.json.data.radioList),o(document.querySelectorAll(".lazyload"))}},{key:"renderviewpager",value:function(e){new r({el:document.querySelector("#viewpager"),viewpagers:e.map(function(e){return{link:e.linkUrl,image:e.picUrl}})})}},{key:"renderRadio",value:function(e){this.$el.querySelector(".radios .list").innerHTML=e.map(function(e){return'\n            <div class=" list-item">\n                <a href="">\n                    <div class="list-media">\n                        <img class="lazyload" data-src="'.concat(e.picUrl,'">\n                        <span class="icon-play"></span>\n                    </div>\n                    <div class=" list-info">\n                        <h3>').concat(e.Ftitle,"</h3>\n                    </div>\n                </a>\n            </div>")}).join("")}}])&&c(t.prototype,n),i&&c(t,i),e}();function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t}var t,n,i;return t=e,(n=[{key:"launch",value:function(){var e=this;return fetch("https://qq-music-api.now.sh/top").then(function(e){return e.json()}).then(function(t){return e.render(t.data.topList)}),this}},{key:"render",value:function(e){var t=this;this.$el.querySelector(".billbaord .top-item").innerHTML=e.map(function(e){return'<div class="top-list">\n                    <div class="top-media">\n                        <img class="lazyload" data-src="'.concat(e.picUrl,'">\n                        <span>\n                            <i></i>').concat((e.listenCount/1e4).toFixed(1),'万\n                        </span>\n                    </div>\n                    <div class="top-info">\n                        <div class="top-cont top-over">\n                             <h3 class="top-over">').concat(e.topTitle,"</h3>\n                             ").concat(t.songlist(e.songList),"\n                        </div>\n                    </div>\n                </div>\n            ")}).join(""),o(this.$el.querySelectorAll(".lazyload"))}},{key:"songlist",value:function(e){return e.map(function(e,t){return'\n            <p class="top-over">'.concat(t+1,"<span>").concat(e.songname,"</span>- ").concat(e.singername,"</p>\n            ")}).join("")}}])&&u(t.prototype,n),i&&u(t,i),e}();function d(e){return"https://y.gtimg.cn/music/photo_new/T002R150x150M000".concat(e,".jpg")}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.$input=this.$el.querySelector("#search-input"),this.$input.addEventListener("keyup",this.onKeyup.bind(this)),this.$song_List=document.querySelector("#song-list"),this.keyword="",this.page=1,this.perpage=20,this.songs={},this.nomore=!1,this.fetching=!1,this.onscroll=this.onScroll.bind(this)}var t,n,i;return t=e,(n=[{key:"onKeyup",value:function(e){var t=e.target.value.trim();if(!t)return this.reset();"Enter"==e.key&&(this.search(t),window.addEventListener("scroll",this.onscroll))}},{key:"reset",value:function(){this.page=1,this.keyword="",this.songs={},this.nomore=!1,this.$song_List.innerHTML=""}},{key:"onScroll",value:function(e){if(this.nomore)return window.removeEventListener("scroll",this.onscroll);document.documentElement.clientHeight+pageYOffset>document.body.scrollHeight-50&&this.search(this.keyword,this.page+1)}},{key:"search",value:function(e,t){var n=this;this.fetching||(console.log(1),this.keyword=e,this.fetching=!0,fetch(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"".concat(s,"?keyword=").concat(e,"&page=").concat(t)}(this.keyword,t||this.page)).then(function(e){return e.json()}).then(function(e){return n.page=e.data.song.curpage,n.songs[n.page]=e.data.song.list,n.nomore="no results"===e.message,e.data.song.list}).then(function(e){return n.appendList(e)}).then(function(){return n.fetching=!1}).catch(function(){return n.fetching=!1}))}},{key:"appendList",value:function(e){console.log(e);var t=e.map(function(e){return'\n        <a href=\n        "#player?artist='.concat(e.singer[0].name,"&songid=").concat(e.songid,"&songname=").concat(e.songname,"&albummid=").concat(e.albummid,"&duration=").concat(e.interval,'">\n        <i class="cont-icon"></i>\n        <h6 class="song-tit">').concat(e.songname,'</h6>\n        <p class="singer-tit">').concat(e.singer.map(function(e){return e.name}).join(""),"</p>\n    </a>\n        ")}).join("");this.$song_List.insertAdjacentHTML("beforeend",t)}}])&&f(t.prototype,n),i&&f(t,i),e}();function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.$el.innerHTML='<div class="lyrics-lines" id="lyrics-lines"></div>',this.$lines=this.$el.querySelector("#lyrics-lines"),this.$audio=n,this.text="",this.index=0,this.lyrics=[],this.elapsed=0,this.reset(this.text)}var t,n,i;return t=e,(n=[{key:"start",value:function(){this.pause(),this.intervalId=setInterval(this.update.bind(this),1e3)}},{key:"pause",value:function(){clearInterval(this.intervalId)}},{key:"update",value:function(){if(this.elapsed=Math.round(this.$audio?this.$audio.currentTime:this.elapsed+1),this.index!==this.lyrics.length-1){for(var e=this.index+1;e<this.lyrics.length;e++){var t=this.getSeconds(this.lyrics[e]);if(this.elapsed===t&&(!this.lyrics[e+1]||this.elapsed<this.getSeconds(this.lyrics[e+1]))){this.$lines.children[this.index].classList.remove("active"),this.$lines.children[e].classList.add("active"),this.index=e;break}}if(this.index>2){var n=-(this.index-2)*this.LINE_HEIGHT;this.$lines.style.transform="translateY(".concat(n,"px)")}}}},{key:"render",value:function(){var e=this.lyrics.map(function(e){return'\n            <div class="lyrics-line" id="lyrics-lines">'.concat(e.slice(10),"</div>\n            ")}).join("");this.$lines.innerHTML=e}},{key:"reset",value:function(e){this.pause(),this.index=0,this.elapsed=0,e&&(this.text=this.formatText(e)||"",this.lyrics=this.text.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm)||[],this.lyrics.length&&this.render()),this.lyrics.length&&this.$lines.children[this.index].classList.add("active")}},{key:"restart",value:function(){this.reset(),this.start()}},{key:"getSeconds",value:function(e){return+e.replace(/^\[(\d{2}):(\d{2}).*/,function(e,t,n){return 60*+t+ +n})}},{key:"formatText",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText}}])&&p(t.prototype,n),i&&p(t,i),e}();function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}y.prototype.LINE_HEIGHT=42;var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.$el.addEventListener("click",this),this.$progressbarGress=document.querySelector("#progressbarGress"),this.$audio=this.createAudio(),this.lyrics=new y(document.querySelector("#play-lyrics"),this.$audio)}var t,n,i;return t=e,(n=[{key:"createAudio",value:function(){var e=document.createElement("audio");return document.body.appendChild(e),e}},{key:"handleEvent",value:function(e){var t=e.target;switch(!0){case t.matches(".icon-play"):this.onPlay(e);break;case t.matches(".icon-pause"):this.onPause(e)}}},{key:"show",value:function(){this.$el.classList.add("show"),document.body.classList.add("noscroll")}},{key:"hide",value:function(){this.$el.classList.remove("show"),document.body.classList.remove("noscroll")}},{key:"onPlay",value:function(e){var t=this;e.target.classList.add("icon-pause"),e.target.classList.remove("icon-play"),this.lyrics.start(),this.play(),clearInterval(this.statusClock),this.statusClock=setInterval(function(){t.updataStatus()},1e3)}},{key:"onPause",value:function(e){e.target.classList.add("icon-play"),e.target.classList.remove("icon-pause"),this.lyrics.pause(),this.$audio.pause(),clearInterval(this.statusClock)}},{key:"play",value:function(e){var t=this;if(e){console.log(e),this.$el.querySelector("#song-name").innerText=e.songname,this.$el.querySelector("#song-artist").innerText=e.artist;var n,i,r=d(e.albummid);this.$el.querySelector("#song-cover").src=r,this.$el.querySelector("#play-backgruond").style.backgroundImage="url(".concat(r,")"),this.songid=e.songid,fetch((n=this.songid,"".concat(a,"?id=").concat(n))).then(function(e){return e.json()}).then(function(e){return e.lyric}).then(function(e){return t.lyrics.reset(e)}),this.show(),this.updataStatus(),this.$audio.src=(i=this.songid,"http://ws.stream.qqmusic.qq.com/".concat(i,".m4a?fromtag=46"))}}},{key:"updataStatus",value:function(e){document.querySelector("#startTime");var t=document.querySelector("#endTime");console.log(t);var n=Math.floor(window.options.duration/60)+"",i=Math.floor(window.options.duration%60)+"";n=2===n.length?n:"0"+n,i=2===i.length?i:"0"+i,t.innerHTML=n+":"+i,this.$progressbarGress.style.width=NaN}},{key:"playimg",value:function(){this.$songCover=document.querySelector("#song-cover"),this.$songCover.src=d(options.albummid)}}])&&m(t.prototype,n),i&&m(t,i),e}();document.addEventListener("click",function(e){var t=e.target;if("tab"===t.dataset.role){[].forEach.call(t.parentElement.children,function(e){e.classList.remove("current")}),t.classList.add("current");var n=document.querySelector(t.dataset.view);n&&([].forEach.call(n.parentElement.children,function(e){e.style.display="none"}),n.style.display="block"),o(document.querySelectorAll(".lazyload"))}});new l(document.querySelector("#recommend")).launch(),new h(document.querySelector("#billbaord")).launch(),new v(document.querySelector("#search-view"));var w=new g(document.querySelector("#player"));function b(){var e=location.hash;if(/^#player\?.+/.test(e)){console.log(123);var t=e.slice(e.indexOf("?")+1).match(/(\w+)=([^&]+)/g),n=t&&t.reduce(function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e},{});window.options=n,w.play(n)}else w.hide()}document.querySelector("#top_button").addEventListener("click",function(){return w.show()}),document.querySelector("#icon-list").addEventListener("click",function(){return w.hide()}),b(),addEventListener("hashchange",b)}]);