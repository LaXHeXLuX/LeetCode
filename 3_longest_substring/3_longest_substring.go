package main

func lengthOfLongestSubstring(s string) int {
	if len(s) == 0 {
		return 0
	}

	bestScore := 0
	letters := make(map[byte]int)
	start := 0
	end := 0

	for ; end < len(s); end++ {
		previous, ok := letters[s[end]]

		if !ok || previous == -1 {
			letters[s[end]] = end
			continue
		}

		if bestScore < end-start {
			bestScore = end - start
		}

		for i := start; i <= previous; i++ {
			letters[s[i]] = -1
		}

		start = previous + 1
		letters[s[start]] = start
		letters[s[end]] = end
	}

	if bestScore < end-start {
		bestScore = end - start
	}

	return bestScore
}
