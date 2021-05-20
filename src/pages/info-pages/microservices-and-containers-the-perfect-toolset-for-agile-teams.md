---
bannerImage: /uploads/dsc08876.jpg
title: "Microservices and containers: the perfect toolset for Agile teams"
summary:
  text: See how microservices and containers fit into the Agile toolset – and how
    they’re helping organisations enable continuous delivery.
  image: /uploads/dsc08876.jpg
author: d6b8ef80-d01b-11ea-b7cd-8b72a2b29420
publishedDate: 2021-05-20T13:31:40.387Z
components:
  - type: image-copy-component
    isRightImage: false
    isPostit: false
    isTwoColumns: false
    content:
      - type: markdown-component
        text: >-
          Agile software teams need to release code little and often, using
          small, fast iterations to release new features and updates into
          production environments. To make this happen, your organisation needs
          continuous delivery pipelines, which have quality gates built in and
          automate the whole release cycle. 


          But how do you build that pipeline?


          ## Microservices: discrete bundles of complete code 


          Microservices is an approach to enabling continuous delivery that has been gaining in popularity for a few years; it uses a decoupled architecture model that’s designed to solve this exact challenge. A microservice is a discrete piece of code that does one specific task – such as a checkout system on a retailer’s ecommerce site. Because it’s separate from other services (such as the catalogue or basket), it can be developed, deployed, and altered without changing the rest of the system.



          With simple APIs, each component can communicate without building the traditional dependencies that bring down your entire system if something goes wrong. And when you do need to fix or update something, you can just redeploy a single service instead of the entire application. That means no downtime and, if you’ve set up automation procedures, no manual intervention. That’s what will help your team push out a constant stream of small releases – without the whole process shuddering to a halt at the traditional bottlenecks.
  - type: images-component
    imageOne: /uploads/dsc08106.jpg
    imageTwo: /uploads/head-8.jpg
  - type: image-copy-component
    isRightImage: false
    isPostit: false
    isTwoColumns: false
    title: Build QA into dev, and there’s always deployable code
    content:
      - type: markdown-component
        text: >-
          How you organise your microservices depends on your business
          requirements, but splitting your applications into smaller components
          can also make the development, testing and maintenance processes more
          distributed. Small teams of developers can work on their own
          microservices, taking ownership and, crucially, responsibility for
          quality control. 


          Separate QA teams mean lengthy test and sign-off procedures, and you having to coordinate back and forth between multiple crews of developers and testers. A small, single bug can set your schedule back days as it’s fixed and retested. By embedding automated unit and integration tests into development, you always have the green light for release.


          ## The microservice is your package – containers are your courier


          The next thing to consider is the delivery method. The microservices architecture is only as effective as the platform you’re using to support it. Containerisation – through a framework like Kubernetes – and docker packaging helps your teams effectively deploy and use microservices in neat, feature-rich bundles.


          Each microservice is packaged with all of its dependencies built in, giving us a complete installation of every component, whether it’s a tiny API or a fully-fledged enterprise database server. Python, C, Java, Golang, php, nodejs, .Net – it doesn't matter which language your applications are written in or which tools you used to build them, the docker packaging provides a unified way to package, ship and run them. That means each team can choose their own toolset and identify the right language or dev platform for different jobs, without having to worry about compatibility or needing to install libraries on production servers when it’s time to deploy.


          In a way, these packages function as a black box, but I like to think of them more as a ‘brown box’ – the kind you get your next-day deliveries in. Kubernetes, or other container frameworks, function as the courier, delivering a complete bundle of everything you’re expecting from your order. And the beauty of microservices is that each brown box is labelled with exactly what’s in it and how it’s meant to work. So if it doesn’t work exactly as it’s meant to, you can just send the package back for the developers to fix.


          ## Complementary technologies


          Microservices and containerisation tools have developed side-by-side over the past few years, and that means their features and capabilities complement each other excellently. Containers are well-suited to small pieces of software, while microservices and continuous delivery models really thrive in the cloud.


          For example, the modular nature of microservices, combined with built-in replica set scaling and node pools in containers, mean you can easily scale individual services when they’re experiencing high demand. To use our ecommerce example again: if there’s a major sale, the IT team could scale up the amount of compute power and resources that support the catalogue and checkout services, without having to boost other parts of the site, such as the system that handles returns.
  - type: images-component
    imageOne: /uploads/dsc08270.jpg
    imageTwo: /uploads/team-5.jpg
  - type: image-copy-component
    isRightImage: false
    isPostit: false
    isTwoColumns: false
    content:
      - type: markdown-component
        text: >-
          There are other cloud benefits to consider too – all of which
          contribute to a continuous delivery pipeline. All cloud providers
          offer an uptime guarantee, which helps prevent disruption as you roll
          out new services or updates. You’re saving resource and budget by not
          provisioning your own servers, and you no longer need to dedicate
          teams to management. And finally, security and compliance are baked
          into the cloud, which means you’ll have help ensuring you’re always on
          the right side of regulations.


          ## Agile is about the tools – but don’t forget the importance of people


          Microservices and container technologies are growing fast, particularly in development communities – and they’re making their mark on the world of Agile. But as always, your organisation is only as Agile as your people make it.


          It’s easy forget that the principles behind all the great tooling and platforms we’ve highlighted are rooted in the need for small, empowered teams with a broad range of skillsets, that can deliver high-quality applications and services, at speed.


          If you want to be as Agile as possible, microservices and containers are the right tools to take you there – if you have the right people on board.
    linkFields: []
  - type: article-component
    title: Further reading
    articles:
      - linkText: Read more
        link: c4d53d50-2fd9-11eb-a14b-43dc49807385
      - linkText: Read more
        link: 321e54a0-cb67-11ea-8e96-b7fc142baae4
seo:
  description: See how microservices and containers fit into the Agile toolset –
    and how they’re helping organisations enable continuous delivery.
  title: Kubernetes and microservices for agile development
uuid: 21556660-b971-11eb-ae50-75e5d24df288
type: blog-page
parent: insights
---
