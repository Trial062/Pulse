document.addEventListener('DOMContentLoaded', () => {
  // Slider
  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true
  });
  document.querySelector('.prev').addEventListener('click', () => {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', () => {
    slider.goTo('next');
  });
  //Tabs
  const tabs = document.querySelectorAll('.catalog__tab'),
    tabsContent = document.querySelectorAll('.catalog__content'),
    tabsParent = document.querySelector('.catalog__tabs');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('catalog__content_hide');
      item.classList.remove('catalog__content_active');
    });
    tabs.forEach(item => {
      item.classList.remove('catalog__tab_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('catalog__content_active');
    tabsContent[i].classList.remove('catalog__content_hide');
    tabs[i].classList.add('catalog__tab_active');
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target == target && target.closest('li').classList.contains('catalog__tab')) {
      tabs.forEach((item, i) => {
        if (target.closest('li') == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  const link = document.querySelectorAll('.catalog-item__link'),
    backLink = document.querySelectorAll('.catalog-item__back');

  function toggleDescription(link) {
    link.forEach((item, i) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const catalogItem = document.querySelectorAll('.catalog-item__content'),
          catalogList = document.querySelectorAll('.catalog-item__list');

        catalogItem[i].classList.toggle('catalog-item__content_active');
        catalogList[i].classList.toggle('catalog-item__list_active');
      });
    });
  }
  toggleDescription(link);
  toggleDescription(backLink);

  //Modal
});
$(document).ready(function () {
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #end, #order').fadeOut('slow');
  });

  $('.button_buy').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

//validate forms
  function validateForm(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите ваш email",
          email: "Введен некорректный email"
        }
      }
    });
  }
  validateForm('#consultation__form');
  validateForm('#consultation form');
  validateForm('#order form');
  $('input[name=phone]').mask("+7(999) 999-9999");

  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #end').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });

  //pageUp
  $(window).scroll(function(){
    if($(this).scrollTop() > 1600) {
      $('.pageUp').fadeIn();
    } else{
      $('.pageUp').fadeOut();
    }


    
  });
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top +"px"});
    return false;
  });


});