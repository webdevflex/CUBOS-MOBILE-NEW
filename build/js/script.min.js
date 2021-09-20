let gamburger = document.querySelector('.gamburger');//находим гамбургер весь
let menuList = document.querySelector('.menu-list');//находим меню
let burgerAnim = document.querySelector('.gamburger-item');//находим гамбургер кнопка
let headerTitle = document.querySelector('.header-title');
let langBtn = document.querySelector('.language-link');
let langBtnRu = document.querySelector('.language-link-ru');
// при клике на гамбургер, добавляем -удаляем классы 
// меню-актив показ меню
// бургерАним делаем крестик
gamburger.addEventListener('click', function(){
menuList.classList.toggle('menu-active')
burgerAnim.classList.toggle('burger-active')
headerTitle.classList.toggle('header-title-hidden')
})

// при клике на язык показываем /скрываем другой язык
langBtn.addEventListener('click',function(){
    langBtnRu.classList.toggle('language-link-active') 
})



// slider
const swiper = new Swiper('.header-slider',{
    autoplay: {
      //пауза между прокруткой
        delay: 3000,
      //закончить на последнем слайде
      stopOnLastSlide:false,
      //отключить после ручного переключения
      disableOnInteraction:false,

      },
});

const swiperGallery = new Swiper('.video-slider-gallery',{
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // on: {
      //   slideNextTransitionEnd: function (swiper) {
      //     console.log('CurrentActive:', swiper.activeIndex)
      //   }
      // }
      on: {
        slideChange: function () {
          let playHidenAll = document.querySelectorAll('.img-gallery-slider-play');
          playHidenAll.forEach(elem=>{
            elem.classList.remove('playHiden')
            // if(elem.classList.contains('playHiden')){
            //   elem.classList.remove('playHiden')
            // }
            let videoAll = document.querySelectorAll('.video-gallery');
            videoAll.forEach(video=>{
              video.pause()
            })
          })
        }
      }
});


// ---------------------------------------------------drop-block--------------------------
//получаем кнопку
let btnDrop = document.querySelector('.img-arrow-down-btn');
function app(){
  //получили все кнопки "открыть" 
  let btnDropAll = document.querySelectorAll('.img-arrow-down-btn');

//получаем все блоки с контентом
  let cards = document.querySelectorAll('.content-drop')

  //анкор "content"
  let ancorContentALL = document.querySelectorAll('.content')

  function filter(category,item){
    item.forEach((item)=>{
      const isItemFilter = item.classList.contains(category)
      if(isItemFilter){
        let insideElHeight = item.scrollHeight;
        item.style.maxHeight = insideElHeight +'px'

      }
    })
  }
  function filter2(category,ancors){
    ancors.forEach((item)=>{
      const contentData = item.classList.contains(category)
      if(contentData){
       item.classList.add('ancor-content')
      }else{
        item.classList.remove('ancor-content')
      }
     
    })
  }



  btnDropAll.forEach((btnDrop)=>{
    btnDrop.addEventListener('click',()=>{
      const currentCategory = btnDrop.dataset.id;
    
      filter(currentCategory, cards)
      btnDrop.classList.add('hidenArrowDown')
      filter2(currentCategory, ancorContentALL)
    })
    
  })

}
app()


// function ancors(){
//   $('html, body').animate({
//     scrollTop: $(".test-ancor").offset().top  // класс объекта к которому приезжаем
//   }, 1000);
// }

// function ancorsAlltest(){
//   $('.test-ancor').each(function(i,elem){
//     console.log(elem)
//   })
// }

// $('li').each(function(i,elem) {
// 	if ($(this).hasClass("stop")) {
// 		alert("Остановлено на " + i + "-м пункте списка.");
// 		return false;
// 	} else {
// 		alert(i + ': ' + $(elem).text());
// 	}
// });





//закрыть открытый блок
function appClose(){
  // получаем кнопки которые в дроп боксе
  let btnDropAllClose = document.querySelectorAll('.down-btn-closed');

//получаем все блоки с контентом
  let cards = document.querySelectorAll('.content-drop')

  function filter(category,item){
    item.forEach((item)=>{
      const isItemFilter = item.classList.contains(category)
      if(isItemFilter){
        item.style.maxHeight = "0px";
        
        //при закрытии крутим к анкору
        $('html, body').animate({
          scrollTop: $(".ancor-content").offset().top  // класс объекта к которому приезжаем
       }, 1200);
      }
      
    })
  }

  btnDropAllClose.forEach((btnDrop)=>{
    btnDrop.addEventListener('click',()=>{
      const currentCategory = btnDrop.dataset.id;
      let btnOpen = document.querySelectorAll('.img-arrow-down-btn');
      btnOpen.forEach(element=>{
        element.classList.remove('hidenArrowDown')
      })
      filter(currentCategory, cards)

      //крутим до анкора 
      


    })
  })
}
appClose()

