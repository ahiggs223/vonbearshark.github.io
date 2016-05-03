/** @jsx m */

'use strict';

let m = require('mithril'),
    PositionComponent = require('../Position/Position');

module.exports = function(ctrl) {
    return <div class='organization'>
        {ctrl.organization.name ?
            <h3 class='name'>{ctrl.organization.name}</h3>
        : null}
        {ctrl.organization.positions.map(function(position) {
            return <PositionComponent position={position} />;
        })}
    </div>;
};
