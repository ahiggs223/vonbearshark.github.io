/** @jsx m */

'use strict';

let m = require('mithril');

module.exports = function(ctrl) {
    return <header>
        <div id='header-background-video'>
            <video loop='true' muted='true' autoplay='true'>
                {ctrl.bannerVideos.map(function(video) {
                    return <source src={video.path} type={video.type}></source>;
                })}
            </video>
        </div>
        <img id='profilePicture' 
            src={ctrl.profilePicture} alt="Profile Picture" />
        <h1>{ctrl.name}</h1>
        <h3>{ctrl.tagline}</h3>
        <div id='icons'>
            {ctrl.contacts.map(function(contact) {
                return <a href={contact.link}>
                    <img class='icon' 
                        src={contact.iconPath} alt={contact.name} />
                </a>;
            })}
        </div>
    </header>;
};
