---
title: Python testing
permalink: /python/
---

# Test runners

## pytest
[pytest] is a mature testing framework that emphasizes flexible, no-boilerplate usage.  Unlike other test runners, pytest doesn't require special syntax for assertions: `assert 'pytest' in runners` instead of `self.assertIn('pytest', runners)`. Tests can be written as xUnit-style classes or as functions. Pytest can run tests written using nose, unittest, and doctest.

## nose
[nose] is a test runner that extends the built-in unittest library by adding more powerful test discovery and execution. Nose has an extensive set of build-in and third-party plugins, including support for test coverage, parallel test execution, and test debugging.

Read on for [tips and examples](nose/).

## unittest
[unittest] is an [xUnit]-style test framework included in the python standard library. Tests are structured into test suites (represented by python classes) containing test cases (represented by python methods); assertions are provided as methods. Tests written with unittest are typically run with a more powerful test runner, such as pytest or nose.

## doctest
[doctest] identifies text that looks like python code in docstrings and verifies that these code examples run as expected. Doctest can be useful for prevent regressions in inline documentation, but isn't a full-fledged testing framework and shouldn't be used as such. Doctests can be run using the pytest and nose test runners.

# Testing tools

* [tox](https://tox.readthedocs.org/en/latest/): Run tests using different python versions
* [coverage.py](https://coverage.readthedocs.org/en/latest/): Measure test coverage; typically called by test runner plugins, not invoked directly
* [mock](https://docs.python.org/3/library/unittest.mock.html): Replace code with mock objects and make assertions about how they have been used
* [HTTPretty](http://falcao.it/HTTPretty/): Mock HTTP interactions; useful for testing code that interacts with remote APIs
* [factory_boy](https://factoryboy.readthedocs.org/en/latest/): Create database fixtures for SQLAlchemy or Django models

# Testing resources

* http://docs.python-guide.org/en/latest/writing/tests/
* http://pythontesting.net/test-podcast/

[pytest]: https://pytest.org/latest/
[nose]: https://nose.readthedocs.org/en/latest/
[doctest]: https://docs.python.org/3.4/library/doctest.html
[unittest]: https://docs.python.org/3.4/library/unittest.html
[xUnit]: https://en.wikipedia.org/wiki/XUnit
