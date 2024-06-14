class ListNode():
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution():
    def addTwoNumbers(self, l1, l2):
        ln = ListNode()
        current = ln
        carry = 0

        while l1 or l2 or carry:
            v1, v2 = 0, 0
            if l1: 
                v1 = l1.val
                l1 = l1.next
            if l2: 
                v2 = l2.val
                l2 = l2.next

            num = v1 + v2 + carry
            carry = num // 10
            num %= 10

            current.next = ListNode(num)
            current = current.next

        return ln.next

def asListNode(arr):
    ln = ListNode()
    current = ln

    for i in range(len(arr)):
        current.next = ListNode(arr[i])
        current = current.next

    return ln.next

def asArray(listNode):
    arr = []

    while listNode != None:
        arr.append(listNode.val)
        listNode = listNode.next

    return arr