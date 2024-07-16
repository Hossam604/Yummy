
$("span").eq(0).click(function(){
    $("span").eq(0).addClass('d-none')
    $("span").eq(1).removeClass('d-none')
    $("nav").show(1000)
    $("li").fadeIn(500);
    $("nav").css('display','flex')
    $("nav").css('flex-direction','column')
    $("nav").css('justify-content','space-between')


})


$("span").eq(1).click(function(){
    $("span").eq(1).addClass('d-none')
    $("span").eq(0).removeClass('d-none')
    $("nav").hide(1000)
    $("li").fadeOut(500);
    
})

$("li").eq(0).click(function(){
    $(".search").removeClass('d-none')
    $(".cat").addClass('d-none')
    $(".area").addClass('d-none')
   $(".ing").addClass('d-none')
  $(".fcat").addClass('d-none')
  $(".farea").addClass('d-none')
  $(".fing").addClass('d-none')
$("#all").addClass('d-none')
$("#search").addClass('d-none')
$(".info").addClass('d-none')
$("#home").addClass('d-none')


})

$("li").click(function(){
    $("nav").hide(1000)
    $("span").eq(1).addClass('d-none')
    $("span").eq(0).removeClass('d-none')
  
})

let categories=[]
let areas=[]
let Ingredients=[]
async function getCategories(){
  let api=`https://www.themealdb.com/api/json/v1/1/categories.php`
  let response= await fetch(api)  
  let data= await response.json()
  categories=data.categories
  console.log(data.categories);
  displayCategories()
  
}


//getCategories()


async function getArea(){
  let api=`https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  let response= await fetch(api)  
  let data= await response.json()
  areas=data.meals
 displayAreas()
  console.log(data.meals[0].strArea);    
}
//getArea()


async function getIngredients(){
  let api=`https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  let response= await fetch(api)  
  let data= await response.json()
  Ingredients=data.meals
  console.log(data);
  displayIngredients()
 
  

}
//getIngredients()


function displayIngredients(){
    let cartona=``
    for(let i=0; i<20; i++){
      Ingredients[i].strDescription=Ingredients[i].strDescription.slice(0,105)
        cartona+=`
          <div class="col-md-3">
          <div class="ing1 text-white text-center">
            <i class="fa-solid fa-drumstick-bite fa-4x text-white"></i>
      <h2 class="ing">${Ingredients[i].strIngredient}</h2>
      <p>${Ingredients[i].strDescription}</p>
          </div>
    
    </div>

        `
    }

    
  
    document.getElementById('row2').innerHTML=cartona
    let items=$(".ing1")

    for(let i=0;i<items.length;i++){
      $(items[i]).click(function(e){
        let ing=this.children[1].innerHTML;
        console.log(ing);
      filterByIng(ing)
      $(".search").addClass('d-none')
      $(".cat").addClass('d-none')
      $(".area").addClass('d-none')
      $(".fcat").addClass('d-none')
      $(".ing").addClass('d-none')
      $(".fing").removeClass('d-none')
$("#all").addClass('d-none')
$("#search").addClass('d-none')

      })
    }

}



