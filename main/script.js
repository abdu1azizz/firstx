let navbar = document.getElementById('navbar');
let screel = document.querySelector('.screll')
let cazuy = document.querySelector('.cazuy')
let heightNav = navbar.offsetHeight;
let Child = document.querySelector('.Child');
function push(){
        navbar.classList.add('fixed');
        navbar.style.opacity = 1;
        navbar.style.zIndex = 99;
        cazuy.style.opacity = 0;
}
function scroool(){
        document.addEventListener('DOMContentLoaded', ()=>{
            window.addEventListener('scroll', ()=>{
                if(window.scrollY >= heightNav - 52) {
                    navbar.classList.remove('fixed')
                    navbar.style.opacity = 0;
                    navbar.style.position = 'fixed';
                    navbar.style.zIndex = -99;
                    Child.classList.add('marCh');
                    cazuy.style.opacity = 1;
                    cazuy.style.position = 'fixed';
                    
                }else{
                    navbar.style.position = 'sticky'
                    navbar.style.opacity = 1
                    navbar.style.zIndex = 99;
                    Child.classList.remove('marCh')
                    cazuy.style.position = 'absolute';
                    cazuy.style.opacity = 0
                }
            })
        })
}
scroool()
document.addEventListener('DOMContentLoaded', function () {
        const starRatingElements = document.querySelectorAll('.star-rating');
      
        starRatingElements.forEach(starRatingElement => {
          const stars = starRatingElement.querySelectorAll('.star');
      
          stars.forEach((star, index) => {
            star.addEventListener('click', () => {
              const ratingValue = index + 1;
              starRatingElement.setAttribute('data-rating', ratingValue);
              resetStars(stars);
              highlightStars(stars, ratingValue);
            });
      
            star.addEventListener('mouseover', () => {
              const ratingValue = index + 1;
              highlightStars(stars, ratingValue);
            });
      
            star.addEventListener('mouseout', () => {
              const currentRating = parseInt(starRatingElement.getAttribute('data-rating'));
              highlightStars(stars, currentRating);
            });
          });
        });
      
        function highlightStars(stars, count) {
          stars.forEach((star, index) => {
            star.classList.toggle('active', index < count);
          });
        }
      
        function resetStars(stars) {
          stars.forEach(star => {
            star.classList.remove('active');
          });
        }
});
let swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
          nextEl: ".swiper-buttonn-next",
          prevEl: ".swiper-buttonn-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
          },
});
document.querySelector('.closee').addEventListener('click', () => {
        const kopgap = document.querySelector('.kopgap')
        const tpPheight = document.querySelector('.tprod');
        const closeBtn = document.querySelector('.closee')
        const textBtn = document.querySelector('.textBtn');
        const imgBtn = document.querySelector('.imgBtn');
        const otaa = document.querySelector('.otaa');
        if(tpPheight.style.height !== '130px'){
            tpPheight.style.height = '130px';
            closeBtn.style.transform = 'translateY(-210px)';
            kopgap.style.transform = 'translateY(-220px)'
            setTimeout(() => {
                textBtn.innerHTML = 'Показать всё';
                imgBtn.classList.add('rotate')
                otaa.style.transform = 'translateX(-400px)'
            }, 3200)
        }else{
            tpPheight.style.height = '325px'
            closeBtn.style.transform = 'translateY(0px)'
            otaa.style.transform = 'translateX(0px)'
            kopgap.style.transform = 'translateY(0px)'
            setTimeout(() =>{
                textBtn.innerHTML = 'Закрыть';
                imgBtn.classList.remove('rotate')
            },3200)
        }
})
document.querySelector('.closee1').addEventListener('click', () => {
        const kopgap1 = document.querySelector('.kopgap1')
        const tpPheight1 = document.querySelector('.tprod1');
        const closeBtn1 = document.querySelector('.closee1')
        const textBtn1 = document.querySelector('.textBtn1');
        const imgBtn1 = document.querySelector('.imgBtn1');
        const otaa1 = document.querySelector('.otaa1');
    
        if(tpPheight1.style.height !== '130px'){
            tpPheight1.style.height = '130px';
            closeBtn1.style.transform = 'translateY(-210px)';
            kopgap1.style.transform = 'translateY(-220px)'
            setTimeout(() =>{
                textBtn1.innerHTML = 'Показать всё';
                imgBtn1.classList.add('rotate')
                otaa1.style.transform = 'translateX(-400px)'
            },3200)
        }else{
            tpPheight1.style.height = '325px'
            closeBtn1.style.transform = 'translateY(0px)'
            otaa1.style.transform = 'translateX(0px)'
            kopgap1.style.transform = 'translateY(0px)'
            setTimeout(() =>{
                textBtn1.innerHTML = 'Закрыть';
                imgBtn1.classList.remove('rotate')
            },3200)
        }
})
document.querySelector('.closee2').addEventListener('click', () => {
        const kopgap2 = document.querySelector('.kopgap2')
        const tpPheight2 = document.querySelector('.tprod2');
        const closeBtn2 = document.querySelector('.closee2')
        const textBtn2 = document.querySelector('.textBtn2');
        const imgBtn2 = document.querySelector('.imgBtn2');
        const otaa2 = document.querySelector('.otaa2');
    
        if(tpPheight2.style.height !== '130px'){
            tpPheight2.style.height = '130px';
            closeBtn2.style.transform = 'translateY(-210px)';
            kopgap2.style.transform = 'translateY(-220px)'
            setTimeout(() =>{
                textBtn2.innerHTML = 'Показать всё';
                imgBtn2.classList.add('rotate')
                otaa2.style.transform = 'translateX(-400px)'
            },3200)
        }else{
            tpPheight2.style.height = '325px'
            closeBtn2.style.transform = 'translateY(0px)'
            otaa2.style.transform = 'translateX(0px)'
            kopgap2.style.transform = 'translateY(0px)'
            setTimeout(() =>{
                textBtn2.innerHTML = 'Закрыть';
                imgBtn2.classList.remove('rotate')
            },3200)
        }
})
document.querySelector('.closee3').addEventListener('click', () => {
        const kopgap3 = document.querySelector('.kopgap3')
        const tpPheight3 = document.querySelector('.tprod3');
        const closeBtn3 = document.querySelector('.closee3')
        const textBtn3 = document.querySelector('.textBtn3');
        const imgBtn3 = document.querySelector('.imgBtn3');
        const otaa3 = document.querySelector('.otaa3');
    
        if(tpPheight3.style.height !== '130px'){
            tpPheight3.style.height = '130px';
            closeBtn3.style.transform = 'translateY(-210px)';
            kopgap3.style.transform = 'translateY(-220px)'
            setTimeout(() =>{
                textBtn3.innerHTML = 'Показать всё';
                imgBtn3.classList.add('rotate')
                otaa3.style.transform = 'translateX(-400px)'
            },3200)
        }else{
            tpPheight3.style.height = '325px'
            closeBtn3.style.transform = 'translateY(0px)'
            otaa3.style.transform = 'translateX(0px)'
            kopgap3.style.transform = 'translateY(0px)'
            setTimeout(() =>{
                textBtn3.innerHTML = 'Закрыть';
                imgBtn3.classList.remove('rotate')
            },3200)
        }
})
document.querySelector('.closee4').addEventListener('click', () => {
        const kopgap4 = document.querySelector('.kopgap4')
        const tpPheight4 = document.querySelector('.tprod4');
        const closeBtn4 = document.querySelector('.closee4')
        const textBtn4 = document.querySelector('.textBtn4');
        const imgBtn4 = document.querySelector('.imgBtn4');
        const otaa4 = document.querySelector('.otaa4');
    
        if(tpPheight4.style.height !== '130px'){
            tpPheight4.style.height = '130px';
            closeBtn4.style.transform = 'translateY(-210px)';
            kopgap4.style.transform = 'translateY(-220px)'
            setTimeout(() =>{
                textBtn4.innerHTML = 'Показать всё';
                imgBtn4.classList.add('rotate')
                otaa4.style.transform = 'translateX(-400px)'
            },3200)
        }else{
            tpPheight4.style.height = '325px'
            closeBtn4.style.transform = 'translateY(0px)'
            otaa4.style.transform = 'translateX(0px)'
            kopgap4.style.transform = 'translateY(0px)'
            setTimeout(() =>{
                textBtn4.innerHTML = 'Закрыть';
                imgBtn4.classList.remove('rotate')
            },3200)
        }
})
document.querySelector('.closee5').addEventListener('click', () => {
        const kopgap4 = document.querySelector('.kopgap5')
        const tpPheight4 = document.querySelector('.tprod5');
        const closeBtn4 = document.querySelector('.closee5')
        const textBtn4 = document.querySelector('.textBtn5');
        const imgBtn4 = document.querySelector('.imgBtn5');
        const otaa4 = document.querySelector('.otaa5');
    
        if(tpPheight4.style.height !== '130px'){
            tpPheight4.style.height = '130px';
            closeBtn4.style.transform = 'translateY(-210px)';
            kopgap4.style.transform = 'translateY(-220px)'
            setTimeout(() =>{
                textBtn4.innerHTML = 'Показать всё';
                imgBtn4.classList.add('rotate')
                otaa4.style.transform = 'translateX(-400px)'
            },3200)
        }else{
            tpPheight4.style.height = '325px'
            closeBtn4.style.transform = 'translateY(0px)'
            otaa4.style.transform = 'translateX(0px)'
            kopgap4.style.transform = 'translateY(0px)'
            setTimeout(() =>{
                textBtn4.innerHTML = 'Закрыть';
                imgBtn4.classList.remove('rotate')
            },3200)
        }
})
document.querySelector('.closee6').addEventListener('click', () => {
        const kopgap4 = document.querySelector('.kopgap6')
        const tpPheight4 = document.querySelector('.tprod6');
        const closeBtn4 = document.querySelector('.closee6')
        const textBtn4 = document.querySelector('.textBtn6');
        const imgBtn4 = document.querySelector('.imgBtn6');
        const otaa4 = document.querySelector('.otaa6');
    
        if(tpPheight4.style.height !== '130px'){
            tpPheight4.style.height = '130px';
            closeBtn4.style.transform = 'translateY(-210px)';
            kopgap4.style.transform = 'translateY(-220px)'
            setTimeout(() =>{
                textBtn4.innerHTML = 'Показать всё';
                imgBtn4.classList.add('rotate')
                otaa4.style.transform = 'translateX(-400px)'
            },3200)
        }else{
            tpPheight4.style.height = '325px'
            closeBtn4.style.transform = 'translateY(0px)'
            otaa4.style.transform = 'translateX(0px)'
            kopgap4.style.transform = 'translateY(0px)'
            setTimeout(() =>{
                textBtn4.innerHTML = 'Закрыть';
                imgBtn4.classList.remove('rotate')
            },3200)
        }
})
document.querySelector('.closee7').addEventListener('click', () => {
        const kopgap4 = document.querySelector('.kopgap7')
        const tpPheight4 = document.querySelector('.tprod7');
        const closeBtn4 = document.querySelector('.closee7')
        const textBtn4 = document.querySelector('.textBtn7');
        const imgBtn4 = document.querySelector('.imgBtn7');
        const otaa4 = document.querySelector('.otaa7');
    
        if(tpPheight4.style.height !== '130px'){
            tpPheight4.style.height = '130px';
            closeBtn4.style.transform = 'translateY(-210px)';
            kopgap4.style.transform = 'translateY(-220px)'
            setTimeout(() =>{
                textBtn4.innerHTML = 'Показать всё';
                imgBtn4.classList.add('rotate')
                otaa4.style.transform = 'translateX(-400px)'
            },3200)
        }else{
            tpPheight4.style.height = '325px'
            closeBtn4.style.transform = 'translateY(0px)'
            otaa4.style.transform = 'translateX(0px)'
            kopgap4.style.transform = 'translateY(0px)'
            setTimeout(() =>{
                textBtn4.innerHTML = 'Закрыть';
                imgBtn4.classList.remove('rotate')
            },3200)
        }
})
document.querySelector('.closee8').addEventListener('click', () => {
        const kopgap4 = document.querySelector('.kopgap8')
        const tpPheight4 = document.querySelector('.tprod8');
        const closeBtn4 = document.querySelector('.closee8')
        const textBtn4 = document.querySelector('.textBtn8');
        const imgBtn4 = document.querySelector('.imgBtn8');
        const otaa4 = document.querySelector('.otaa8');
    
        if(tpPheight4.style.height !== '130px'){
            tpPheight4.style.height = '130px';
            closeBtn4.style.transform = 'translateY(-210px)';
            kopgap4.style.transform = 'translateY(-220px)'
            setTimeout(() =>{
                textBtn4.innerHTML = 'Показать всё';
                imgBtn4.classList.add('rotate')
                otaa4.style.transform = 'translateX(-400px)'
            },3200)
        }else{
            tpPheight4.style.height = '325px'
            closeBtn4.style.transform = 'translateY(0px)'
            otaa4.style.transform = 'translateX(0px)'
            kopgap4.style.transform = 'translateY(0px)'
            setTimeout(() =>{
                textBtn4.innerHTML = 'Закрыть';
                imgBtn4.classList.remove('rotate')
            },3200)
        }
})
let swipeer = new Swiper(".mySwipera", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
          },
});
let swipzer = new Swiper(".mySwiperdS", {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
            delay: 5700,
            disableOnInteraction: false,
          },
          breakpoints: {
            426: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            350: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
});
ymaps.ready(init);
function init(){
        let myMap = new ymaps.Map("map", {
            center: [38.8583, 65.7914], // пример для Москвы
            zoom: 15
        });
        let myPlacemark = new ymaps.Placemark([38.8583, 65.7914], {
            hintContent: 'Карши',
            balloonContent: 'город Карши'
        });
        myMap.geoObjects.add(myPlacemark);
}
ymaps.ready(init1);
function init1(){
        let myMap = new ymaps.Map("map1", {
            center: [38.8583, 65.7914],
            zoom: 15
        });
        let myPlacemark = new ymaps.Placemark([38.8583, 65.7914], {
            hintContent: 'Карши',
            balloonContent: 'город Карши'
        });
        myMap.geoObjects.add(myPlacemark);
}
// let swipaer = new Swiper(".mySwipeqrr", {
//     slidesPerView: 4,
//     spaceBetween: 10,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     autoplay: {
//         delay: 5700,
//         disableOnInteraction: false,
//       },
// });


