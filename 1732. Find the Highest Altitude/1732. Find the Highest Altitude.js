
var largestAltitude = function (gain) {
    let previousAltitude = 0, maxAltitude = 0;
    for (let altitude of gain) {
        let currentAltitude = previousAltitude + altitude;
        previousAltitude = currentAltitude;
        maxAltitude = Math.max(maxAltitude, currentAltitude);
    }
    return maxAltitude;
};