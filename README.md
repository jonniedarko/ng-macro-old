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

Wondering whats Just Happened with these changes? 
  What we did was use AngularJS's `module()` method to create and register our module "ngMacro" with AngularJS. The first argument is the name we give our module, the 2nd is an array of dependncies that are required by this module, in our case none.

Code changes so far: [Github commit](https://github.com/jonniedarko/ng-macro/commit/1bada95184fa2c46d71ea4b652d4f6ca37897160#diff-04c6e90faac2675aa89e2176d2eec7d8)

So Inorder to take this futher we need to introduce Controllers.

###what is Controller?
In Angular, a Controller is a JavaScript constructor function that is used to augment the Angular Scope.
A scope in AngularJS is an object that refers to the application model and is arraged in a hierarchical structure. Scopes can watch expressions and propagate events.

Controllers are used to Set up the initial state of the `$scope` object and add behaviors to it.
 

So lets creat our first controller. Add the following to our app.js file:

```js
app.controller('macroCtrl', function ($scope){
	$scope.user = { };
	
});
```

Here we are creating a controller "macroCtrl" and we are passing it a new child `$scope` which is an injectable parameter. This is taken care of by AngularJS, we just need to include it in our function to use it. We also just initialised the user variable. (**note:** inside the controller when we create a variable that can be used in our view, index.html, we create it under the `$scope` variable. This is almost like making them public, any variable not attached to the $scope cannot be accessed by our view)

So Back to our App. The first thing we need before we can get our suggested Calorie intake is caculate the users Basic Metabolic Rate. Lets add some where to view it:

Inside index.html add the following after the last "row" div

```html
<div class="row">
        <div class="col-sm-12"><p class="bg-primary kcal-flash"><b>&nbsp;{{user.name}}&nbsp;Basic Metabolic Rate: &nbsp; </b>&nbsp; {{getMetaRate()}}</p></div>
    </div>

```

create style.css and add the following just to keep things looking well

```css
.kcal-flash{
	padding: 5px;
	padding-left: 15px;
}
```

now lets wire things up...

Add the following inside our controller.

```js
$scope.getMetaRate = function(){

	var meta; 
	if($scope.user.sex === "male"){
		meta = (88.362 + (13.397 * parseFloat(  $scope.user.weight) ) 
				+(5.799 * parseFloat(  $scope.user.height) )
				-(5.677 * parseFloat(  $scope.user.age) ) || 0 );  
	}else if($scope.user.sex === "female"){
		meta = (447.593 + (9.247 * parseFloat(  $scope.user.weight) )
				+(3.098 * parseFloat(  $scope.user.height) )
				-(4.33 * parseFloat(  $scope.user.age) ) || 0 );
	}
	else meta = null;

	$scope.user.bmr= meta;

	return (!isNaN(meta) && (meta!=null)) ? parseFloat(meta).toFixed(2) : "Please Fill Out the above Form";
};

```
This might seem scary at first but once you have any experience with javascript its fairly easy to understand. Simply put it check if the user is male or female and returns the Metabolic rate using the user's weight, height and age which by the way are populated automatically when the user fills out the form. This is the magic of `ngModel`. the last line is just to make sure out number is returned a number and not as a string.

Now none of this will do anything if we forget to include the controller on out page. Surround our content with the following div
```html
<div ng-controller="macroCtrl">
	
</div>
```
Code changes so far: [Github commit](https://github.com/jonniedarko/ng-macro/commit/5377796162cda17b1893c671214cb906bc70530c)

finally we are going to finish of our app by calculating the Calories and displaying them. Add the following to the Index page:

```html
  <div class="row">
        <div class="col-sm-12">
            <select name="" id="" class="form-control" ng-model="user.activityLevel" ng-change="{{updateNutrition()}}">
                <option value="">Select you Activity Level</option>
                <option ng-repeat="activityLevel in activityLevels" value="{{activityLevel.value}}">{{activityLevel.title}}</option>
            </select>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <table class="table table-bordered">
                <thead>
                    <th></th>
                      <td ng-repeat="goal in goals">{{goal.title}}</td>
                </thead>
                <tbody>
                    <tr>
                        <td>Calories:</td>
                        <td ng-repeat="goal in goals">{{goal.calories | number:0}}</td>
                    </tr>
                    <tr>
                        <td>Protien:</td>
                        <td ng-repeat="goal in goals">{{goal.protein | number:0}}</td>
                    </tr>
                    <tr>
                        <td>Fats:</td>
                        <td ng-repeat="goal in goals">{{goal.fats | number:0}}</td>
                    </tr>
                    <tr>
                        <td>Carbs:</td>
                        <td ng-repeat="goal in goals">{{goal.carbs | number:0}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
```

Now thats our view template finished. But it will not look right yet as here we are introducing 2 more AngularJS directives , [ngRepeat]() and [ngChange]() which require functionality and variables setup in the controller.

ngChange is an AngularJS implementation of the regular onChange which allows you to use an AngularJS Expression. ere we are using it to fire the `updateNutrition()` function when the Activity level is selected.

ngRepeat is basically a "for" loop that repeats the element for each variable in an array.in order for this to display correctly add the following to the controller:

```js
$scope.goals = {
    current: {
        title:"Mainteance"
        ,calories: 0
        ,protein: 0
        ,fats: 0
        ,carbs:0
    }
    ,loss: {
        title:"Fat Loss"
        ,calories: 0
        ,protein: 0
        ,fats: 0
        ,carbs:0
    }
    ,gain:{
        title:"Muscle Gain"
        ,calories: 0
        ,protein: 0
        ,fats: 0
        ,carbs:0
    }
}
```
This simply creates and initialises the goals object and now our view will look more finalised (but not updating yet)



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