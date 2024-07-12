function checkSpeed() {
    let speed = prompt("Enter the speed of the car (in km/h):");
    speed = parseFloat(speed);

    if (isNaN(speed) || speed < 0) {
        alert("Please enter a positive number.");
        return;
    }

    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;

    if (speed <= speedLimit) {
        alert("Ok");
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points > maxPoints) {
            alert("License suspended");
        } else {
            alert("Points:" + points);
        }
    }
}



