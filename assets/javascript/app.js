
var countUnanswered = 0;
var countCorrect = 0;
var countIncorrect = 0;

var questions = [
"According to the old proverb, to which European capital city do all roads lead?",
"What is the name of the fairy in Peter Pan?",
 " What was the Hunchback of Notre Dame’s name?",
"In Greek mythology, who turned all that he touched into gold?",
"Who is the author of the “Harry Potter” books?",
"What is the name of the city where the cartoon family The Simpsons live?",
"The title role of the 1990 movie “Pretty Woman” was played by which actress?",
"Which American newspaper first exposed the Watergate Scandal?",
"In Kiplings Jungle Book, what kind of creature was Kaa?",
" Which country was home to the Moa bird which became extinct about 500 years ago?"
];

var answers = [
    "Athens,Rome,Paris,London", 
    "Tinkerbell,Wendy Darling,Captain Hook,Nana",
    "Claude Frollo,Quasimodo,Esmeralda,Captain Phoebus",
    "Medusa,Hermes,Midas,Perseus",
    " J. K. Rowling,J. R. R. Tolkien,Leo Tolstoy",
    "New York,Bakersfield,Las Vegas,Springfield",
    "Angelina Jolie,JenniferAniston,Julia Roberts,Natalie Portman",
    "The New York Times,Washington Post,Chicago Tribune,The Wall Street Journal",
    "Wolf,Bear,Monkey,Snake",
    "New Zealand,Spain,Egypt,China"
    
];

var correctAns = ["01", "10", "21", "32", "40", "53", "62", "71", "83", "90"];


$("#start").click(display);

$("#done").click(displayResults);



//$("#start").click(startSlideshow);


function displayResults() {
  console.log("Inside displayResults");

  $("#main").hide();
  $("#doneDiv").hide();

  //loop through groups of radio buttons
  for(var i = 0; i < correctAns.length; i++) {
    var rbChecked = $('input[name=RadioGroup' + i + ']:checked');
    if(rbChecked.length > 0) {
      //a button was checked so check which one was selected
      var checkedVal = rbChecked.val();
      console.log("Was checked " + checkedVal);
      if(correctAns[i] === checkedVal) {
        //the answer is correct
        countCorrect++;  
      }
      else {
        //the answer is incorrect
        countIncorrect++;      
      }
    }
    else{
      //the group was unanswered
      countUnanswered++;
 
    } 

  }

  console.log("Unanswered " + countUnanswered);
  console.log("Incorrect " + countIncorrect);
  console.log("Correct " + countCorrect);

  //<div id="main" class="mt-3 ml-5" style="display: none;">

                            
}

function display() {



    $("#doneDiv").css('visibility', 'visible');  
      //$("#beginning").$('.menu').toggle("slide")
      $("#beginning").hide();

      for(var i = 0; i < questions.length; i++) {
        //make a div and append it
       /*  var divQ = $("<div>");
        divQ.text(questions[i]); */
        var newDiv= generateDiv(questions[i]);
        $("#main").append(newDiv);

        var separateParts = answers[i].split(",");
        console.log("i "+ i + separateParts); 
        for(var k=0; k < separateParts.length; k++) {
            var newRadioBtn = generateRadioBtn(i,separateParts[k],[i]+[k]);
            newDiv.append(newRadioBtn);
        }

      }  

      //create a buttton, append and style it
  /*     var doneBtn = $("<button id='done'>Done</button>");
      doneBtn.addClass("btn btn-outline-dark");
      doneBtn.addClass("done-btn");
      $("#main").append(doneBtn);
      console.log("appended the Done button "); */
    
       
  
};

function generateDiv(question) {
    //make a div and append it
    var divQ = $("<div>");
    divQ.text(question);
    divQ.append("</br>")
    divQ.addClass("question");
    return divQ;
  }

  function generateRadioBtn(ind, txt, position) {
    /* var radioBtn = $('<input type="radio" name="RadioGroup"+ind value=position id="radio"+position>'+ txt + '</input>'); */
    var radioBtn = $('<input type="radio">'+ txt + '</input>');
    radioBtn.addClass("radioB");
    radioBtn.attr("id","radio"+position);
    radioBtn.attr("value",position);
    radioBtn.attr("name","RadioGroup"+ind);    
    return radioBtn;
  }