function displayAreas(){
let cartona=``
for(let i=0; i<areas.length; i++){
    cartona+=`
       <div class="col-md-3 col-sm-12 coll ">
      <div class="item1 text-white">
       <i class="fa-solid fa-house-laptop fa-4x"></i>
        <h2>${areas[i].strArea}</h2>
      </div>
    </div> 
    `
}
document.getElementById('row1').innerHTML=cartona
let items=$(".item1")
// let layar=$(".layar")
for(let i=0;i<items.length;i++){
  $(items[i]).click(function(e){
    let area=this.lastElementChild.innerHTML;
    console.log(area);
   filterByArea(area)
  $(".search").addClass('d-none')
  $(".cat").addClass('d-none')
  $(".area").addClass('d-none')
  $(".fcat").removeClass('d-none')
  $(".ing").addClass('d-none')
  $(".farea").removeClass('d-none')
$("#all").addClass('d-none')
$("#search").addClass('d-none')


  // console.log("hos");
  })
}


}
var index
function displayCategories(){
let cartona=``
let meal
for(let i=0; i<categories.length; i++){
  index=i
   categories[i].strCategoryDescription=categories[i].strCategoryDescription.slice(0,30)
meal=categories[i].strCategory
    cartona+=`
    <div class="col-md-3 catmedia">
      <div class="item position-relative text-white text-center">
        <img class="w-100" src="${categories[i].strCategoryThumb}" alt="">
        <div class="layar ">
         <h3 class=" text-black h3 position-absolute">${categories[i].strCategory}</h3>
          <p class="text-black mt-2 position-absolute p">${categories[i].strCategoryDescription}</p>
        </div>
      </div>
    </div>
    `
       
}


document.getElementById('row').innerHTML=cartona
let items=$(".item")
let layar=$(".layar")
for(let i=0;i<items.length;i++){
  $(items[i]).mouseenter(function(e){
   // console.log(e.target);
     $(layar[i]).fadeIn(200)
  })
}

for(let i=0;i<items.length;i++){
  $(items[i]).mouseleave(function(e){
   // console.log(e.target);
     $(layar[i]).fadeOut(200)
  })
}

for(let i=0;i<items.length;i++){
  $(items[i]).click(function(e){
    let meal=this.lastElementChild.firstElementChild.innerHTML;
    console.log(meal);
  filterByCategory(meal)
  $(".search").addClass('d-none')
  $(".cat").addClass('d-none')
  $(".area").addClass('d-none')
  $(".fcat").removeClass('d-none')
  $(".ing").addClass('d-none')
$("#all").addClass('d-none')
$(".farea").addClass('d-none')
  $(".fing").addClass('d-none')
$("#search").addClass('d-none')


  // console.log("hos");
  })
}

}



$("li").eq(1).click(function(){
    getCategories()
    $(".search").addClass('d-none')
   $(".area").addClass('d-none')
    $(".cat").removeClass('d-none')
   $(".ing").addClass('d-none')
  $(".fcat").addClass('d-none')
  $(".farea").addClass('d-none')
  $(".fing").addClass('d-none')
$("#all").addClass('d-none')
$("#search").addClass('d-none')
$(".info").addClass('d-none')
$("#home").addClass('d-none')

})


$("li").eq(2).click(function(){
   getArea()
   $(".search").addClass('d-none')
   $(".cat").addClass('d-none')
   $(".area").removeClass('d-none')
   $(".ing").addClass('d-none')
  $(".fcat").addClass('d-none')
  $(".farea").addClass('d-none')
  $(".fing").addClass('d-none')
$("#all").addClass('d-none')
$("#search").addClass('d-none')
$(".info").addClass('d-none')
$("#home").addClass('d-none')


})

$("li").eq(3).click(function(){
  getIngredients()
  $(".search").addClass('d-none')
  $(".cat").addClass('d-none')
  $(".area").addClass('d-none')
  $(".ing").removeClass('d-none')
  $(".fcat").addClass('d-none')
  $(".farea").addClass('d-none')
  $(".fing").addClass('d-none')
$("#all").addClass('d-none')
$("#search").addClass('d-none')
$(".info").addClass('d-none')
$("#home").addClass('d-none')

})

$("li").eq(4).click(function(){
  $(".search").addClass('d-none')
  $(".cat").addClass('d-none')
  $(".area").addClass('d-none')
  $(".ing").addClass('d-none')
  $(".fcat").addClass('d-none')
  $(".farea").addClass('d-none')
  $(".fing").addClass('d-none')
$("#all").addClass('d-none')
$("#search").addClass('d-none')
$(".info").removeClass('d-none')
$("#home").addClass('d-none')

})

