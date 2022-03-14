// // Declare an integer array of 6 elements
// int[] intArray = new int[6];
// int length = 0;

// // Add 3 elements to the Array
// for (int i = 0; i < 3; i++) {
//     intArray[length] = i;
//     length++;
// }

// for (int i = 0; i < intArray.length; i++) {
//     System.out.println("Index " + i + " contains " + intArray[i]);
// }

// // Insert a new element at the end of the Array. Again,
// // it's important to ensure that there is enough space
// // in the array for inserting a new element.
// intArray[length] = 10;
// length++;

// // First, we will have to create space for a new element.
// // We do that by shifting each element one index to the right.
// // This will firstly move the element at index 3, then 2, then 1, then finally 0.
// // We need to go backwards to avoid overwriting any elements.
// for (int i = 3; i >= 0; i--) {
//     intArray[i + 1] = intArray[i];
// }

// // Now that we have created space for the new element,
// // we can insert it at the beginning.
// intArray[0] = 20;

// // Say we want to insert the element at index 2.
// // First, we will have to create space for the new element.
// for (int i = 4; i >= 2; i--)
// {
//     // Shift each element one position to the right.
//     intArray[i + 1] = intArray[i];
// }

// // Now that we have created space for the new element,
// // we can insert it at the required index.
// intArray[2] = 30;

package leetcode_java;

public class Leet01 {

    public void duplicateZeros(int[] arr) {
        int numOfZeros = 0;
        for (int i: arr) {
            if ( i == 0 ) {
                numOfZeros++;
            }
        }

        int i = arr.length - 1;
        int j = arr.length + numOfZeros - 1;

        while (i != j) {
            insert(arr, i, j--);
            if (arr[i] == 0) {
                insert(arr, i, j--);
            }
            i--;
        }
    }

    private void insert(int[] arr, int i, int j) {
        if (j < arr.length) {
            arr[j] = arr[i];
        }
    }
}