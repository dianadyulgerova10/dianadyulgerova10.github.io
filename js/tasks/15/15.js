//Problem 1
var data= {        
     headers : ['Vendor', 'Model', 'OS'],          
    items : [{          
       col1: 'Nokia',            
       col2: 'Lumia 920',            
      col3: 'Windows Phone'                      
    }, {          
      col1: 'LG',            
      col2: 'Nexus 5',            
      col3: 'Android'                      
    }, {          
      col1: 'Apple',            
      col2: 'iPhone 6',                        
      col3: 'iOS'                      
    }]          
  };

function problem1(data){ 
var html=document.getElementById('table-template').innerHTML;
var tableTemplate=Handlebars.compile(html);
var result=tableTemplate(data);
document.getElementById('problem1').innerHTML=result;
return result;
}
problem1(data);

//Problem 2

var data2 = {
  animals: [{
   name: 'Lion',
   url: 'https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg'
  }, {
   name: 'Turtle',
    url: 'http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg'
  }, {
    name: 'Dog'              
  }, {
    name: 'Cat',
    url: 'http://i.imgur.com/Ruuef.jpg'
  }, {
    name: 'Dog Again'              
  }] 
}

function problem2(data){ 
var html=document.getElementById('animals-template').innerHTML;
var animalsTemplate=Handlebars.compile(html);
var result=animalsTemplate(data);
document.getElementById('problem2').innerHTML=result;
return result;
}
problem2(data2);

// Task 3

var data3=[{title:'JavaScript: The Good Parts', id:'1'},
            {title:'Secrets of the JavaScript Ninja', id:'2'},
            {title:'Core HTML5 Canvas',id:3},
            {title:'JavaScript Patterns',id:4}];

(function(){
  $.fn.listView = function(data){
    var $this=$(this);
    var html=document.getElementById('books-template').innerHTML;
    var booksTemplate=Handlebars.compile(html);
    var result=booksTemplate(data3);
    document.getElementById('problem3').innerHTML=result;
    
    for(var i=0;i<data.length;i++){
      $this.append(booksTemplate(data3[i]));
    }
  
    return this;
  };
}(jQuery));
   
 $("#problem3").listView(data3);