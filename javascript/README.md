# JavaScript Testing

### Mocha
[Mocha] is a slick, simple testing framework for Node and browser JavaScript with asynchronous support and a [slew of reporters](http://mochajs.org/#reporters), including [TAP] output.

#### Node Usage
1. Install with `npm install [-g] mocha`.
2. Write your tests at `tests/*.js`.
3. Run `mocha` and it'll output your test results to stdout.
4. Optionally, set `mocha` as your test command in your `package.json` [scripts field](https://docs.npmjs.com/misc/scripts):
```json
"scripts": {
  "test": "mocha"
}
```

**Protip**: If you're *really* keen on keeping your dependencies self-contained, you can `npm install --save-dev mocha`. npm will still be able to resolve the `mocha` reference, and you can always run the locally installed mocha with `./node_modules/.bin/mocha`.

### Jasmine
[Jasmine] shares basic semantics with [Mocha], but also includes lots of nice assertion helpers, object [spies](http://jasmine.github.io/2.2/introduction.html#section-Spies), and async support.

* See [the docs](http://jasmine.github.io/2.2/node.html) for Node usage.
* There's also a [Python package](http://jasmine.github.io/2.2/python_egg.html) and a [Ruby gem](http://jasmine.github.io/2.2/ruby_gem.html).

### Tape
[Tape] is a [TAP]-producing test harness for Node with great asynchronous support.

### QUnit
[QUnit] is a unit testing framework for Node and the browser developed by and for the jQuery team. It has a nice-looking browser test runner and lots of [plugins](http://qunitjs.com/plugins/) for more specific needs.

[QUnit]: http://qunitjs.com/
[Mocha]: http://mochajs.org
[TAP]: http://en.wikipedia.org/wiki/Test_Anything_Protocol
[Tape]: https://www.npmjs.com/package/tape
[Jasmine]: https://github.com/jasmine/jasmine
