let countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 7);
countDownDate = countDownDate.getTime()

const x = setInterval(function() {
    const now = Date.now();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "TIME HAS EXPIRED";
    }
}, 1000);