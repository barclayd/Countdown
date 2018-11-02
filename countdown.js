const updateTimer = (deadline) => {
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
    const timeInterval = setInterval(() => {
        const clock = document.getElementById(id);
        const timer = updateTimer(deadline);
    }, 1000);
}


window.onload = () => {
    const deadline = new Date("June 1, 2019 00:00:00");
    startTimer("clock", deadline)
};