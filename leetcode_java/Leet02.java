package leetcode_java;

public class Leet02 {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int position1 = m-1;
        int position2 = n-1;
        int i = m+n-1;

        while (position2 >= 0) {

            if (position1 >= 0 && nums1[position1] > nums2[position2]) {
                nums1[i--] = nums1[position1--];
            }

            else {

                nums1[i--] = nums2[position2--];

            }
        }
    }    
}