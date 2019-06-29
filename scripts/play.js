class Player {
    constructor(el){
        this.$el = el
        this.$playIcon = this.$el.querySelector('.icon-action')
        this.$el.addEventListener('click',this)
        this.$startTime = document.querySelector('#startTime')
        this.$endTime = document.querySelector('#endTime')
        this.$progressbarGress = document.querySelector('#progressbarGress')
        this.createAudio()
        
    }
    createAudio(){
        this.$audio = new Audio()
        
        this.$audio.autoplay = true
    }
    handleEvent(event){
        let target = event.target
        switch(true){
            case target.matches('.icon-play'):
                this.onPlay(event)
                break
            case target.matches('.icon-pause'):
                this.onPause(event)
                console.log(2)
                break
        }
    }
    show(){
        this.$el.classList.add('show')
    }

    hide(){
        this.$el.classList.remove('show')
    }
    onPlay(event){
        event.target.classList.add('icon-pause')
        event.target.classList.remove('icon-play')
        console.log(11)
        this.play()
    }
    onPause(event){
        event.target.classList.add('icon-play')
        event.target.classList.remove('icon-pause')
        this.$audio.pause()
    }
    play(options){
        if(!options)return
        console.log(options)

        this.$el.querySelector('#song-name').innerText=options.songname
        this.$el.querySelector('#song-artist').innerText = options.artist

        let coverurl = `https://y.gtimg.cn/music/photo_new/T002R150x150M000${options.albummid}.jpg`
        this.$el.querySelector('#song-cover').src = coverurl
        this.$el.querySelector('#play-backgruond').style.backgroundImage=`url(${coverurl})`

        this.songid = options.songid
        this.$audio.src = `http://ws.stream.qqmusic.qq.com/C100${this.songid}.m4a?fromtag=0&guid=126548448`
        
        console.log(coverurl)
        console.log(options)
        console.log(this.$audio)
        this.show()
    }
    updataStatus(){
         //播放时间
        this.min = Math.floor(this.$audio.currentTime/60)
        this.second = Math.floor(this.$audio.currentTime%60)+''
        min = min.length === 1 ? min : '0'+min
        second = second.length === 2 ? second : '0'+second

        //歌曲时间
        this.maxmin = Math.floor(this.$audio.duration/60)
        this.maxsecond = Math.floor(this.$audio.duration%60)+''
        maxmin = min.length === 1 ? min : '0'+min
        maxsecond = second.length === 2 ? second : '0'+second

        //进度条
        this.$progressbarGress.style.width ='this.$audio.currentTime/this.$audio.duration*100+'%''
    }
    playimg(){
        this.$songCover = document.querySelector('#song-cover')
        this.$songCover.src="https://y.gtimg.cn/music/photo_new/T002R150x150M000004AhJHV3slLjN.jpg"
    }
}