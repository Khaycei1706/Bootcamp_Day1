'use strict';

module.exports = {
    findMinMax: findMinMax
}

function findMinMax(numbers) {
    let min = Math.min.apply(null, numbers);
    let max = Math.max.apply(null, numbers);
    if (min === max) {
        return [min];
    } else {
        return [min, max];
    }
}