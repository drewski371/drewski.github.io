setInterval(() => {
    const inView = document.querySelector('#in-view')
    const onDeck = document.querySelector('#on-deck')
    inView.classList.add('hidden', 'out')
    onDeck.classList.remove('hidden')
    onDeck.classList.add('in')
    // setTimeout(() => {
    //     inView.classList.remove('out')
    //     onDeck.classList.remove('in')
    //     onDeck.classList.add('hidden')
    // }, 600)
}, 2000);