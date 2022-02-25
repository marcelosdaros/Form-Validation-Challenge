## Form-Validation-Challenge

The purpose of this exercise is to perform validations to a form containing the following 4 fields: Name, Telephone, Email and Password.
The main rules for the field's validation are:

1) Name cannot contain any numbers, only letters.
2) Telephone cannot contain any letter, only numbers.
3) Email needs to have the 'at' sign (@).
4) Password needs to have at least 8 digits.

Additional requirements:

5) When the screen is closed and reopened afterwards or if it is refreshed, the values from the inputs cannot be lost, the page needs to return to its latest state.
6) A field is valid once the user starts to type the field's content and its value is valid.
7) A field is invalid only if the user has already finished and left the field's input box (after the *blur* event occurs) and its value is a valid value. After the first occurrence of the *blur* event, the field will be invalid always when the value is invalid, irrespective if the user is still typing (did not finish his/her input yet) or not and will be valid always when the field's content is a valid value.
8) If the fields contains valid content, those must displayed with green color in the screen.
9) If the fields contains invalid content, those must displayed with red color in the screen.
10) For neutral/initial state, the fields must appear with black color in the screen.

## Source Code - Technical Specifications

- The code has 2 main objects: 'validation', responsible to define the possible states for the fields (valid, invalid or neutral), and 'fields', responsible to store the properties of each field.
- The local storage was used to store the data of each field. Once the web page is opened, the application will check if there is any value in the local storage, if so it will display the value in the respective field as per requirement #5.
- To perform the validations, function *fieldValidation()* was created which performs the validation for the respective fields based in requirements #1, #2, #3 and #4. To test the Name's input *regex* was used, to test the Telephone method *isNaN()* was used, to test the Email the method *includes('@')* was used and to test the Password the length of the field was used to determine if this field has more than 8 digits or not.
- 3 functions were created to change the field's status: *changeToValid()*, *changeToInvalid()* and *changeToNeutral()*. The first one changes the border input's style to *1px solid green* and the lable color to *green*, the second function changes the border input's style to *1px solid red* and the lable color to *red* and the third function changes the border input's style to *1px solid black* and the lable color to *black*, as per requirements #8, #9 and #10.
- To validate the fields, the event listener *input* was created, so every time that the user types a new character, the application will check if the field's content is valid or not as per requirement #6.
- To accomplish requirement #7, the property called 'filled' was added to the field objects, which always starts with 'false'. This field indicates if the user has already finished to type the field's content or not, and for that a second event listener using the *blur* event was created. The mentioned property is changed to 'true' after the first *blur* event occurs and only when this field is 'true' then the field validation that checks if the value is invalid will happen. This means that if the content is invalid but the first blur event did not occur yet, the field's color will remain black or will change to black in case it is currently green (valid). After the first blur event, the color will change to red always when the content is invalid.

#### Developed by: Marcelo Strack Daros
