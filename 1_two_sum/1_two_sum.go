package main

func twoSum(nums []int, target int) []int {
	complements := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		complement, ok := complements[nums[i]]
		if ok {
			return []int{complement, i}
		}

		complements[target-nums[i]] = i
	}

	return nil
}
