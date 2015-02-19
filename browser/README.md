# Browser Testing
Browser testing is [integration testing] for client-side functionality—that is, anything that happens in a web browser. Browser tests typically consist of three distinct components:

1. A dev server, e.g., a Django or Rails application running on the developer's personal computer.
2. A real or virtual web browser that can be programmatically controlled in another environment.
3. One or more test suites that run in a real or virtual web browser.

## Real and Virtual Browsers
Browser testing used to be done manually: testers fired up their suite of browsers in whatever versions the app was expected to accommodate (e.g., latest Chrome, Firefox 3.6, or Internet Explorer 9), and on whichever platforms they had access to (Windows, OS X, or iOS), opened up the URL(s) to test, and ran through a *literal* script of actions. Quality Assurance teams were typically responsible for these types of tests in larger companies, and many had banks of physical computers (and mobile devices) running each combination of OS and browser version in isolation.

The next step in the evolution of browser testing was virualization environments. Applications such as [VirtualBox] allowed them to fire up virtualized operating systems on a single computer so that they could run, for instance, Internet Explorer for Windows on their Mac laptop. More recently, web-based virtualization tools like [Sauce Labs] and [Browserling] gave us the ability to interactively test web sites in practically any browser/version/OS combination at the click of a link.

> **Note**: Manual testing is important! Check out the [VirtualBox guide](VirtualBox.md) for more information about using virtual machines to test old browsers (like Internet Explorer) from the comfort of your Mac, or try some [other services](services.md).

It gets even better, though: web-based virtualization environments have hooks of their own that allow us to script both the creation of virtual browsers to test our apps *and* determine the outcome of automated tests in each of them. Take a look at the [automated browser testing guide](automation.md) for more info.

[Selenium]: http://docs.seleniumhq.org/
[WebDriver]: http://docs.seleniumhq.org/projects/webdriver/
[Selenium WebDriver]: http://docs.seleniumhq.org/projects/webdriver/
[Selenium IDE]: http://docs.seleniumhq.org/projects/ide/
[Sauce Labs]: https://saucelabs.com/
[zuul]: https://github.com/defunctzombie/zuul
[PhantomJS]: http://phantomjs.org/
[Browserling]: https://browserling.com/
[Testling]: https://ci.testling.com/
[integration testing]: http://en.wikipedia.org/wiki/Integration_testing
[jsdom]: https://github.com/tmpvar/jsdom
[mocha]: http://mochajs.org/
[Capybara]: https://github.com/jnicklas/capybara
[CasperJS]: http://casperjs.org/
[Nightwatch]: http://nightwatchjs.org/
[SlimerJS]: http://slimerjs.org/
[VirtualBox]: http://virtualbox.org/
