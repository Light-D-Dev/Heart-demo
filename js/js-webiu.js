// var arraynumbers = [4,10,5,2,20,25,23,70,59,80]

// var sortarrraynumbers = (arraynumbers.sort(function(a, b){return(a-b)}));

// function arrayMax(sortarrraynumbers) {
//     return Math.max.apply(undefined, sortarrraynumbers);
//   }

// function sumArray(sortarrraynumbers){
//     let sum = 0
//      for (let i = 0; i < sortarrraynumbers.length; i++ ){
//         sum += sortarrraynumbers[i]
//      }
//      return sum;
// }
// var averageValueArray = sumArray(sortarrraynumbers)/sortarrraynumbers.length

// var newarrray = sortarrraynumbers.filter(function(items){
//     return items < averageValueArray
// })

// console.log(sortarrraynumbers);

// console.log('max number: '+ arrayMax(sortarrraynumbers));

// console.log('the average value of the array: '+ averageValueArray);

// console.log(newarrray)


// var languages = [
//   'java',
//   'ruby',
//   'PHP' 
// ]

// console.log(languages.slice(0, 4));

// function writelog() {
//   var mystring = '';
//    for (var param of arguments){
//        mystring += `${param} - `
//    }
//    console.log(mystring);
// }

// writelog('log1', 'log2')

// var myInfor = {
//     name: 'Bui duc',
//     age: 23,
//     getname: function() {
//       return this.name
//     }
// }
// myInfor.email = 'shroudduc@gmail.com'
// delete myInfor.age  

// console.log(myInfor.getname());

// function user(firstname, lastname, age){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;

//     this.getname = function() {
//         return `${this.firstname} ${this.lastname}`
//     }
// }
// user.prototype.email = 'shroudduc@gmail.com'
// user.prototype.getExp = function() {
//     return 
// }
// var teacher = new user('bui', 'duc', 18)
// var student = new user('nguyen', 'quyen', 20)

// console.log(teacher.getname());
// console.log(student.getname());

// var date = new Date()

// var year = date.getFullYear()
// var month = date.getMonth() + 1
// var day = date.getDay()

// const seconds = Math.floor(Date.now() / 1000)

// console.log(seconds);
// console.log(date.getTimezoneOffset());

// var feeling = 'happy'

// //Swtich Case
// switch (feeling) {
//     case 'hate':
//         console.log('I hate you');
//         break;
//     case 'love':
//         console.log('I love you');
//         break;
//     default:
//         console.log('nothing happens');
//         break;
// }

//Toán tử 3 ngôi - Ternary operator
// var course = {
//     name:  'java',
//     coins: 200
// }

// var result = course.coins > 0 ? `${course.coins} coins` : 'Free'
// console.log(result);

// var Styles = [
//     'jazz',
//     'Blues'
// ]
// Styles.push('Rock-n-Roll')
// Styles.splice(1,1,'Classics')

// var remove = Styles.shift('jazz')
// Styles.unshift('Rap','Reggae')

// console.log(Styles);
// console.log(remove);

// function sumInput() {

//     let numbers = [];
  
//     while (true) {
  
//       let value = prompt("A number please?", );
  
//       // should we cancel?
//       if (value === "" || value === null || !isFinite(value)) break;
  
//       numbers.push(+value) 
//     }
  
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
//   alert(sumInput())

//   arr1 = [1, -2, 3, 4, -9, 6]
//   function getMaxSubSum(arr1) {
//     let maxSum = 0
//     let partialSum = 0;
  
//     for (let item of arr1) { // for each item of arr
//       partialSum += item; // add it to partialSum
//       maxSum = Math.max(maxSum, partialSum); // remember the maximum
//       if (partialSum < 0) partialSum = 0; // zero if negative
//     }
  
//     return maxSum;
//   }
  
//   alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
//   alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11  
//   alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
//   alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
//   alert( getMaxSubSum([1, 2, 3]) ); // 6
//   alert( getMaxSubSum([-1, -2, -3]) ); // 0


 
// function camelize() {
//     let str = 'background-color list-style-image -webkit-transition'
//     resultsplit = str.split('-')
//     for (let i = 0; i < resultsplit.length; i++) {
//         resultsplit.shift()
//     }
// }   

// console.log(camelize());

// var array = [1,8,2,5,7]

// var newarr = (array.sort(function(a, b){return(a-b)}));

// console.log(newarr);

// var persons = [
//     {
//         name: 'duc',
//         age: 23,
//         class: 'nodemy01',
//         datejoin: '09-01-2022'
//     },
//     {
//         name: 'huy',
//         age: 23,
//         class: 'nodemy02',
//         datejoin: '01-03-2022'
//     },
//     {
//         name: 'nam',
//         age: 30,
//         class: 'nodemy03',
//         datejoin: '30-10-2022'
//     },
//     {
//         name: 'khanh',
//         age: 27,
//         class: 'nodemy01',
//         datejoin: '12-06-2022'
//     }
// ]
// function convertdate(dateString) {
//     var arrdate = dateString.split('-')
//     var date = arrdate[2] + '-' + arrdate[1] + '-' + arrdate[0]

