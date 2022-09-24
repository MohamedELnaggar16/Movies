let currentWidth =  $('.col-sm-10').outerWidth();
$('.sideNav').css({left:-currentWidth});

$('.navIcon').click(function(){
   currentWidth =  $('.col-sm-10').outerWidth();
   $('#changeIcon').toggleClass('fa-solid fa-xmark');

   if($('.sideNav').css('left')=='0px'){
    $('.sideNav').animate({'left':-currentWidth},500)
  
   }
  
   else{
   
      $('.sideNav').animate({'left':'0px'},500);
   }
})

let urls = {
   Trending:"https://api.themoviedb.org/3/trending/all/day?api_key=49cc9f2a380f62bc488da385da9dc449",
   Popular:"https://api.themoviedb.org/3/movie/popular?api_key=49cc9f2a380f62bc488da385da9dc449",
   'Top Rated':"https://api.themoviedb.org/3/movie/top_rated?api_key=49cc9f2a380f62bc488da385da9dc449",
   Upcoming:"https://api.themoviedb.org/3/movie/upcoming?api_key=49cc9f2a380f62bc488da385da9dc449",
   'Now Playing':"https://api.themoviedb.org/3/movie/now_playing?api_key=49cc9f2a380f62bc488da385da9dc449",
}
let currentUrl = urls['Now Playing'];

$('.sideNav a').click(function(){
 let sideNavText =$(this).text();
 currentUrl = urls[sideNavText];
 getData()
})

let outPut='';
async function getData(show){
let urlData = await fetch(currentUrl);
let dataShow = await urlData.json();
outPut = dataShow;
 console.log(outPut);


displayData(dataShow);
}
getData();

function displayData(dataShow) {
  
   let collectData = [];
   for (let i = 0; i < dataShow.results.length; i++) {
      
      collectData +=
       `
       <div class="col-md-4 py-1">
       <div class="getMoviesData">
         <img src="https://image.tmdb.org/t/p/original/${dataShow.results[i].poster_path}">
         <div class="layer">
           <h2 class="text-center text-white py-5"> ${dataShow.results[i].title} </h2>
           <p class="text-center text-white py-3"> rate: ${dataShow.results[i].vote_average.toFixed(1)} </p>
           <p class="text-center text-white py-3"> ${dataShow.results[i].release_date} </p>
         </div>
       </div>
     </div>
     `
   }
 
  $('#showingData').html(collectData);
 }

 $('.search1').keyup(function() {
  
   let searchTxt =$('.search1').val();
   let collectData = [];
   for (let i = 0; i < outPut.results.length; i++) {
      if (outPut.results[i].title.toLowerCase().includes(searchTxt.toLowerCase())){
         collectData +=
         `
         <div class="col-md-4 py-2">
         <div class="getMoviesData">
           <img src="https://image.tmdb.org/t/p/original/${outPut.results[i].poster_path}">
           <div class="layer">
             <h2 class="text-center text-white py-5"> ${outPut.results[i].title} </h2>
             <p class="text-center text-white py-3 px-3"> ${outPut.results[i].overview} </p>
             <p class="text-center text-white py-3"> rate: ${outPut.results[i].vote_average.toFixed(1)} </p>
             <p class="text-center text-white py-3"> ${outPut.results[i].release_date} </p>
           </div>
         </div>
       </div>
       `
      }
      
   }
 
  $('#showingData').html(collectData);


 })


$('#name').keyup(function(){
   nameRejex = /^[a-zA-Z\-]+$/;
  if (nameRejex.test($('#name').val()) ){
   $('#name').addClass('is-valid')
   $('#alertName').css('display','none')
  }   //(valid)
  else{
   $('#alertName').css('display','block')
  }
})
$('#email').keyup(function(){
   nameRejex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (nameRejex.test($('#email').val()) ){
   $('#email').addClass('is-valid')
   $('#alertEmail').css('display','none')
  }   //(valid)
  else{
   $('#alertEmail').css('display','block')
  }
})

$('#phone').keyup(function(){
   nameRejex = /^01[0-2,5]{1}[0-9]{8}$/;
  if (nameRejex.test($('#phone').val()) ){
   $('#phone').addClass('is-valid')
   $('#alertPhone').css('display','none')
  }   //(valid)
  else{
   $('#alertPhone').css('display','block')
  }
})

$('#age').keyup(function(){
  
   if( ($('#age').val())>=10 && ($('#age').val()) <= 100 ) {
      $('#age').addClass('is-valid')
      $('#alertAge').css('display','none')
   }
   else{
      $('#alertAge').css('display','block')
   }
})

$('#password').keyup(function(){
   nameRejex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (nameRejex.test($('#password').val()) ){
   $('#password').addClass('is-valid')
   $('#alertPassword').css('display','none')
  }   
  else{
   $('#alertPassword').css('display','block')
  }
})
$('#re-password').keyup(function(){
   
  if (($('#password').val()) == ($('#re-password').val()) ){
   $('#re-password').addClass('is-valid')
   $('#alertRe-password').css('display','none')
  }   
  else{
   $('#alertRe-password').css('display','block')
  }
})
