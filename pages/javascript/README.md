---
title: JavaScript testing
permalink: /javascript/
---
### Mocha
[Mocha] is a slick, simple testing framework for Node and browser JavaScript with asynchronous support and a [slew of reporters](http://mochajs.org/#reporters), including [TAP] output. See the [node-mocha example](examples/node-mocha) for usage.

#### Resources
* Check out [Testling's mocha guide](https://ci.testling.com/guide/mocha) for running your [cross-browser tests](../browser/) with mocha.

### Jasmine
[Jasmine] shares basic semantics with [Mocha], but also includes lots of nice assertion helpers, object [spies](http://jasmine.github.io/2.2/introduction.html#section-Spies), and async support.

#### Resources
* See [the docs](http://jasmine.github.io/2.2/node.html) for Node usage.
* There's also a [Python package](http://jasmine.github.io/2.2/python_egg.html) and a [Ruby gem](http://jasmine.github.io/2.2/ruby_gem.html).

### Tape
[Tape] is a [TAP]-producing test harness for Node with great asynchronous support.

#### Resources
* Check out the [Testling tape guide](https://ci.testling.com/guide/tape) for running your [cross-browser tests](../browser/) with tape.

### QUnit
[QUnit] is a unit testing framework for Node and the browser developed by and for the jQuery team. It has a nice-looking browser test runner and lots of [plugins](http://qunitjs.com/plugins/) for more specific needs.

[QUnit]: http://qunitjs.com/
[Mocha]: http://mochajs.org
[TAP]: http://en.wikipedia.org/wiki/Test_Anything_Protocol
[Tape]: https://www.npmjs.com/package/tape
[Jasmine]: https://github.com/jasmine/jasmine
