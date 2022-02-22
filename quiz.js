let ques = document.querySelector("div.questions");
let ans1 = document.querySelector("div#mcq1");
let ans2 = document.querySelector("div#mcq2");
let ans3 = document.querySelector("div#mcq3");
let ans4 = document.querySelector("div#mcq4");
let display = document.querySelector("div.display");
let optionA = document.querySelector("div.optionA");
let optionB = document.querySelector("div.optionB");
let optionC = document.querySelector("div.optionC");
let optionD = document.querySelector("div.optionD");
let b1 = document.querySelector("div.b1");
let b2 = document.querySelector("div.b2");
let board1 = document.querySelector("div.fourth");
let board2 = document.querySelector("div.third");
let board3 = document.querySelector("div.second");
let board4 = document.querySelector("div.first");
let board5 = document.querySelector("div.initial");
let bgm = document.querySelector("audio");
let recog = document.querySelector("div.recog");
let replay = document.querySelector("div.replay");
recog.style.display = "none";
replay.style.display="none";

display.style.display = "none";

let checked = false;

let lists = [
  {
    question: "Which city is the capital of Jordan",
    a: "A. <br>Abu-Dhabi",
    b: "B. <br>Amman",
    c: "C. <br>Aden",
    d: "D. <br>Ashgabat",
    correct: "Amman",
    
  },
  {
    question: "Which city is the capital of Azerbaijan",
    a: "A.<br> Baku",
    b: "B.<br> Belmopan",
    c: "C.<br> Beirut",
    d: "D.<br> Morocco",
    correct: "Baku",
  },
  {
    question: "Which city is the capital of Tamil Nadu",
    a: "A. <br> Mumbai",
    b: "B. <br>New Delhi",
    c: "C. <br>Chennai",
    d: "D. <br>Kolkata",
    correct: "Chennai",
  },
  {
    question: "Which city is the capital of Belize",
    a: "A.<br> Bogota",
    b: "B.<br> Bratislava",
    c: "C.<br> Belmopan",
    d: "D.<br> Brades",
    correct: "Belmopan",
  },
  {
    question: "Which city is the capital of Montenegro",
    a: "A. <br>Dakar",
    b: "B. <br>Dhaka",
    c: "C. <br>Istanbul",
    d: "D. <br>Podgorica",
    correct: "Podgorica",
  },
];

let correctness;

function loadQues(lists) {
  
  board1.style.backgroundColor = "blue";
  board2.style.backgroundColor = "blue";
  board3.style.backgroundColor = "blue";
  board4.style.backgroundColor = "blue";
  board5.style.backgroundColor = "blue";
  display.style.display = "none";
  display.style.opacity = "0";
  display.classList.remove("anime2");
  display.classList.remove("anime");
  ques.innerHTML = lists.question;
  ans1.innerHTML = lists.a;
  ans2.innerHTML = lists.b;
  ans3.innerHTML = lists.c;
  ans4.innerHTML = lists.d;
  correctness = lists.correct;
  ans2.style.display = "block";
  ans3.style.display = "block";
  ans1.style.display = "block";
  ans4.style.display = "block";
  ans1.style.backgroundColor = "black";
  ans2.style.backgroundColor = "black";
  ans3.style.backgroundColor = "black";
  ans4.style.backgroundColor = "black";
  recog.style.display = "none";
replay.style.display="none";
  if(counter==0)
  {
    board1.style.backgroundColor = "yellow";
  }
  else if(counter==1)
  {
    board2.style.backgroundColor = "yellow";
  }
  else if(counter==2)
  {
    board3.style.backgroundColor = "yellow";
  }
  else if(counter==3)
    {
  board4.style.backgroundColor = "yellow";
  }
  else{
    board5.style.backgroundColor="yellow";
  }
}
let counter = 0;
let ind = 0;
loadQues(lists[counter]);

