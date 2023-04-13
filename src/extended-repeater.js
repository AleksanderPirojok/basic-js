const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

/*
    repeatTimes sets the number of repetitions of the str;
    separator is a string separating repetitions of the str;
    addition is an additional string that will be added to each repetition of the str;
    additionRepeatTimes sets the number of repetitions of the addition;
    additionSeparator is a string separating repetitions of the addition.
*/

function repeater(str, options) {
    let result = '';

    let obj = {};
    obj.repeatTimes = options.repeatTimes ? options.repeatTimes : 0;
    obj.separator = options.separator ? options.separator : '+';
    obj.addition = (typeof options.addition === 'undefined') ? '' : String(options.addition);
    obj.additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0;
    obj.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

    let string = String(str);

    if (obj.additionRepeatTimes > 0) {
        let subArr = [];
        for (let i = 0; i < obj.additionRepeatTimes; i++) {
            subArr.push(obj.addition);
        }
        string += subArr.join(obj.additionSeparator);
    } else {
        string += obj.addition;
    }

    if (obj.repeatTimes > 0) {
        let subArr = [];
        for (let i = 0; i < obj.repeatTimes; i++) {
            subArr.push(string);
        }
        result += subArr.join(obj.separator);
    } else {
        result = string;
    }

    return result;
}

module.exports = {
  repeater
};
