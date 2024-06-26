package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	result := &ListNode{0, nil}
	current := result
	carry := 0

	for l1 != nil || l2 != nil || carry > 0 {
		v1, v2 := 0, 0

		if l1 != nil {
			v1 = l1.Val
			l1 = l1.Next
		}

		if l2 != nil {
			v2 = l2.Val
			l2 = l2.Next
		}

		num := v1 + v2 + carry
		carry = num / 10
		num = num % 10

		current.Next = &ListNode{num, nil}
		current = current.Next
	}

	return result.Next
}
