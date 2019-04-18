// https://www.w3schools.com/howto/howto_js_countdown.asp

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date();

    // Time calculations for days, hours, minutes and seconds
//    var days = Math.floor(now / (1000 * 60 * 60 * 24));
//    var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//    var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
//    var seconds = Math.floor((now % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //     + minutes + "m " + seconds + "s ";


//gekopieerd van https://www.w3schools.com/jsref/jsref_getday.asp
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

//ook van https://www.w3schools.com/jsref/jsref_getmonth.asp
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";



//Om de juiste dag van de week te kiezen
    document.getElementById("daytext").innerHTML = weekday[now.getDay()];

    document.getElementById("days").innerHTML = now.getDate();
//    document.getElementById("months").innerHTML = now.getMonth()+1;

    //om de kloppende naam van de maand bij het getal te halen
    document.getElementById("months").innerHTML = month[now.getMonth()];
    document.getElementById("years").innerHTML = now.getFullYear();

//    document.getElementById("days").innerHTML = "" + days;
    document.getElementById("hours").innerHTML = now.getHours();
    document.getElementById("minutes").innerHTML = now.getMinutes();
    document.getElementById("seconds").innerHTML = now.getSeconds();

}, 1000);