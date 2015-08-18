---
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
It's a great idea to use nose from the very start, and it's not hard to start using. However, there are some specific cases where nose can really help out with existing projects.

#### Assertions
Nose includes assertion methods with PEP8-compliant names (`assert_equal`, not `assertEqual`):

```python
from nose.tools import *

def my_test():
    assert_equal(42, 42)
    assert_not_in('camelCase', inflections)
    with assert_raises(AttributeError):
        object.foo
```

#### Fail Fast
`nosetests -x`

Use nose's "fail fast" feature when you've got a lot of test failures, but are just trying to see and fix the first failed test. Run that test quickly, fix, and repeat, moving on to the next.

#### Capture/Suppress STDOUT/Logs
By default, Nose captures STDOUT and logging output. This means that when you have test failures, it will capture STDOUT and logging output for each failed test and print it
along with the failure message and stack trace, rather than letting STDOUT go to the console at runtime and get mixed up with everything else that might be going to STDOUT.
Outputs become much more useful when they are split up by their test of origin.

Note: Capturing STDOUT breaks debugging tools like pdb, ipdb, etc., and can be disabled using the `--nocapture` or `-s` flag.

### How to Use It
In projects without their own custom test runner, it's just a matter of running `pip install nose` and then invoking `nosetests` from the command line.

In the case of Django, which has its own custom test runner, you'll need to do a little more work (but just a little). TODO: link to django-nose

## pytest
*pytest* is a test runner that supports python-style assertions, injectable fixtures, parameterized tests, and other helpful things.

#### Assertions
Unlike unittest and nosetests asserts, which require developers to look up each assertion method on a base class or module, pytest supports standard python assertions:

```python
def test_assertions():
    assert True
    assert foo == bar
    assert foo in bar
    with pytest.raises(TypeError):
        5 / 'ten'
```

#### Fixtures
pytest fixtures are plain functions decorated with `pytest.fixture`. Any test can then request a fixture by including the fixture name in its signature:

```python
import pytest
import StringIO

@pytest.fixture
def stream():
    return StringIO.StringIO()

def test_stream(stream):
    stream.write('foo')
    stream.seek(0)
    assert stream.read() == 'foo'
```

Fixtures also support teardown functions that are executed after tests finish. This is useful for any resource that has to be cleaned up after running tests (temporary files, database transactions, etc.).

```python
import pytest
import tempfile

@pytest.yield_fixture
def temp_file():
    """Open a temporary file on disk, then destroy after the test is finished.
    """
    with tempfile.TemporaryFile() as fp:
        yield
```

### How to Use It
```
pip install pytest
py.test
```

Only run tests including "api" in the name:
`py.test -k api`

#### Useful Plugins

* pytest-cov (test coverage)
* pytest-cache (only re-run failing tests)
* pytest-django (work with django)


[nose]: https://nose.readthedocs.org/en/latest/
[doctest]: https://docs.python.org/3.4/library/doctest.html
[unittest]: https://docs.python.org/3.4/library/unittest.html
[pytest]: https://pytest.org/latest/
