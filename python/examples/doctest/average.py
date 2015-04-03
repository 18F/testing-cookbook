def average(*numbers):
    """
    Get the average of some numbers as a float.

    >>> average(1, 2)
    1.5

    >>> average(0, 100, 200)
    100.0
    """
    return sum(numbers) / (0.0 + len(numbers))
