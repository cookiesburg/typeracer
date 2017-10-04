$(document).ready(function() {

  $("#input").on( "keydown", function( event ) {
  
    let correctText = $("#correct").text();              //these are each the text string in each of the three spans
    let wrongText = $("#wrong").text();
    let remainingText = $("#remaining").text();

    let currentLetter = remainingText[0];                //the current letter
    
    if (event.key === currentLetter && wrongText.length === 0) {   // if the key pressed equals the current letter
      correctText = correctText + currentLetter;                   // and the previous letters were all correct then add the current letter 
      remainingText = remainingText.slice(1);                      // to the correct letter span and remove the first letter from the remaining letters span
      $("#correct").text(correctText);
      $("#remaining").text(remainingText);
    } else if (event.key === "CapsLock" || event.key === "Shift" || event.key === "Option") {  // any of these keys should not trigger any action
      return                                                       
    } else if (event.key === "Backspace") {              // if backspace is pressed and the last letter was part of the "wrong" span - assign the last letter in the "wrong" span 
      if (wrongText.length > 0) {                        // as the current letter and re add it to the 'remaining' span
          currentLetter = wrongText.slice(-1);
          remainingText = currentLetter + remainingText;
          wrongText = wrongText.slice(0, -1);            // and remove the last element from the 'wrong' span
          $("#wrong").text(wrongText);
          $("#remaining").text(remainingText);
      } else {
          currentLetter = correctText.slice(-1);         // if the last letter was in the 'correct' span repeat the same
          remainingText = currentLetter + remainingText;
          correctText = correctText.slice(0, -1);
          $("#correct").text(correctText);
          $("#remaining").text(remainingText);
      };
    } else {
      wrongText = wrongText + currentLetter;        // if the key is anything else it is incorrect and the current letter will be put in the 'wrong' span
      remainingText = remainingText.slice(1);       // and the remaining text will lose the first element of it's span
      $("#wrong").text(wrongText);
      $("#remaining").text(remainingText);
    };

  });

  $.ajax({
    url: "https://newsapi.org/v1/articles?source=national-geographic&apiKey=6b047f9c79e04746bc825951ac061616",
  }).done(function(response) {                          // when the page is finished loading trigger response function
    let randNum = Math.floor((Math.random() * 10));     // random number between 1 and 10 will be generated
    text = response.articles[randNum].description;      // the global var 'text' is assigned to a string of text (description of one of the articles returned in the JSON file 
    $("#remaining").text(text);                         // from the GET request to the api)
  });                                                   // that 'text' then populates the 'remaining' text variable and span

});




