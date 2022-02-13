def sum_two_smallest_numbers(numbers):
    s = sorted(set(numbers))
    return list(s)[0] + list(s)[1]
