"use strict";
// const Person=function(name,year){
// class car{
//     constructor(speed){
//         this.speed=speed;
//     }
// }
// let car1=new car(200);
// console.log(car1);
// car.prototype.accelarate=function(){
//         console.log(this.speed+10)
// }
// car1.accelarate();

// // const car=function(make,speed){
// //     this.make=make;
// //     this.speed=speed;
// // }
// car.prototype.accelarate=function(){
//     this.speed+=10;
//     console.log(`${this.make} is going ${this.speed} km\hr`);
// }

// car.prototype.brake=function(){
//     this.speed-=5;
//     console.log(`${this.make} is going ${this.speed} km\hr`);
// }

//  const eve=function(make,speed,charge){
//   car.call(this,make,speed)
//   this.charge=charge;
//  }

//  eve.prototype=Object.create(car.prototype);
//  const tesla=new eve('tesla',120,23)

//  console.log(tesla)
// bmw.accelarate();
// bmw.accelarate();
// bmw.brake();
// bmw.accelarate();

// mercedes.accelarate();
// mercedes.accelarate();
// mercedes.brake();
// mercedes.accelarate();
//  console.dir(mercedes);

// class expression
// const PersonCl=class{}

// class declaration
// const jessica=new PersonCl("jessica",1998);
// console.log(jessica.age);
//  const jessica=new PersonCl("jessica",1998);
//  jessica.calAge=function(){
//     console.log(2023-this.birthYear)
//  }
// //  console.log(jessica.__proto__===PersonCl.prototype);
//  PersonCl.prototype.greet=function(){
  //     console.log("well come")
//  }
// console.log(jessica.calAge());

//  jessica.greet();

// const account={
//     owner:"sheksha",
//     movement:[200,120,123,300],

//     get latest(){
//         return this.movement.slice(-1).pop();
//     },

//     set latest(mov){
  //         this.movement.push(mov);
//     }
// }

// console.log(account.latest);
// account.latest=10;
// console.log(account.movement);

// const PesonProto={
  //     calAge(){
    //         console.log(2037-this.birthyear)
    //     },
    // };
    // const steven=Object.create(PesonProto)
    // console.log(steven);
    
    // steven.name="steven";
    // steven.birthyear=2022;
    // steven.calAge();
    
    // fun=function(){

// }

// let a=document.getElementsByName('rate');
// a.forEach((el)=>{

// })
// document.getElementById('btn').addEventListener('click',()=>{
  //     let se=document.getElementsByName('rate');
  //     // for(let i=0;i<se.length;i++){
    //     //     if(se[i].checked){
      //     //         console.log("yes"+" "+se[i].value)
      //     //     }
      //     //     // else{
        //     //     //     console.log(se[i])
        //     //     // }
        //     // }
        //     se.forEach((elements)=>{
          //         if(elements.checked){
//             console.log(elements.value);
//         }
//     })
// })

// let h1=document.createElement('h1');
// h1.className="hi",
// h1.id="great";
// h1.innerHTML=`hello man how are you`;
// for(let i=0;i<5;i++)
// {
  //     let h2=document.createElement('h2');
  //     h2.innerHTML="h2 how are"
  //     document.body.appendChild(h2);
  //     document.body.appendChild(h1);
  // }
  // function createMenuItem(name){
    //     let li=document.createElement('li');
    //     li.textContent=name;
    //     return li;
    // }
    
    // let menu=document.createElement('ul');
    // document.body.append(menu);
    // menu.appendChild(createMenuItem('home'));
    // menu.appendChild(createMenuItem('service'));
    // let note=document.getElementById('note');
    // console.log(note.innerText);
    
    // let menu=document.getElementById('menu')
    // let frangment=document.createDocumentFragment();
    // for(let i=1000;i<1003;i++){
      //     let li=document.createElement('li');
      //     li.textContent=`list number ${i}`;
//     li.id=`${i}`
//     frangment.append(li);
// }
// menu.append(frangment);
// let p=document.querySelector('p');
// const h1=document.createElement('h1');
// h1.innerHTML="before the text()"
// p.after(h1)

// const list =document.querySelector('ul');
// const libs=['react','Meteor','Polymer'];
// const items=libs.map((lib)=>{
  //     const item=document.createElement('li');
  //     item.innerText=lib;
  //     // console.log(item)
  //     return item;
  // })
  // console.log(button...items)
// list.lastChild.after(...items);

// let list =document.getElementById('list');

// list.insertAdjacentHTML('beforebegin','<h2>Web Technology</h2>');
// list.insertAdjacentHTML('afterbegin','<li>HTML</li>');
// list.insertAdjacentHTML('beforeend','<li>Javasript</li>');
// list.insertAdjacentHTML('afterend','<p>end of the contented</p>')

