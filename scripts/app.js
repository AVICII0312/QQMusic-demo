    import {Recommend} from './recommend.js'
    import { Toplist } from './toplist.js'
    import { Search } from './search.js'
    import { Player } from './play.js'
    import './tab.js'
    
    let recommend = new Recommend(document.querySelector('#recommend')).launch()
    let toplist = new Toplist(document.querySelector('#billbaord')).launch()
    let search = new Search(document.querySelector('#search-view'))
    let player = new Player(document.querySelector('#player'))
    
    document.querySelector('#top_button').addEventListener('click',()=>player.show())
    document.querySelector('#icon-list').addEventListener('click',()=>player.hide())
   
    onHashChange()
    addEventListener('hashchange',onHashChange)

    function onHashChange(){
        let hash = location.hash
        if(/^#player\?.+/.test(hash)){
            console.log(123)
            let matches = hash.slice(hash.indexOf('?') + 1).match(/(\w+)=([^&]+)/g)
            let options = matches && matches.reduce((res, cur) => {
                let arr = cur.split('=')
                res[arr[0]] = decodeURIComponent(arr[1])
                return res
              }, {})
           
            window.options = options 
            player.play(options)
        } else{
            player.hide()
        }
    }