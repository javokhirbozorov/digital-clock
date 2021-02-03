 function digit () {
     var time = new Date();
     var hr = time.getHours();
     var min = time.getMinutes();
     var sec = time.getSeconds();
     var am_pm = "AM";

     if(hr > 12) {
        hr-=12;
        am_pm = "PM"  
     }

     if (hr == 0) {
         hr = 12;
     }

     hr = (hr<10) ? "0"+hr : hr;
     min = (min<10) ? "0"+min : min;
     sec = (sec<10) ? "0"+sec : sec;
     
     var currentTime = hr + ":" + min + ":" + sec + " "+ am_pm; 
     document.getElementById("clock").innerHTML = currentTime;

     setTimeout(digit, 1000)
    }
    
    onload=digit()

function data() {
var today = new Date();
// HAFTA-KUNLARI
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var numDays = today.getDay();
var outDay = days[numDays]; 

// OY
var monthsName = ['January','February','March','April','May','June','July','August','September','October','November','Decemeber'];
var getMonth = today.getMonth();
var months = monthsName[getMonth];

// Kunlar
var ordinal = ['Thirty-first','First','Second', 'Third','Fourth','Fifth','Sixth','Seventh','Eighth','Ninth','Tenth','Eleventh', 'Twelfth','Thirteenth','Fourteenth','Sixteenth','Seventeenth','Eighteenth','Nineteenth', 'Twentieth','Twenty-first','Twenty-second','Twenty-third','Twenty-fourth','Twenty-fifth','Twenty-sixth','Twenty-seventh','Twenty-eighth','Twenty-ninth','Thirtieth'];
var getDays = today.getDate();
var allDays = ordinal[getDays]; 

// Year
let year = today.getFullYear();

// final

var sana = '☼ Today is the ' + allDays + ' of ' + months + ' ☼ ' + year +' year ☼ '+''+ outDay + ' ☼';
document.getElementById("date").innerHTML = sana;
}

onload=data()