let catFilter=[]
async function filterByCategory(meal){
  // meal=`Seafood`
  let api=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`
  let response= await fetch(api)
  let data=await response.json()
  catFilter=data.meals
  // console.log(catFilter[0]);
  console.log(data);
  displayEveryCategory()
}


//filterByCategory()

function displayEveryCategory(){
  let cartona=``
  for(let i=0; i<catFilter.length;i++){
    cartona+=`
     <div class="col-md-3">
      <div  class="position-relative item2 ">
        <img class="w-100" src="${catFilter[i].strMealThumb}" alt="">
        <div class="text-center layar1">
          <h3 class="h3 w-25 position-absolute">${catFilter[i].strMeal}</h3>
        </div>
      </div>
    </div>
    `
  }
  document.getElementById('row3').innerHTML=cartona
  let items=$(".item2")
let layar=$(".layar1")
for(let i=0;i<items.length;i++){
  $(items[i]).mouseenter(function(e){
   // console.log(e.target);
     $(layar[i]).fadeIn(200)
  })
}

for(let i=0;i<items.length;i++){
  $(items[i]).mouseleave(function(e){
   // console.log(e.target);
     $(layar[i]).fadeOut(200)
  })
}
for(let i=0;i<items.length;i++){
  let id=catFilter[i].idMeal

  $(items[i]).click(function(e){
   // console.log(id);
mealDetails(id)
$("#all").removeClass('d-none')
$(".search").addClass('d-none')
$(".cat").addClass('d-none')
$(".area").addClass('d-none')
$(".ing").addClass('d-none')
$(".fcat").addClass('d-none')
$(".farea").addClass('d-none')
$(".fing").addClass('d-none')
$("#search").addClass('d-none')

  })
}
}


let areaFilter=[]
async function filterByArea(area){
  let api=`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  let response= await fetch(api)
  let data= await response.json()
  areaFilter=data.meals
  // console.log(areaFilter[0]);
  console.log(data);
  displayEveryArea()
}


//filterByArea()

function displayEveryArea(){
  let cartona=``
  for(let i=0; i<areaFilter.length; i++){

    cartona+=`
      <div class="col-md-3">
      <div class="position-relative item3 ">
        <img class="w-100" src="${areaFilter[i].strMealThumb}" alt="">
        <div class="text-center layar2">
          <h3 class="h3 w-25 position-absolute">${areaFilter[i].strMeal}</h3>
        </div>
      </div>
    </div>
    `
  }
document.getElementById('row4').innerHTML=cartona
let items=$(".item3")
let layar=$(".layar2")
for(let i=0;i<items.length;i++){
  $(items[i]).mouseenter(function(e){
   // console.log(e.target);
     $(layar[i]).fadeIn(200)
  })
}

for(let i=0;i<items.length;i++){
  $(items[i]).mouseleave(function(e){
   // console.log(e.target);
     $(layar[i]).fadeOut(200)
  })
}
for(let i=0;i<items.length;i++){
  let id=areaFilter[i].idMeal

  $(items[i]).click(function(e){
    //console.log(id);
mealDetails(id)
$("#all").removeClass('d-none')
$(".search").addClass('d-none')
$(".cat").addClass('d-none')
$(".area").addClass('d-none')
$(".ing").addClass('d-none')
$(".fcat").addClass('d-none')
$(".farea").addClass('d-none')
$(".fing").addClass('d-none')
$("#search").addClass('d-none')

  })
}

}








