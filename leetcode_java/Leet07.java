package leetcode_java;

import java.util.Arrays;

public class Leet07 {

    public int[] sortedSquares( int[] nums ) {

        int[] resultedArray = new int[ nums.length ];

        for ( int i = 0; i < nums.length; i++ ) {

            resultedArray[ i ] = nums[ i ] * nums[ i ];

        }

        Arrays.sort( resultedArray );

        return resultedArray;

    }
    
}