'use strict';

let model = require('../../models/nav');

module.exports = function(data) {
    let ctrl = this;
    //incoming data
    Object.assign(ctrl, data);
    //model information
    Object.assign(ctrl, model);
};