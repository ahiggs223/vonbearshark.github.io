/** @jsx m */

'use strict';

let m = require('mithril');

module.exports = function(ctrl) {
    return <div class='position'>
        {ctrl.position.title ?
            <h4 class='title'>{ctrl.position.title}</h4>
        : null}
        {ctrl.position.date ?
            <h4 class='date'>{ctrl.position.date}</h4>
        : null}
        {ctrl.position.description ?
            <p class='description'>{ctrl.position.description}</p>
        :null}
    </div>;
};
