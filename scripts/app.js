! function () {
    fetch('./JSON/rec.json')
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
}.call()