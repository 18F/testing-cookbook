def add(*numbers):
    """
    Add some numbers!

    add two numbers:
    >>> add(1, 2)
    3

    add three numbers:
    >>> add(1, 2, 3)
    6

    strings are concatenated:
    >>> add('1', '2')
    '12'
    """
    return reduce(lambda x, y: x + y, numbers)
