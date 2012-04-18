<h2 id="toc-intro">Introduction</h2>

Media queries are awesome, a godsend for website developers that want to
make small tweaks to their stylesheets to give a better experience for
their users. Media queries essentially let you customize the CSS of your
site depending on screen size. See [this article][rwd] for more
information about responsive design and check out some of these fine
examples of media queries usage here: [mediaqueri.es][mq].

However, as Brad points out in an [earlier article][bf], changing
the look is only one of many things to consider when building for the
mobile web. If the only thing you do when you build your mobile website
is customize your layout with media queries, then we have the following
situation:

- All devices get the same JavaScript, CSS, and assets (images, videos),
  resulting in longer than necessary load times.
- All devices get the same initial DOM, potentially forcing developers
  to write overly complicated CSS.
- Little flexibility to specify custom interactions tailored to each
  device.

As the UIs you build increase in complexity, and you gravitate toward
single-page webapps, you’ll want to do more to customize UIs for each
type of device. This article will teach you how to do these
customizations with a minimal amount of effort. The general approach
involves classifying your visitor’s device into the right device
classes, and serving the appropriate version to that device, while
maximizing code reuse between versions.

[rwd]: /mobile/responsivedesign
[mq]: http://mediaqueri.es/
[bf]: http://bradfrostweb.com/blog/web/responsive-web-design-missing-the-point/

<h2 id="toc-device-classes">Device classes</h2>

There are tons of internet-connected devices out there, and nearly all
of them have browsers: Mac Laptops, Windows workstations, iPhones,
iPads, Android phones with touch input, scroll wheels, keyboards, voice
input, devices with pressure sensitivity, smart watches, toasters and
refrigerators, and many more. Some of these devices are ubiquitous,
while others are very rare.

![A variety of devices](/static/demos/cross-device/variety.png)

To create a good user experience, you need to know who your users are.
If you build a user interface for a desktop user with a mouse and a
keyboard and give it to a smartphone user, your interface will be
frustrating to them. If you are building a complex webapp, there are two
extremes:

1. Build one version that works on all devices. UX will suffer as a
   result, since different device have different design considerations.

2. Build a version for each device you want to support. This will take
   forever, because you’ll be building 1000s of versions of your
   application.

There is a fundamental tradeoff here: the more device categories you
have, the better a user experience you can deliver, but the more work it
will take to design, implement and maintain.

### A potential solution

Here’s a compromise: classify devices into categories, and design the
best possible experience for each category. What categories you choose
depend on your product and target user.

1. small screens + touch (mostly phones)
2. large screens + touch (mostly tablets)
3. large screens + keyboard/mouse (mostly desktops/laptops)

This is only one of many possible breakdowns, but one that makes a lot
of sense at the time of writing. Missing from the above list are mobile
devices without touch screens (eg. feature phones, some dedicated ebook
readers). However, most of these have keyboard navigation or screen
reader software installed, which will work fine if you build your site
with accessibility in mind.  For more information on this subject, check
out [this great resource][acc].

[acc]: #

### Examples

There are many examples of developers creating drastically different
experiences for different form factors. Google search does this, as does
Facebook. Considerations for this include both performance (in page, and
load time) and more general user experience.

In the world of native apps, many developers choose to tailor their
experience to a device class. For example, [Flipboard][flipboard] for
iPad is a very different user experience compared to Flipboard on
iPhone. The tablet version is optimized for two hand use and horizontal
flipping while the phone version is intended for single hand interaction
and a vertical flip. Many other iOS applications also provide
significantly different phone and tablet versions, such as
[Things][things].

![Total customization for phone and
tablet](/static/demos/cross-device/phone-tablet.png)

To reiterate, creating a separate version for each app is generally a
good idea for performance reasons or if the versions you want to serve
to different device classes vary hugely. Otherwise, responsive web
design is a reasonable approach.

<h2 id="toc-client-detect">Client-side detection</h2>

We can learn a lot about the user’s browser and device by using feature
detection. The main things we need to determine are if the device has
touch capability, and if it’s a large or small screen.

We need to draw the line somewhere to distinguish small and big touch
devices. What about edge cases like the 5” Galaxy Note? The following
graphic shows a bunch of popular Android and iOS devices overlaid (with
corresponding screen resolutions). The asterisk indicates that the
device comes or can come in doubled density. Though the pixel density
may be doubled, CSS still reports the same sizes.

