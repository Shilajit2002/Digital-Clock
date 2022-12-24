const Clock = () => {
    let a = new Date();

    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();

    let day = a.getDay();
    let month = a.getMonth();
    let year = a.getFullYear();

    let am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    let MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("h").innerHTML = hour;
    document.getElementById("m").innerHTML = min;
    document.getElementById("s").innerHTML = sec;

    document.getElementById("day").innerHTML = DAY[day];
    document.getElementById("month").innerHTML = MONTH[month];
    document.getElementById("year").innerHTML = year;

    document.getElementById("time").innerHTML = am_pm;

    document.getElementById("full").innerHTML = a.getDate() + " - " + a.getMonth() + " - " + a.getFullYear();

    let hrotation = 30 * hour + min / 2;
    let mrotation = 6 * min;
    let srotation = 6 * sec;

    document.getElementById("circleHour").style.transform = `rotate(${hrotation}deg)`;
    document.getElementById("circleMinute").style.transform = `rotate(${mrotation}deg)`;
    document.getElementById("circleSecond").style.transform = `rotate(${srotation}deg)`;
}

const createBubble = () => {
    let con = document.querySelector(".container");
    let bubble = document.createElement('span');

    let size = Math.random() * 60;

    bubble.style.width = 20 + size + 'px';
    bubble.style.height = 20 + size + 'px';
    bubble.style.left = Math.random() * innerWidth + "px";

    con.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 4000);
}

setInterval(Clock, 1000);

setInterval(createBubble, 50);





