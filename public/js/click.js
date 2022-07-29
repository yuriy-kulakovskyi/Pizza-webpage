// click on links
let opened = false;

$("#top-today-link").click(() => {
  $("#menu").css('top', '-100vh');
  $("section").css('display', 'flex');
  $("#cart").appendTo('.footer__info-wrap');
  opened = false;

  $("html, body").animate({ scrollTop: "820" }, 1000);
});

$("#products-link").click(() => {
  $("#menu").css('top', '-100vh');
  $("section").css('display', 'flex');
  $("#cart").appendTo('.footer__info-wrap');
  opened = false;

  $("html, body").animate({ scrollTop: "1900" }, 1000);
});

$("#faq-link").click(() => {
  $("#menu").css('top', '-100vh');
  $("section").css('display', 'flex');
  $("#cart").appendTo('.footer__info-wrap');
  opened = false;

  $("html, body").animate({ scrollTop: "3600" }, 1000);
});

// burger button click event
$("#burger-btn").click(() => {
  if (!opened) {
    opened = true;
    $("#menu").css('top', '0');
    $("section").css('display', 'none');
  } else if (opened) {
    opened = false;
    $("#menu").css('top', '-100vh');
    $("section").css('display', 'flex');
    $("#cart").appendTo('.footer__info-wrap');
  }
});