document.querySelector('.logo').addEventListener('click', () => {
    document.getElementById('okompan').style.color = 'black'
    document.getElementById('dostav').style.color = 'black';
    document.getElementById('oplataaa').style.color = 'black';
    document.getElementById('contacs').style.color = 'black';
    if(document.querySelector('.none').style.display !== 'flex'){
        document.querySelector('.loaderr').style.width = '100%'
        document.querySelector('.loaderr').style.opacity = '1'
    }else{
        document.querySelector('.loaderr').style.opacity = '0'
        document.querySelector('.loaderr').style.width = '0%'
    }
    setTimeout(() => {
        document.querySelector('.none').style.display = 'flex';
        window.scrollTo(0, 0)
        document.querySelector('.oplata').style.display = 'none';
        document.getElementById('dosik').style.display = 'none'
        document.querySelector('.onas').style.display = 'none';
        document.querySelector('.loaderr').style.opacity = '0'
        document.querySelector('.loaderr').style.width = '0%'
    }, 2250)
})
document.getElementById('okompan').addEventListener('click', () => {
    document.getElementById('okompan').style.color = '#3697E2'
    document.getElementById('dostav').style.color = 'black';
    document.getElementById('oplataaa').style.color = 'black';
    document.getElementById('contacs').style.color = 'black';
    if( document.querySelector('.onas').style.display !== 'flex'){
        document.querySelector('.loaderr').style.width = '100%'
        document.querySelector('.loaderr').style.opacity = '1'
    }else{
        document.querySelector('.loaderr').style.opacity = '0'
        document.querySelector('.loaderr').style.width = '0%'
    }
    setTimeout(() => {
        document.querySelector('.onas').style.display = 'flex';
        window.scrollTo(0, 0)
        document.querySelector('.none').style.display = 'none'
        document.getElementById('dosik').style.display = 'none'
        document.querySelector('.oplata').style.display = 'none';
        document.querySelector('.contacts').style.display = 'none'
        document.querySelector('.loaderr').style.opacity = '0'
        document.querySelector('.loaderr').style.width = '0%'
    },2250)
})
document.getElementById('dostav').addEventListener('click', () => {
    document.getElementById('dostav').style.color = '#3697E2';
    document.getElementById('okompan').style.color = 'black'
    document.getElementById('oplataaa').style.color = 'black';
    document.getElementById('contacs').style.color = 'black';
    if( document.getElementById('dosik').style.display !== 'flex'){
        document.querySelector('.loaderr').style.width = '100%'
        document.querySelector('.loaderr').style.opacity = '1'
    }else{
        document.querySelector('.loaderr').style.opacity = '0'
        document.querySelector('.loaderr').style.width = '0%'
    }
    setTimeout(() => {
        window.scrollTo(0, 0)
        document.getElementById('dosik').style.display = 'flex'
        document.querySelector('.none').style.display = 'none';
        document.querySelector('.onas').style.display = 'none';
        document.querySelector('.oplata').style.display = 'none';
        document.querySelector('.contacts').style.display = 'none'
        document.querySelector('.loaderr').style.opacity = '0'
        document.querySelector('.loaderr').style.width = '0%'
    },2250)
})
document.getElementById('oplataaa').addEventListener('click', () => {
    document.getElementById('oplataaa').style.color = '#3697E2';
    document.getElementById('dostav').style.color = 'black';
    document.getElementById('okompan').style.color = 'black'
    document.getElementById('contacs').style.color = 'black';
    if( document.querySelector('.oplata').style.display !== 'flex'){
        document.querySelector('.loaderr').style.width = '100%'
        document.querySelector('.loaderr').style.opacity = '1'
    }else{
        document.querySelector('.loaderr').style.opacity = '0'
        document.querySelector('.loaderr').style.width = '0%'
    }
    setTimeout(() => {
        document.querySelector('.oplata').style.display = 'flex';
        window.scrollTo(0, 0);
        document.querySelector('.none').style.display = 'none'
        document.getElementById('dosik').style.display = 'none'
        document.querySelector('.onas').style.display = 'none';
        document.querySelector('.contacts').style.display = 'none'
        document.querySelector('.loaderr').style.opacity = '0'
        document.querySelector('.loaderr').style.width = '0%'
    },2250)
})
document.getElementById('contacs').addEventListener('click', () => {
    document.getElementById('contacs').style.color = '#3697E2';
    document.getElementById('oplataaa').style.color = 'black';
    document.getElementById('dostav').style.color = 'black';
    document.getElementById('okompan').style.color = 'black'
    if( document.querySelector('.contacts').style.display !== 'flex'){
        document.querySelector('.loaderr').style.width = '100%'
        document.querySelector('.loaderr').style.opacity = '1'
    }else{
        document.querySelector('.loaderr').style.opacity = '0'
        document.querySelector('.loaderr').style.width = '0%'
    }
    setTimeout(()=>{
        document.querySelector('.contacts').style.display = 'flex'
        window.scrollTo(0, 0)
        document.querySelector('.none').style.display = 'none'
        document.querySelector('.oplata').style.display = 'none';
        document.getElementById('dosik').style.display = 'none'
        document.querySelector('.onas').style.display = 'none';
        document.querySelector('.loaderr').style.opacity = '0'
        document.querySelector('.loaderr').style.width = '0%'
    },2250)
})
document.querySelector('.BtnREc').addEventListener('click', () =>{
    document.querySelector('.BtnREc').classList.add('btnaCDS');
    document.querySelector('.BtnNEw').classList.remove('btnaCDS')
    document.querySelector('.samiy').classList.remove('btnaCDS')
    document.querySelector('.skyy').classList.remove('btnaCDS')
    document.querySelector('.BtnREc').style.color = 'white'
    document.querySelector('.BtnNEw').style.color = '#9A9C9E'
    document.querySelector('.samiy').style.color = '#9A9C9E'
    document.querySelector('.skyy').style.color = '#9A9C9E'
    document.querySelector('.RecPRMain').style.opacity = 0
    document.querySelector('.RecPRMain').style.transition = '0s'
    setTimeout(()=>{
        document.querySelector('.RecPRMain').style.transition = '2s'
        document.querySelector('.RecPRMain').style.opacity = 1;
    },1200)
})
document.querySelector('.BtnNEw').addEventListener('click', () => {
    document.querySelector('.BtnNEw').classList.add('btnaCDS')
    document.querySelector('.BtnREc').classList.remove('btnaCDS');
    document.querySelector('.samiy').classList.remove('btnaCDS');
    document.querySelector('.skyy').classList.remove('btnaCDS');
    document.querySelector('.BtnNEw').style.color = 'white'
    document.querySelector('.BtnREc').style.color = '#9A9C9E'
    document.querySelector('.samiy').style.color = '#9A9C9E'
    document.querySelector('.skyy').style.color = '#9A9C9E'
    document.querySelector('.RecPRMain').style.opacity = 0
    document.querySelector('.RecPRMain').style.transition = '0s'
    setTimeout(()=>{
        document.querySelector('.RecPRMain').style.transition = '2s'
        document.querySelector('.RecPRMain').style.opacity = 1;
    },1200)
})
document.querySelector('.samiy').addEventListener('click', () => {
    document.querySelector('.samiy').classList.add('btnaCDS')
    document.querySelector('.BtnNEw').classList.remove('btnaCDS');
    document.querySelector('.BtnREc').classList.remove('btnaCDS');
    document.querySelector('.skyy').classList.remove('btnaCDS');
    document.querySelector('.samiy').style.color = 'white'
    document.querySelector('.BtnREc').style.color = '#9A9C9E'
    document.querySelector('.BtnNEw').style.color = '#9A9C9E'
    document.querySelector('.skyy').style.color = '#9A9C9E'
    document.querySelector('.RecPRMain').style.opacity = 0
    document.querySelector('.RecPRMain').style.transition = '0s'
    setTimeout(()=>{
        document.querySelector('.RecPRMain').style.transition = '2s'
        document.querySelector('.RecPRMain').style.opacity = 1;
    },1200)
})
document.querySelector('.skyy').addEventListener('click', () => {
    document.querySelector('.skyy').classList.add('btnaCDS')
    document.querySelector('.BtnNEw').classList.remove('btnaCDS');
    document.querySelector('.BtnREc').classList.remove('btnaCDS');
    document.querySelector('.samiy').classList.remove('btnaCDS');
    document.querySelector('.skyy').style.color = 'white'
    document.querySelector('.BtnREc').style.color = '#9A9C9E'
    document.querySelector('.BtnNEw').style.color = '#9A9C9E'
    document.querySelector('.samiy').style.color = '#9A9C9E'
    document.querySelector('.RecPRMain').style.opacity = 0
    document.querySelector('.RecPRMain').style.transition = '0s'
    setTimeout(()=>{
        document.querySelector('.RecPRMain').style.transition = '2s'
        document.querySelector('.RecPRMain').style.opacity = 1;
    },1200)
})
function ismTek() {
    let nameInput = document.getElementById("ism");
    let nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (!nameRegex.test(nameInput.value)) {
        nameInput.style.boxShadow = '0px 0px 43px 12px rgba(255, 0, 0, 0.2) inset';
        console.log('error');
    } else {
        nameInput.style.boxShadow = '0px 0px 43px 12px rgba(13, 255, 20, 0.2) inset';
        console.log('tori');
    }
}

