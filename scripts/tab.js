import {lazyload} from './lazyload.js'
document.addEventListener('click', function (event) {
    let target = event.target
    
    if (target.dataset.role !== 'tab') return

    [].forEach.call(target.parentElement.children, tab => {
        tab.classList.remove('current')
    })
    target.classList.add('current')

    let content = document.querySelector(target.dataset.view)
    if (content) {
        [].forEach.call(content.parentElement.children, child => {
            child.style.display = 'none'
        })
        content.style.display = 'block'
    }
    lazyload(document.querySelectorAll('.lazyload'))
})