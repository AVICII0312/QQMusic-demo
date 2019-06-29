const express = require ('express')
const request = require ('request-promise')

const app = express()
const HEADERS = {
    'Accept': 'application/json',
    'Referer': 'https://y.qq.com/m/index.html',
    'Origin': 'https://y.qq.com',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
}

app.get('/', async (req, res) => {
    const url = `https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1561183192950&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1`
    try {
        res.json(await request({
            uri: url,
            json: true,
            headers: HEADERS
        }))
    } catch (e) {
        res.json({
            error: e.message
        })
    }
})

app.get('/search', async (req, res) => {
    const { keyword, page = 1 } = req.query
    console.log(keyword)
    const url = `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?_=1561185609283&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=${encodeURIComponent(keyword)}&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=${page}&remoteplace=txt.mqq.all`
    try {
        res.json(await request({
            uri: url,
            json: true,
            headers: HEADERS
        }))
    } catch (e) {
        res.json({
            error: e.message
        })
    }
})

app.listen(8888)
// 首页 curl 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1561183192950&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1' -H 'Accept: application/json' -H 'Referer: https://y.qq.com/m/index.html' -H 'Origin: https://y.qq.com' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1' --compressed
// 排行榜 curl 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?_=1561183192954&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1' -H 'Accept: application/json' -H 'Referer: https://y.qq.com/m/index.html' -H 'Origin: https://y.qq.com' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1' --compressed
// 搜索 curl 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?_=1561184742031&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E6%9E%97%E4%BF%8A%E6%9D%B0&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all' -H 'Accept: application/json' -H 'Referer: https://y.qq.com/m/index.html' -H 'Origin: https://y.qq.com' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1' --compressed
//curl ' -H 'Accept: application/json' -H 'Referer: https://y.qq.com/m/index.html' -H 'Origin: https://y.qq.com' -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1' --compressed

//https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?_=1561185609283&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=${encodeURIComponent(keyword)}&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=${page}&remoteplace=txt.mqq.all
