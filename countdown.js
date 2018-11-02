let updateTimer = (deadline) => {
    // calculates time left until deadline 
    const time = deadline - new Date();
    return {
        'days': Math.floor(time / (1000 * 60 * 60 * 24)),
        'hours': Math.floor((time / (1000 * 60 * 60)) % 24),
        'minutes': Math.floor((time / (1000 * 60)) % 60),
        'seconds': Math.floor((time / (1000)) % 60),
        'time': time
    };
}

const startTimer = (id, deadline) => {
    // calls updateTimer every second
    const timeInterval = setInterval(() => {
        const clock = document.getElementById(id);
        let timer = updateTimer(deadline);

        clock.innerHTML =
            '<span>' + timer.days + '</span>' +
            '<span>' + timer.hours + '</span>' +
            '<span>' + timer.minutes + '</span>' +
            '<span>' + timer.seconds + '</span>';

    }, 1000);
}


window.onload = () => {
    const deadline = new Date("June 1, 2019 00:00:00");
    startTimer("clock", deadline)
};