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

// link hovers
$("#top-today-link").mousemove(() => {
  $("#linkVal").text("TOP");
  $("#linkVal").css("opacity", "1");
  $("#linkVal").css("letter-spacing", "10px");
});

$("#top-today-link").mouseleave(() => {
  $("#linkVal").text("");
  $("#linkVal").css("opacity", "0");
  $("#linkVal").css("letter-spacing", "100px");
});


$("#products-link").mousemove(() => {
  $("#linkVal").text("PRODUCTS");
  $("#linkVal").css("opacity", "1");
  $("#linkVal").css("letter-spacing", "10px");
});

$("#products-link").mouseleave(() => {
  $("#linkVal").text("");
  $("#linkVal").css("opacity", "0");
  $("#linkVal").css("letter-spacing", "100px");
});


$("#faq-link").mousemove(() => {
  $("#linkVal").text("FAQ");
  $("#linkVal").css("opacity", "1");
  $("#linkVal").css("letter-spacing", "10px");
});

$("#faq-link").mouseleave(() => {
  $("#linkVal").text("");
  $("#linkVal").css("opacity", "0");
  $("#linkVal").css("letter-spacing", "100px");
});