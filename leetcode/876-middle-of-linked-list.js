// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let answer = []
    let index = Math.floor(head.length / 2)
    for (i = index; i < head.length; i++) {
        answer.push(head[i])
    }
    return answer
};

console.log(middleNode([1, 2, 3, 4, 5]));
console.log(middleNode([1, 2, 3, 4, 5, 6]));

// Apparently a linked list an array are VERY different things. The correct solution is below. This is one I will have to spend some more time on.  

// Time Complexity :  O(n)
// Space Complexity : O(1)
var middleNode = function (head) {
    // Initialize two pointers p1 and p2 pointing to the head...
    var p1 = head;
    var p2 = head;
    while (p2 != null && p2.next != null) {
        // In each iteration, we move p1 one node forward and we move p2 two nodes forward...
        p1 = p1.next;
        p2 = p2.next.next;
    }
    // When p2 reaches the last node, p1 will be exactly at the middle point...
    return p1;
};

//I understand that you are essentially moving pointer two twice for each time pointer one moves once, which then makes pointer 1 at the halfway point when pointer 1 is at the end. 