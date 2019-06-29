! function () {
    fetch('https://qq-music-api.now.sh')
        .then(res => res.json())
        .then(render)

    function render(json) {
        renderviewpager(json.data.slider)
        renderRadio(json.data.radioList)
        lazyload(document.querySelectorAll('.lazyload'))
    }

    function renderviewpager(slides) {
        slides = slides.map(slide => {
            return {
                link: slide.linkUrl,
                image: slide.picUrl
            }
        })
        new Viewpager({
            el: document.querySelector('#viewpager'),
            viewpagers: slides
        })
    }

    function renderRadio(radios) {
        document.querySelector('.radios .list').innerHTML= radios.map(radio =>
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
    window.viewpager = viewpager

    document.querySelector('#top_button').addEventListener('click',()=>player.show())
    document.querySelector('#icon-list').addEventListener('click',()=>player.hide())
    let search = new Search(document.querySelector('#search-view'))
    let player = new Player(document.querySelector('#player'))

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
            player.play(options)
        } else{
            player.hide()
        }
    }
}.call()