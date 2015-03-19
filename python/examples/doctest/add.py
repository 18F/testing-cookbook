import doctest

def add(*numbers):
    """
    adds one or more numbers
    >>> add(1, 2)
    3
    """
    return reduce(lambda x, y: x + y, numbers)
