// Fetch information about top products from json file
fetch('public/json/items.json')
.then(response => {
  return response.json();
})
.then(jsondata => {
  let selectedIndex = 0;
  $("#sliderImg").attr('src', jsondata.sliderItems[selectedIndex].img);
  $("#sliderImg").attr('alt', jsondata.sliderItems[selectedIndex].alt);
  $("#sliderItemName").text(jsondata.sliderItems[selectedIndex].name);
  $("#sliderItemDescription").text(jsondata.sliderItems[selectedIndex].description);

  $("#arrow-right").click(() => {
    selectedIndex++;
    $("#sliderImg").attr('src', jsondata.sliderItems[selectedIndex].img);
    $("#sliderImg").attr('alt', jsondata.sliderItems[selectedIndex].alt);
    $("#sliderItemName").text(jsondata.sliderItems[selectedIndex].name);
    $("#sliderItemDescription").text(jsondata.sliderItems[selectedIndex].description);

    if (selectedIndex === jsondata.sliderItems.length - 1) {
      selectedIndex = 0;
      $("#sliderImg").attr('src', jsondata.sliderItems[selectedIndex].img);
      $("#sliderImg").attr('alt', jsondata.sliderItems[selectedIndex].alt);
      $("#sliderItemName").text(jsondata.sliderItems[selectedIndex].name);
      $("#sliderItemDescription").text(jsondata.sliderItems[selectedIndex].description);
    }
  });

  $("#arrow-left").click(() => {
    if (selectedIndex !== 0) {
      selectedIndex--;
      $("#sliderImg").attr('src', jsondata.sliderItems[selectedIndex].img);
      $("#sliderImg").attr('alt', jsondata.sliderItems[selectedIndex].alt);
      $("#sliderItemName").text(jsondata.sliderItems[selectedIndex].name);
      $("#sliderItemDescription").text(jsondata.sliderItems[selectedIndex].description);
    } 
  });
});


// Fetch questions for FAQ section from json file
fetch('public/json/faq.json')
.then(response => {
  return response.json();
})
.then(jsondata => {
  for (let i = 0; i < jsondata.questions.length; i++) {
    let questionBlock = document.createElement('div');

    let question = document.createElement('h3');
    let answer = document.createElement('p');
    let arrow = document.createElement('img');

    $(arrow).attr('src', 'public/img/arrow.png');

    let clicked = false;
    $(arrow).click(() => {
      if (!clicked) {
        $(arrow).css('transform', 'rotate(180deg)');
        // $(answer).css('display', 'block');
        $(answer).fadeIn(300);
        clicked = true;
      } else {
        $(arrow).css('transform', 'rotate(0)');
        $(answer).fadeOut(300);
        clicked = false;
      }
    });

    let questionText = document.createTextNode(jsondata.questions[i].question);
    let answerText = document.createTextNode(jsondata.questions[i].answer);

    question.appendChild(questionText);
    question.appendChild(arrow);

    answer.appendChild(answerText);
    $(answer).fadeOut();

    questionBlock.appendChild(question);
    questionBlock.appendChild(answer);

    questionBlock.classList.add('question');

    $("#questions").append(questionBlock);
  }
});