function check1() {
  if (counter == lists.length-1) {
    counter=-1; 
   } else {
     counter++;
   }
  display.classList.add("anime2");
  
    
    if (ind == 0) 
    {
      ind = 1;

      if (String(ans1.innerHTML).includes(correctness)) 
      {
          setTimeout(function () 
          {
          ans1.style.backgroundColor = "green";
          display.style.display = "flex";
          if(counter==1)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 1000/-</h1>`;
          }
          else if(counter==2)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 2000/-</h1>`;
          }
          else if(counter==3)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 3000/-</h1>`;
          }
          else if(counter==4)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 4000/-</h1>`;
          }
          else if(counter==5)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 5000/-</h1>`;
          }
        bgm.src = `audio1.mp3`;
          bgm.play();
        }, 1000);
           if(counter<=lists.length-1 && counter>=0)
           {
             setTimeout(function () {
               loadQues(lists[counter]);
             }, 8000);
          }
          else{
            setTimeout(function () {
              display.style.display = "none";
              recog.style.display = "flex";
              replay.style.display = "flex";
            }, 8000);
          }
        ind = 0;
      } 
      else 
      {
        setTimeout(function () 
        {
          ans1.style.backgroundColor = "red";
          bgm.src = `audio2.mp3`;
          bgm.play();
        }, 1000);

        setTimeout(function () 
        {
          if (String(ans2.innerHTML).includes(correctness)) {
            ans2.style.backgroundColor = "green";
            
          }
          if (String(ans3.innerHTML).includes(correctness)) 
          {
            ans3.style.backgroundColor = "green";
          }
          if (String(ans4.innerHTML).includes(correctness)) {
            ans4.style.backgroundColor = "green";
          }
          display.style.display = "flex";
          if(counter==1)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 1000/-</h1>`;
          }
          else if(counter==2)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 2000/-</h1>`;
          }
          else if(counter==3)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 3000/-</h1>`;
          }
          else if(counter==4)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 4000/-</h1>`;
          }
          else if(counter==5)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 5000/-</h1>`;
          }
        }

        
          , 1000);

      }
    }
  }

function check2() {
  if (counter == lists.length-1) {
    counter=-1; 
   } else {
     counter++;
   }
  display.classList.add("anime2");
  
  
    if (ind == 0) {
      ind = 1;

      if (String(ans2.innerHTML).includes(correctness)) {
        setTimeout(function () {
          ans2.style.backgroundColor = "green";
          
          display.style.display = "flex";
          if(counter==1)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 1000/-</h1>`;
          }
          else if(counter==2)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 2000/-</h1>`;
          }
          else if(counter==3)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 3000/-</h1>`;
          }
          else if(counter==4)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 4000/-</h1>`;
          }
          else if(counter==5)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 5000/-</h1>`;
          }
          bgm.src = `audio1.mp3`;
          bgm.play();
        }, 1000);
        if(counter<=lists.length-1 && counter>=0)
           {
             setTimeout(function () {
               loadQues(lists[counter]);
             }, 8000);
          }
          else{
            setTimeout(function () {
              display.style.display = "none";
              recog.style.display = "flex";
              replay.style.display = "flex";
            }, 8000);
          }
        ind = 0;
      } else {
        setTimeout(function () {
          ans2.style.backgroundColor = "red";
          bgm.src = `audio2.mp3`;
          bgm.play();
          
        }, 1000);
        
        setTimeout(function () 
        {
          if (String(ans1.innerHTML).includes(correctness)) {
            ans1.style.backgroundColor = "green";
          }
          if (String(ans3.innerHTML).includes(correctness)) {
            ans3.style.backgroundColor = "green";
          }
          if (String(ans4.innerHTML).includes(correctness)) {
            ans4.style.backgroundColor = "green";
          }
          display.style.display = "flex";
          if(counter==1)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 1000/-</h1>`;
          }
          else if(counter==2)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 2000/-</h1>`;
          }
          else if(counter==3)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 3000/-</h1>`;
          }
          else if(counter==4)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 4000/-</h1>`;
          }
          else if(counter==5)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 5000/-</h1>`;
          }
        }

        
          , 1000);
      }
    }
  }

