setInterval(() => {
    const active = document.querySelector('.active')
    active.classList.add('leaving')
    setTimeout(() => {
        const slideContent = document.querySelector('.slide-content')
        active.remove()
        active.classList.remove('active', 'leaving')
        slideContent.appendChild(active)

        const next = slideContent.firstElementChild
        next.classList.add('active')
    }, 1000)
}, 3000)