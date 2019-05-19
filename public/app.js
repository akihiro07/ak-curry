$(function(){

  //==========================================
  //固定バーの設定(スクロール時、ヒーローバナー超えたらクラス追加)
  //==========================================
  //ヒーローバナーの高さを取得
  let heroHeight = $('.js-hero_height').height();
  //スクロールして、ヒーローバナーの高さを超えたらクラス追加
  $(window).on('scroll', function(){
    $('.js-head-barnar').toggleClass('header--active', $(this).scrollTop() > heroHeight);
  });

  //==========================================
  //ハンバーガーメニューの設定(ハンバーガーメニューがクリックされたらクラス追加)
  //==========================================
  $('.js-menu-trigger').on('click', function(){
    $(this).toggleClass('humbergerMenu--active');
    $('.js-nav').toggleClass('nav--active');
  });

  $('.js-nav__link').on('click', function(){
    $('.js-menu-trigger').removeClass('humbergerMenu--active');
    $('.js-nav').removeClass('nav--active');
  });

  //==========================================
  //モーダルの設定(メニューをクリックするとモーダル表示)
  //==========================================
  //モーダル表示
  $('.js-menu_modal-open').on('click', function(e){
    e.preventDefault();
    let menuIndex = $(this).index();
    $('.js-menu_modal-close').eq(menuIndex).addClass('modal--active');
  });
  //モーダルを非表示
  $('.js-menu_modal-close').on('click', function(){
    $(this).removeClass('modal--active');
  });

});
