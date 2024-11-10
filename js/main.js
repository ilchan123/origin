// header를 페이지 아래로 스크롤시 스타일링 적용
const header = document.querySelector('.header')
// 요소의 총 높이
const headerHeight = header.offsetHeight
// console.log(headerHeight)
document.addEventListener('scroll', ()=>{
    if(window.scrollY>headerHeight){
        console.log(window.scrollY)
        header.classList.add('header--dark')
    }else{
        header.classList.remove('header--dark')
    }
})

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container')
const homeHeight = home.offsetHeight
document.addEventListener('scroll', ()=>{
    console.log(homeHeight)
    home.style.opacity = 1 - window.scrollY / homeHeight
})


// Arrow up 버튼을 아래로 스코롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight / 2){
        arrowUp.style.opacity = 1
    }else{
        arrowUp.style.opacity = 0
    }
})

// Navbar 토글버튼 클릭 처리 
const navbarMenu = document.querySelector('.header__menu')
const navbarToggle = document.querySelector('.header__toggle')
navbarToggle.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open')
})


// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click',()=>{
    navbarMenu.classList.toggle('close')
})

 
let lastScrollTop = 0;
document.addEventListener('wheel', (event) => {
    const sections = document.querySelectorAll('section'); // 모든 섹션 선택
    const deltaY = event.deltaY;

    if (deltaY > 0) { // 아래로 스크롤할 때
        const nextSection = [...sections].find((section) => {
            return section.getBoundingClientRect().top > 0;
        });

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault(); // 기본 스크롤 방지
        }
    } else { // 위로 스크롤할 때
        const prevSection = [...sections].reverse().find((section) => {
            return section.getBoundingClientRect().top < window.innerHeight;
        });

        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault(); // 기본 스크롤 방지
        }
    }
});
