let ul = document.querySelector('.dogs-list')

for(let dog of window.dogs) {
    let li = document.createElement('li')
    
    li.className = 'dogs-list__button'
    li.textContent = dog.name

    li.addEventListener('click', function() {
        document.querySelector('.main__dog-section')?.remove()

        let section = document.createElement('section')
        let main = document.getElementsByTagName('main')[0]
        main.append(section)

        section.className = 'main__dog-section'

        let h2 = document.createElement('h2')
        h2.textContent = dog.name
        section.append(h2)
    

        let img = document.createElement('img')
        img.setAttribute('src', dog.image)

        section.append(img)

        let div = document.createElement('div')
        div.className = 'main__dog-section__desc'

        let h3 = document.createElement('h3')
        h3.textContent = 'Bio'

        let p = document.createElement('p')
        p.textContent = dog.bio

        div.append(h3, p)

        let pEl = document.createElement('p')
        let em = document.createElement('em')
        em.textContent = 'Is naughty?'
        pEl.textContent = !dog.isGoodDog ? ' yes!' : ' no!'
        pEl.prepend(em)

        let button = document.createElement('button')
        button.className = 'main__dog-section__btn'
        button.textContent = dog.isGoodDog ? 'Good dog!' : 'Bad dog!'

        button.addEventListener('click', function() {
            if (dog.isGoodDog) {
                button.textContent = 'Bad dog!'
                pEl.textContent = ' yes!'
            } else {
                button.textContent = 'Good dog!'
                pEl.textContent = ' no!'
            }
        })

        section?.append(div, pEl, button)
    })

    ul.append(li)
}