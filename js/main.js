$(function () {

  $('.banner-section__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.faqs-spoiler__title').click(function (event) {
    if ($('.faqs-spoiler').hasClass('one')) {
      $('.faqs-spoiler__title').not($(this)).removeClass('active');
      $('.faqs-spoiler__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });

  $('.header__burger').on('click', function () {
    $('.menu__list').slideToggle();
  });

  $('.header__burger-close').on('click', function () {
    $('.menu__list').slideToggle();
  });

  $('.privacy-policy__spoiler-title').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);

    if ($(this).hasClass('active')) {
      $('.privacy-policy__spoiler-text').not($(this).next()).slideUp(300);
      $(this).children('.privacy-policy__spoiler-arrow').children('.my_custom_arrow').css('transform', 'rotate(90deg)');
      $(this).children('.privacy-policy__spoiler-arrow').children('.my_custom_arrow').css('transition', '0.3s');
    } else $('.my_custom_arrow').css('transform', 'rotate(0deg)');

  });



});