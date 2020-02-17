module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
    let turns = Math.pow(2, diskNumber) - 1; 

    return {
        turns,
        seconds: turns / (turnsSpeed / 3600)
    };
}