window.addEventListener('load', () => {
    const inputFilter = document?.querySelector('#filter')

    function handleFilterArticles(type) {
        const cards = document?.querySelectorAll('.cards li')
        const arrayCards = Array.from(cards)
    
        if(type !== "") {
            const filterCards = arrayCards.find((card) => card.childNodes[1].childNodes[3].innerHTML.toLowerCase() === type.currentTarget.value.toLowerCase().trim())
            if(filterCards) {
                arrayCards.forEach((card) => card.classList.add('hide'))
                filterCards.classList.remove('hide')
            }
    
            if(type.currentTarget.value === "") {
                arrayCards.forEach((card) => card.classList.remove('hide'))
            }
        }
    }
    
    inputFilter?.addEventListener('input', handleFilterArticles)
})

