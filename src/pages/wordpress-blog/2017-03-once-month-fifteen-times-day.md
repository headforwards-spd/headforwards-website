---
type: wordpress-blog
path: /2017/03/once-month-fifteen-times-day
title: 'From Once a Month to Fifteen Times a Day – Our Journey Into Continuous Delivery'
headerImages:
    - {image: //headforwards.com/wp-content/files_mf/headforwardssunsetoverwater.jpeg, text: 'From Once a Month to Fifteen Times a Day'}
    - {image: //headforwards.com/wp-content/files_mf/headforwardssunsetoverwater46.jpeg, text: 'Our Journey Into Continuous Delivery'}
    - {image: //headforwards.com/wp-content/files_mf/headforwardsteammemberworkingcopy.jpg, text: ""}
    - {image: //headforwards.com/wp-content/files_mf/headforwards.agilesoftwaredevelopmentoutsourcing80.jpg, text: ""}
date: '2017-03-21T15:42:44.000Z'
modified: '2018-02-08T14:16:34.000Z'
excerpt: 'We build software. We also build the teams that build the software. Currently, with one our clients we are releasing 15-20 new updates a day across a global infrastructure. And, with zero downtime. Continuous Delivery is something that really excites us here at Headforwards. But software deployment wasn’t always this way. The State (or not too …'
categories:
    - Agile
    - Coding
    - News
tags: []
author:
    id: ccc5e2bb-ae99-57b8-bc21-de8892c1d0ac
    slug: jake
    name: 'Jake Kimpton'
    path: /author/jake/

---
We build software. We also build the teams that build the software. Currently, with one our clients we are releasing 15-20 new updates a day across a global infrastructure. And, with zero downtime. Continuous Delivery is something that really excites us here at Headforwards. But software deployment wasn’t always this way.

**The State (or not too distant past) Of Software Development**

Development, testing and deployment – all separate. Sound familiar? It’s a static system with countless problems. There is often a lack of communication between teams, deployments are executed during out-of-work hours and releases are large with countless levels of intricacy and dependencies. They are few and far between.

Working in this process is stressful for the team and the stakeholders. It feels like a never-ending cycle of releasing half-tested, unfinished code which inevitably cycles around for more fixing. Nobody is happy.   

A large portion of the testing and deployment is manual and therefore error prone. Non-technical management often carry the responsibility to make decisions on things they do not fully understand and this acts as an unnecessary barrier to releasing code, prolonging the entire process.

Another serious tax on time and money comes from the separation of QA and developers. Having these teams working independently means handoffs are delayed. A heavy reliance on manual testing involving humans (no automation) leads to slow sign-offs and a potential for time-wasting bugs to slip through the net. The whole setup is, at worst, a disaster which is slow and painful. Everybody is stressed and overworked. The stakeholders are not seeing any forward movement and project-creep is beyond rescue. Nothing is working, releases are slow, everybody is unhappy.

**Moving Forward**

Working in collaboration with a forward facing client the Headforwards team wanted to change the status quo. They set out to disrupt the original methods of building, testing and deploying software. Their goal was to create a new development pipeline allowing for better software, less stress, happy developers and happy stakeholders.

First, we needed to understand this new way of thinking and learn how to use it in practice. We would need to adopt new tools and systems to allow for seamless testing and deployment of new code as the team completed features and fixed bugs. Having an awareness of the software development ecosystem was paramount to our success to avoid this. We constantly made ourselves aware of how quickly things can go wrong:

*   The bigger the release, the more nerves there are
*   The more nerves there are, the more reluctant we are to release
*   Reluctance to release increases the time between releases
*   The more time between releases, the bigger the release

The objective was to employ a system known as Continuous Delivery – a modern, dynamic approach to software development.

_“Continuous Delivery is the ability to get changes of all types—including new features, configuration changes, bug fixes and experiments – into production, or into the hands of users, safely and quickly in a sustainable way.” _– Jez Humble

We started out with a team of developers. We had no sys admins and no dedicated QA resources. Our developers were writing, testing and deploying their own code. The team dynamic was balanced by an experienced Headforwards agile lead.

Laying solid foundations would lead to the successful development structure we were aiming for. A few rules from Dave Farley (Continuous Delivery) helped set the framework.

*   All environments should be as close to identical as possible (dev, test, staging, production)
*   Automate everything
*   There is more to software than code – deployment scripts, configuration items, infrastructure

For system maintenance reasons a microservice architecture was also a goal.

In its purest form, a microservice architecture is a method of developing software applications as a suite of independently deployable, small, modular services in which each service runs a unique process and communicates through a well-defined, lightweight mechanism to serve a business goal.

This was our backdrop, Continuous Deliver our objective, so where do we start?

**Technologies Integral to Continuous Delivery**

We are always in support of open-source technologies. They come with a plethora of support and add-ons. New features are easier to implement and also help extend the base of the framework for others.  
Using crucial technologies such as Docker, Jenkins, Ansible and HA Proxy allows us to work in standardised environments separate from development.

**The First Steps**

Our initial CD implementation was simple. Each team had responsibility for the testing and publishing of their containers. Containers passing the team-level tests were fed into an Automatic Acceptance Test (AAT) pipeline for final sign-off as a release candidate. We felt comfortable with the speed at which software was releasing. Depending on size, we were releasing new code once every few days. We could see an improvement in this new process and it felt good to be able to add more automation to our system. Release sizes were still larger than we wanted to them to be but it was definitely a step in the right direction. The team were happier.

**A Few Steps Further**

As the number of projects increased and releases more frequent, we began to see test duplication in the AAT pipeline that was already accounted for at team level. We found that a combination of eyeball testing and AAT testing was causing a huge delay prior to release and needed to be fixed. Our AAT pipeline began to bottleneck the whole process – our QA resources started running out of time to perform exploratory testing because they were too busy performing primary testing procedures.

We also observed another subtle dynamic, which we were not happy about.  Our AAT testing was also undoing our microservice architecture goal of having a decoupled system structure. The development team became more reliant on testing at the AAT pipeline stage.  When the AAT tests found an issue, fixes were being made to multiple components rather than a single responsible component.

So, AAT was negatively impacting our ability to release often a highly decoupled system.  Instead, releases grew fewer and further apart.  The component code began moving closer together. Th 

**Where We Are Now**

AAT Testing was causing a lot of problems. We began to reduce the need for it by having more team-level testing with integrated QA. The testing within the teams was decided by the team allowing them to define the acceptable QA coverage for their components. This eliminated the need for an AAT Pipeline.

We now have multiple CD pipelines in operation. We have eliminated bottlenecks entirely by streamlining the process of releasing code. Right now, we release 15-20 times a day – this can be a mix of new features, bug fixes and experiments. The code-mass is low and easy to deploy. By keeping releases small, bugs can quickly be identified and dealt with. We can identify a bug, fix it and re-release in 30 minutes to a multiregional production environment.

Our ability to write, test and deploy new code in this way means we’re now trusted by one of the biggest telecoms companies in the world. Our efficiency to deliver new features across a global network seamlessly without interruption is bringing them tangible business value.

The team is happy.

**At a Glance**

A quick overview of where we are now

*   No Bottlenecks
*   15+ release every day
*   Multi-regional
*   Zero downtime
*   Small releases
*   If something goes wrong, we are more likely to fix it than roll back. (e.g. < 30 mins from realisation of bug to production release of fix)
*   Happy teams, happy clients

We can’t visualise a new project without Continuous Delivery being a goal. We are confident enough to approach new projects this way from day one and will continue to do so for the foreseeable future.

We can’t see into the future (too far) but we know for a fact that methodologies like Continuous Delivery are here to stay. Open-source technologies like Jenkins and Docker flip the traditional model of software delivery on its head, giving way to a vastly superior set of tech, tools and methodologies.

![](//headforwards.com/wp-content/uploads/2017/03/once-a-month-fifteen-times-a-day-3.jpg)

Are you looking to outsource your software development? We’d love to talk about it further.

[Get In Touch](https://www.headforwards.com/contactus/)