//     return new Date(date)  
    
// }

// var resultarr = persons.sort(function(a,b) {
//     var date1 = a.datejoin
//     var date2 = b.datejoin
    
//     if(date1 > date2){
//         return 1
//     }
//     if(date1 < date2){
//         return -1
//     }
//     if(date1 == date2){
//         return 0
//     }
// })

// var resultarr = persons.filter(function(item) {
//    var date = convertdate(item.datejoin)
//     return date.getMonth() < 1
// })

// var resultarr = persons.map(function(item){
//     item.name = item.name.toUpperCase()
//     return item
// })
// // var resultarr = (persons.sort(function(a,b){return(a.datejoin-b.datejoin)}))
// console.log(resultarr);

// var myarr = [
//     'java',
//     'php',
//     'ruby'
// ]
// var myarrlength = myarr.length
// for (const key in myarr) {
//     console.log(myarr[key]);
// 

// var myarr = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]
// for(var i = 0; i < myarr.length; i++){
//     for(var j = 0; j < myarr[i].length; j++){
//         console.log(myarr[i][j]);
//     }
// }

// var i = 1
// var issucess = false
// do{
//     console.log('Nap the lan thu' + i);
//     i ++;
//     if(false)
//     {
//         issucess = false
//     }

// }
// while(!issucess && i <= 3 )

// var courses =[
//     {
//         name: 'java',
//         cost: 100
//     },
//     {
//         name: 'php',
//         cost: 10
//     },
//     {
//         name: 'javasript',
//         cost: 200
//     },
//     {
//         name: 'ruby',
//         cost: 10
//     }
// ]

// var totalcoins = courses.reduce(function(total, course){
//     return total + course.cost
// })
 
//Làm "phẳng" mảng => đưa về cùng 1 cấp mảng 
// var depthArray = [1,2, [3,4], 5, 6, [7, 8]]

// var flat = depthArray.reduce(function(flatoutput, flatItems) {
//     return flatoutput.concat(flatItems)
// }, []);


// var topics = [
//     {
//         topic: 'front-end',
//         courses: [
//             {
//               id: 1,
//               title: 'HTML,CSS'
//             }
//         ]
//     },
//     {
//         topic: 'back-end',
//         courses: [
//             {
//               id: 2,
//               title: 'HTML,CSS'
//             }
//         ]
//     }
// ]

// var totaltopics = topics.reduce(function(totaltopic, topicItems) {
//     return totaltopic.concat(topicItems.courses)
// }, [])


//-------/////
// var random = (Math.floor(Math.random() * 100));

// if(random < 30){
//     console.log('len cap thanh cong!!!');
// }

///-------////
// function main(param){
//     if(typeof param === 'function'){
//         param('oki broo');
//     }
    
// }
// function mycallback(number){
//     console.log('value: ' , number);
// }
// main(mycallback);

//-------////
// Array.prototype.map2 = function(callback) {
//     var output = []
//      for(var i = 0; i < this.length; i++){
//         var result = callback(this[i])
//         output.push(result)
//      }   
//      return output
// }
// var courses = [
//     'java',
//     'php',
//     'ruby'
// ]
// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`
// })
// console.log(htmls.join(''));

//-------------///
Array.prototype.every1 = function(callback) {
   var  output = true
   for(var i in this){
    if(this.hasOwnProperty(i)){

        if(!callback(this[i])){
            output = false;
            break;
          }
        }
   }
   return output;
}
var courses = [
        'java',
        'java',
        'java',
        'javd'
    ]

var result = courses.every1(function(course) {
    return course === 'java' 
})  

console.log(result);

//------///
// Array.prototype.reduce1 = function(callback, result) {
//     let i = 0   
//     if(arguments.length < 2){
//         i = 1
//         result = this[0]
//     }
//     for (; i < this.length; i++) {
        
//         result = callback(result, this[i], i, this )    
//     }
//     return result   
// }
// var courses = [1, 2, 3, 4, 5] 

// var result = courses.reduce1((total, number, index, array) => {
//     console.log(total, number, index, array);
//     return total + number
// })  
// console.log(result);


Array.prototype.find1 = function(callback) {
       var output = []
       for(var i in this){
            if(this.hasOwnProperty(i)){
                var ok = callback(this[i])
                if(ok){
                     output.push(this[i])
                     break;
                }
            } 
       }
       return output;
    }
  
    var courses = [1, 2, 3, 4, 3] 
    
    var result = courses.find1((course) => {
        return course == 3
    })  
    console.log(result);


var arr = [1, 2, 3, 1, 2, 3]
var result1 = [...new Set(arr)]
console.log(result1);


function giaithua(number) {
    if(number > 0){
       return number * giaithua(number -1)
    }
    return 1;
}
console.log(giaithua(3));
