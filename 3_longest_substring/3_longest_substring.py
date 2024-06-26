import time


def longestSubstring(s):
    if len(s) == 0: 
        return 0
    
    bestScore = 0
    letters = {}
    start = 0

    for end in range(len(s)):
        previous = letters.get(s[end])
        if previous == None or previous == -1:
            letters[s[end]] = end
            continue

        if bestScore < end - start:
            bestScore = end - start

        for i in range(start, previous + 1):
            letters[s[i]] = -1

        start = previous + 1
        letters[s[start]] = start
        letters[s[end]] = end

    if bestScore < end+1 - start:
        bestScore = end+1 - start 

    return bestScore