//вкл.видео по клику на кнопку плей через дата-атрибут
function playVideoClick(){
//получаем кнопки "плей"
let playBtnAll = document.querySelectorAll('.img-gallery-slider-play');
//получаем все видео
let videoAll = document.querySelectorAll('.video-gallery');


  function filterVideo(elId,item){
    item.forEach((item)=>{
      const isItemFilter2 = item.classList.contains(elId)//проверяем на совпадение 
      if(isItemFilter2){
        item.play()
        // console.log(item)
      }
      
    })
  }
//проходимся циклом 
playBtnAll.forEach(btn=>{
  btn.addEventListener('click',function(){
    let idBtn = btn.dataset.video;//получили айди кнопок
    if(!btn.classList.contains('playHiden')){
      btn.classList.add('playHiden')
    }
    filterVideo(idBtn, videoAll)
  })
})

}
playVideoClick();

//hide gallery
//находим кнопку
let OpenCloseBtn = document.querySelector('.gallery-btn-wrapper');
//находим "галерею"
let galleryHide = document.querySelector('.hide-gallery');
//находим slider-dots (прячем при клике)
// let galleryDots = document.querySelector('.gallery-dots');
//находим кнопки слайда убираем при клике
// let galleryArrows = document.querySelector('.img-slider-arrows')
//при клике на кнопку узнаем высоту контейнера и "и задаем ее при клике"

// OpenCloseBtn.addEventListener('click',function(){
//   let insideElHeight = galleryHide.scrollHeight;
//   galleryHide.style.maxHeight = insideElHeight +'px';
//   galleryDots.classList.toggle('dots-hiden')
//   galleryArrows.classList.toggle('arrows-hiden')

//проверяем высоту у контейнера , в зависимости от этого 'показываем/скрываем',блок
// let insideElHeight2 = galleryHide.scrollHeight;
// if (getComputedStyle(galleryHide).maxHeight == insideElHeight2 +'px') {
// galleryHide.style.maxHeight = '0px'
// }
// });



//fancu-box
//инициализация
const myCarousel = new Carousel(document.querySelector("#myCarousel"), {


});


//news Hiden
function openCloseNews(){
  //получаем кнопки "открыть/закрыть"
  let btnAll = document.querySelectorAll('.btn-news');
  //получаем все  блоки
  let newsAll = document.querySelectorAll('.news-drop');
  
  
    function filterNews(elId,item){
      item.forEach((item)=>{
        const isItemFilter3 = item.classList.contains(elId)//проверяем на совпадение 
        if(isItemFilter3){
          //узнаем высоту и добавляем ее к блоку
          let insideElHeight = item.scrollHeight;
          item.style.maxHeight = insideElHeight +'px'
          // item.classList.add('arrowUp')

        }
        //проверяем высоту у контейнера , в зависимости от этого 'показываем/скрываем',блок
        let insideElHeight3 = item.scrollHeight;
        if (getComputedStyle(item).maxHeight == insideElHeight3 +'px') {
        item.style.maxHeight = '0px';

        $('html, body').animate({
                   scrollTop: $(item).offset().top  // класс объекта к которому приезжаем
                 }, 1200);
        }
        
      })
    }
  //проходимся циклом 
  btnAll.forEach(btn=>{
    btn.addEventListener('click',function(){
      let idBtn = btn.dataset.btn;//получили айди кнопок
      filterNews(idBtn,newsAll)
    })
  })
  
  }
  openCloseNews();



//photo-gallery hiden/open (header)
$(".video-gallery-wrapper").each(function () {
  let more = $(this).find(".gallery-btn");
  let hide = $(this).find(".hide-gallery");
  hide.hide();
  more.click(function () {
      hide.slideToggle(1000);//cкорость анимации
      let $btnText = $('.btn-text');
      //меняем текс кнопки
      $btnText.text($btnText.text() == "hide video gallery" ? "view more video" : "hide video gallery");
      //скрываем-показываем "точки слайдера"
      let $videoSliderDots = $('.gallery-dots');
      $videoSliderDots.toggleClass('gallery-dots-hiden')
      //скрываем-показываем "стрелки слайдера"
      let $arrowsGallery = $('.gallery-btn-next, .gallery-btn-prev');
      $arrowsGallery.toggleClass('hiden-arrows-slider')
  });

});


//photo-gallery hiden/open (footer)
$(".photo-gallery").each(function () {
  let more = $(this).find(".btn-photo-gallery");
  let hide = $(this).find(".photo-gallery-hiden");
  hide.hide();
  more.click(function () {
      hide.slideToggle(1000);//cкорость анимации
      let $btnText = $('.btn-photo-gallery');
      //меняем текс кнопки
      $btnText.text($btnText.text() == "HIDE MORE GALLERY" ? "VIEW MORE GALLERY" : "HIDE MORE GALLERY");

      $('html, body').animate({
        scrollTop: $(hide).offset().top  // класс объекта к которому приезжаем
      }, 1200);

  });

});

//video-gallery hiden/open (footer)
$(".video-gallery-footer").each(function () {
  let more2 = $(this).find(".btn-video-gallery");
  let hide2 = $(this).find(".hide-gallery-footer");
  hide2.hide();
  more2.click(function () {
      hide2.slideToggle(1000);//cкорость анимации
      
      let $btnText = $('.btn-video-gallery');
      //меняем текс кнопки
      $btnText.text($btnText.text() == "HIDE MORE GALLERY" ? "VIEW MORE GALLERY" : "HIDE MORE GALLERY");

      $('html, body').animate({
        scrollTop: $(hide2).offset().top  // класс объекта к которому приезжаем
      }, 1200);

  });

});










