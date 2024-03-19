const heroSec = document.querySelector('.hero');
if (heroSec) {
  // console.log(heroSec);
  document.documentElement.style.setProperty('--imgUrlHero', `url('${heroSec.dataset.url}')` );
  
}