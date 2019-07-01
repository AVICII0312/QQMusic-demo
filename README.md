# QQ音乐项目
[预览链接](超链接地址 "https://avicii0312.github.io/QQMusic-demo/index.html") 建议使用手机浏览器打开，pc端F12使用移动设备调试模式。
# 静态页面
项目为单页应用，css使用scss编写，并用node-sass编译
布局主要使用浮动、定位实现。响应式的部分用百分比和vh单位，细节用px单位微调。在大部分设备上都可以正常显示。
css3部分 懒加载滚动条旋转
# 功能分析
[TAB组件](超链接地址 "https://github.com/AVICII0312/QQMusic-demo/blob/master/scripts/tab.js")单页应用，3个选项卡。点击tab展示对应内容(原生js)
[轮播组件](超链接地址 "https://github.com/AVICII0312/QQMusic-demo/blob/master/scripts/viewpager.js") 简易轮播组件,利用父层的overflow:hidden属性通过包容层的移动实现轮播效果
[播放器组件](超链接地址 "https://github.com/AVICII0312/QQMusic-demo/blob/master/scripts/play.js") 歌曲时间自动匹配、时间进度条、播放页面背景自动匹配、歌词高亮
# 总结
项目初步使用了Es6实现,最后通过webpack打包js及css文件,由于api问题,目前播放功能无法正常使用,在找到合适解决办法后重整
