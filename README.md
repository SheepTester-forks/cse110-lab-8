# Lab 8 - Starter

Sean Yen

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

   **Within a Github action that runs whenever code is pushed** to track development progress during development automatically and to demonstrate that new code helps to resolve failing tests.

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

   **No**.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

   **No** because it involves many moving parts, like connecting to a back-end service, a text box allowing the user to enter in their message, a send button, validation to ensure no empty strings or bad words, etc.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

   **Yes** since it is a small-scale encapsulated unit.

![A screenshot of all your tests results from running `npm test`.](./screenshot.png)
