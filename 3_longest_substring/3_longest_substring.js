/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length == 0) {
        return 0
    }
    
    let bestScore = 0
    let letters = {}
    let start = 0
    let end

    for (end = 0; end < s.length; end++) {
        previous = letters[s[end]]

        if (previous == null || previous == -1) {
            letters[s[end]] = end
            continue
        }

        if (bestScore < end - start) {
            bestScore = end - start
        }

        for (let i = start; i <= previous; i++) {
            letters[s[i]] = -1
        }

        start = previous + 1
        letters[s[start]] = start
        letters[s[end]] = end
    }

    if (bestScore < end - start) {
        bestScore = end - start 
    }

    return bestScore
};