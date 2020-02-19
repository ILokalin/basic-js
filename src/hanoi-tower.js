const SECONDS_PER_HOUR = 3600;

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
    let turns = Math.pow(2, diskNumber) - 1; 

    return {
        turns,
        seconds: turns / (turnsSpeed / SECONDS_PER_HOUR)
    };
}