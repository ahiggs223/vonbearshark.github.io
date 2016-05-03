/** @jsx m */

'use strict';

let m = require('mithril'),
    BannerComponent = require('../Banner/Banner'),
    NavComponent = require('../Nav/Nav'),
    ResumeComponent = require('../Resume/Resume'),
    CoverLetterComponent = require('../CoverLetter/CoverLetter'),
    FooterComponent = require('../Footer/Footer');

module.exports = function(ctrl) {
    return <section>
        <BannerComponent />
        <NavComponent />
        <div id='main'>
            <CoverLetterComponent />
            <ResumeComponent />
        </div>
        <FooterComponent />
    </section>;
};
