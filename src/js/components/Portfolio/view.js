/** @jsx m */

'use strict';

let m = require('mithril'),
    BannerComponent = require('../Banner/Banner'),
    NavComponent = require('../Nav/Nav'),
    ProjectComponent = require('./Project/Project'),
    FooterComponent = require('../Footer/Footer');

module.exports = function(ctrl) {
    return  <section>
        <BannerComponent />
        <NavComponent />
        <div id='main'>
            <div id='projects'>
                {ctrl.projects.map(function(project) {
                    return <ProjectComponent project={project} />;
                })}
            </div>
        </div>
        <FooterComponent />
    </section>;
};
