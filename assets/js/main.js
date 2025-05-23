// Mudar fundo header
const scrollHeader = () =>{
    const header = document.getElementById('header')
    
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// scroll link ativos
const sections = document.querySelectorAll('section[id')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
          }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
          }
  })
}
window.addEventListener('scroll',scrollActive)

// dark light theme
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selecTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if(selecTheme){
  document.body.classList[selecTheme ==='dark' ? 'add' :'remove'] (lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add': 'remove'] (iconTheme)

}

themeButton.addEventListener('click',() => {
  // adiciona ou remove o theme
  document.body.classList.toggle(lightTheme)
  themeButton.classList.toggle(iconTheme)

  // salvar o theme
  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon',getCurrentIcon())
})