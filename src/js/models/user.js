
//user object used for filling in all the data

let user = {

/* jshint ignore:start */
    name: 'JJ Naughton',
    tagline:`Full-stack web developer, writer, and student 
    at the University of Pittsburgh`,
    email: 'jjnaughton93@gmail.com',
    contacts: [{
            link: 'https://www.facebook.com/jj.naughton.93',
            iconPath: 'content/banner/facebook.png',
            name: 'Facebook'
        },
        {
            link: 'https://twitter.com/vonbearshark',
            iconPath: 'content/banner/twitter.png',
            name: 'Twitter'
        },
        {
            link: 'https://plus.google.com/+JasonNaughton93/',
            iconPath: 'content/banner/google-plus.png',
            name: 'Google+'
        },
        {
            link: 'https://www.linkedin.com/pub/jason-naughton/7b/bb/41',
            iconPath: 'content/banner/linkedin.png',
            name: 'LinkedIn'
        },
        {
            link: 'https://github.com/vonbearshark',
            iconPath: 'content/banner/github.png',
            name: 'Github'
        },
        {
            link: 'http://vonbearshark.github.io',
            iconPath: 'content/banner/pencil.png',
            name: 'Blog'
        }],
    profilePicture: 'content/banner/profilePicture.jpg',
    bannerVideos: [{
        path: 'content/banner/video1.mp4',
        type: 'video/mp4'
    }],
    coverLetterParagraphs: [
        "I am an undergraduate CS student at the University of Pittsburgh, expected to graduate May 2017.",
        "Over this summer of 2015, I interned with PayPal as a software engineer intern at the San Jose headquarters. As a part of the Next-Gen Commerce team, I was treated as a full-time employee and contributed to brainstorming and prototyping the latest (and, unfortunately, confidential) payments technology with senior leadership and partners in a lean, startup-like, agile environment. I've also been working with OThot, a Pittsburgh-based data-science and analytics startup, since this January, helping build the user interface for their analytics engine from the ground up. In addition to this professional experience, I have been very involved with the Pitt Computer Science Club. I have presented on various web development topics, and helped organize the university's first hackathon, Steelhacks.",
        "Technically, I have the most experience with isomorphic JavaScript stacks: Node/Express, Seneca, Meteor, and frontend frameworks and libraries, such as Angular, Backbone, and React, in addition to HTML/Handlebars, CSS/SCSS (and frameworks such as Pure and Bootstrap), and jQuery. Most of my formal CS education is in Java and Python, and I have used Django and Flask for hackathon projects. In storage, I am most familiar with NoSQL databases, especially MongoDB and Cassandra, but I have used MySQL for the aforementioned hackathon projects. For ops, I am generally familiar with git, Linux environments, Vagrant and virtual machines, and, lately, I have been dipping my toes into Docker and the related ecosystem.",
        "In addition to my technical skills, I also have a wealth of communications, public relations writing, and social media management experience gained from my completed B.A. in English Writing, certificate in Professional and Public Writing, and related internships.",
        "I am looking to work in the company of equally passionate creators, on projects that impact the world at large.",
        "I am an undergraduate CS student at the University of Pittsburgh, expected to graduate May 2017.",
        "Over this summer of 2015, I interned with PayPal as a software engineer intern at the San Jose headquarters. As a part of the Next-Gen Commerce team, I was treated as a full-time employee and contributed to brainstorming and prototyping the latest (and, unfortunately, confidential) payments technology with senior leadership and partners in a lean, startup-like, agile environment. I've also been working with OThot, a Pittsburgh-based data-science and analytics startup, since this January, helping build the user interface for their analytics engine from the ground up. In addition to this professional experience, I have been very involved with the Pitt Computer Science Club. I have presented on various web development topics, and helped organize the university's first hackathon, Steelhacks.",
        "Technically, I have the most experience with isomorphic JavaScript stacks: Node/Express, Seneca, Meteor, and frontend frameworks and libraries, such as Angular, Backbone, and React, in addition to HTML/Handlebars, CSS/SCSS (and frameworks such as Pure and Bootstrap), and jQuery. Most of my formal CS education is in Java and Python, and I have used Django and Flask for hackathon projects. In storage, I am most familiar with NoSQL databases, especially MongoDB and Cassandra, but I have used MySQL for the aforementioned hackathon projects. For ops, I am generally familiar with git, Linux environments, Vagrant and virtual machines, and, lately, I have been dipping my toes into Docker and the related ecosystem.",
        "In addition to my technical skills, I also have a wealth of communications, public relations writing, and social media management experience gained from my completed B.A. in English Writing, certificate in Professional and Public Writing, and related internships.",
        "I am looking to work in the company of equally passionate creators, on projects that impact the world at large." ],
    resume: [{
            heading: 'Relevant Experience',
            organizations: [{
                name: 'PayPal',
                location: 'San Jose, CA',
                positions: [{
                    title: 'Software Engineer Intern',
                    date: 'May-August 2015',
                    description: 'With the Next-Gen Commerce team, I worked closely with leadership in a lean, fast-paced environment to integrate with high-profile partners and prototype next-gen products, using technologies such as Node.js, AngularJS, and Backbone.js'
                }]
            },
            {
                name: 'OThot',
                location: 'Pittsburgh, PA',
                positions: [{
                    title: 'Software Developer',
                    date: 'December 2014-present',
                    description: 'As a part-time software developer with the budding big-data startup, I prototyped the frontend data-visualization MVP and developed the foundation for the long-term product, using such technologies as: Node.js, AngularJS, D3, and jQuery.'
                }]
            }]
        },
        {
            heading: 'Education',
            organizations: [{
                name: 'University of Pittsburgh',
                location: 'Pittsburgh, PA',
                positions: [{
                    title: 'Bachelors of Science in Computer Science',
                    date: 'Anticipated: April 2017',
                    description: ''
                },
                {
                    title: 'Bachelors of Arts in English Writing',
                    date: 'April 2015',
                    description: ''
                },
                {
                    title: 'Certificate of Public Writing',
                    date: 'April 2015',
                    description: ''
                },
                {
                    title: 'Dean\'s List',
                    date: 'Fall 2013, Spring 2014',
                    description: ''
                },
                {
                    title: 'Study Abroad: Florence Italy',
                    date: 'January-April 2014',
                    description: ''
                }]
            }]
        },

        {
            heading: 'Language, Frameworks, and Tools',
            organizations: [{
                name: '',
                location: '',
                positions: [{
                    title: 'Frontend',
                    date: '',
                    description: 'JavaScript, jQuery, AngularJS, Backbone.js, Mithril.js, D3, Jade, Handlebars, Sass/SCSS, Stylus'
                }, 
                {
                    title: 'Backend',
                    date: '',
                    description: 'Node.js, Express.js, Kraken.js, Seneca.js, Meteor.js, Flask, Java'
                },
                {
                    title: 'Storage',
                    date: '',
                    description: 'MySQL, MongoDB'
                },
                {
                    title: 'Tools',
                    date: '',
                    description: 'Git, NPM, Bower, Gulp.js, Browserify'
                }]
            }]
        },
        {
            heading: 'Clubs and organizations',
            organizations: [{
                name: 'The Pitt Computer Science Club',
                location: '',
                positions: [{
                    title: 'Member',
                    date: 'August 2014-present',
                    description: 'Presented a series of talks and workshops on JavaScript and web development. Also helped organize the university’s first hackathon, SteelHacks.'
                }]
            },
            {
                name: 'Pittsburgh JavaScript',
                location: '',
                positions: [{
                    title: 'Member',
                    date: 'August 2014-present',
                    description: 'Attended bi-weekly meet-ups for local web developers with presentations by notable contributors to open source JS projects.'
                }],
            },
            {
                name: 'Hackathons',
                location: '',
                positions: [{
                    title: 'LinkedIn\'s HackDay',
                    date: '2015',
                    description: ''
                },
                {
                    title: 'SteelHacks',
                    date: '2015',
                    description: ''
                },
                {
                    title: 'TartanHacks',
                    date: '2014',
                    description: ''
                },
                {
                    title: 'GiveCamp',
                    date: '2014',
                    description: ''
                }]
            }]
        },
        {
            heading: 'Other Experience',
            organizations: [{
                name: 'Greenspring Media',
                location: 'Minneapolis, MN',
                positions: [{
                    title: 'Digital Content Management Intern',
                    date: 'April-August 2014',
                    description: 'Digital media writing and editorializing.'
                }]
            },
            {
                name: 'CAPA/San Gaspare Elementary School',
                location: 'Florence, Italy',
                positions: [{
                    title: 'Volunteer',
                    date: 'January-April 2014',
                    description: 'Volunteered as an English Teaching Assistant at the elementary school, while studying in Florence, Italy.'
                }]
            },
            {
                name: 'Collegiate YMCA',
                location: 'Pittsburgh, PA',
                positions: [{
                    title: 'Americorps Community Fellow',
                    date: 'August 2011-2013',
                    description: 'Autonomously taught after-school courses focused on STEM curriculums at the Homewood YMCA.'
                }]
            },
            {
                name: 'Emerging Leaders',
                location: 'Pittsburgh, PA',
                positions: [{
                    title: 'Student Leader',
                    date: 'October-November 2012',
                    description: 'Two-month leadership program with University of Pittsburgh with classes focused on leadership and diversity. Graduated with an emblem of service.'
                }]
            },
            {
                name: 'Outward Bound',
                location: 'WA',
                positions: [{
                    title: 'Camper',
                    date: 'August 2011',
                    description: 'Two-week hiking program in the Pasayten Wilderness with the renowned leadership and team-building name.'
                }]
            }]
        }],
        projects: [{
                project:'Zen Comments',
                site: 'https://chrome.google.com/webstore/detail/zen-comments/lhoapfkikeaocmlhffbmldnnojpkeako',
                repo: 'https://github.com/vonbearshark/zen-comments',
                description: 'Bob Ross-ify the comments section.'
            },
            {
                project:'Infinite Viral Chrome Extension',
                site: 'https://chrome.google.com/webstore/detail/infinite-viral/gejghfapdoblkdeghocaggoalocccacg',
                repo: 'https://github.com/vonbearshark/infinite-viral-extension',
                description: 'Top 10 Reasons Only 90\'s Kids Won\'t Even Believe What This Chrome Browser Extension Does! (Number #8 Made Me Question My Sexuality!)'
            },
            {
                project:'Vonbearshark blog',
                site: 'http://vonbearshark.github.io',
                repo: 'https://github.com/vonbearshark/vonbearshark.github.io',
                description: 'My personal blog. Built using the Javascript-based static site generator, Wintersmith'
            },
            {
                project: 'Llamapocalypse',
                site: 'http://llamapocalypse.herokuapp.com/',
                repo: 'https://github.com/vonbearshark/Llamapolooza',
                description: 'The year is 3014, and llamas have taken over humanity. The new llama order has prepared a thinly veiled PR presentation for the defeated human race.'
            },
            {
                project: 'Llamapocalypse First Blood: Part II',
                site: 'https://chrome.google.com/webstore/detail/llamapocalypse-first-bloo/iognjlcbjjooclkoghpmkneghdkhaddc',
                repo: 'https://github.com/vonbearshark/llamapocalypse-first-blood-part-II',
                description: 'Infinite Viral Chrome extension for the inevitable llama distopia. All your headlines are belong to us.'
            },
            {
                project: 'Ghostbusters Inc.',
                site: 'http://ghostbusters.herokuapp.com/',
                repo: 'https://github.com/vonbearshark/PRWebsite',
                description: 'I created this small site for my Public Relations coursework towards the Professional and Public Writing Ceritificate. The assignment was to quantify a company\'s brand and to market a website towards its intentions.'
            }]
/* jshint ignore:end */
};


module.exports = user;

