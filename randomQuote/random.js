(function header() {

    var today = new Date();
    var time = today.getHours();
    var text = "";
    if (time < 12) {
        text = "Let'start our morning with a new quote";
    }
    else if (time > 12 && time < 17) {
        text = "Let'start our evening with a new quote";
    }
    else
        text = "Let'start our night with a new quote";
    document.getElementById("header").innerHTML = text

})()

function displayQuote() {
    var quote = {
        "–Albert Einstein": '"Strive not to be a success, but rather to be of value."',
        "–Robert Frost": '"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."',
        " –Florence Nightingale": '" I attribute my success to this: I never gave or took any excuse."',
        "–Amelia Earhart": '"The most difficult thing is the decision to act, the rest is merely tenacity. "',
        "–Babe Ruth": '" Every strike brings me closer to the next home run."',
        "–W. Clement Stone": '"Definiteness of purpose is the starting point of all achievement."',
        "–Kevin Kruse": '"Life isn\'t about getting and having, it\'s about giving and being."',
        " –John Lennon": '" Life is what happens to you while you’re busy making other plans. "',
        "–Alice Walker": '"The most common way people give up their power is by thinking they don’t have any."'
    }

    var authors = Object.keys(quote);
    var author = authors[Math.floor(Math.random() * authors.length)]
    var quotes = quote[author];
    document.getElementById("quote").innerHTML = quotes;
    document.getElementById("author").innerHTML = author;
  var red = Math.floor(Math.random()* 256);
  var green = Math.floor(Math.random()* 256);
  var blue = Math.floor(Math.random()* 256);
   var color = `rgb(${red},${green},${blue})`
  
   document.getElementById("colorChanger").style.backgroundColor = color;
   document.getElementById("generate-quote").style.backgroundColor = color;
   document.getElementById("quote").style.color = color;
    document.getElementById("author").style.color = color;

}
displayQuote();
