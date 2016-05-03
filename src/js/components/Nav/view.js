/* @jsx m */

'use strict';

let m = require('mithril');

module.exports = function(ctrl) {
    return <nav>
        <ul>
            {ctrl.routes.map(function(route) {
                return <li>
                    <a href = {route.route} config={m.route}>
                        <h2>
                            {route.name}
                        </h2>
                    </a>
                </li>;
            })}
        </ul>
    </nav>;
};
