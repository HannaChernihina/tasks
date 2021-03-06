
let cities = [{"name":"Simpang","population":1807996},
{"name":"Nador","population":1573034},
{"name":"Kandy","population":1860806},
{"name":"Salto","population":786733},
{"name":"Lubochnia","population":657970},
{"name":"Piteå","population":1762491},
{"name":"Dabbūrīya","population":1316758},
{"name":"Zhenlong","population":1701907},
{"name":"Bailianhe","population":1247264},
{"name":"Sahagún","population":1770202},
{"name":"Zonghan","population":832096},
{"name":"Aradac","population":642563},
{"name":"Ust’-Isha","population":1870869},
{"name":"Al Qarārah","population":1255056},
{"name":"Zaqatala","population":1056786},
{"name":"Pamplona/Iruña","population":776200},
{"name":"Makīnsk","population":1272627},
{"name":"Courtaboeuf","population":1275066},
{"name":"Soras","population":1011560},
{"name":"Singgit","population":879835},
{"name":"Raksajaya","population":1368187},
{"name":"Inowrocław","population":784051},
{"name":"Claver","population":1935398},
{"name":"Jaroměřice nad Rokytnou","population":1219137},
{"name":"Rayside-Balfour","population":1569840},
{"name":"Ngancar","population":1570326},
{"name":"Yegor’yevsk","population":834590},
{"name":"Maroa","population":929286},
{"name":"Haenam","population":1746420},
{"name":"Huichang","population":621469},
{"name":"Barru","population":1614894},
{"name":"Ngancar","population":1856285},
{"name":"Nefta","population":909629},
{"name":"Hovorany","population":968716},
{"name":"Baise City","population":878786},
{"name":"Jega","population":1430621},
{"name":"Manwakh","population":1883900},
{"name":"Qabqir","population":633978},
{"name":"Kungsbacka","population":832328},
{"name":"Krasnoarmeysk","population":1151669},
{"name":"Tampa","population":945073},
{"name":"Khlong Luang","population":1557518},
{"name":"Karangbenda","population":629148},
{"name":"Chowṉêy","population":1533464},
{"name":"Vaxholm","population":1441356},
{"name":"Tobi Village","population":710784},
{"name":"Libas","population":685628},
{"name":"Amherstburg","population":993042},
{"name":"Longlou","population":1787909},
{"name":"Ketian","population":732402}];


// 1. есть ли какой-то елемент более или раверн 1100000
function populationNum(arr){
   return arr.some( (item) => { return item.population == 1100000 || item.population > 1100000 }  );
}
populationNum(cities)
true

// 2. вывести обьекты в которых численность населения делится на переданный параметр
function city(arr, n){
return arr.filter((item) => {return item.population % n == 0} )
}

city(cities, 4)

// 3. вывести имена городов в которых население кратное n
// function city(arr, n){
//  return arr.filter((item) => {
// if (item.population % n == 0) {
//    return item.name;    
// }
// return n;
// } )
// }

function city(arr, n){
let x = arr.filter((item) => {return item.population % n == 0} )
return x.map((item2) => { return item2.name }  )
}

4. 
function findCityPoppulation(arr){
   return arr.find( (item) => {return item.population === 685628} );
}

findCityPoppulation(cities)
// {name: "Libas", population: 685628}
