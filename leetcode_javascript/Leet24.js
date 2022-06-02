/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *      this.val = ( val === undefined ? 0 : val )
 *      this.left = ( left === undefined ? null : left )
 *      this.right = ( right === undefined ? null : right )
 * }
 */
/**
 * @param { number } n
 * @return { TreeNode[] }
 */

const generateTreeHelper = ( start, end ) => {

    const nodes = [];

    if ( start > end ) {

        nodes.push( null );
        return nodes;

    }

    for ( let i = start; i <= end; i++ ) {

        const left = generateTreeHelper( start, i - 1 );
        const right = generateTreeHelper( i + 1, end );

        for ( let l of left ) {

            for ( let r of right ) {

                const node = new TreeNode( i, l, r );
                nodes.push( node );

            }

        }

    }

    return nodes;

}

var generateTrees = function( n ) {

    return generateTreeHelper( 1, n );

};