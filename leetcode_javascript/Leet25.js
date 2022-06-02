class Node {

    constructor(val, next) {

      this.val = val;
      this.next = next ?? null;

    }

  }
  
  class MyLinkedList {

    constructor() {

      this.size = 0;
      this.head = null;

    }
  
    get(index) {

      if (index < 0 || index >= this.size) return -1;
  
      let curr = this.head;

      for (let i = 0; i < index; i++) {

        curr = curr.next;

      }

      return curr.val;

    }
  
    addAtHead(val) {

      this.addAtIndex(0, val);

    }
  
    addAtTail(val) {

      this.addAtIndex(this.size, val);

    }
  
    addAtIndex(index, val) {

      if (index < 0 || index > this.size) return;
  
      const newNode = new Node(val);

      if (index === 0) {

        newNode.next = this.head;
        this.head = newNode;

      } else {

        let curr = this.head;

        for (let i = 0; i < index - 1; i++) {

          curr = curr.next;

        }

        newNode.next = curr.next;
        curr.next = newNode;

      }

      this.size++;

    }
  
    deleteAtIndex(index) {

      if (index < 0 || index >= this.size) return;
  
      if (index === 0) {

        this.head = this.head.next;

      } else {

        let curr = this.head;

        for (let i = 0; i < index - 1; i++) {

          curr = curr.next;

        }

        curr.next = curr.next?.next ?? null;

      }

      this.size--;

    }
    
  }