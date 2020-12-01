A software system may consist of many classes. But in any case, when you have many, it needs to be managed. Think of a big organization, with its work force exceeding several thousand employees (let's take one employee as a one class). In order to manage such a work force, you need to have proper management policies in place. Same technique can be applies to manage classes of your software system as well. In order to manage the classes of a software system, and to reduce the complexity, the system designers use several techniques, which can be grouped under four main concepts:

Encapsulation
Abstraction
Inheritance
Polymorphism


Encapsulation - 

Encapsulation means wrapping up data and member function (Method) together into a 
single unit i.e. class. Encapsulation automatically achieve the concept of data hiding 
providing security to data by making the variable as private and expose the property 
to access the private data which would be public.

Let's discuss Encapsulation with an example of your school Bag in which you keep all 
your stuff like books and pens and document etc. to keep it safe from the outside world. 
School_BagHere you are hiding your books and pen by putting them inside the 
Bag similarly in OOP we encapsulate the data and methods inside the class 
to keep it safe and accessible only to authorized member.


Abstraction -- 

Abstraction is the process of hiding out the working style of an object and showing 
only the required information of the object in understandable manner.

Let's discuss it with the help of an example of Car.
You know that you need to put on the keys, change the gear and accelerate in order 
to drive a car but do you actually know what happens when you change the gear 
and accelerate, or say how the car engine works? You don't, and that's simple 
because you don't need to know all that complexity. 
Your Job is to just drive the car. That's what we call Abstraction.

Inheritance --

The ability of creating a new class from an existing class. Inheritance is when 
an object acquires the property of another object. Inheritance allows a 
class (subclass) to acquire the properties and behavior of another 
class (superclass). It helps to reuse, customize and enhance the existing code. 
So it helps to write a code accurately and reduce the development time.

For example, a secintific calculator is an extended form of Caluculator, 
here Caluculator is parent and car secintific calculator is Child object.
Another example, a convertible car and 4x4 car are the extended form of car.

Polymorphism -- 

Poly=many morph= form
By name we can come to a conclusion that it's about something with many forms. 
In OOP it is an ability of an object to take many forms.
A subclass can have their own behavior and share some behavior from its parent 
class BUT!! not vice versa. A parent class cannot have the behavior of its subclass.

Let's learn with the help of an example:
My name is Vivek: I am a husband, a brother, a friend, a son, a student 
depending upon the situation i.e. parameter surrounding me. twins
Another example, Twin brothers looks alike but they hold different characters.
Similarly in OOP we can have a function with different form but with same name.

It has 2 types - 

Runtime Polymorphism - Method Overriding

CompileTime Polymorphism - Method Overloading


Static and Dynamic Binding -- 

Dynamic Binding or Early Binding -- 

When compiler is not able to resolve the call/binding at compile time, 
such binding is known as Dynamic or late Binding. Method Overriding is a perfect 
example of dynamic binding as in overriding both parent and child classes 
have same method and in this case the type of the object determines which 
method is to be executed. The type of object is determined at the run 
time so this is known as dynamic binding.

Static Binding --

Here we have two classes Human and Boy. Both the classes have same method walk() 
but the method is static, which means it cannot be overriden so even though I have 
used the object of Boy class while creating object obj, the parent class 
method is called by it. Because the reference is of Human type (parent class). 
So whenever a binding of static, private and final methods happen, type of the 
class is determined by the compiler at compile time and the binding happens 
then and there.