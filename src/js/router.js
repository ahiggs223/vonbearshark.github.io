'use strict';

let HomeComponent = require('./components/Home/Home'),
    PortfolioComponent = require('./components/Portfolio/Portfolio');

module.exports = {
    "/": HomeComponent,
    "/portfolio": PortfolioComponent,
};
