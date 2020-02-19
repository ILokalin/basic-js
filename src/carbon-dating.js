const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LOGARITHM_NATURAL_FROM_2 = 0.693;

module.exports = function dateSample(stamp) {
  let stampNumber = Number(/-?\d+\.?\d*/.exec(stamp));

  if (typeof stampNumber !== 'NaN' && typeof stamp === 'string' && stampNumber > 0 && stampNumber < MODERN_ACTIVITY) {

    return Math.ceil(HALF_LIFE_PERIOD / (LOGARITHM_NATURAL_FROM_2 / Math.log(MODERN_ACTIVITY / stampNumber) ));
  }

  return false;
};