function check3() {
  if (counter == lists.length-1) {
    counter=-1; 
   } 
   else {
     counter++;
   }
  display.classList.add("anime2");
  
  
    if (ind == 0) {
      ind = 1;

      if (String(ans3.innerHTML).includes(correctness)) {
        setTimeout(function () {
          ans3.style.backgroundColor = "green";
          bgm.src = `audio1.mp3`;
          bgm.play();
          display.style.display = "flex";
          if(counter==1)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 1000/-</h1>`;
          }
          else if(counter==2)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 2000/-</h1>`;
          }
          else if(counter==3)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 3000/-</h1>`;
          }
          else if(counter==4)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 4000/-</h1>`;
          }
          else if(counter==5)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 5000/-</h1>`;
          }
        }, 1000);
        if(counter<=lists.length-1 && counter>=0)
           {
             setTimeout(function () {
               loadQues(lists[counter]);
             }, 8000);
          }
          else{
            setTimeout(function () {
              display.style.display = "none";
              recog.style.display = "flex";
              replay.style.display = "flex";
            }, 8000);
          } ind = 0;
      } else {
        setTimeout(function () {
          ans3.style.backgroundColor = "red";
          bgm.src = `audio2.mp3`;
          bgm.play();
        }, 1000);
        setTimeout(function () {
          if (String(ans2.innerHTML).includes(correctness)) {
            ans2.style.backgroundColor = "green";
          }
          if (String(ans1.innerHTML).includes(correctness)) {
            ans1.style.backgroundColor = "green";
          }
          if (String(ans4.innerHTML).includes(correctness)) {
            ans4.style.backgroundColor = "green";
          }
          display.style.display = "flex";
          if(counter==1)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 1000/-</h1>`;
          }
          else if(counter==2)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 2000/-</h1>`;
          }
          else if(counter==3)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 3000/-</h1>`;
          }
          else if(counter==4)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 4000/-</h1>`;
          }
          else if(counter==5)
          {
            display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 5000/-</h1>`;
          }
        }
        
        
        , 1000);
      }
    }
  }
  
  function check4() {
  if (counter == lists.length-1) 
  {
   counter=-1; 
  } 
  else 
  {
    counter++;
  }
  display.classList.add("anime2");
  
   
    if (ind == 0) {
      ind = 1;
      if (String(ans4.innerHTML).includes(correctness)) {
        setTimeout(function () {
          ans4.style.backgroundColor = "green";
          bgm.src = `audio1.mp3`;
          bgm.play();
          display.style.display = "flex";
          if(counter==1)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 1000/-</h1>`;
          }
          else if(counter==2)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 2000/-</h1>`;
          }
          else if(counter==3)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 3000/-</h1>`;
          }
          else if(counter==4)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 4000/-</h1>`;
          }
          else if(counter==5)
          {
           display.innerHTML = `<h1>Congratulations!!!!<br>You won Rs. 5000/-</h1>`;
          }
        }, 1000);
        if(counter<=lists.length-1 && counter>=0)
           {
             setTimeout(function () {
               loadQues(lists[counter]);
             }, 8000);
          }
          else{
            setTimeout(function () {
              display.style.display = "none";
              recog.style.display = "flex";
              replay.style.display = "flex";
            }, 8000);
          } ind = 0;
      } else {
        setTimeout(function () {
          ans4.style.backgroundColor = "red";
          bgm.src = `audio2.mp3`;
          bgm.play();
        }, 1000);
        setTimeout(function () {
          if (String(ans1.innerHTML).includes(correctness)) {
            ans1.style.backgroundColor = "green";
          }
          if (String(ans3.innerHTML).includes(correctness)) {
            ans3.style.backgroundColor = "green";
          }
          if (String(ans2.innerHTML).includes(correctness)) {
            ans2.style.backgroundColor = "green";
          }
          display.style.display = "flex";
          display.style.color = "black";
          if(counter==1)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 1000/-</h1>`;
          }
          else if(counter==2)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 2000/-</h1>`;
          }
          else if(counter==3)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 3000/-</h1>`;
          }
          else if(counter==4)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 4000/-</h1>`;
          }
          else if(counter==5)
          {
           display.innerHTML = `<h1>Khel Samapt<br>Aapki Dhanrashi Hai Rs. 5000/-</h1>`;
          }
        }

        
          , 1000);
      }
    }
  }


ans1.addEventListener("click", check1);
ans2.addEventListener("click", check2);
ans3.addEventListener("click", check3);
ans4.addEventListener("click", check4);