// light/dark theme
let theme = 'light';
$("#checkbox").change(() => {
  if (theme === 'light') {
    $('section').css('background-color', '#111');
    $(".main__info").css("color", '#fff');
    $(".main__subtitle").css("color", 'rgba(255, 255, 255, .5)');
    $("#arrow-down").attr('src', 'public/img/Arrow-light.png');
    $("#cart-img").attr('src', 'public/img/cart-prototype.png');
    $(".circle-wrap").css('border', '1px solid #fff');
    $("#menu").css('background-color', '#fff');
    $("#menu a").css('color', '#111');

    // mousemove event for cart button
    $("#cart").mousemove(() => {
      $("#cart-img").attr('src', 'public/img/cart-prototype.png');
      $("#cart .circle-wrap").css('background-color', '#CB193F');
      $("#cart .circle-wrap").css('border', 'none');
    });

    // mouseleave event for cart button
    $("#cart").mouseleave(() => {
      $("#cart-img").attr('src', 'public/img/cart-prototype.png');
      $("#cart .circle-wrap").css('background-color', 'transparent');
      $("#cart .circle-wrap").css('border', '1px solid #fff');
    });

    $(".label").css('background-color', "#fff");
    $(".ball").css("background-color", '#111');

    $(".wrapper__header").css('background-color', '#111');

    $(".top__header .header__title").css('color', '#fff');
    $(".top__header .header__title").css('text-shadow', '0px 4px 3px rgba(255, 255, 255, 0.5');
    $(".top__header .header__title .color").css('text-shadow', '0px 4px 3px rgba(255, 255, 255, 0.5');
    $(".top__header .header__subtitle").css('color', '#fff');

    $("#arrow-left").css('background-color', '#fff');
    $("#arrow-right").css('background-color', '#fff');

    $("#arrow-left").css('box-shadow', '0 0 4px #fff');
    $("#arrow-right").css('box-shadow', '0 0 4px #fff');

    $("#slider #slider__item").css('background-color', '#000');
    $("#slider #slider__item").css('box-shadow', '0 0 4px #fff');
    
    $("#slider #slider__item .item__title").css('color', '#fff');
    $("#slider #slider__item .item__description").css('color', '#fff');
    $("#price").css('color', '#fff');
    $("#price").css('text-shadow', '0 3px 4px rgba(255, 255, 255, 1)');
    $(".box-number").css('box-shadow', '0 0 8px #fff');
    $(".box-number .number").css('color', '#fff');
    
    $(".products__header").css('background-color', '#000');

    $(".products__header .header__nav .nav__item").css('border', '1px solid #fff');

    $(".products__header .header__nav .pizza").mousemove(() => {
      $(".products__header .header__nav .pizza").css('border', '1px solid #CB193F');
    });

    $(".products__header .header__nav .pizza").mouseleave(() => {
      $(".products__header .header__nav .pizza").css('border', '1px solid #fff');
    });

    $(".products__header .header__nav .sushi").mousemove(() => {
      $(".products__header .header__nav .sushi").css('border', '1px solid #CB193F');
    });

    $(".products__header .header__nav .sushi").mouseleave(() => {
      $(".products__header .header__nav .sushi").css('border', '1px solid #fff');
    });

    $(".products__header .header__nav .burger").mousemove(() => {
      $(".products__header .header__nav .burger").css('border', '1px solid #CB193F');
    });

    $(".products__header .header__nav .burger").mouseleave(() => {
      $(".products__header .header__nav .burger").css('border', '1px solid #fff');
    });

    $(".products__header .header__nav .drink").mousemove(() => {
      $(".products__header .header__nav .drink").css('border', '1px solid #CB193F');
    });

    $(".products__header .header__nav .drink").mouseleave(() => {
      $(".products__header .header__nav .drink").css('border', '1px solid #fff');
    });

    $(".products__header .header__nav .nav__item .item__title").css('color', '#fff');
    $(".products__header .header__city .city__name").css("color", '#fff');
    $(".characteristics__size").css("color", '#fff');
    $(".characteristics__weight").css("color", '#fff');
    $(".description__title").css("color", '#fff');
    $(".description__composition").css("color", 'rgba(255, 255, 255, .6)');
    $(".footer__good-price").css("color", '#fff');
    $(".list__item").css("box-shadow", '0 0 4px rgba(255, 255, 255, .5)');

    $("#faq__title").css('color', '#fff');
    $("#faq__title").css('text-shadow', '0px 1px 5px #fff');
    $("#questions .question h3").css('color', '#fff');
    $("#questions .question p").css('color', '#fff');
    $("#questions .question img").attr('src', 'public/img/Arrow-light.png');

    $("#wrapper").css('background-color', '#111');

    theme = 'dark';
  } else if (theme === 'dark') {
    $('section').css('background-color', '#fff');
    $(".main__info").css("color", '#111');
    $(".main__subtitle").css("color", 'rgba(0, 0, 0, 0.5)');
    $("#arrow-down").attr('src', 'public/img/arrow.png');
    $("#cart-img").attr('src', 'public/img/cart.png');
    $(".circle-wrap").css('border', '1px solid #333');
    $("#menu").css('background-color', '#111');
    $("#menu a").css('color', '#fff');

    // mousemove event for cart button
    $("#cart").mousemove(() => {
      $("#cart-img").attr('src', 'public/img/cart-prototype.png');
      $("#cart .circle-wrap").css('background-color', '#CB193F');
      $("#cart .circle-wrap").css('border', 'none');
    });

    // mouseleave event for cart button
    $("#cart").mouseleave(() => {
      $("#cart-img").attr('src', 'public/img/cart.png');
      $("#cart .circle-wrap").css('background-color', 'transparent');
      $("#cart .circle-wrap").css('border', '1px solid #111');
    });

    $(".label").css('background-color', "#111");
    $(".ball").css("background-color", '#fff');

    $(".wrapper__header").css('background-color', '#fcfcfc');

    $(".top__header .header__title").css('color', '#000');
    $(".top__header .header__title").css('text-shadow', '0px 4px 4px rgba(51, 51, 51, 0.5');
    $(".top__header .header__title .color").css('text-shadow', '0px 4px 4px rgba(51, 51, 51, 0.5');
    $(".top__header .header__subtitle").css('color', '#333');

    $("#arrow-left").css('background-color', 'transparent');
    $("#arrow-right").css('background-color', 'transparent');

    $("#arrow-left").css('box-shadow', '');
    $("#arrow-right").css('box-shadow', '');

    $("#slider #slider__item").css('background-color', '#f7f7f7');
    $("#slider #slider__item").css('box-shadow', '0 0 3px rgba(0, 0, 0, 0.5)');
    
    $("#slider #slider__item .item__title").css('color', '#000');
    $("#slider #slider__item .item__description").css('color', '#000');
    $("#price").css('color', '#000');
    $("#price").css('text-shadow', '');
    $(".box-number").css('box-shadow', '0 0 3px #111');
    $(".box-number .number").css('color', '#000');

    $(".products__header").css('background-color', '#fff');

    $(".products__header .header__nav .nav__item").css('border', '1px solid #000');

    $(".products__header .header__nav .pizza").mousemove(() => {
      $(".products__header .header__nav .pizza").css('border', '1px solid #CB193F');
    });

    $(".products__header .header__nav .pizza").mouseleave(() => {
      $(".products__header .header__nav .pizza").css('border', '1px solid #000');
    });

    $(".products__header .header__nav .sushi").mousemove(() => {
      $(".products__header .header__nav .sushi").css('border', '1px solid #CB193F');
    });

    $(".products__header .header__nav .sushi").mouseleave(() => {
      $(".products__header .header__nav .sushi").css('border', '1px solid #000');
    });

    $(".products__header .header__nav .burger").mousemove(() => {
      $(".products__header .header__nav .burger").css('border', '1px solid #CB193F');
    });

    $(".products__header .header__nav .burger").mouseleave(() => {
      $(".products__header .header__nav .burger").css('border', '1px solid #000');
    });

    $(".products__header .header__nav .drink").mousemove(() => {
      $(".products__header .header__nav .drink").css('border', '1px solid #CB193F');
    });

    $(".products__header .header__nav .drink").mouseleave(() => {
      $(".products__header .header__nav .drink").css('border', '1px solid #000');
    });

    $(".products__header .header__nav .nav__item .item__title").css('color', 'rgba(0, 0, 0, .6');
    $(".products__header .header__city .city__name").css("color", '#000');
    $(".characteristics__size").css("color", '#000');
    $(".characteristics__weight").css("color", '#000');
    $(".description__title").css("color", '#000');
    $(".description__composition").css("color", 'rgba(0, 0, 0, .6)');
    $(".footer__good-price").css("color", '#000');
    $(".list__item").css("box-shadow", '0 0 4px rgba(0, 0, 0, .5)');

    $("#faq__title").css('color', '#000');
    $("#faq__title").css('text-shadow', '0px 1px 5px #111');
    $("#questions .question h3").css('color', '#333');
    $("#questions .question p").css('color', '#000');
    $("#questions .question img").attr('src', 'public/img/arrow.png');

    $("#wrapper").css('background-color', '#fff');
          
    theme = 'light';
  }
});

