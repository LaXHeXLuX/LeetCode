/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class ListNode {
    int val;
    ListNode next;

    public ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode ln = new ListNode(0, null);
        ListNode current = ln;
        int carry = 0;

        while (l1 != null || l2 != null || carry > 0) {
            int v1 = 0;
            int v2 = 0;

            if (l1 != null) {
                v1 = l1.val;
                l1 = l1.next;
            }
            if (l2 != null) {
                v2 = l2.val;
                l2 = l2.next;
            }

            int num = v1 + v2 + carry;
            carry = num / 10;
            num %= 10;

            current.next = new ListNode(num, null);
            current = current.next;
        }

        return ln.next;
    }
}