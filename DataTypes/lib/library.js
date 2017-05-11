'use strict';

module.exports = {
    dataTypes: dataTypes
}

function dataTypes(input) {
    if (input === null || input === undefined) {
        return 'no value';
    } else if (input === true || input === false) {
        return input;
    } else if (typeof(input) === 'number' && input < 100) {
        return 'less than 100';
    } else if (typeof(input) === 'number' && input > 100) {
        return 'more than 100';
    } else if (typeof(input) === 'number' && input === 100) {
        return 'equal to 100';
    } else if (typeof(input) === 'string' && input.length >= 1) {
        return input.length;
    } else if (typeof(input) === 'string' && input.length === 0) {
        return 0;
    } else if (typeof(input) === 'object' && input.length >= 2) {
        return input[2];
    } else if (typeof(input) === 'function') {
        return input(true);
    }
}

var callback = function(arg) {
    if (arg === true) {
        return 'called callback';
    }
};