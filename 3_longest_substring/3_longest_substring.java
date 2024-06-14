import java.util.HashMap;
import java.util.Map;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s.length() == 0) return 0;
        
        int bestScore = 0;
        Map<Character, Integer> letters = new HashMap<>();
        int start = 0;
        int end;

        for (end = 0; end < s.length(); end++) {
            char c = s.charAt(end);
            System.out.println(end + " " + c + ", " + start + " " + s.charAt(start) + ": " + letters);

            if (!letters.containsKey(c) || letters.get(c) == -1) {
                letters.put(c, end);
                continue;
            }

            if (bestScore < end - start) {
                bestScore = end - start;
            }
            
            int previous = letters.get(c);

            for (int i = start; i <= previous; i++) {
                letters.put(s.charAt(i), -1);
            }

            start = previous + 1;
            letters.put(s.charAt(start), start);
            letters.put(c, end);
        }

        if (bestScore < end - start) {
            bestScore = end - start;
        }

        return bestScore;
    }
}