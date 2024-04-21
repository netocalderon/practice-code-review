# [userName](Ksantox)

```js
/function toLowerCase(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);

        if(charCode > 64 && charCode < 91) {
            result += String.fromCharCode(charCode + 32);
            continue;
        }

        result += text[i];
    }

    return result;
}
```

## Strategy

<!--
  Describe what strategy they used to pass this challenge.
  Careful! your strategy description should not mention
    the code they wrote to solve the challenge.

  Practice describing their strategy at a higher level:
  a simple way to understand strategy is to think of the important steps
  between the argument values and the return values.

  For example if they use a `for` loop
  you won't mention that `i` was incremented,
  but you might mention how the final result changes at each iteration.
-->

- this function is reads the alphabets of the word(text) and showing the result
  or small alphabets.
- it shows the string in a lower cases.

## Implementation

<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->

- the function (toLowerCase) changes the text input and on the first for loop it
  checks and review all elements and changed to charcodes. on the next if
  statement cases it checks the charcodes of the upper for loop and then if the
  charcode is between 64 and 91,it changes to the lower case corresponding
  charcode by adding 32 all over the charcode number.
- and replacing the input text to the new one it means

## Possible Refactors

<!--
  List a couple changes you could make in their code without changing their strategy.
  For example:
    `while` loops and `for` loops can often be interchanged.
    `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

  You don't need to actually rewrite the function.
  The goal of this section is that you exploring different JS language features
  and think of different ways to implement the same strategy.
-->

## References

<!--
  links that helped you to understand this solution or to think of possible refactors
-->
