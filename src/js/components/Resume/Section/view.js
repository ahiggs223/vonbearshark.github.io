/** @jsx m */

'use strict';

let m = require('mithril'),
    OrganizationComponent = require('../Organization/Organization');

module.exports = function(ctrl) {
    return <div class='section'>
        {ctrl.section.heading ?
            <h2 class='heading'>{ctrl.section.heading}</h2>
        : null}
        {ctrl.section.organizations.map(function(organization) {
            return <OrganizationComponent organization={organization} />;
        })}
    </div>;
};
