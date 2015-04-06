---
permalink: /browser/selenium-sauce/
layout: default
---

## Testing with Selenium and Sauce Labs
As we learned [earlier](../), the [Selenium WebDriver] API can be used to
communicate with both *local* browsers (such as [PhantomJS], Chrome and Firefox)
and *remote* browsers using [Selenium Remote Control]. [Sauce Labs] is a
hosted service that runs "over 450 browser/OS combinations" in the cloud, all
programmatically accessible via Selenium Remote Control.

**Note**: The WebDriver API is implemented in pretty much every language that
you might use for web development. It's perfectly acceptable to write your
Selenium tests in a different language entirely, so long as the environments
that you're going to run them in have access to both languages (for instance,
if you're using [Travis CI], you can safely write your Selenium tests in Node
because it's always available in that environment.

With Selenium WebDriver you can run automated tests against a variety of
configurations:

### Local/Local Testing
This refers to tests run exclusively on your computer with Selenium and any
WebDriver browser available on your computer. If you're on a Mac, then your
options are:

* Chrome with the [Selenium ChromeDriver](https://code.google.com/p/selenium/wiki/ChromeDriver)
* Firefox with the [Selenium FirefoxDriver](https://code.google.com/p/selenium/wiki/FirefoxDriver)
* Safari with the [Selenium SafariDriver](https://code.google.com/p/selenium/wiki/SafariDriver)
* [PhantomJS], a headless WebKit browser (like Safari and, formerly, Chrome) with [ghostdriver](https://github.com/detro/ghostdriver)

In this configuration, you point your tests at your web app running on
`localhost`, and Selenium sends all of its commands directly to a browser
on your computer. In the case of the Chrome, Firefox and Safari drivers, a
full GUI is launched and you can watch the tests being run in realtime.
PhantomJS is a "headless" browser, so you won't see anything on your screen,
but you can take screenshots (using the Selenium API) of your app for review.

### Local/Remote Testing
This configuration refers to tests run on Sauce (or [BrowserStack], or any
other service that runs the [Selenium Remote Control] protocol). This is the
configuration that you want if you need to run automated tests on your
locally running web app against a browser you can't run locally, such as any
version of Internet Explorer on Windows (assuming you're on a Mac).

The technique that makes this possible is called *tunneling*, a process that
creates a secure, direct connection between your computer and another service
so that your web app can be accessed from the outside world. You have the
following options:

#### Sauce Connect
[Sauce Connect] creates a secure connection between your computer and Sauce
Labs, effectively giving any browser started with your Sauce Labs credentials
access to `localhost` as though it were on your computer. This includes manual
testing sessions, which makes it a good option if you don't have the time or
patience to set up [VirtualBox](../VirtualBox/).

One nice thing about Sauce Connect is that [Travis CI] has
[support built in](http://docs.travis-ci.com/user/sauce-connect/), which (in
theory) should make running remote tests as part of your continuous integration
relatively straightforward. The `sc` utility also does a good job of reopening
connections when they close, for instance if your network connection hiccups.

**Note**: Sauce Connect does have its issues. For instance, their
[Python library](https://github.com/saucelabs/python-sauceconnect) is
basically abandoned, so you'll need to [download](https://docs.saucelabs.com/reference/sauce-connect/)
the appropriate binary for your system and run it manually within your
development environment.

#### Use localtunnel
[localtunnel] is a command-line utility that creates a unique, public URL
for a specific port on your computer. For instance, if your web app is
running at `localhost:8000` (on port 8000), you can just run `lt`:

```sh
lt --port 800
```

and it'll print a unique URL that you can copy and paste into your browser,
send to collaborators in Slack, or use in a manual browser testing session on
Sauce Labs. One really nice fringe benefit of localtunnel is that **your URL
is accessible over HTTPS**, which means that you get to test your web app
under conditions more similar to their production environment.

#### Use localtunnel-runner
Both Sauce Connect and localtunnel require you to run a command in a separate
shell, separately from the process that starts your web app. This means that
you have to keep two shells open, for instance, in one shell:

```sh
path/to/sc -u username -k access-key
# or
lt --port 1337
```

and in the second:

```sh
# start a Node app
npm start
# or Django
./manage.py runserver
```

[localtunnel-runner](https://github.com/shawnbot/localtunnel-runner) solves
this particular problem with a command line tool that does both in one go:

```sh
# e.g., running a Django server
lt-run --port 8000 -- ./manage.py runserver
```

The thing to note here is that your unique localtunnel.me URL is available
to the web server as an environment variable, so your Selenium tests can
detect the presence of `LOCAL_TUNNEL_URL` and decide to run them against
this URL, either locally or over Selenium Remote Control.


### Remote/Remote Testing
This is really just a variation on "local/remote" testing in which the web
app is running somewhere else: for instance, in the staging or production
environments, or on a CI service. This boils down to changing the URLs that
are loaded by [Selenium WebDriver] in your test code.


### Cross-Browser Testing
If you're running JavaScript *unit tests* in the browser, then there are
some nice tools at your disposal:

* [Karma] runs your unit tests whenever your code changes (which can be good or bad),
and has a [Sauce Launcher](https://github.com/karma-runner/karma-sauce-launcher).
* [zuul] gives you Sauce tests on multiple browsers from
[a single configuration file](https://github.com/defunctzombie/zuul/wiki/cloud-testing).

If you're running *functional* tests, though, then you've got some work to do.
Your plan should look like this:

1. Get your Selenium tests working on one browser, locally. Start with Chrome or Firefox,
then test PhantomJS. (PhantomJS tests will generally run more quickly since they don't
need a GUI.)
2. Set up your [Sauce Labs] account if you haven't already.
3. Use [Selenium Remote Control] in the WebDriver API of your choice to run the tests
on Sauce's infrastructure using one of the "local/remote" configurations above.
*Start with a browser you know*  to avoid browser-specific failures, just so you can
be sure that things are working as you expect them to.
4. Next, update your WebDriver's [desired capabilities](https://docs.saucelabs.com/reference/platforms-configurator/)
so that Sauce runs a less predictable browser, such as IE9.
5. Fix some bugs. If your tests pass the first time, then you're either *amazing* or
your tests aren't covering enough of your application.
6. Refactor your tests to run on a list of hard-coded WebDriver instances. For instance:
  * Chrome on Mac OS
  * Firefox on Windows
  * Internet Explorer 9 (Windows 7)
  * Mobile Safari on iOS 8
  * Android
7. Move your WebDriver list specs to a configuration file, so you can more easily
add or remove testing configurations.
8. Run your tests some more.
9. :tada:

[localtunnel]: https://localtunnel.me
[BrowserStack]: https://www.browserstack.com/
[PhantomJS]: http://phantomjs.org
[Sauce Labs]: https://saucelabs.com
[Sauce Connect]: https://docs.saucelabs.com/reference/sauce-connect/
[Selenium WebDriver]: http://www.seleniumhq.org/projects/webdriver/
[Selenium Remote Control]: http://www.seleniumhq.org/projects/remote-control/
[Travis CI]: https://travis-ci.org/
[zuul]: https://github.com/defunctzombie/zuul/
[Karma]: http://karma-runner.github.io/0.12/index.html
