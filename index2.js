// below is a function explaining the description of the speed detector
function speedDetector(speed) {
    let speedLimit=70;
    let kmPerDemeritPoint=5;
    let pointPerKmLimit=1;
// here are the conditionals of the speedDetector function
    if (speed<=speedLimit) {
        return "Ok";
    }
    else {
        // calculate the kms gone with a speed over the limit
        const kmOverLimit=speed-speedLimit;
        // calculate the points and return various messages using conditionals
        const points=kmOverLimit/kmPerDemeritPoint;
        if (points>12) {
            return "License Suspended";
        }
        else{
            return "Points: "+points;
        }
    }
}
// test with various speeds in the speed variable declared below
const speed=100;
console.log (speedDetector(speed))