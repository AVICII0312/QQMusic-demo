import {Viewpager} from './viewpager.js'
import {RECOMMEND_URL} from './constants.js'
import {lazyload} from'./lazyload.js'
export class Recommend{
    constructor(el){
        this.$el = el 
    }
    launch(){
        console.log(RECOMMEND_URL)
        fetch(RECOMMEND_URL)
        .then(res => res.json())
        .then(json => this.json = json)
        .then(()=> this.render())
        return this
    }
    render(){
        this.renderviewpager(this.json.data.slider)
        this.renderRadio(this.json.data.radioList)
        lazyload(document.querySelectorAll('.lazyload'))
    }
    renderviewpager(slides){
        new Viewpager({
            el: document.querySelector('#viewpager'),
            viewpagers: slides.map(slide => {return {link: slide.linkUrl,image: slide.picUrl}})
        })
    }
    renderRadio(radios){
        this.$el.querySelector('.radios .list').innerHTML= radios.map(radio =>
            `
            <div class=" list-item">
                <a href="">
                    <div class="list-media">
                        <img class="lazyload" data-src="${radio.picUrl}">
                        <span class="icon-play"></span>
                    </div>
                    <div class=" list-info">
                        <h3>${radio.Ftitle}</h3>
                    </div>
                </a>
            </div>`).join('')
    }
}