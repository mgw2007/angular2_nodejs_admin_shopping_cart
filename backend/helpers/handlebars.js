function hbsHelpers(hbs) {
    return hbs.create({
        helpers: {
            inc: function (value, options) {
                return parseInt(value) + 1;
            },
            'ifTwoOperator': function (val1, operator, val2, targetValue, options) {
                switch (operator) {
                    case '%':
                        // return val1 % val2 == targetValue;
                        if (val1 % val2 == targetValue) {
                            return options.fn(this);
                        }
                        else {
                            return options.inverse(this);
                        }
                        break;
                    case '>':
                        // return val1 % val2 == targetValue;
                        if (val1 > val2 ) {
                            console.log(val1 + '>' + val2 + ' TRUE');
                            return options.fn(this);
                        }
                        else {
                            console.log(val1 + '>' + val2 + ' FALSE');
                            return options.inverse(this);
                        }
                        break;
                }
            }
        }
    });
}

module.exports = hbsHelpers;