console.log(1>2);
console.log(1>=2);
console.log(1<2);
console.log(1<=2);
console.log(1==2);
console.log(1!=2);

/*
  1]
 In JavaScript, when we compare null with a number using the > operator (null > 0),
    or == (null == 0), or even ===, the result will be false because null is treated as 
    a non-existent value and doesn't coerce into a number.

  2]
 However, when we use the >= operator (null >= 0),
    JavaScript follows a different rule. The >= operator performs type coercion, 
    and null is coerced to 0. In other words, null is treated as 0 when using >=. 
    So null >= 0 evaluates to `

*/
console.log(null>0);
console.log(null==0);
console.log(null<=0);


/*
  When undefined is compared to a number or a string using any comparison
  operator (==, ===, <, >, <=, >=), the result is always false.
*/
console.log(undefined==0);
console.log(undefined===0);
console.log(undefined<=0);
console.log(undefined>=0);
console.log(undefined<0);
console.log(undefined>0);


/*
 When a string is compared to a number using the == operator,
 like in "2" == 2, JavaScript coerces/(force) the string to a number, 
 resulting in a true equality, while with the === operator, 
 as in "2" === 2, strict comparison fails due to differing types.
*/


console.log("2"==2);
console.log("2"===2);
console.log(2==2);