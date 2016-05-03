/** @jsx m */

'use strict';

let m = require('mithril');

module.exports = function(ctrl) {
    return <footer>
        <p>Homemade with Mitrhil.js.</p>
        <a href = { 'mailto:' + ctrl.email } >Contact Via Email</a>
    </footer>;
};
