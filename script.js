// ハンバーガー
document.querySelector('.hamburger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.slide_menu').classList.toggle('active');
});
// $(function(){
//   $('.hamburger').click(function(){
//     $('.hamburger, .slide-menu').toggleClass('active');
//   });
// });

// document.querySelector('.slide_menu li').addEventListener('click', function(){
//   document.querySelector('.slide_menu').classList.toggle('active');
//   document.querySelector('.hamburger').classList.toggle('active');
// });
$('.slide_menu a').on('click', function(e) {
  $('.slide_menu').trigger('click');
});


// スライドショー
let index = 0
  const ticker = () => {
    const images = document.querySelectorAll('.slideshow img')
    for (image of images) {
      image.style.display = 'none'
    }
  
    images[index].style.display = 'block'
  
    index++
    if (index >= images.length) {
      index = 0
    }
  
    setTimeout(ticker, 5000)
  }

document.addEventListener('DOMContentLoaded', () => {
    ticker()
});


let windowHeight = document.documentElement.clientHeight;
$(window).on('scroll', function() {
  if ($(window).scrollTop() > windowHeight) {
    $('.header_fixed').fadeIn(400);
  } else {
    $('.header_fixed').fadeOut(400);
  }
});

// ページ内遷移
let headerHeight = windowHeight * 0.15  //headerの高さを15vhとしていることを利用
$('a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top-headerHeight;//idの上部の距離からHeaderの高さを引いた値を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});




