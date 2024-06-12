class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        complements = {}
        
        for i in range(len(nums)):
            complement = complements.get(nums[i])

            if complement != None:
                return [complement, i]
            
            complements[target - nums[i]] = i



print(Solution.twoSum(Solution, [2,7,11,15], 9))