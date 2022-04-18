/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function( s ) {

    let firstCharacter = 0;
    let lastCharacter = s.length - 1;

    while ( firstCharacter <= lastCharacter ) {

        let temp = s[ firstCharacter ];
        s[ firstCharacter ] = s[ lastCharacter ];
        s[ lastCharacter ] = temp;
        firstCharacter++;
        lastCharacter--;

    }

    return s;

};