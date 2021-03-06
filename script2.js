// функция возвращает другую функцию 

function func1(){
	 function func2(){
		console.log('Hello')
	}

	return func2; // не вызывает функцию func2, а возвращает
}


//в переменной будет хранится функция func2
var res = func1()

//если у нас в res функция, значит
//мы можем вызывать её
//var res2 = res()
//тоже самое
res()

//когда выполнилась функция func1 в res подставилась функция func2

/ вот так подставилась

var res =  function func2(){
		console.log('Hello')
	};


	

//////////////////////////////////////////////////////////////////////////





//Теперь делаем так, что бы функция, что то вернула

function func1(){
	 function func2(){
		return 'Hello';
	}

	return func2; // если функция не будет возвращать
				// func2, то будет ошибка
				//если указать со скобками
				//то будет не возврат, а вызов
}

var res = func1()
console.log(res())


// другой способ вызова
//console.log(func1()())




//////////////////////////////////////////////////////////////////////


// область видимости

//внутри функции, объявлены переменные
// они доступны только внутри функции
//нельзя пользоваться переменной c
//внутри функции func1 (она не в её области видимости)


//каждая функция имеет доступ к той области видимости
//в которой эта функция было объявлена и может этой
// областью видимости пользоваться

//func1 объявлена в глобальной области видимости

function func1(a){
	 function func2(b){
		var c = 100;

		return a+b+c; // return 1 + 10 + 100

		// сначала функция func2
		//ищет переменную a внутри себя
		//только потом будет искать внутри 
		//func1, если не найдёт
	}

	return func2(10); //возвращает результат  // return 111
}

var res = func1(1) // = 111
console.log(res) // 111




/////////////////////////////////////////////////////////////////////////





//Замыкания
//это способность функции, запоминать
//область видимости, в которых
//они были объявлены и этой областью видимости пользоваться


//запомнить область видимости, это значит
//что func2 может использовать переменную b
//внутри себя
//func2 может использовать переменную a внутри себя

function func1(a){ // пришла единичка 
	var b = 10;   //func1 объявила переменную

	 function func2(d){ //объявила функцию
		var c = 100;

		return a+b+c+d; // 1 + 10 + 100 + 10

	}

	return func2; // и вернула эту функцию
}

var res = func1(1); // записалась func2

console.log(res(10)) //и теперь вызываем func2 и передаём 10




/////////////////////////////////////////////////////////////////////




//Объявлена функция callFunction, которая имеет параметр
// с именем fn. Задача callFunction ­ принять функцию 
//в качестве аргумента, выполнить эту функцию и
//вывести результат ее выполнения в консоль

/*
Как видно из кода, при вызове функции callFunction 
мы просто передаем другую функцию, объявленную при 
помощи function expression.

Ранее говорилось, что, если функция объявлена как 
часть другого выражения, то считается, что такая функция
 объявлена при помощи  function expression.

Но интерес здесь представляет то, что функция, 
передаваемая в callFunction в качестве аргумента является
 анонимной, то есть не имеет имени. Да, внутри callFunction
 она будет доступна по имени параметра fn, но на момент передачи,
функция не имеет имени.


function callFunction(fn) {
	var r = fn();
	
	console.log("Результат работы функции:", r)
}


callFunction(function(){
	return 10 + 10;
});