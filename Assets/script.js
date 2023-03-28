//Current date 
var dayEl = document.getElementById('day');
dayEl.textContent = dayjs().format('MMM DD YYYY');

// Setting up local storage to text
var sectionOneElText = localStorage.getItem('firstHour');
var sectionTwoElText = localStorage.getItem('secondHour');
var sectionThreeElText = localStorage.getItem('thirdHour');
var sectionFourElText = localStorage.getItem('fourthHour');
var sectionFiveElText = localStorage.getItem('fifthHour');
var sectionSixElText = localStorage.getItem('sixthHour');
var sectionSevenElText = localStorage.getItem('seventhHour');
var sectionEightElText = localStorage.getItem('eighthHour');
var sectionNineElText = localStorage.getItem('ninthHour');

// Time Format (hours)
var time1El = document.getElementById('time1')
var time2El = document.getElementById('time2')
var time3El = document.getElementById('time3')
var time4El = document.getElementById('time4')
var time5El = document.getElementById('time5')
var time6El = document.getElementById('time6')
var time7El = document.getElementById('time7')
var time8El = document.getElementById('time8')
var time9El = document.getElementById('time9')

time1El.textContent = dayjs().hour(9).format('hh A')
time2El.textContent = dayjs().hour(10).format('hh A')
time3El.textContent = dayjs().hour(11).format('hh A')
time4El.textContent = dayjs().hour(12).format('hh A')
time5El.textContent = dayjs().hour(13).format('hh A')
time6El.textContent = dayjs().hour(14).format('hh A')
time7El.textContent = dayjs().hour(15).format('hh A')
time8El.textContent = dayjs().hour(16).format('hh A')
time9El.textContent = dayjs().hour(17).format('hh A')

// Confirm buttons
var confirmBtn1El = document.getElementById('confirmBtn1');
var confirmBtn2El = document.getElementById('confirmBtn2');
var confirmBtn3El = document.getElementById('confirmBtn3');
var confirmBtn4El = document.getElementById('confirmBtn4');
var confirmBtn5El = document.getElementById('confirmBtn5');
var confirmBtn6El = document.getElementById('confirmBtn6');
var confirmBtn7El = document.getElementById('confirmBtn7');
var confirmBtn8El = document.getElementById('confirmBtn8');
var confirmBtn9El = document.getElementById('confirmBtn9');

// Confirms meeting has been added to the schedule
var locationConfirmEl = document.getElementById('locationConfirmed');

confirmBtn1El.addEventListener('click', function () {
    var sectionOneEl = document.getElementById('section1');
    var sectionOneElText = sectionOneEl.value;
    localStorage.setItem('firstHour', sectionOneElText);
});

confirmBtn2El.addEventListener('click', function () {
    var sectionTwoEl = document.getElementById('section2');
    var sectionTwoElText = sectionTwoEl.value;
    localStorage.setItem('secondHour', sectionTwoElText);
});

confirmBtn3El.addEventListener('click', function () {
    var sectionThreeEl = document.getElementById('section3');
    var sectionThreeElText = sectionThreeEl.value;
    localStorage.setItem('thirdHour', sectionThreeElText);  
});

confirmBtn4El.addEventListener('click', function () {
    var sectionFourEl = document.getElementById('section4');
    var sectionFourElText = sectionFourEl.value;
    localStorage.setItem('fourthHour', sectionFourElText);  
});

confirmBtn5El.addEventListener('click', function () {
    var sectionFiveEl = document.getElementById('section5');
    var sectionFiveElText = sectionFiveEl.value;
    localStorage.setItem('fifthHour', sectionFiveElText);   
});

confirmBtn6El.addEventListener('click', function () {
    var sectionSixEl = document.getElementById('section6');
    var sectionSixElText = sectionSixEl.value;
    localStorage.setItem('sixthHour', sectionSixElText);  
});

confirmBtn7El.addEventListener('click', function () {
    var sectionSevenEl = document.getElementById('section7');
    var sectionSevenElText = sectionSevenEl.value;
    localStorage.setItem('seventhHour', sectionSevenElText);
});

confirmBtn8El.addEventListener('click', function () {
    var sectionEightEl = document.getElementById('section8');
    var sectionEightElText = sectionEightEl.value;
    localStorage.setItem('eighthHour', sectionEightElText);
});

confirmBtn9El.addEventListener('click', function () {
    var sectionNineEl = document.getElementById('section9');
    var sectionNineElText = sectionNineEl.value;
    localStorage.setItem('ninthHour', sectionNineElText);
});

// Meetings scheduled stays after refreshing page
var sectionOneEl = document.getElementById('section1').value = sectionOneElText;
var sectionTwoEl = document.getElementById('section2').value = sectionTwoElText;
var sectionThreeEl = document.getElementById('section3').value = sectionThreeElText;
var sectionFourEl = document.getElementById('section4').value = sectionFourElText;
var sectionFiveEl = document.getElementById('section5').value = sectionFiveElText;
var sectionSixEl = document.getElementById('section6').value = sectionSixElText;
var sectionSevenEl = document.getElementById('section7').value = sectionSevenElText;
var sectionEightEl = document.getElementById('section8').value = sectionEightElText;
var sectionNineEl = document.getElementById('section9').value = sectionNineElText;

//Creates the color for the past, present, and future.
function colorize() {
    
    if (dayjs().isSame(dayjs().hour(9))) {
        document.getElementById('section1').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(9))) {
        document.getElementById('section1').style.backgroundColor = "grey";
    } else {
        document.getElementById('section1').style.backgroundColor = "green";
    }
    
    if (dayjs().isSame(dayjs().hour(10))) {
        document.getElementById('section2').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(10))) {
        document.getElementById('section2').style.backgroundColor = "grey";
    } else {
        document.getElementById('section2').style.backgroundColor = "green";
    }
   
    if (dayjs().isSame(dayjs().hour(11))) {
        document.getElementById('section3').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(10))) {
        document.getElementById('section3').style.backgroundColor = "grey";
    } else {
        document.getElementById('section3').style.backgroundColor = "green";
    }
  
    if (dayjs().isSame(dayjs().hour(12))) {
        document.getElementById('section4').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(12))) {
        document.getElementById('section4').style.backgroundColor = "grey";
    } else {
        document.getElementById('section4').style.backgroundColor = "green";
    }
   
    if (dayjs().isSame(dayjs().hour(13))) {
        document.getElementById('section5').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(13))) {
        document.getElementById('section5').style.backgroundColor = "grey";
    } else {
        document.getElementById('section5').style.backgroundColor = "green";
    }
    
    if (dayjs().isSame(dayjs().hour(14))) {
        document.getElementById('section6').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(14))) {
        document.getElementById('section6').style.backgroundColor = "grey";
    } else {
        document.getElementById('section6').style.backgroundColor = "green";
    }
    
    if (dayjs().isSame(dayjs().hour(15))) {
        document.getElementById('section7').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(15))) {
        document.getElementById('section7').style.backgroundColor = "grey";
    } else {
        document.getElementById('section7').style.backgroundColor = "green";
    }
   
    if (dayjs().isSame(dayjs().hour(16))) {
        document.getElementById('section8').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(16))) {
        document.getElementById('section8').style.backgroundColor = "grey";
    } else {
        document.getElementById('section8').style.backgroundColor = "green";
    }
   
    if (dayjs().isSame(dayjs().hour(17))) {
        document.getElementById('section9').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(17))) {
        document.getElementById('section9').style.backgroundColor = "grey";
    } else {
        document.getElementById('section9').style.backgroundColor = "green";
    }
}

setInterval(colorize, 100)