A quick aside on pixels in CSS: CSS pixels on the mobile web [aren’t the
same][csspx] as screen pixels. iOS retina devices introduced the
practice of doubling pixel density (eg. iPhone 3GS vs 4, iPad 2 vs 3).
The retina Mobile Safari UAs still report the same device-width to avoid
breaking the web. As other devices (eg. Android) get higher resolution
displays, they are doing the same device-width trick.

![Device resolution (in pixels)](/static/demos/cross-device/devices.png)

Complicating this decision, however, is the importance of considering
both portrait and layout modes. We don’t want to reload the page or load
additional scripts every time we re-orient the device, though we may
want to render the page differently.

In the following diagram, squares represent the max dimensions of each
device, as a result of overlaying the portrait and landscape outlines
(and completing the square):

![Portrait + landscape resolution (in pixels)](/static/demos/cross-device/devices-portland.png)

By setting the threshold to `650px`, we classify iPhone, Galaxy Nexus as
smalltouch, and iPad, Galaxy Tab as bigtouch. The androgynous Galaxy
Note is in this case classified as smalltouch, and will get the phone
layout.

And so, a reasonable strategy might look like this:

    if (hasTouch) {
      if (isSmall) {
        device = PHONE;
      } else {
        device = TABLET;
      }
    } else {
      device = DESKTOP;
    }

See a minimal sample of the [feature-detection approach][feature-sample] in action.

The alternative approach here is to use UA sniffing to detect device
type. Basically you would have a set of heuristics and match them
against your user’s `navigator.userAgent`. Pseudo code looks something
like this:

    var ua = navigator.userAgent;
    for (var re in RULES) {
      if (ua.match(re)) {
        device = RULES[re];
        return;
      }
    }

See a sample of the [UA-detection approach][ua-sample] in action.

[csspx]: http://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html
[feature-sample]: /static/demos/cross-device/feature/index.html
[ua-sample]: /static/demos/cross-device/ua/index.html
[things]: http://culturedcode.com/things/
[flipboard]: http://flipboard.com/

<h2 id="toc-server-detect">Server-side detection</h2>

On the server, we have a much more limited understanding of the device
that we’re dealing with. One of the few useful queues that are passed is
the user agent string, which is supplied via the User-Agent header on
every request. Because of this, the same UA sniffing approach will work
here. In fact, the DeviceAtlas and WURFL projects do this already (and
give a whole lot of information about the device).

Unfortunately each of these present their own challenges. WURFL is very
large, containing 20MB of XML, potentially incurring significant
server-side overhead for each request. There are projects that split the
XML for performance reasons. DeviceAtlas is not open source, and
requires a paid license to use.

There are simpler, free alternatives too, like the [Detect Mobile
Browsers][dmb] project. The drawback, of course, is that device
detection will inevitably be less comprehensive. Also, it only
distinguishes between mobile and non-mobile devices providing limited
tablet support only through an [ad-hoc set of tweaks][dmb-tablet].

[dmb]: http://detectmobilebrowsers.com/
[dmb-tablet]: http://detectmobilebrowsers.com/about

<h2 id="toc-client-load">Client-side loading</h2>

If you’re doing UA detection on your server, you can decide what CSS,
JavaScript and DOM to serve when you get a new request. However, if
you’re doing client-side detection, the situation is more complex. You
have several options:

1. Redirect to a device-type-specific URL that contains the version for
   this device type.
2. Dynamically load the device type-specific assets.

The first approach is straightforward, requiring a redirect via
`window.location.href = '/tablet'`. However, your URL will now have this
device type information appended to it, so you may want to use the
[History API][history-api] to clean up your URL. Unfortunately this
approach involves a redirect, which can be slow, especially on mobile
devices.

The second approach is quite a bit more complex to implement. You need a
mechanism to dynamically load CSS and JS, and won’t be able to do things
like customize `<meta viewport>` depending on your device, which may be a
deal breaker. Also, since you’re not redirecting, you’re stuck with the
original HTML that was served to you. Of course, you can manipulate it
with JavaScript, but this may be slow and/or inelegant, depending on
your application.

[history-api]: http://diveintohtml5.info/history.html

<h2 id="toc-device-js">Device.js</h2>

Device.js is a starting point for doing semantic, media query-based
device detection without needing special server-side configuration,
saving the time and effort required to do user agent string parsing.

