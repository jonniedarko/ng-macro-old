ng-macro
========

An AngularJS Macro Calculator to calculate calories, protein, Carbs and fats for increasing muscle, loosing fat or maintaining current weight


***Steps and tutorial outline/notes

introduction:
 - What is AngularJS ( & briefly what is bootstrap)
 AngularJS is an open-source structural MVC framework for dynamic web applications which aims to make building large scale web applications easier for development, testing and maintaining. It was created by Google is maintained by both Google and the AngularJS community.

Some of Its main goals include:

Decoupling DOM manipulation from application logic.
Improve code testability.
Decoupling the client side of an application from the server side to allow development work to progress in parallel.
Decoupling view from the business logic and data providers.

 - Advantages and why/where would you use it
 It does alot of the Heavy lifting for you, you create your component and AngularJS manages those components and the connections between them
 Data models in Angular are plain old JavaScript objects (POJO) and don’t require extraneous getter and setter functions.
 We can create custom reusable HTML elements
 we Can create powerful custom filters which we can use to filter/sort or manipulate data using our own custom rules e.g. you could create a filter that removed all vowels from your text (see future post)
 save writting alot of repative or code.
 Data binding allows instant real time updating without refreshing page
 It is built with Unit Testing in mind and allows for far greater code coverage with less effort

 One disadvantage in my opinion is the documentation/developers guide for basics is great but when it some to complex examples such as complex directives I found fall shorts, expically when it comes to the Unit testing.

Twitter Bootstrap is also used in this tutorial but I will not be going into detail. In brief Bootstrap is a framework for responsive design which contains HTML and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. In this tutorial we will only be using it to "pretty up" our application and give it a polished professional look

Data Binding
The simplest and most basic example of the power and usefullness of AngularJS is in its data binding. Most Web frameworks till recently only used single way data binding, for example if we wanted to update our model we would make our change and then in order to see the change we would have to refresh the view manually. Not in angularJS. In AngularJS we have 2-way Data binding, when we update the view, it updates the model which auto update the views other references. Ass Google put it: "You can think of the view as simply an instant projection of your model".

There are a number of ways to do this, the simplist is using 2 of angulars built in fundamental capabilities, a "directive" called ngModel and an Angular Expression. A directive is a markers on a DOM element such as a css class, element name or attribute used to attach some behaviour
    users name on page using `{{ }}` - users name
    ng-model -

    JS Fiddle Data Binding: http://jsfiddle.net/jonniedarko/yRM8A/


Create index.html
create directory "Vendor"
Download and add to Vendor: (Mention bower and add link to bower tutorial later)
  - Jquery
  - Bootstrap
  - AngularJS

Create Basic html form using bootstrap styling
[commit](https://github.com/jonniedarko/ng-macro/commit/00f0b45cc81125d46ab85022da70357d5a2a62cd)

Data Binding without a controller
	users name on page using `{{ }}` - users name
	ng-model -

Introduce controller
	- what is Controller and why use it (MVC)
	- $scope, ng-model and {{}}
	- functions and variables basics

Intoducing Unit testing
 	- TDD : Why?
 	- jasmine basics

Lets Make a functional App

(next tutorial filter : converting kgs to pounds, ft to cm, filter data based on country, time, blah)
(Services & factories)

sources
 - https://www.AngularJS.org
 - http://www.sitepoint.com/10-reasons-use-angularjs/
 - http://getbootstrap.com