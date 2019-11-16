---
type: wordpress-blog
path: /2015/09/front-end-stack-for-the-cloud
title: 'Front End Stack for the Cloud'
headerImages:
    - {image: //headforwards.com/wp-content/files_mf/headforwardsprogramming21.jpeg, text: 'Front End Stack for The Cloud '}
    - {image: //headforwards.com/wp-content/files_mf/headforwardsdevelopersatbeachbbq27.jpg, text: ""}
    - {image: //headforwards.com/wp-content/files_mf/headforwardsmacbook78.jpg, text: ""}
date: '2015-09-30T15:18:25.000Z'
modified: '2017-11-03T10:54:25.000Z'
excerpt: 'Headforwards is not just about beaches and BBQs, we get some serious work done too! Glen is one of our developers and he has written the following article about a project he has been working on here at Headforwards –  Front End Stack for The Cloud. Introduction I asked a question on Twitter about what people …'
categories:
    - Coding
    - Informational
    - News
    - 'The Headforwards Team'
tags:
    - 'cloud infrastructure'
    - 'full stack development'
    - Glen
    - Headforwards
    - Python
    - 'software development'
    - 'software development cornwall'
    - TDD
author:
    id: 0c471ce3-c08d-545b-9457-33251e971504
    slug: lyssa
    name: 'Lyssa Crump'
    path: /author/lyssa/

---
Headforwards is not just about beaches and BBQs, we get some serious work done too!  
Glen is one of our developers and he has written the following article about a project he has been working on here at Headforwards –  Front End Stack for The Cloud.

Introduction
------------

I asked a question on Twitter about what people wanted to read about in a blog post and a few people asked about our tech-stack so I thought I’d give it a go. I can’t tell you much about the project I’m working on as it’s currently in private beta-testing, but suffice to say, it is to do with a bloomin’ great big cloud.

As a front-end engineer, I can’t really go into much depth about the server-side code, but I can tell you we’re using a lot of technology including [Python](https://www.python.org/), [PostgreSQL](http://www.postgresql.org/), [InfluxDB](https://influxdb.com/), [Kafka](https://kafka.apache.org/), [Riemann](http://riemann.io/), [Nginx](http://nginx.org/) and other stuff. So I will talk about the main parts of our Front-End system and development environment.

Summary
=======

Browser
-------

[BackboneJS](http://backbonejs.org/), [Marionette](http://marionettejs.com/), [RequireJS](http://requirejs.org/), [D3.js](http://d3js.org/), [Handlebars](http://handlebarsjs.com/) templates, plus other 3rd Party libraries. CSS compiled using [SASS](http://sass-lang.com/guide#topic-2-SCSS), using Icon Fonts.

Development
-----------

*   Unit Tests – [Karma](http://karma-runner.github.io) running [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), & [SinonJS](http://sinonjs.org/)
*   Integration – [Splinter](https://pypi.python.org/pypi/splinter) (driving [Selenium](http://docs.seleniumhq.org/)  on [PyTest](http://pytest.org) framework.)
*   Tooling – [Make](https://www.gnu.org/software/make/), [NodeJS](https://nodejs.org/), [Grunt](http://gruntjs.com/) & [Bower](http://bower.io/), [Flask](http://flask.pocoo.org/) server for testing.
*   Environment – [Git](http://www.git-scm.com/), [Jenkins](http://jenkins-ci.org/), [Vagrant](https://www.vagrantup.com/), [Ansible](http://www.ansible.com/) & [Docker](https://www.docker.com/)

Background
==========

In the middle of last year, a small team, including myself, were asked to build a proof of concept application. I had to find a suitable front-end framework for longer term development whilst fleshing out a prototype. The back-end would be written in Python, a departure from the use of Perl in other previous projects. To start, we chose a lightweight Flask based server to build a simple RESTful API that could be consumed by our front-end.

I evaluated [Backbone](http://backbonejs.org/), [AngularJS](https://angularjs.org/) and [EmberJS](http://emberjs.com/). I found Ember too proscriptive, Angular less so, but I had issues with it’s scope and the mixing of HTML markup with directives. Backbone was very flexible, but the View concept is too loose to provide much direction around how to build things. After reading around – watching Brian Mann’s ‘[Scaling](https://www.youtube.com/watch?v=qWr7x9wk6_c)‘ video was really helpful – I reworked my prototype in [Marionette](http://marionettejs.com/) finding a nice balance between flexibility and giving some structure and useful helpers for applications (apps).

Tooling
=======

I chose Bower to manage client-side libraries to keep these separate from NPM packages which we started to use for tooling along with [Grunt](http://gruntjs.com/). I had no preference over Grunt or Gulp, just more familiarity with Grunt which also appeared to have more tools at the time. We’ve since bolted on GNU Make to our system, mainly for consistency with other projects and Jenkins CI, but we tend to use it for marshalling a number of sub-applications together with the same commands.

As we mature in our knowledge and skills, we’ve written our own little configs and modules to tweak tasks. I feel that now, as a more skilled team we could possibly replace Grunt with our own NPM scripts. However, using off-the-shelf packages has saved a lot of work and when considering re-inventing the wheel vs nested tooling, as a lazy programmer, I would still go for the latter. I have seen a number of articles recommending dropping task runners in favour of NPM scripts or Make, but having done some work with the latter, I’ve found it is radically different to what many of us are familiar with and takes a time to get right unless you’re familiar with it.

Modularity
==========

An initial goal was to create a flexible, modular system for our front-end apps. Backbone & Marionette lends itself well to this and we quickly started getting code re-use, but also ended up with file explosion. I chose RequireJS to try and tame this by managing dependencies. This was driven by the amount of information available and being able to get testing working with [AMD (Asynchronous Module Definition)](https://en.wikipedia.org/wiki/Asynchronous_module_definition). We have had a semi-strict rule about individual models, collections and views in a single file, but relax this where it does not make sense to expose things. Marionette’s [Collection-](http://marionettejs.com/docs/v2.4.3/marionette.collectionview.html) & [Item-](http://marionettejs.com/docs/v2.4.3/marionette.itemview.html) View paradigm is possibly one of the most used patterns in our apps and we often declare an ItemView inside an AMD module, returning a CollectionView as the ItemView is still [accessible](http://marionettejs.com/docs/v2.4.3/marionette.collectionview.html#collectionviews-childview) as a property on the prototype.

Testing Times
=============

We were determined to build testing in at the start of our development and so after researching a few alternatives, I found the combination of [Mocha](http://mochajs.org/) & [Chai](http://chaijs.com/) to be a nice to work with, whilst [Karma](http://karma-runner.github.io/) also provides coverage reports, etc. I tried [TheIntern](https://theintern.github.io/), but it really didn’t play nicely with RequireJS / AMD, which was a pity, because it still looks like the only decent candidate for Selenium driven testing using JavaScript; it’s advantage being that it uses Promise based calls which make method chaining very easy, thus avoiding nasty callback hell that some other libraries barely wrap up.

After seeing [Jon Jagger](http://www.jaggersoft.com/) talking about effective testing at Agile On The Beach, I opted for a testing approach that covered a “large footprint” of code with as few unit tests as possible. The approach of testing the rendered View’s by interacting with them and checking the state of the UI, whilst injecting mock-data, has been a useful one for us. It’s somewhere towards the [Classical](https://agilewarrior.wordpress.com/2015/04/18/classical-vs-mockist-testing/) side of testing, but we’re not religious about it.

We do write comprehensive tests for re-usable modules, tending to mock and inject the data into these whilst interacting with them closely. We have figured out a way of sharing generic sets of tests for code which extends or composes generic modules by injecting them into a single “describe” block in Mocha and re-using the tests for slightly different implementations of a module.

Visualisations
==============

Our applications visualise various types of data based on [D3.js](http://d3js.org/). It takes a while to get your head around the paradigm, however, the amount of decent [documentation](https://github.com/mbostock/d3/wiki), [examples](https://github.com/mbostock/d3/wiki/Gallery) and [libraries](http://techslides.com/50-javascript-charting-and-graphics-libraries) built with D3 allowed the entire team to experiment with lots of different options and ideas. We settled on [Rickshaw](http://code.shutterstock.com/rickshaw/) as a key component for time-series graphing as it does a lot of things out of the box. We are currently re-evaluating [Highcharts](http://www.highcharts.com/) as a replacement because Rickshaw is a little [stale](https://github.com/shutterstock/rickshaw/issues/517). I chose D3 for the same reasons as Backbone – in my experience, we’ve always wanted to customise things and the flexibility of D3 fits the bill better than alternatives I’ve seen, but Highcharts offers an awful lot of tools out of the box although I’m on the fence currently, partly because it’s theming is done with JavaScript so we shall see how it pans out.

CSS
===

We’d learnt a lot of lessons from a previous project about how CSS can grow into a giant tower of ever-increasing specificity nightmares. To help us, we got [Harry Roberts](http://csswizardry.com/) ([@csswizardry](https://twitter.com/csswizardry)) to come and talk to us about fixing the first nightmare and how to approach our new project. He was a huge help and we adopted his [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss) approach in our new project very quickly. We’d previously worked with [LESSCSS](http://lesscss.org/), but opted into using SASS, partly because we borrowed some of Harry’s [InuitCSS](https://github.com/inuitcss) framework and also because tooling / add-on’s seemed to be more widely available. We avoid dependencies on Ruby by using [Grunt-SASS](https://github.com/sindresorhus/grunt-sass) to compile our finished CSS (does [Sindresorhus](https://github.com/sindresorhus) ever sleep?).

Everyone was really excited by the prospect of doing CSS better and Harry’s workshops certainly gave us the momentum to do some really good work. We’ve gradually adopted a BEM style naming convention for things and have been fairly successful at refactoring our CSS regularly. An area I feel still needs attention is the differentiation between “Objects” & “Components” from ITCSS. We’ve tended to build the latter a lot, but have not done enough refactoring of common code into the “Objects” layer. We are also looking at implementing more rigid [linting](http://davidtheclark.com/scss-lint-styleguide/) for our SASS, but this would currently require Ruby.

We’ve adopted the use of [Icon Fonts](https://css-tricks.com/examples/IconFont/) in our system and have found [IcoMoon](https://icomoon.io/) to be invaluable for managing these. Our workflow around this is not very automated, I’m not sure it’s something we could improve on, but it now works with good communication between dev’s and designers.

Data
====

Our Backbone App talked to a RESTful API with a number of endpoints. Most of the system consumes data, with some interaction and CRUD. Because we had various modules using the same data we centralised access via a single service. We use [Backbone.Radio](https://github.com/marionettejs/backbone.radio) for modules to request data via a single “channel”. This also allows us to mock the data service for testing, very easily. Initially we’d stubbed a lot of data into our tests, but we’ve managed to factor this into common files, shared across tests and we have a simple script to scrape the API’s when they change, saving the data for mocking. Interaction with the server in tests was handled by injecting [SinonJS’ Fake Servers](http://sinonjs.org/docs/#server) to reply to POST’s, PUT’s & PATCH’s performed by our code.

Scaling
=======

One reason for choosing Marionette was that we knew that our system needed to scale. We did a lot of early work with the [Module](https://github.com/glenpike/marionette-module-example) system, but replaced this with “main” Views behaving as Controllers – mixing in where necessary. Because Marionette is dropping Module support in future, we took the hit in factoring it out early. We’ve mostly organised code by feature, rather than in “model”, “view”, “controller” folders although API specific models and collections, shared across the application codebase, are grouped into a common folder.

After six-months, one of the key issues became performance: RequireJS was great at managing our AMD modules, but the App took about 13 seconds to start. Simple fix – just concatenate and minify it. Starting a built version of the app took under 2 seconds, although we had some interesting [issues](https://github.com/jrburke/r.js/issues/793) trying to run 2 separate RequireJS apps on the same page. I also found out how to share the RequireJS configuration between the Application, browser & command-line test runners and the build system, which reduced a lot of duplication.

We use RequireJS to build our JS modules, but not minify. The r.js optimizer would minify every file inside our project whether we used it or not, so we use Grunt to build, copy, then minify only the minimum number of files – reducing build times by about 50%. CSS compiling is handled by Grunt-Sass and we don’t currently post process.

Scaling the team was also an important factor as we now number 7 front-end dev’s. We’d established a set of coding standards for HTML, CSS & JavaScript on the back of previous projects, which meant we had a good baseline. We use a code-review process along with automated checking of JavaScript with [JSHint](http://jshint.com/) ([JSLint](http://jslint.com/) is too fussy) and [Lintspaces](https://github.com/schorfES/grunt-lintspaces). The latter works with [EditorConfig](http://editorconfig.org/) so we include our configuration file in the repository and people can use their choice of editor which supports it.

We’ve also worked quite hard on getting our documentation sorted to share knowledge among the team. This is still not perfect – we have information which goes out of date, but the most regularly used pages get fixed by everyone and we communicate well too. As we’ve grown together over the past months, we’ve got tons better at this and it shows in our progress and improved skills as a result.

Scaling the data
----------------

We had started to get very large data-sets coming back from the server >2000 rows (which was a performance target). This isn’t a huge problem until you try to render it with views that nest further Collection/Item Views, so one screen was particularly bad. We measured our performance, (>13seconds to render), then set about improvements. We had made a number of rendering improvements after few spikes with various ideas, but testers began complaining that 6000+ rows of data meant their tests were taking too long to run. We deciding on a pagination approach instead, adopting the [Backbone.Paginator](https://github.com/backbone-paginator/backbone.paginator) library, which was reasonably easy to drop into our system This sped up rendering no-end and coupled with a “Search” system for the API’s means the system is snappy and it makes it easy to locate specific models.

Deployment
==========

Our applications are deployed in [Docker](https://www.docker.com/) containers running behind Nginx servers. The entire project has adopted Docker for deployment so we have a very consistent “output” from each team that the others understand how to handle. The contents of each container may differ, but on the outside we have a common system that everyone has learnt how to work with and it makes deployment of our entire system more simple. It also allows us to deploy known versions of the system as we use a [Docker Registry](https://www.docker.com/docker-registry) to manage tagged versions of containers.

The deployment system is fed into by our Continuous Integration setup. We use [Jenkins](http://jenkins-ci.org/) for the entire project. For front-end, we have a single project that watches our repository for changes, then runs our unit-tests. After a successful test-run, containers are built and pushed, if we’ve released new versions of our apps. Any new containers are picked up by a pipeline that runs integration tests against the entire system with success resulting in a release-candidate configuration for [Ansible](http://docs.ansible.com/) / Docker and automated deployments to a “lab” environment. Jenkins also has push button projects for deployment to demo & staging environments.

Each of us run a [Vagrant](http://vagrantup.com/) box on our machines with the choice of a full, or minimal, system stack so we can run local systems almost the same as staging, lab or production environments – apart from the number of servers and the versions. This reduces the number of headaches with developers running different OS’s, etc. so everyone can use their favourite system and a consistent dev-environment.

Where we are now
================

We are currently going through Beta testing our system and refining based on feedback along with bug-fixing, etc. Currently, most of my work is around tooling and trying to optimise setup and cleanup processes for development, testing and release of our work.

Transitioning from big-picture development to refinement are two very different beasts. With our CI, we have a careful balance to strike between releasing often and releasing code which doesn’t break tests, because the integration testing takes a long time. I think we’re still finding our feet with this a little and hopefully we’ll be able shave time off testing, but currently it pays for us to run partial integration tests against our code early so we can fix errors before breaking the process as the round trip / down time could be more costly.

We are aiming for a release of our project into the wild soon and by that time I expect we will have ironed out many wrinkles with the Q/A and automation of things. One good thing about this project is that we are eating our own dogfood with it by using Beta testing to run the applications against our own systems, so we are already reaping rewards from that.

I think the main things to draw from the project is that we’ve utilised existing technologies more effectively, without jumping on the latest framework bandwagon and we’ve achieved many of our goals of “doing it better” with TDD, automation and quality control built in very early on. The other less tangible thing is that as a team, we’ve grown in size and in stature from our beginnings. Everyone has developed and found a niche and I feel we’ve settled into a good groove working together. We’ve not achieved perfection, but we have the desire to do things better that drives us forward, watch this space.

We hope you have enjoyed reading about one of the projects we are working on. If you have any questions for Glen, please post them on our [Facebook](https://www.facebook.com/headforwards) page.