let injFilter=[]
async function filterByIng(ing){
  let api=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`
  let response= await fetch(api)
  let data= await response.json()
  injFilter=data.meals
  // console.log(areaFilter[0]);
  console.log(data);
  displayEveryIng()
}


//filterByIng()

function displayEveryIng(){
  let cartona=``
  for(let i=0; i<injFilter.length; i++){

    cartona+=`
      <div class="col-md-3 col-sm-12"">
      <div class="position-relative item4 ">
        <img class="w-100" src="${injFilter[i].strMealThumb}" alt="">
        <div class="text-center layar3">
          <h3 class="h3 w-25 position-absolute">${injFilter[i].strMeal}</h3>
        </div>
      </div>
    </div>
    `
  }
document.getElementById('row5').innerHTML=cartona
let items=$(".item4")
let layar=$(".layar3")
for(let i=0;i<items.length;i++){
  $(items[i]).mouseenter(function(e){
   // console.log(e.target);
     $(layar[i]).fadeIn(200)
  })
}

for(let i=0;i<items.length;i++){
  $(items[i]).mouseleave(function(e){
   // console.log(e.target);
     $(layar[i]).fadeOut(200)
  })
}

for(let i=0;i<items.length;i++){
  let id=injFilter[i].idMeal

  $(items[i]).click(function(e){
mealDetails(id)
$("#all").removeClass('d-none')
$(".search").addClass('d-none')
$(".cat").addClass('d-none')
$(".area").addClass('d-none')
$(".ing").addClass('d-none')
$(".fcat").addClass('d-none')
$(".farea").addClass('d-none')
$(".fing").addClass('d-none')
$("#search").addClass('d-none')

  })
}

}

// function add(){
//   for(let i=0 ;i<5; i++){
//     let x=i
//     console.log(i);
//   }
//   console.log(x);
// }
// add()

let details={}
 //let arr=[]

async function mealDetails(id){
let api= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
let response= await fetch(api)
let data = await response.json()
details=data.meals[0]
console.log(details.idMeal);
console.log(data);
  // arr.push(` ${details.strMeasure1} ${details.strIngredient1}`)
  // arr.push(` ${details.strMeasure2} ${details.strIngredient2}`)
  // arr.push(` ${details.strMeasure3} ${details.strIngredient3}`)
  // arr.push(` ${details.strMeasure4} ${details.strIngredient4}`)
  // arr.push(` ${details.strMeasure5} ${details.strIngredient5}`)
  // arr.push(` ${details.strMeasure6} ${details.strIngredient6}`)
  // arr.push(` ${details.strMeasure7} ${details.strIngredient7}`)
  // arr.push(` ${details.strMeasure8} ${details.strIngredient8}`)
  // arr.push(` ${details.strMeasure9} ${details.strIngredient9}`)
  // arr.push(` ${details.strMeasure10} ${details.strIngredient10}`)
  // arr.push(` ${details.strMeasure11} ${details.strIngredient11}`)
  // arr.push(` ${details.strMeasure12} ${details.strIngredient12}`)
  // arr.push(` ${details.strMeasure13} ${details.strIngredient13} `)
  // arr.push(`${details.strMeasure14} ${details.strIngredient14}`)
  // arr.push(` ${details.strMeasure15} ${details.strIngredient15}` )

// console.log(arr);
displayMealDetails()

}

//mealDetails()


function displayMealDetails(){
  let cartona=``
  if(details.strTags==null){
    cartona=`
    <div class="imgDetail mt-2 ">
       <img class="w-100" src="${details.strMealThumb}" alt="">
       <h2 class="text-white mt-1">${details.strMeal}</h2>
     </div>
     
     <div class="details text-white ">
       <h2 class="mt-1">Instructions</h2>
       <p class="mt-1 p1">${details.strInstructions}</p>
       <h2 class="mt-2">Area : ${details.strArea}</h2>
       <h2 class="mt-1">Category : ${details.strCategory}</h2>
       <h2 class="mt-1">Recipes :</h2>
       <div>
        <span class="bg-primary mx-1 ">${details.strMeasure1} ${details.strIngredient1}</span>
       <span class="bg-primary mx-1 ">${details.strMeasure2} ${details.strIngredient2}</span>
       <span class="bg-primary mx-1 ">${details.strMeasure3} ${details.strIngredient3}</span>
       </div>
      <div class="mt-3">
       <span class="bg-primary mx-1 ">${details.strMeasure4} ${details.strIngredient4}</span>
       <span class="bg-primary mx-1 ">${details.strMeasure5} ${details.strIngredient5}</span>
      </div>
   <div>
     <h2 class="mt-1">Tags :</h2>
   </div>
     
      <a href="${details.strSource}"><button class="btn btn-success mx-2 mt-1">Source</button></a> 
      <a href="${details.strYoutube}"> <button class="btn btn-danger mx-2 mt-1">Youtube</button></a> 
     </div>
   
     `
  }
  else{
    cartona=`
 <div class="imgDetail mt-2 ">
    <img class="w-100" src="${details.strMealThumb}" alt="">
    <h2 class="text-white mt-1">${details.strMeal}</h2>
  </div>
  
  <div class="details text-white ">
    <h2 class="mt-1">Instructions</h2>
    <p class="mt-1 p1">${details.strInstructions}</p>
    <h2 class="mt-2">Area : ${details.strArea}</h2>
    <h2 class="mt-1">Category : ${details.strCategory}</h2>
    <h2 class="mt-1">Recipes :</h2>
    <div>
     <span class="bg-primary mx-1 ">${details.strMeasure1} ${details.strIngredient1}</span>
    <span class="bg-primary mx-1 ">${details.strMeasure2} ${details.strIngredient2}</span>
    <span class="bg-primary mx-1 ">${details.strMeasure3} ${details.strIngredient3}</span>
    </div>
   <div class="mt-3">
    <span class="bg-primary mx-1 ">${details.strMeasure4} ${details.strIngredient4}</span>
    <span class="bg-primary mx-1 ">${details.strMeasure5} ${details.strIngredient5}</span>
   </div>
<div>
  <h2 class="mt-1">Tags :</h2>
    <span class="bg-primary mx-1 ">${details.strTags}</span>
</div>
  
   <a href="${details.strSource}"><button class="btn btn-success mx-2 mt-1">Source</button></a> 
   <a href="${details.strYoutube}"> <button class="btn btn-danger mx-2 mt-1">Youtube</button></a> 
  </div>

  `
  }
  
document.getElementById('all').innerHTML=cartona  

 }



let arrSearch=[]
async function filterByName(name){
let api=`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
let response= await fetch(api)
let data = await response.json()
arrSearch=data.meals
console.log(data);
displaySearchByName(arrSearch)
}

