! function () {
    fetch('./JSON/top.json')
        .then(res => res.json())
        .then(render)

    function render(json) {
        renderToplist(json.data.topList)
    }

    function renderToplist(Lists) {
        document.querySelector('.billbaord .top-item').innerHTML = Lists.map(List =>

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
                         ${songlist(List.songList)}
                    </div>
                </div>
            </div>
        `).join('')

        function songlist(songs) {
            return songs.map((song, i) =>
                `
            <p class="top-over">${i+1}<span>${song.songname}</span>- ${song.singername}</p>
            `).join('')
        }
    }
}.call()