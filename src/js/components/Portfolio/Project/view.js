/** @jsx m */

'use strict';

let m = require('mithril');

module.exports = function(ctrl) {
    return  <div class='project-outer'>
        <div class='project-inner'>
            <h2>
                <a href={ctrl.project.site} target = '_blank'>
                    {ctrl.project.project}
                </a>
            </h2>
            <p>{ctrl.project.description}</p>
            <p>Check out the live 
            <a href={ctrl.project.site} target = '_blank'>
                application 
                </a>
                or the 
                <a href = {ctrl.project.repo} target = '_blank'>
                Github repository</a>
            !</p>
        </div>
    </div>;
};