b1.addEventListener("click", audience);
let rep = 0;
function audience()
{
if (rep == 0) {
  bgm.src=`audio3.mp3`;
  bgm.play();
  display.classList.remove("anime2");
  display.classList.add("anime");
  display.style.display = "flex";
  rep = 1;
    if (String(ans1.innerHTML).includes(correctness)) {
      display.innerHTML =
      `<div class="optionA">
      ${ans1.innerHTML}<br>86%
    </div>
    <div class="optionB">
      B.
    </div>
    <div class="optionC">
      C.
    </div>
    <div class="optionD">
      D.
    </div>`;

    }
    if (String(ans2.innerHTML).includes(correctness)) {
      display.innerHTML =
      `<div class="optionA">
      A.
      </div>
      <div class="optionB">
      ${ans2.innerHTML}<br>86%
    </div>
    <div class="optionC">
      C.
    </div>
    <div class="optionD">
      D.
    </div>`;
    }
    if (String(ans3.innerHTML).includes(correctness)) {
      display.innerHTML =
      `<div class="optionA">
      A.
      </div>
      <div class="optionB">
      B.
    </div>
    <div class="optionC">
      ${ans3.innerHTML}<br>86%
    </div>
    <div class="optionD">
      D.
    </div>`
    }
    if (String(ans4.innerHTML).includes(correctness)) {
      display.innerHTML =
      `<div class="optionA">
      A.
      </div>
      <div class="optionB">
      B.
    </div>
    <div class="optionC">

    </div>
    <div class="optionD">
      ${ans4.innerHTML}<br>86%
    </div>`
    }
  }
  b1.style.backgroundImage = "url('cross.jpg')";
  b1.style.backgroundPosition = "100% 100%";
}

b2.addEventListener("click", expert);
let rep2 = 0;
function expert()
{
  if (rep2 == 0) {
    bgm.src=`audio3.mp3`;
  bgm.play();
  display.classList.remove("anime2");
  display.classList.add("anime");
  display.style.display = "flex";
    rep2 = 1;
    display.style.display = "flex";
    if (String(ans1.innerHTML).includes(correctness)) {
      display.innerHTML = `<img src="https://im.rediff.com/news/2017/dec/11live-derek.jpg" alt="" width="20%" height="100%"  style="border-radius: 50%;">
      <p style="text-align: center;">Our expert is Mr. Derek O Brien , The famous
      quiz master of India.<br> And according to him, The correct answer is<br>
      <b>${ans1.innerHTML}</b></p>`;
    }
    if (String(ans2.innerHTML).includes(correctness)) {
      display.innerHTML = `<img src="https://im.rediff.com/news/2017/dec/11live-derek.jpg" alt="" width="20%" height="100%"  style="border-radius: 50%;">
      <p style="text-align: center;">Our expert is Mr. Derek O Brien , The famous
      quiz master of India.<br> And according to him, The correct answer is<br>
      <b>${ans2.innerHTML}</b></p>`;
    }
    if (String(ans3.innerHTML).includes(correctness)) {
      display.innerHTML = `<img src="https://im.rediff.com/news/2017/dec/11live-derek.jpg" alt="" width="20%" height="100%"  style="border-radius: 50%;">
      <p style="text-align: center;">Our expert is Mr. Derek O Brien , The famous
      quiz master of India.<br> And according to him, The correct answer is<br>
      <b>${ans3.innerHTML}</b></p>`;
    }
    if (String(ans4.innerHTML).includes(correctness)) {
      display.innerHTML = `<img src="https://im.rediff.com/news/2017/dec/11live-derek.jpg" alt="" width="20%" height="100%"  style="border-radius: 50%;">
      <p style="text-align: center;">
      Our expert is Mr. Derek O Brien , The famous
      quiz master of India.<br> And according to him, The correct answer is<br>
      <b>${ans4.innerHTML}</b></p>`;
    }
  }
  b2.style.backgroundImage = "url('cross.jpg')";
  b2.style.backgroundPosition = "100% 100%";
}

let b3 = document.querySelector("div.b3");
let rep3 = 0;
b3.addEventListener("click", fifty);
function fifty() {
  display.style.display="none";
  if (rep3 == 0) {
    bgm.src=`audio3.mp3`;
    bgm.play();
    
    rep3 = 1;
    if (String(ans1.innerHTML).includes(correctness)) {
      ans2.style.display = "none";
      ans3.style.display = "none";
    }
    if (String(ans2.innerHTML).includes(correctness)) {
      ans1.style.display = "none";
      ans4.style.display = "none";
    }
    if (String(ans3.innerHTML).includes(correctness)) {
      ans1.style.display = "none";
      ans4.style.display = "none";
    }
    if (String(ans4.innerHTML).includes(correctness)) {
      ans2.style.display = "none";
      ans3.style.display = "none";
    }
  }
  b3.style.backgroundImage = "url('cross.jpg')";
  b3.style.backgroundPosition = "100% 100%";
}


