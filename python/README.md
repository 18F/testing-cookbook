---
layout: default
permalink: /python/
---
# Python Testing

## The `doctest` module
With [doctest] you can write tests in your python docstrings. Check out [the example](examples/doctest).

### What It Is

### When to Use It

### How to Use It

## The `unittest` framework
For more involved tests, take a look at [unittest].

### What It Is

### When to Use It

### How to Use It

## nose
[nose] is a Python test runner which has a whole host of features, including plugins, which make testing in Python go a whole lot smoother, regardless
of what module(s) you've used to write your tests.

### What It Is
*nose* is a test runner, which means that it does all of the following categories of things:

  * discovers tests amongst your code;
  * lets you define and choose subsets of tests to run;
  * runs tests;
  * runs coverage;
  * and controls test output.

### When to Use It
It's a great idea to use nose from the very start, and it's not hard to start using. However, there are some specifc cases where nose can really help out with existing projects.

#### Fail Fast
`nosetests -x`

Use nose's "fail fast" feature when you've got a lot of test failures, but are just trying to see and fix the first failed test. Run that test quickly, fix, and repeat, moving on to the next.

#### Capture/Suppress STDOUT/Logs
By default, Nose captures STDOUT and logging output. This means that when you have test failures, it will capture STDOUT and logging output for each failed test and print it 
along with the failure message and stack trace, rather than letting STDOUT go to the console at runtime and get mixed up with everything else that might be going to STDOUT. 
Outputs become much more useful when they are split up by their test of origin.

### How to Use It
In projects without their own custom test runner, it's just a matter of running `pip install nose` and then invoking `nosetests` from the command line.

In the case of Django, which has its own custom test runner, you'll need to do a little more work (but just a little). TODO: link to django-nose


[nose]: https://nose.readthedocs.org/en/latest/
[doctest]: https://docs.python.org/3.4/library/doctest.html
[unittest]: https://docs.python.org/3.4/library/unittest.html
