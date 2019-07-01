import { lazyload } from './lazyload.js'
import { TOPLIST_URL } from './constants.js'

export class Toplist {
    constructor(el) {
        this.$el = el
    }
    launch() {
        fetch(TOPLIST_URL)
            .then(res => res.json())
            .then(json => this.render(json.data.topList))
        return this
    }
    render(Lists) {
        this.$el.querySelector('.billbaord .top-item').innerHTML = Lists.map(List =>

            `<div class="top-list">
                    <div class="top-media">
                        <img class="lazyload" data-src="${List.picUrl}">
                        <span>
                            <i></i>${(List.listenCount/10000).toFixed(1)}万
                        </span>
                    </div>
                    <div class="top-info">
                        <div class="top-cont top-over">
                             <h3 class="top-over">${List.topTitle}</h3>
                             ${this.songlist(List.songList)}
                        </div>
                    </div>
                </div>
            `).join('')
        lazyload(this.$el.querySelectorAll('.lazyload'))
    }

    songlist(songs) {
        return songs.map((song, i) =>
            `
            <p class="top-over">${i+1}<span>${song.songname}</span>- ${song.singername}</p>
            `).join('')
    }
}