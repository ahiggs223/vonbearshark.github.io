/** @jsx m */

'use strict';

let m = require('mithril');

module.exports = function(ctrl) {
    return <div id='coverletter'>
        <div class='letter-outer'>
            <div class='letter-inner'>
                {ctrl.coverLetterParagraphs.map(function(paragraph) {
                    return <p>
                        {paragraph}
                    </p>;
                })}
                <p>Click here to 
                    <a href = 'content/resume/jjnaughtonresume.pdf' 
                        target = '_blank'>
                        download a PDF version
                    </a>
                     of my resume.</p>
            </div>
        </div>
    </div>;
};
