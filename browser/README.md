# Browser Testing
Browser testing is [integration testing] for client-side functionality—that is, anything that happens in a web browser. Browser tests typically consist of three distinct components:

1. A dev server, e.g., a Django or Rails application running on the developer's personal computer.
2. A real or virtual web browser that can be programmatically controlled in another environment.
3. A test suite that opens a real or virtual web browser, tells it to navigate to the URL of the dev server and runs tests.

This page focuses on items 2 and 3. For testing server logic, refer to the language- and stack-specific documentation [back up top](../../../). For more information on client-side unit tests, check out the [JavaScript guide](../javascript/).

## Real and Virtual Browsers
Browser testing used to be done manually: testers fired up their suite of browsers in whatever versions the app was expected to accommodate (e.g., latest Chrome, Firefox 3.6, or Internet Explorer 9), and on whichever platforms they had access to (Windows, OS X, or iOS), opened up the URL(s) to test, and ran through a *literal* script of actions. Quality Assurance teams were typically responsible for these types of tests in larger companies, and many had banks of physical computers (and mobile devices) running each combination of OS and browser version in isolation.

The next step in the evolution of browser testing was virualization environments. Applications such as [VirtualBox] allowed them to fire up virtualized operating systems on a single computer so that they could run, for instance, Internet Explorer for Windows on their Mac laptop. More recently, web-based virtualization tools like [Sauce Labs] and [Browserling] gave us the ability to interactively test web sites in practically any browser/version/OS combination at the click of a link.

> **Note**: Manual testing is important! Check out the [VirtualBox guide](VirtualBox.md) for more information about using virtual machines to test old browsers (like Internet Explorer) from the comfort of your Mac.

It gets even better, though: web-based virtualization environments have hooks of their own that allow us to script both the creation of virtual browsers to test our apps *and* determine the outcome of automated tests in each of them. Let's look at each of the tools to see how this works.

## Selenium
[Selenium] is a suite of tools for launching, controlling browsers and testing a variety of browsers. The tools are:

1. [WebDriver] is the API by which you launch, control and test various web browsers. It has hooks for Android, Chrome, Firefox, Internet Explorer, [PhantomJS], Safari and remote servers (such as [Sauce Labs]). Implementations are available for JavaScript, Ruby, Python, Java and .Net.
2. [Selenium IDE] is a Firefox extension for recording, editing and debugging your tests. You can also write your tests yourself, of course.

### Selenium-based Tools
* [Capybara] is a Ruby acceptance testing framework that uses Selenium under the hood.
* [Nightwatch] is a Node.js "end-to-end" testing framework with a declarative API.

## Sauce Labs
[Sauce Labs] provides both [interactive](https://saucelabs.com/features/#features-manual-testing) (manual) and [automated](https://saucelabs.com/features/#features-cross-browser) remote cross-browser testing capabilities.

## Testling CI
[Testling] is a tool from [Browserling] that allows you to run cross-browser tests whenever you push code to GitHub. You can [configure](https://saucelabs.com/features/#features-cross-browser) applications to be tested in any number of browser/version combinations, plus Safari on iPhone and iPad and the Android browser.

## Zuul
[zuul] is similar to Testling, but uses [Sauce Labs] as the vehicle for tests and looks for its configuration in a [.zuul.yml file](https://github.com/defunctzombie/zuul/wiki/Zuul.yml) in your GitHub repository that specifies the tests, test UI (qunit, mocha-tdd, mocha-qunit, mocha-bdd, or tape), a list of browser/version combinations, and even the server to provide additional support (for instance, to run a Django or Rails app that exposes a REST API against which your JavaScript might test). For instance, [aight](https://github.com/shawnbot/aight/) uses zuul to run [tests](https://github.com/shawnbot/aight/blob/master/test/tests.js) in IE8 and IE9 like so:

```yaml
browsers:
- name: ie
  version: 8..9
```

## PhantomJS
[PhantomJS] is a standalone, headless web browser that combines the [WebKit] engine and the [Rhino] JavaScript interpreter. You can run your tests directly in PhantomJS, or you can use the [Selenium WebDriver] to script interactions with it, the benefit of which is that your tests will run completely from the command line and without any "live" browser running alongside your terminal.

### PhantomJS-based tools
* [CasperJS] is a tool for navigating and [testing](http://docs.casperjs.org/en/latest/modules/tester.html) sites with [PhantomJS] and [SlimerJS], Phantom's Firefox equivalent.

## SlimerJS
[SlimerJS] is PhantomJS but with Firefox's Gecko rendering engine under the hood, except that it doesn't run headlessly by default.

## jsdom
[jsdom] is a *browser-like* DOM (Document Object Model) implementation for Node.js. You can use it to script pure-DOM interactions against JavaScript of your choosing if you don't need anything fancy like images, CSS, or AJAX. For example, to test a DOM JavaScript library with [mocha]:

```js
var jsdom = require('jsdom'),
    assert = require('assert');
    
describe('library', function() {
  // before this suite, create a jsdom environment and stash
  // references to the window and document objects
  var window,
      document;

  before(function(done) {
    jsdom.env('path/to/test.html', ['path/to/library.js'],
      function(errors, win) {
        if (errors) throw errors;
        window = win;
        document = win.document;
        done();
      });
  });
  
  it('doStuff()', function() {
    // global variables are accessible via the window object:
    assert.ok(window.library.doStuff(), 'it does not do stuff');
  });
  
  after(function() {
    // clean up memory
    window.close();
  });
});
```


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