//filterByName()




function searchByName(){
    let name1=$("input").eq(0).val()
    filterByName(name1)
    // if(typeof name1!='string'){
    //   console.log("");
    // }
    
}

// function searchByName(){
//   try {
//       let name1 = $("input").eq(0).val();
//       if (typeof name1 !== 'string' || arrSearch.length==0) {
//           throw new Error("Input is not a string");
//       }
//       filterByName(name1);
//   } catch (error) {
//       console.error("An error occurred:", error.message);
//   }
// }


$("input").eq(0).keyup(function(){
  searchByName()
$("#search").removeClass('d-none')

})



function displaySearchByName(arr){
  let cartona=``
  for(let i=0;i<arr.length;i++){
    cartona+=`
      <div class="col-md-3">
      <div  class="position-relative item5 ">
        <img class="w-100" src="${arr[i].strMealThumb}" alt="">
        <div class="text-center layar4">
          <h3 class="h3 w-25 position-absolute">${arr[i].strMeal}</h3>
        </div>
      </div>
    </div>
    `
  }
  document.getElementById('search').innerHTML=cartona
  let items=$(".item5")
let layar=$(".layar4")
for(let i=0;i<items.length;i++){
  $(items[i]).mouseenter(function(e){
   // console.log(e.target);
     $(layar[i]).fadeIn(200)
  })
}

for(let i=0;i<items.length;i++){
  $(items[i]).mouseleave(function(e){
   // console.log(e.target);
     $(layar[i]).fadeOut(200)
  })
}

for(let i=0;i<items.length;i++){
  let id=arr[i].idMeal

  $(items[i]).click(function(e){
mealDetails(id)
$("#all").removeClass('d-none')
$(".search").addClass('d-none')
$(".cat").addClass('d-none')
$(".area").addClass('d-none')
$(".ing").addClass('d-none')
$(".fcat").addClass('d-none')
$(".farea").addClass('d-none')
$(".fing").addClass('d-none')
$("#search").addClass('d-none')

  })
}
}


