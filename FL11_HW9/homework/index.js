/*TASK0*/
function getNumbers(str){
	var strmass=str.split('');
	var nummass= new Array();
	for (let i of strmass) {
        if (i%1==0) {
            nummass.push(i);
        }
        i++;
    }
	return nummass;

}		

/*TASK1*/
function findTypes(){
	for(let i =0; i< arguments.length; i++){
		console.log(typeof arguments[i]);
	}
}

/*TASK2*/
function executeforEach(mass, func){
	mass.forEach(function(el, i, mass){
		func(mass[i]);
	});
	return mass;
}


/*TASK3*/
function mapArray(arr, func){
    let mass = new Array();
    executeforEach(arr, function(el){
        mass.push(func(el));
    });
    return mass;
}


/*TASK4*/
function filterArray(arr, func){
    let mass = new Array();
    executeforEach(arr, function(el){
        if(func(el)) {
            mass.push(el);
        }
    });
    return mass;
}

/*TASK5*/
function showFormattedDate(date){
	var options={
		year:"numeric",
		month:"short",
		day:"numeric"
};
	return ("Date: "+ date.toLocaleDateString("en-us", options));	
}

/*TASK6*/
function canConvertToDate(date6){
	let date =new Date(2019, 15,5);
	let tmpday1= date6.getDay();
	let tmpmonth1=date6.getMonth();
	let tmpyear1=date6.getFullYear();
	let tmpday2= date.getDay();
	let tmpmonth2=date.getMonth();
	let tmpyear2=date.getFullYear();		
		if(tmpday1!==tmpday2||tmpmonth1!==tmpmonth2||tmpyear1!==tmpyear2){
			return false;
		}else{
			return true;
		}
}

/*TASK7*/
function daysBetween(date1, date2){
	let langDays = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 *24));
	return langDays;
}

const data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ]
/*TASK8*/
 function getAmountOfAdultPeople(data){
  	let counter =0;
  	let adult = new Date(2018, 1,1)- new Date(2000, 1,1);
  	for(let i =0; i<data.length;i++){
  		if(adult<Date.parse(data[i].birthday)){
  			counter++;
  		}
  	}
  	return counter;
 }

/*TASK9*/
 function keys(keys){
 	let mass = new Array();
 	for(let i in keys){
          if(object.hasOwnProperty(i)){
            mass.push(i)
        }else{
        	break;
        }
    }
     return mass;
 }

 /*TASK10*/
  function values(data1){
    let mass = new Array();
    for(let i in data1){
          mass.push(data1[i])
    }
    return mass; 
}