// change section button 
$("#arrow-changeSection").click(() => {
  scrollTopAnimated();
  $("#cart").prependTo('#header');
});

function checkY() {
  if (window.scrollY < 890) {
    $("#cart").appendTo('.footer__info-wrap');
  } else {
    $("#cart").prependTo('#header');
  }
}

setInterval(() => checkY(), 1);

function scrollTopAnimated() {
  $("html, body").animate({ scrollTop: "820" }, 1000);
}

// change number of goods to buy
let numberOfGoods = 1;
let startPrice = 10;

$("#minus").click(() => {
  numberOfGoods--;
  $("#number-to-change").text(numberOfGoods);
  if (numberOfGoods <= 0) {
    numberOfGoods = 0;
    $("#number-to-change").text(numberOfGoods);
  }
  $("#price").html("<span class='color'>"+ numberOfGoods * startPrice  +"</span>" + '$');
});

$("#plus").click(() => {
  numberOfGoods++;
  $("#number-to-change").text(numberOfGoods);
  if (numberOfGoods >= 10) {
    numberOfGoods = 10;
    $("#number-to-change").text(numberOfGoods);
  }
  $("#price").html("<span class='color'>"+ numberOfGoods * startPrice  +"</span>" + '$');
});


$("#top-today-link").click(() => {
  $(".after-home").css('display', 'flex');
  $("#menu").css('top', '-100vh');
});

$("#products-link").click(() => {
  $(".after-home").css('display', 'flex');
  $("#menu").css('top', '-100vh');
});