// let menu=document.getElementById('menu');
// let li=document.createElement('li');
// li.textContent='Home'
// menu.replaceChild(li,menu.lastElementChild)
// menu.innerHTML="";
// let new_cloned=menu.cloneNode(true);
// new_cloned.id='new_cloned';
// document.body.appendChild(new_cloned);
// let ar=['first','second','third','four','five','six','seven'];
// let nodes=ar.map(ele=>{
  //     let li=document.createElement('li');
  //     li.textContent=ele;
//     return li;
// })
// // console.log(nodes);
// menu.append(...nodes,'append()textdemo');

// let input=document.getElementById('username');
// for(let att of input.attributes){
  //     console.log(`${att.name}=${att.value}`)
// }
// let bar = document.querySelector("#main");
// console.log(bar.dataset)

// let h1=document.querySelector('h1');
// let style=getComputedStyle(h1);
// console.log(style.color,style.padding)

// let div=document.querySelector('#main');
// div.classList.replace('div1','div4')
// console.log(div.className)
// let width=div.offsetWidth;
// let height=div.offsetHeight;
// let domrect=div.getBoundingClientRect();
// console.log(domrect.top)
// let h1=document.querySelector('h1');
// h1.addEventListener('mouseover',()=>{
  //     h1.style.background='red';
//     h1.style.color='black'
// })
// h1.addEventListener('mouseout',()=>{
//     h1.style.backgroundColor='green',
//     h1.style.color='blue'
// })

// let btn = document.getElementsByClassName('btn');
// for(let i=0;i<btn.length;i++){
  //     btn[i].addEventListener('click',()=>{
    //         let ne=document.createElement('button');
    //         ne.className='btn',
    //         ne.innerHTML='hello click'
    //         document.body.appendChild(ne);
    //         for(let i=0;i<btn.length;i++){
      //             console.log(btn[i])
      //         }
      //     })
      // }
      
      // addEventListener('DOMContentLoaded',(event)=>{
        //     console.log('dom is loaded')
        // })
        // addEventListener('load',(event)=>{
          //     console.log('the page is fully loaded')
          // })
          // addEventListener('beforeunload',event=>{
//     event.preventDefault();
//     event.returnValue='';
// })
// window.onload=event=>{
  //     console.log('page has fully loaded');
  // }
// let mkey=document.getElementById('mkey');
// mkey.addEventListener('click',e=>{
  //     let keys=[];
  //     if(e.shiftKey)keys.push('shift');
  //     if(e.ctrlKey)keys.push('cnrtl');
  //     if(e.altKey)keys.push('alt')
  //     mkey.textContent=`keys:${keys.join('+')}`
  // })
  
  // let textbox = document.getElementById("message");
  
  // textbox.addEventListener("keyup", function(event) = {
    //   this.value = this.value.toUpperCase();
    // });
    // textbox.onkeyup=function(){
      //     this.value=this.value.toUpperCase();
      // }
      // textbox.addEventListener('keyup',()=>{
        //     // this.value=this.value.toUpperCase();
        //     textbox.value=textbox.value.toUpperCase();
        // })
        // window.addEventListener('scroll',()=>{
          //     console.log('scolling')

// })
// textbox.addEventListener('click',function(e){
//     console.log();
// })
// let btn = document.querySelector('.btn');
// let el = document.querySelector('.special');

// btn.addEventListener('click', function () {
  //     el.scrollIntoView(true);
  // });
  // let pwd=document.querySelector('input[type="password"]');
  // pwd.addEventListener('focus',(e)=>{
    //     e.target.style.backgroundColor = 'yellow';
    // })
    // pwd.addEventListener('focus',(e)=>{
      //      e.target.style.backgroundColor = '';
      // })
      // let user=document.getElementById('pass');
      // pass.addEventListener('focus',(e)=>{
        //     e.target.style.backgroundColor = 'yellow';
        // })
        // pass.addEventListener('blur',(e)=>{
          //     e.target.style.backgroundColor = '';
          // })
          // let input=document.querySelectorAll('input');
          // for(let i=0;i<input.length;i++){
            //     input[i].addEventListener('focus',(e)=>{
              //         e.target.style.backgroundColor='yellow'
              //     })
              // }
              
              // for(let i=0;i<input.length;i++){
                //     input[i].addEventListener('blur',(e)=>{
                  //         e.target.style.backgroundColor=''
//     })
// }
// let menu=document.getElementById('menu')
// menu.addEventListener('click',(event)=>{
  //     let target=event.target;
  //     switch(target.id){
    //         case 'home':
    //             console.log(`home is clicked`)
//             break;
//         case 'dashbord':
//             console.log('dash bord is clicked')
//             break;
//         case 'report':
//             console.log('report is pressed')
//             break ;
//     }
// })
// const form = document.getElementById('signup');
// let name=form.elements['name'];
// let email=form.elements['email'];
// show a message with a type of the input
// function showMessage(input, message, type) {
//   // get the small element and set the message
//   const msg = input.parentNode.querySelector("small");
//   msg.innerText = message;
//   // update the class for the input
//   input.className = type ? "success" : "error";
//   return type;
// }