let arrSearchLetter=[]
async function filterByFirstLetter(letter){
let api=`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
let response= await fetch(api)
let data = await response.json()
arrSearchLetter=data.meals
console.log(data);
displaySearchByName(arrSearchLetter)

}

//filterByFirstLetter()



function searchByFirstLetter(){
  try {
    let letter = $("input").eq(1).val();

    // Check if the input is a single letter
    if (!/^[a-zA-Z]$/.test(letter)) {
      // alert("Please enter a single letter only.");
      // this.value = '';
        throw new Error("Input must be a single letter");
        
    }

    // If the input is valid, proceed with the filter function
    filterByFirstLetter(letter);
} catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
}
  
}

$("input").eq(1).keyup(function(){
  searchByFirstLetter()
// $("#search").addClass('d-none')
$("#search").removeClass('d-none')

})


let nameRegex=/^[A-Za-z]{3,}$/
function validateName(){

    return nameRegex.test($("#Name").val())
}

$("#Name").keyup(function(){
  // console.log($(this).val());
 if(validateName()){
  $("#Name").css('border-color','green')
  $("#Name").css('border-width','3px')
  $("#Name").next().addClass('d-none')

 }
 else{
  $("#Name").css('border-color','red')
  $("#Name").css('border-width','3px')
  $("#Name").next().removeClass('d-none')

 }
 if($("#Name").val().length==0){
  $("#Name").css('border-width','0')
  $("#Name").next().addClass('d-none')
  }
})


let emailRegex=/^[A-Za-z]{3,10}@(yahoo||gmail)\.com$/

function validateEmail(){

  return emailRegex.test($("#email").val())
}

$("#email").keyup(function(){
// console.log($(this).val());
if(validateEmail()){
$("#email").css('border-color','green')
$("#email").css('border-width','3px')
$("#email").next().addClass('d-none')

}
else{
$("#email").css('border-color','red')
$("#email").css('border-width','3px')
$("#email").next().removeClass('d-none')

}
if($("#email").val().length==0){
$("#email").css('border-width','0')
$("#email").next().addClass('d-none')
}
})


let phoneRegex=/^01[0125][0-9]{8}$/
function validatePhone(){

  return phoneRegex.test($("#phone").val())
}

$("#phone").keyup(function(){
// console.log($(this).val());
if(validatePhone()){
$("#phone").css('border-color','green')
$("#phone").css('border-width','3px')
$("#phone").next().addClass('d-none')

}
else{
$("#phone").css('border-color','red')
$("#phone").css('border-width','3px')
$("#phone").next().removeClass('d-none')

}
if($("#phone").val().length==0){
$("#phone").css('border-width','0')
$("#phone").next().addClass('d-none')
}
})

// let ageRegex=/^[1-9]{1,}||[0-9]{1,}$/

function validateAge(){

  return $("#age").val()>0
}

$("#age").keyup(function(){
// console.log($(this).val());
if(validateAge()){
$("#age").css('border-color','green')
$("#age").css('border-width','3px')
$("#age").next().addClass('d-none')

}
else{
$("#age").css('border-color','red')
$("#age").css('border-width','3px')
$("#age").next().removeClass('d-none')

}
if($("#age").val().length==0){
$("#age").css('border-width','0')
$("#age").next().addClass('d-none')
}
if(isNaN($("#age").val())){
  $("#age").next().removeClass('d-none')
  $("#age").css('border-color','red')
$("#age").css('border-width','3px')
$("#age").next().html('Age must be number only')

}
})



let passRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
function validatePass(){
  return passRegex.test($("#pass").val())
}

$("#pass").keyup(function(){
// console.log($(this).val());
if(validatePass()){
$("#pass").css('border-color','green')
$("#pass").css('border-width','3px')
$("#pass").next().addClass('d-none')

}
else{
$("#pass").css('border-color','red')
$("#pass").css('border-width','3px')
$("#pass").next().removeClass('d-none')

}
if($("#pass").val().length==0){
$("#pass").css('border-width','0')
$("#pass").next().addClass('d-none')
}
})

$("#repass").keyup(function(){
  // console.log($(this).val());
if($(this).val()==$("#pass").val() ){
  $(this).css('border-color','green')
  $(this).css('border-width','3px')
  $(this).next().addClass('d-none')
}
  else{
  $(this).css('border-color','red')
  $(this).css('border-width','3px')
  $(this).next().removeClass('d-none')
  }
  if($(this).val().length==0){
  $(this).css('border-width','0')
  $(this).next().addClass('d-none')

  }

})

function validateRepass(){
  return $("#repass").val()==$("#pass").val()
}

$("#repass").keyup(function(){
// console.log($(this).val());
if(validateRepass()){
$("#repass").css('border-color','green')
$("#repass").css('border-width','3px')
$("#repass").next().addClass('d-none')

}
else{
$("#repass").css('border-color','red')
$("#repass").css('border-width','3px')
$("#repass").next().removeClass('d-none')

}
if($("#repass").val().length==0){
$("#repass").css('border-width','0')
$("#repass").next().addClass('d-none')
}
})

let inpts=Array.from(document.getElementsByClassName('inputs'))
for(let i=0; i<inpts.length;i++){
  inpts[i].addEventListener('input',function(){
    if(validateName()&&validateEmail()&&validateAge()&&validatePhone()&&validateRepass()&&validatePass()){
    //$("#submit").disabled = false;
    $("#submit").removeAttr('disabled');
    //console.log("true");
      
    }
    else{
   //  $("#submit").disabled = true;

$("#submit").attr('disabled', true);
    // console.log("false");

    }
  })
}

$("#submit").click(function(){
  location.reload()
  $(".info").addClass('d-none')
})

let arrHome=[]
async function home(){
for(let i=0;i<16;i++){
  let api=`https://www.themealdb.com/api/json/v1/1/random.php`
let response= await fetch(api)
let data= await response.json()
arrHome.push(data.meals[0])
displayHome()
 // console.log(data.meals[0]);
}
console.log(arrHome);
}


