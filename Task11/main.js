// Implicit Coercion Practice

// Log results of various implicit coercion operations
console.log('A' - 1); // NaN (Not-a-Number, 'A' cannot be subtracted)
console.log('A' + 1); // 'A1' (String concatenation)
console.log(2 + '2' + '2'); // '222' (Number 2 + string '2' becomes '22', then '22' + '2' becomes '222')
console.log('hello' + 'world' + 89); // 'helloworld89' (String concatenation)
console.log('hello' - 'world' + 89); // NaN (Subtraction of non-numeric strings results in NaN)
console.log('hello' + 78); // 'hello78' (String concatenation)
console.log('78' - 90 + '2'); // '-12' + '2' => '-122' (String '78' coerced to number, subtraction, then concatenation)
console.log(2 - '2' + 90); // 0 + 90 => 90 (String '2' coerced to number, subtraction, then addition)
console.log(89 - '90' / 2); // 89 - 45 => 44 (String '90' coerced to number, division, then subtraction)
console.log((true == false) > 2); // false > 2 => false (true == false is false, compared to 2)
