---
title: Automation 
permalink: /browser/automation/
parent: Browser testing
---
This is an overview of a selection of automated testing tools for frontend [integration tests]. See the [README](..) for background.

## Selenium
[Selenium] is a suite of tools for launching, controlling browsers and testing a variety of browsers. The tools are:

1. [WebDriver] is the API by which you launch, control and test various web browsers. It has hooks for Android, Chrome, Firefox, Internet Explorer, [PhantomJS], Safari and remote servers (such as [Sauce Labs]). Implementations are available for JavaScript, Ruby, Python, Java and .Net.
2. [Selenium IDE] is a Firefox extension for recording, editing and debugging your tests. You can also write your tests yourself, of course.

### Selenium-based Tools
* [Capybara] is a Ruby acceptance testing framework that uses Selenium under the hood.
* [Nightwatch] is a Node.js "end-to-end" testing framework with a declarative API.
* [Protractor] is an end-to-end test framework from the AngularJS team. It can be used to test both Angular and non-Angular applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would. It is really quick and simple to get started. 

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
[integration tests]: http://en.wikipedia.org/wiki/Integration_testing
[jsdom]: https://github.com/tmpvar/jsdom
[mocha]: http://mochajs.org/
[Capybara]: https://github.com/jnicklas/capybara
[CasperJS]: http://casperjs.org/
[Nightwatch]: http://nightwatchjs.org/
[SlimerJS]: http://slimerjs.org/
[VirtualBox]: http://virtualbox.org/
[WebKit]: http://en.wikipedia.org/wiki/WebKit
[Rhino]: https://github.com/mozilla/rhino
[Protractor]:(https://angular.github.io/protractor/#/) 
