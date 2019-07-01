export class Viewpager {
    constructor(options = {}){        
        this.$el=options.el
        this.viewpagers = options.viewpagers
        this.interval = options.interval || 1000
        this.autoplay = options.autoplay || true
        this.index = 0
        this.render()
        this.start()
    }
    render(){
        this.$el.innerHTML = '<div class="viewpager-wrap"></div>'
        this.$wrap = this.$el.firstElementChild
        this.$wrap.style.width= `${this.viewpagers.length*100}%`
        this.$wrap.innerHTML=this.viewpagers.map(viewpager =>
            `
            <div class="viewpager-item">
                <a href="${viewpager.link}">
                    <img src="${viewpager.image}">
                </a>
            </div>
            `
            ).join('')
    }
    start(){
        setInterval(this.next.bind(this),this.interval)
    }
    next(){
        this.index +=1
        if(this.index === this.viewpagers.length){
            this.$wrap.style.transform = `translate(0)`
            this.index =0
        }
        let aaa = `-${this.index*100/this.viewpagers.length}%`
        this.$wrap.style.transform = `translate(${aaa})`
    }
}
