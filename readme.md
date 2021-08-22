Datastructure Needs to Complete ---

1. Dynamic Programming,
2. Recussion and Back Tracking
3. Divide and Concure
4. Tower of Hanio


Below is simple query to find the employee whose salary is highest. 

    select *from employee where salary=(select Max(salary) from employee);

We can nest the above query to find the second largest salary. 

    select *from employee 
    group by salary 
    order by  salary desc limit 1,1;


Big O - https://www.bigocheatsheet.com/


This Repositary is all about finding TimeComplexity of a program, Javascript ES5, Javascript ES6 promises.


ES5 - firm firste -- Easy way to Remember
ES6 - find and findIndex | isFinite | isNaN | isInteger | isSafeInteger


JavaScript ES5 - 

F - forEach()
I - indexOf() and lastIndexOf()
R - reduce()
M - map()

F - filter()
I - isArray()
R - reduceRight()
S - some()
T - trim()
E - every()

The interviews will have NodeJs, ExpressJs, Data Structure(Linked List, Stack, Queue and Trees) and Algorithms(Searching and Sorting).

1. Why NodeJS is non blocking IO ? Single Thread or Multi Thread ?
2. What is Event Loop in Node JS ?
3. What is the framework you have used in NodeJS & Angular? (Express, COA, Hapi e.t.c)
4. Authentication and Authorization of the API ?
5. What is Middleware in NodeJS ?
6. Callback, Promise, Async Await - Using File Operation
7. DS - Sorting, Singly LinkedList, Binary Tree, Stack, Queue
8. AWS - EC2, Lambda - Default time slot
9. // Recursion of Below Problem // console.log(sum(1)(2)(32)());
