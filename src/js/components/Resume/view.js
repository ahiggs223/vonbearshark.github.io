/** @jsx m */

'use strict';

let m = require('mithril'),
    SectionComponent = require('./Section/Section');

module.exports = function(ctrl) {
    return <div id='resume'>
        {ctrl.resume.map(function(section) {
            return <SectionComponent section={section} />;
        })}
    </div>;
};