The idea is that you provide search-engine-friendly markup at the top of
your `<head>` which indicates what versions of your site you want to
provide. Next, you can either do server-side UA detection and handle
version redirection on your own, or use the device.js script to do
feature-based client-side redirection.

For more information, see the [device.js project page][devicejs], and
also a [fake application][devicejs-sample] that uses device.js for
client-side redirection.

[devicejs]: https://github.com/borismus/device.js
[devicejs-sample]: http://borismus.github.com/device.js/sample/

<h2 id="toc-client-server">Deciding client or server</h2>

These are the tradeoffs between the approaches:

**Pro client**:

- More future proof since based on screen sizes/capabilities rather than UA.
- No need to constantly update UA list.

**Pro server**:

- Full control of what version to serve to what devices.
- Better performance: no need for client redirects or dynamic loading.

My personal preference is to start with device.js and client-side
detection. As your application evolves, if you find the client-side
redirect to be a significant performance drawback, you can easily remove
the device.js script, and implement UA detection on the server.

<h2 id="toc-mvc">Separate concerns for code sharing</h2>

By now you’re probably thinking that I’m telling you to build three
different apps, one for each device type. There is a better way!

Hopefully you have been using an MVC-like framework, such as Backbone,
Ember, etc. If you have been, you are familiar with the principle of
separation of concerns, specifically that your UI (view layer) should be
decoupled from your logic (model layer). If this is new to you, check
out some of these great [resources on MVC][mvc], and [MVC in
JavaScript][mvc-js].

The cross-device story fits neatly into your existing MVC framework. You
can easily move your views into separate files, creating a custom view
for each device type. Then you can serve the same code to all devices,
except the view layer:

![Cross-device MVC](/static/demos/cross-device/mvc.png)

Your project might have the following structure (of course, you are free
to choose the structure that makes the most sense depending on your
application):

    models/ (shared models)
      item.js
      item-collection.js

    controllers/ (shared controllers)
      item-controller.js

    versions/ (device-specific stuff)
      tablet/
      desktop/
      phone/ (phone-specific code)
        style.css
        index.html
        views/
          item.js
          item-list.js

Once you run your favorite build tool, you’ll concatenate and minify all
of your JavaScript and CSS into single files for faster loading, with
your production HTML looking something like the following (for phone):

    <!doctype html>
    <head>
      <title>Mobile Web Rocks!</title>

      <!-- Every version of your webapp should include a list of all
           versions. -->
      <link rel="alternate" href="http://foo.com" id="desktop"
          media="only screen and (touch-enabled: 0)">
      <link rel="alternate" href="http://m.foo.com" id="phone"
          media="only screen and (max-device-width: 650px)">
      <link rel="alternate" href="http://tablet.foo.com" id="tablet"
          media="only screen and (min-device-width: 650px)">

      <!-- Viewport is very important, since it affects results of media
           query matching. -->
      <meta name="viewport" content="width=device-width">

      <link rel=”style” href=”phone.min.css”>
    </head>
    <body>
      <script src=”phone.min.js”></script>
    </body>

Note that the `(touch-enabled: 0)` media query is non-standard (only
implemented in Firefox behind a `moz` vendor prefix), but is handled
correctly (thanks to [Modernizr.touch][modernizr]) by device.js.

[mvc]: http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
[mvc-js]: http://addyosmani.github.com/todomvc/
[modernizr]: http://modernizr.com/

<h2 id="toc-misc">Version override</h2>

Device detection can sometimes go wrong, and in some cases, a user may
prefer to look at the tablet layout on their phone (perhaps they are
using a Galaxy Note), so it’s important to give your users a choice of
which version of your site to use if they want to manually override.

The usual approach is to provide a link to the desktop version from your
mobile version. This is easy enough to implement, but Device.js supports
this functionality with the `device` GET parameter.

<h2 id="toc-conclusion">Concluding</h2>

To summarize, when building cross-device single-page UIs, do this:

1. Pick a set of device classes to support, and criteria by which to
   classify devices into classes.
2. Build your MVC app with strong separation of concerns, splitting
   views from the rest of the codebase.
3. Use [device.js][devicejs] to do client side device class detection.
4. When you're ready, package your script and stylesheets into one of
   each per device class.
5. If client-side redirection performance is an issue, drop device.js
   and switch to serverside UA-detection.