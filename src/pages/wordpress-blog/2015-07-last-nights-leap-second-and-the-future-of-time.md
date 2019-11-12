---
type: "wordpress"
path: "/2015/07/last-nights-leap-second-and-the-future-of-time"
title: "Last Nights Leap Second and the Future of Time."
date: "2015-07-01T11:20:19.000Z"
modified: "2015-08-28T15:38:35.000Z"
excerpt: "Yesterday (Tuesday 30th June 2015)  we saw the last minute of the day have 61 seconds instead of the usual 60. This ‘leap second’ is necessary to keep coordinated Universal Time. (UTC) This is what guides most international time systems that are synced with the Earths rotation. The leap second was introduced because the difference between …"
categories: ["Informational","News"]
tags: ["Atomic time","Clocks","Developers","GMT","IERS","Java","Leap seconds","Linux","News","Time","UTC","VLBI"]
author:
  id: "0c471ce3-c08d-545b-9457-33251e971504"
  slug: "lyssa"
  name: "Lyssa Crump"
  path: "/author/lyssa/"
---
Yesterday (Tuesday 30th June 2015)  we saw the last minute of the day have 61 seconds instead of the usual 60.

This [‘leap second’](https://en.wikipedia.org/wiki/Leap_second) is necessary to keep coordinated Universal Time. [(UTC)](http://www.timeanddate.com/time/aboututc.html) This is what guides most international time systems that are synced with the Earths rotation.

The leap second was introduced because the difference between UTC and astronomical time  has come close to one second.

UTC is based off highly accurate atomic clocks, however scientists also maintain time scale based on the rotation of the Earth using a technique called Very Long Baseline Interferometry [(VLBI)](http://www.cpi.com/projects/vlbi.html) This uses radio telescopes to measure the earths orientation.

A discrepancy has arisen between UTC and VLBI because the Earths rotation is not always predictable, It is very gradually slowing down; this is due to gravitational forces and tidal bulges causing drag.

It was decided back in January that we would add on an extra second at the end of June. This decision was made by the International Earth Rotation and Reference Systems Service [(IERS)](http://www.iers.org/IERS/EN/Home/home_node.html) who provide data about the Earths rotation to the scientific community.

This isn’t the first leap second either; in fact it was the 26th! The first one was introduced back in 1972, and they have been used when needed since then.

The change stops the clocks being out of sync with our day and night. Having the sun at its highest point at 1300 rather than 1200 is something that we as humans have an issue with, but it would take around 500 years for us to notice the difference between UTC and astronomical time without leap seconds.

The last time a leap second was added (in 2012) some systems that were using Linux or had programs written in Java went down. LinkedIn and the Qantas check-in system were two of the major incidents reported. There was worry that this issue could be repeated this year.

The problems occur because we have **a lot** of different time standards.

TAI which is based on the atomic clock and doesn’t take the Earths motion into account.

UT0 and UT1, which are based on the precise measurement of the Earths rotation.

GPS which is used by GPS satellites

UTC is the standard used in computing, which is like TAI but with leap seconds

The list goes on with TDT, TBT, TCB, TCG etc.





Lets look at your smartphones for an example of the issues this causes. The clock in your smartphones GPS is 16 seconds out of sync with the phones system clock, because GPS doesn’t use leap seconds.

Imagine this on a much bigger, global scale and you can see why this loss of synchronisation could cause issues.

These leap seconds really are a dividing issue within the technological community.

The US and France want the stop leap seconds from happening, while other countries including the UK think we can manage the challenges.

This issue is due to be discussed at the [International Telecommunications Union](http://www.itu.int/en/Pages/default.aspx) in November.   After many years of debate it looks like we will finally have a decision made.

What do you think is the right decision?

Should we keep leap minutes? Or should we abolish them and accept the fact that future generations will have to measure time in a different way.

On an emotional level the thought of no more GMT makes us British people sad, but is that a reason not to change it?

Please get in touch with your thoughts, we would love to hear the views of both developers and none developers on this.