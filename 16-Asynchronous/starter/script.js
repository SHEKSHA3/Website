"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data, className = "") {
  //   console.log(data);
  const html = `<article class="country ${className}">
   <img class="country__img" src="${data.flags.svg}" />
   <div class="country__data">
     <h3 class="country__name">${data.altSpellings[1]}</h3>
     <h4 class="country__region">${data.region}</h4>
     <p class="country__row"><span>👫</span>${data.population}</p>
     <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
     <p class="country__row"><span>💰</span>${123}</p>
     </div>
     </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNieber = function (country) {
//   // Ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   // request.send();
//   // console.log(request.responseText)

//   request.addEventListener("load", function () {
//     //    console.log(this.responseText)
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //  redenring country
//     renderCountry(data);

//     // get neiber country
//     const [neiber] = data.borders;
//     if (!neiber) return;

//     // Ajax call country 2

//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neiber}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };
// getCountryAndNieber("India");

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request= fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request)

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
// };

// // creating helper to fetch the values of api information of country
// const getJson=function(url,erroMsg='something went wrong'){
//     console.log(url)
//     console.log(erroMsg)
//    return fetch(url).then(responce=>{
//         if(!responce.ok){
//             throw new Error(`${erroMsg} ${responce.status}`)
//         }
//      return responce.json();
//     })
// }

// const getCountryData = function (country) {

// getJson(`https://restcountries.com/v3.1/name/${country}`,'country not found')

// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then((response) => {
// //       // console.log(response)

// //       if (!response.ok) {
// //         throw new Error(`country not found  ${response.status}`);
// //       }

// //       return response.json();
// //     })
//     .then((data) => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//         // console.log(neighbour);
//         if(!neighbour) throw new Error ('no neighber found')

//       // country 2
//       return getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`,'country not found');
//     })
//     // .then((response) => {
//     //   if (!response.ok) {
//     //     throw new Error(`country not found  ${response.status}`);
//     //   }
//     //    return response.json();
//     // })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       //   console.error(`${err} the error occured`);
//       renderError(`something went wrong ${err.message} try again!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("australia");
// });
// // getCountryData("dfnsdsfsdkdfjjsdklfj");

// fetch(`https://geocode.xyz/51.50354,-0.12768`).then((response=>response.json)).then(data=>console.log(data));

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json `)
//     .then((res) => {
//         console.log(res)
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//     });
// };
//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);

// https://restcountries.com/v2/

// const request = new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/name/india');
// request.send();
// console.log(request.responseText)
// request.addEventListener('load',function(){
//   // console.log(this.responseText);
//   const [data]=JSON.parse(this.responseText);
//   // console.log(data);
//   console.log(data);

//   const html=`<article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(+data.population/10000).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
//     <p class="country__row"><span>💰</span>${data.currency}</p>
//   </div>
// </article>`;

// });

// console.log("hello")

// const request=fetch('https://restcountries.com/v3.1/name/india');
// console.log(request);

// const getCountry=function(country){

//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(responce){
//     return responce.json();
//   }).then(function(data){
//     console.log(data[0]);
//   });
//  fetch(`https://referential.p.rapidapi.com/v1/${'Bengaluru'}`)
//  .then(respose=>respose.json())
//  .then(result=>{
//   console.log(result);
//  })

// }
// let url = '';
// let response = await fetch(url);

// let commits = await response.json(); // read response body and parse as JSON

// alert(commits[0].author.login)

// const whereAmI=function(lat,log){
//  fetch(`https://geocode.xyz/${lat},${log}?geoit=json`)
//  .then(resp=>resp.json())
//  .then(data=>{
//   if(`${data.country}`=='undefined') throw new Error('Invalide country locationo')
//   console.log(`the country ${data.country} and ${data.city}`);
//   return fetch(`https://restcountries.com/v3.1/name/india`)
//  })
//  .then(respon=>{
//   if(!respon.ok) throw new Error(`cuntru not found`)
//   respon.json})
//  .then(data=>console.log(data[0]))
//  .catch(err=>console.error(err));
// }
// whereAmI(52.508,13.381);
// console.log('test started');
// setTimeout(()=>console.log('0 sec timer'),0);
// Promise.resolve('Resolve promise 1 ').then(res=>console.log(res));
// Promise.resolve('Resolved promise 2 ').then(res=>{
//   for(let i=0;i<10000;i++){
//     console.log(res)
//   }
//   });
// console.log("test end");

// const lottery = new Promise(function (resolve, reject) {
//   console.log('lottory draw i happppppp')
//   setTimeout(function(){
//     if(Math.random()>=0.5){
//       resolve('you win')
//     }else{
//       reject(new Error('You lost your money'));
//     }
//   },2000)

// });

// lottery.then(res=> console.log(res)).catch(err=>console.error(err));

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// function fetchData() {
//   return new Promise(resolve => {
//     // Simulating an asynchronous operation
//     setTimeout(() => {
//       resolve('Data fetched successfully');
//     }, 2000);
//   });
// }

// async function fetchDataWithDelay() {
//   console.log('Fetching data...');
//   await delay(2000); // Pause for 2 seconds
//   const data = await fetchData();
//   console.log(data);
// }

// fetchDataWithDelay();
// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");

// async function harry() {
//   let dl = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("30 deg");
//     }, 2000);
//   });
//   let bgl = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("20 deg");
//     }, 3000);
//   });
  
// }

// let cherry=async()=>{
//   console.log('i am cherry not harry');
// }
// const main2=async()=>{
//   console.log('welecome to whether report');
//   let a=await harry();
 
//   let b= await cherry()
  
// }

// main2();


let lotteryPromise=new Promise(function(resolve,reject){
  if(Math.random()>0.5){
    resolve("you are won");
  }
  else{
    reject("you loss sorry");
  }
});
lotteryPromise.then(res=>console.log(res)).catch(err=>console.error(err));



























