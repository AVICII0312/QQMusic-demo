import{ Lyrics } from'./lyr.js'
import { songUrl,lyricsUrl,albumCoverUrl} from './helpers.js'

export class Player {
    constructor(el){
        this.$el = el        
        this.$el.addEventListener('click',this)
        this.$progressbarGress = document.querySelector('#progressbarGress')
        this.$audio = this.createAudio()
        this.lyrics = new Lyrics(document.querySelector('#play-lyrics'),this.$audio)        
    }
    createAudio(){
        let audio = document.createElement('audio')
        document.body.appendChild(audio)
        return audio
    }
    handleEvent(event){
        let target = event.target
        switch(true){
            case target.matches('.icon-play'):
                this.onPlay(event)
                break
            case target.matches('.icon-pause'):
                this.onPause(event)
                break
        }
    }
    show(){
        this.$el.classList.add('show')
        document.body.classList.add('noscroll')
    }

    hide(){
        this.$el.classList.remove('show')
        document.body.classList.remove('noscroll')
    }
    onPlay(event){
        event.target.classList.add('icon-pause')
        event.target.classList.remove('icon-play')
        this.lyrics.start()
        this.play()
        clearInterval(this.statusClock)
        this.statusClock = setInterval(()=>{
            this.updataStatus()
        },1000)
    }
    onPause(event){
        event.target.classList.add('icon-play')
        event.target.classList.remove('icon-pause')
        this.lyrics.pause()
        this.$audio.pause()
        clearInterval(this.statusClock)
    }
    play(options){
        if(!options)return
        console.log(options)

        this.$el.querySelector('#song-name').innerText=options.songname
        this.$el.querySelector('#song-artist').innerText = options.artist

        let coverurl = albumCoverUrl(options.albummid)
        this.$el.querySelector('#song-cover').src = coverurl
        this.$el.querySelector('#play-backgruond').style.backgroundImage=`url(${coverurl})`

        this.songid = options.songid
        fetch(lyricsUrl(this.songid))
            .then(res => res.json())
            .then(json =>json.lyric)
            .then(text =>this.lyrics.reset(text))
               
        this.show()
        this.updataStatus()
        this.$audio.src = songUrl(this.songid)
    }
   
    updataStatus(options){
        let startTime = document.querySelector('#startTime')
        let endTime = document.querySelector('#endTime')
      /*    //播放时间
        let min = Math.floor(this.$audio.currentTime/60)
        let second = Math.floor(this.$audio.currentTime%60)+''
        min = min.length === 1 ? min : '0'+min
        second = second.length === 2 ? second : '0'+second
        this.$startTime.text(min+':'+second) */

        //歌曲时间
        console.log(endTime)
        let maxmin = Math.floor(window.options.duration/60)+''
        let maxsecond = Math.floor(window.options.duration%60)+''
        maxmin = maxmin.length === 2 ? maxmin : '0'+maxmin
        maxsecond = maxsecond.length === 2 ? maxsecond : '0'+maxsecond
        endTime.innerHTML = maxmin+':'+maxsecond

        //进度条
        this.$progressbarGress.style.width ='this.$audio.currentTime/this.$audio.duration*100+'%''
    }
    playimg(){
        this.$songCover = document.querySelector('#song-cover')
        this.$songCover.src= albumCoverUrl(options.albummid)
    }
}