home()

function displayHome(){
  let cartona=``
  for(let i=0; i<arrHome.length;i++){
    cartona+=`
    <div class="col-md-3 col-sm-12">
        <div class="position-relative item6 ">
          <img class="w-100" src="${arrHome[i].strMealThumb}" alt="">
          <div class="text-center layar5">
            <h3 class="h3 w-25 position-absolute">${arrHome[i].strMeal}</h3>
          </div>
        </div>
      </div>
    `
  }
  document.getElementById('home').innerHTML=cartona
let items=$(".item6")
let layar=$(".layar5")
for(let i=0;i<items.length;i++){
  $(items[i]).mouseenter(function(e){
   // console.log(e.target);
     $(layar[i]).fadeIn(200)
  })
}

for(let i=0;i<items.length;i++){
  $(items[i]).mouseleave(function(e){
   // console.log(e.target);
     $(layar[i]).fadeOut(200)
  })
}
for(let i=0;i<items.length;i++){
  let id=arrHome[i].idMeal

  $(items[i]).click(function(e){
    //console.log(id);
mealDetails(id)
$("#all").removeClass('d-none')
$(".search").addClass('d-none')
$(".cat").addClass('d-none')
$(".area").addClass('d-none')
$(".ing").addClass('d-none')
$(".fcat").addClass('d-none')
$(".farea").addClass('d-none')
$(".fing").addClass('d-none')
$("#search").addClass('d-none')
$("#home").addClass('d-none')

  })
}
  
}







