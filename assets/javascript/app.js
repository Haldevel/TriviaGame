
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

{/* <div>What was the full length CGI movie?</div>
<input type="radio" id="radio1" name="RadioGroup1" value="1" >A Toy Story</input>
<input type="radio" id="radio2" name="RadioGroup1" value="2" >Monsters Inc</input>
<input type="radio" id="radio3" name="RadioGroup1" value="3" >The Lion King</input>
<div>According to the old proverb, to which European capital city do all roads lead?</div> */}
$("#start").click(display);

function display() {
//  This code will run as soon as the page loads.
//window.onload = function() {
     /*  // 2. Create a variable named "letterBtn" equal to $("<button>");
      var letterBtn = $("<button>");

      // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
      letterBtn.addClass("letter-button letter letter-button-color");

      // 4. Then give each "letterBtn" a data-attribute called "data-letter".
      letterBtn.attr("data-letter", letters[i]);

      // 5. Then give each "letterBtns" a text equal to "letters[i]".
      letterBtn.text(letters[i]);

      // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
      $("#buttons").append(letterBtn); */
      
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
      var doneBtn = $("<button id='done'>Done</button>");
      doneBtn.addClass("btn btn-outline-dark");
      doneBtn.addClass("done-btn");
      $("#main").append(doneBtn);
      //<button id="start" class="mt-5 ml-5 btn btn-outline-dark"">Start</button>

        //make a radio button group and append it
        /* for(var j = 0; j < answers.length; j++) {
            var separateParts = answers[j].split(",");

            console.log("j "+ j + separateParts); 
            for(var k=0; k < separateParts.length; k++) {
                console.log("k " +k + separateParts[k]);
                var newRadioBtn = generateRadioBtn(j,separateParts[k]);
                console.log(newRadioBtn); */

                /* var radioBtn = $("<input>");
                radioBtn.attr("type", "radio");
                radioBtn.attr("id","radio"+
                radioBtn.attr("name","RadioGroup"+[j]));
                radioBtn.attr("value",[j][k]);
                radioBtn.text(separateParts[k]);
                //divQ.append(radioBtn);
                $("#main").append(radioBtn); */
            
            /* for(var k=0; k < separateParts.length; k++) {
                var radioBtn = $("<input>");
                radioBtn.attr("type", "radio");
                radioBtn.attr("id","radio"+
                radioBtn.attr("name","RadioGroup"+[j]));
                radioBtn.attr("value",[j]);
                radioBtn.text(separateParts[k]);
                divQ.append(radioBtn);
            } */
                            
      

        

      
     
   
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
    var radioBtn = $('<input type="radio" name="RadioGroup"+ind value=position id="radio"+position>'+ txt + '</input>');
    radioBtn.addClass("radioB");
    /* var radioBtn = $('<input type="radio" name="rbtnCount" />');
    var radioBtn = $("<input>");
    radioBtn.attr("type", "radio");
    //radioBtn.attr("id","radio"+
    radioBtn.attr("name","RadioGroup"+ind);
    radioBtn.attr("value",position);
    radioBtn.attr("id","radio"+position);
    radioBtn.append(txt); */
    return radioBtn;
  }

