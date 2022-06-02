/**
 * Definition for singly-linked list.
 * function ListNode( val, next ) {
 *      this.val = ( val === undefined ? 0 : val)
 *      this.next = ( next === undefined ? null : next )
 * }
 */
/**
 * @param { ListNode } head
 * @return { ListNode }
 */
let reverseList = function( head ) {

    let prev = null, next = null;

    while ( head ) {

        next = head.next;
        head.next = prev;
        prev = head;
        head = next;

    }

    return prev;

};