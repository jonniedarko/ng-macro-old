ng-macro: An Introduction to AngularJS
========

In this tutorial we will jump head first into building a simple but functional AngularJS Application. We will be building a simple Macro Calculator which can calculate the calories, protein, Carbs and fats required for increasing muscle, loosing fat or maintaining current weight.

###What is AngularJS?
AngularJS is an open-source structural MVC framework for dynamic web applications which aims to make building large scale web applications easier for development, testing and maintaining. It was created by Google is maintained by both Google and the AngularJS community.

####Some of Its main goals include:
 - Decoupling DOM manipulation from application logic.
 - Improve code testability.
 - Decoupling the client side of an application from the server side to allow development work to progress in parallel.
 - Decoupling view from the business logic and data providers.

####Advantages and why/where would you use it
 - It does alot of the Heavy lifting for you, you create your component and AngularJS manages those components and the connections between them
 - Data models in Angular are plain old JavaScript objects (POJO) and don’t require extraneous getter and setter functions.
 - We can create custom reusable HTML elements
 - we Can create powerful custom filters which we can use to filter/sort or manipulate data using our own custom rules e.g. you could create a filter that removed all vowels from your text (see future post)
 - save writting alot of repative or code.
  - Data binding allows instant real time updating without refreshing page
  - It is built with Unit Testing in mind and allows for far greater code coverage with less effort

 One disadvantage in my opinion is the documentation/developers guide for basics is great but when it some to complex examples such as complex directives I found fall shorts, expically when it comes to the Unit testing.

[Twitter's Bootstrap](http://getbootstrap.com) is also used in this tutorial but I will not be going into detail. In brief Bootstrap is a framework for responsive design which contains HTML and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. In this tutorial we will only be using it to "pretty up" our application and give it a polished professional look.

So Lets get started....

####Data Binding
The simplest and most basic example of the power and usefullness of AngularJS is in its data binding. Most Web frameworks till recently only used single way data binding, for example if we wanted to update our model we would make our change and then in order to see the change we would have to refresh the view manually. Not in angularJS. In AngularJS we have 2-way Data binding, when we update the view, it updates the model which auto update the views other references. Ass Google put it: 
>You can think of the view as simply an instant projection of your model.

There are a number of ways to do this, the simplist is using 2 of angulars built in fundamental capabilities, a "directive" called ngModel and an Angular Expression.

A directive is a markers on a DOM element such as a css class, element name or attribute used to attach some behaviour. We won't go into much detail here on Directives, thats a post in its own for later.

An Angular Expression are JavaScript-like code snippets surrounded by double curly braces like:

```{{ expression }}``` 

Expressions can evaluate angualar variables ,such as those created by an ngModel declaration, evaluating math expression as well as calling a function ( this requires a controller and $scope which we will introduce later)

Fiddle Example
    JS Fiddle Data Binding: http://jsfiddle.net/jonniedarko/hmyZB/8/

So in order to go further with this we need to do a little bit of set up....

Note: I am using [Mamp](https://www.mamp.info) as my webServer for this tutorial as it doesn't require much setting up, but you can use any webserver you like, in later tutorials we will be using node to server our files

####Creating your first AngularJS App
Inside your htdocs folder create a folder called "ng-macro"
Create an empty index.html
Create directory "vendor"
Download (unzip where required) and add to Vendor: (in Later tutorials we will use bower to do all this for us )

  - [Jquery](http://code.jquery.com/jquery-2.1.1.min.js)
  - [Bootstrap](https://github.com/twbs/bootstrap/releases/download/v3.1.1/bootstrap-3.1.1-dist.zip)
  - [AngularJS](https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js)

Create Basic html form using bootstrap styling

```html
	<!doctype html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>ng-macro | Jonnie.io</title>
		<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container">
		    <div class="row">
		        <div class="col-sm-12"><h1>Ng-Macro</h1></div>
		    </div>
		    <div class="row">
		        <div class="col-sm-8 form-group"><input type="text" class="form-control" id="user_name" placeholder="What's your name?"></div>
		        <div class="col-sm-4 form-group"><input type="text" class="form-control" id="user_id" placeholder="What's your age?"></div>
		    </div>
		    <div class="row">
		        <div class="col-sm-4 form-group">
		            <div class="input-group">
		                <input type="text" class="form-control" id="user_height" placeholder="What's your height?">
		                <span class="input-group-addon">cm</span>
		            </div>
		        </div>
		        <div class="col-sm-4 form-group">
		            <div class="input-group">
		                <input type="text" class="form-control"  id="user_weight" placeholder="What's your weight?">
		                <span class="input-group-addon">kg</span>
		            </div>
		        </div>
		        <div class="col-sm-4 form-group">
		            <div class="">
		                <select name="" id="user_sex" class="form-control form-control margin-zero">
		                    <option value="">what is your sex?</option>
		                    <option value="male">Male</option>
		                    <option value="female">female</option>
		                </select>
		            </div>
		        </div>
		    </div>
		</div>
		<!-- Dependencies-->
		<script src="vendor/jquery/jquery.min.js"></script>
		<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
		<script src="vendor/angular/angular.min.js"></script>
	</body>
	</html>
```
(If you prefer you can download everythingfrom this point checkout the github[commit](https://github.com/jonniedarko/ng-macro/commit/00f0b45cc81125d46ab85022da70357d5a2a62cd))

Ok first is first, lets add a few basic ngModels to bind some data. We need to get the users height, weight , age, sex and to personalise it their name.

find the input for the user name and add the ngModel attribute "user.name"

```html
<input type="text" class="form-control" id="user_name" ng-module="user.name" placeholder="What's your name?">
```
Now do the Same for user.sex, user.height, user.weight, and user.age. While we are at it create a new app.js file in out ng-macro folder, and Add the following to initialise our Angularjs App:

- inside app.js

```js
var app = angular.module('ngMacro', []);

``` 

inside our index file change our body tag to:

```html
	<body ng-app="ngMacro">
```

and under the dependecy scripts include our app.js file 


```html
	<script src="app.js"></script>
```
**Note:** It is essential this is included after our AngularJS file and AngularJS's dependencies otherwise you will get an _Uncaught ReferenceError: angular is not defined_ and possible an _Uncaught Error: [$injector:modulerr]_ in the browser Console.

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