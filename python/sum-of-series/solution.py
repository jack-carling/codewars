def series_sum(n):
    total = float(0)
    numbers = range(1, n + 1)
    for number in numbers:
        number = number * 3 - 2
        total += 1 / number

    return '{:.2f}'.format(total)
