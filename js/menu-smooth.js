/**************** EFEITO SMOOTH ******************/
/* referência: https://www.youtube.com/watch?v=tzbpAqb2Wjc&list=PL9CORE-sK1iRb_jYpz2kaadaGaZ_-PDcg&index=2&t=0s
 * Adaptado de última hora para Paradoxo Grafite http://paradoxografite.com.br/
 * Por Eduardo Costa https://github.com/eduardocostaprofessor
*/

const menuItems = document.querySelectorAll('header nav a[href^="#"]');
document.querySelector('#go-top').addEventListener('click', scrollToIdOnClick)

let mostra = true

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
	// window.scroll({
	// top: to,
	// behavior: "smooth",
  // })
  if ( window.screen.width < 992 ) {
    
    let navPosition = document.querySelector('nav').offsetLeft
    if (navPosition === 0) {
      document.querySelector('header label').click()
    }
    
    
  }
  smoothScrollTo(0, to);
  
  setTimeout(function () {
    
    mostraEscondeIcone()
  }, 500)

}

function mostraEscondeIcone() {
  const el = document.querySelector('#go-top')
  
  el.style.opacity = mostra ? 1 : 0
  mostra = !mostra
  
}


function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget);//- 80
  scrollToPosition(to);
  
}

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
    * @param {int} duration: animation duration in ms
    */
   function smoothScrollTo(endX, endY, duration) {
     const startX = window.scrollX || window.pageXOffset;
     const startY = window.scrollY || window.pageYOffset;
     const distanceX = endX - startX;
     const distanceY = endY - startY;
     const startTime = new Date().getTime();
   
     duration = typeof duration !== 'undefined' ? duration : 1500;
   
     // Easing function
     const easeInOutQuart = (time, from, distance, duration) => {
       if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
       return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
     };
   
     const timer = setInterval(() => {
       const time = new Date().getTime() - startTime;
       const newX = easeInOutQuart(time, startX, distanceX, duration);
       const newY = easeInOutQuart(time, startY, distanceY, duration);
       if (time >= duration) {
         clearInterval(timer);
       }
       window.scroll(newX, newY);
     }, 1000 / 60); // 60 fps
   };
   
menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
    console.log('função rodando');
    
});