// function showError(input, message) {
  //   return showMessage(input, message, false);
  // }
  
  // function showSuccess(input) {
    //   return showMessage(input, "", true);
    // }
    
    // function hasValue(input, message) {
      //   if (input.value.trim() === "") {
        //     return showError(input, message);
        //   }
        //   return showSuccess(input);
        // }
        
        // function validateEmail(input, requiredMsg, invalidMsg) {
          //   // check if the value is not empty
          //   if (!hasValue(input, requiredMsg)) {
            //     return false;
            //   }
            //   // validate email format
            //   const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            //   const email = input.value.trim();
            //   if (!emailRegex.test(email)) {
//     return showError(input, invalidMsg);
//   }
//   return true;
// }

// const form = document.querySelector("#signup");

// const NAME_REQUIRED = "Please enter your name";
// const EMAIL_REQUIRED = "Please enter your email";
// const EMAIL_INVALID = "Please enter a correct email address format";

// form.addEventListener("submit", function (event) {
  //   // stop form submission
  //   event.preventDefault();
  
//   // validate the form
//   let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
//   let emailValid = validateEmail(
//     form.elements["email"],
//     EMAIL_REQUIRED,
//     EMAIL_INVALID
//   );
  // if valid, submit the form.
//   if (nameValid && emailValid) {
//     alert("Demo only. No form was posted.");
//   }
// });
// const cb=document.querySelector('#accept');
// const btn=document.querySelector('#btn');
// btn.addEventListener('click',(e)=>{
  //     console.log(cb.checked)
// // })
// const btn=document.querySelector('#btn');
// btn.addEventListener('click',(e)=>{
  //     let checkbox=document.querySelectorAll('input[name="color"]:checked')
  //     let values=[];
  //     checkbox.forEach((chekked)=>{
    //         values.push(chekked.value);
    //         // console.log(chekked)
    //     });
    //     alert(values);
    
    // })
    // const btnAdd = document.querySelector('#btnAdd');
    // const btnRemove = document.querySelector('#btnRemove');
    // const listbox = document.querySelector('#list');
    // const framework = document.querySelector('#framework');
    
    // btnAdd.onclick = (e) => {
      //   e.preventDefault();
      
      //   // validate the option
      //   if (framework.value == '') {
        //     alert('Please enter the name.');
        //     return;
        //   }
        //   // create a new option
        //   const option = new Option(framework.value, framework.value);
        //   // add it to the list
        //   listbox.add(option, undefined);
        
        //   // reset the value of the input
        //   framework.value = '';
        //   framework.focus();
        // };  
        
        // // remove selected option
        // btnRemove.onclick = (e) => {
          //   e.preventDefault();

          //   // save the selected options
          //   let selected = [];
          
          //   for (let i = 0; i < listbox.options.length; i++) {
            //     selected[i] = listbox.options[i].selected;
            //   }
// //   console.log(selected)
//   // remove all selected option
//   let index = listbox.options.length;
//   while (index--) {
//     if (selected[index]) {
//       listbox.remove(index);
//     }
//   }
// };

// const btn=document.getElementById('btn');
// const sb=document.getElementById('framework')

// btn.addEventListener('click',(event)=>{
  //     event.preventDefault();
  //     const selectevalues=[].filter.call(sb.opt)
  
  // })
  
  // class PersonCl{
  //     constructor(firstName,birthYear){
  //         this.firstName=firstName;
  //         this.birthYear=birthYear;
  //     }
  //     calAge(){
  //         console.log(2023-this.birthYear)
  //     }
  //     get age(){
  //         return 2023-this.birthYear;
  //     }
  // }
  

  // class studentCl extends PersonCl{
  //   constructor(firstName,birthYear,course){
  //     super(firstName,birthYear);
  //     this.course=course;
  //   }
  //   introduction(){
  //     console.log(`My name is ${this.firstName} and i study ${this.course}`)
  //   }
  // }

  // const marth=new studentCl('martha',2020,'compute science')
  // marth.introduction();
  // marth.calAge();
  
  const personProto=
  {
    calcAge(){
      console.log(2037-this.birtyear);
    },
    init(firstname,birthyear){
      this.firstname=firstname;
      this.birthyear=birthyear;
    }

  }
  
  // const steven=Object.create(personProto);
  // console.log(steven)
// 
  const studentproto=Object.create(personProto);
  studentproto.init=function(firstName,birthYear,course){
    personProto.init.call(this,firstName,birthYear);
    this.course=course;
  }

  const jay=Object.create(studentproto);
  studentproto.introduce=function(){
    console.log(`my name is ${this.firstName} and i am studing ${this.course}`);
  }
  jay.init('jay',2010,'computer science');
  // console.log(jay)
  // jay.introduce()
  // jay.calcAge()
  
  
  
  
  