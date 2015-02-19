# Browser Testing
Browser testing is [integration testing] for client-side functionality—that is, anything that happens in a web browser. Also here:

* The [automated browser testing guide](automation.md) lists tools and techniques for browser automation
* The [VirtualBox testing guide](VirtualBox.md) gets you up and running with [VirtualBox] for manual testing
* The [hosted service guide](services.md) lists resources for manual testing and screenshot-taking

## Manual Testing
Manual browser testing involves simply opening up the URL of the site you're testing in one or more browsers and interacting with it. You can install as many browsers as you'd like on your computer, but at some point you will likely need to test other browers, platforms, and devices. See the [VirtualBox guide](VirtualBox.md) for setting up a cross-platform testing environment on your own computer, or peruse the [service guide](services.md) for services that can help you interactively test and take screenshots of sites with lots of different browsers.

## Automated Testing
Automated cross-browser testing involves writing tests and using tools to script the launching of one or more browsers and the execution of your tests in each of them. The automated browser testing stack typically consists of three distinct components:

1. A development server, e.g., a Django or Rails application running on your personal computer.
2. One or more web browsers (running on your computer natively, in a virtual environment like [VirtualBox], or remotely via a service such as [Sauce Labs]) that can be programmatically controlled.
3. One or more test suites that either:
    * run in the browser directly (like [QUnit]), or
    * control the browser remotely and test the results of scripted interactions, as in [Selenium].

Many web-based virtualization environments (namely [Sauce Labs]) have APIs of their own that allow us to script both the creation of virtual browsers to test our apps *and* determine the outcome of automated tests in each of them. Take a look at the [automated browser testing guide](automation.md) for more info.

[Selenium]: http://docs.seleniumhq.org/
[Sauce Labs]: https://saucelabs.com/
[PhantomJS]: http://phantomjs.org/
[Browserling]: https://browserling.com/
[integration testing]: http://en.wikipedia.org/wiki/Integration_testing
[VirtualBox]: http://virtualbox.org/
[QUnit]: http://qunitjs.com/
