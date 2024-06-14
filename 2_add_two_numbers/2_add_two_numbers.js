/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const ln = {val: 0, next: null}
    let current = ln
    let carry = 0

    while (l1 || l2 || carry > 0) {
        let [v1, v2] = [0, 0]
        if (l1) {
            v1 = l1.val
            l1 = l1.next
        }
        if (l2) {
            v2 = l2.val
            l2 = l2.next
        }

        num = v1 + v2 + carry
        carry = ~~(num / 10)
        num %= 10

        current.next = {val: num, next: null}
        current = current.next
    }

    return ln.next
}

function asListNode(arr) {
    ln = {val: 0, next: null}
    current = ln

    for (let i = 0; i < arr.length; i++) {
        current.next = {val: arr[i], next: null}
        current = current.next
    }

    return ln.next
}

function asArray(listNode) {
    arr = []

    while (listNode) {
        arr.push(listNode.val)
        listNode = listNode.next
    }

    return arr
}