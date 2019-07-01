import {searchUrl} from './helpers.js'
export class Search{
    constructor(el){
        this.$el = el
        this.$input = this.$el.querySelector('#search-input')
        this.$input.addEventListener('keyup',this.onKeyup.bind(this))
        this.$song_List = document.querySelector('#song-list')
        this.keyword=''
        this.page = 1
        this.perpage = 20
        this.songs = {}
        
        this.nomore = false
        this.fetching = false
        this.onscroll = this.onScroll.bind(this)        
    }
    onKeyup(event){
        let keyword = event.target.value.trim()
        if(!keyword) return this.reset()
        if(event.key !='Enter') return 
        this.search(keyword)
        window.addEventListener('scroll',this.onscroll)
    }
    reset(){
        this.page = 1
        this.keyword = ''
        this.songs = {}
        
        this.nomore =false
        this.$song_List.innerHTML = ``
    }
    onScroll(event){
        if(this.nomore) return window.removeEventListener('scroll', this.onscroll)
        if(document.documentElement.clientHeight + pageYOffset > document.body.scrollHeight-50){
            this.search(this.keyword,this.page+1)
        }
    }
    search(keyword,page){ 
        if(this.fetching) return  
        console.log(1)     
        this.keyword = keyword
        this.fetching = true
        fetch(searchUrl(this.keyword, page || this.page))
        .then(res=>res.json())
        .then(json=>{
            this.page = json.data.song.curpage            
            this.songs[this.page] = json.data.song.list
            
            this.nomore = (json.message === 'no results')
            return json.data.song.list
           
        })
       
        .then(songs=> this.appendList(songs))
        .then(()=>this.fetching = false)
        .catch(()=>this.fetching= false)
    }
    appendList(songs){
        console.log(songs)
        let html = songs.map(song => `
        <a href=
        "#player?artist=${song.singer[0].name}&songid=${song.songid}&songname=${song.songname}&albummid=${song.albummid}&duration=${song.interval}">
        <i class="cont-icon"></i>
        <h6 class="song-tit">${song.songname}</h6>
        <p class="singer-tit">${song.singer.map(s=>s.name).join('')}</p>
    </a>
        `).join('')
        this.$song_List.insertAdjacentHTML('beforeend', html)
        
    }
}
