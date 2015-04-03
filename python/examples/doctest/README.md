---
layout: default
permalink: /python/examples/doctest/
---
# Python tests with `doctest`
The Python built-in [doctest module](https://docs.python.org/3/library/doctest.html)
allows you to embed unit tests in [function docstrings](https://www.python.org/dev/peps/pep-0257/).

To see the test output, just run:

```sh
make test
# which runs:
python -m doctest -v *.py
```
