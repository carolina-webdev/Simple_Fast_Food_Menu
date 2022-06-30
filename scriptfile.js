if(confirm("Welcome to Our Fast Food Menu Order Form!")) 
  {
    txt ="Now is time to choose what you want to eat!";
    
   }
  
  document.write(txt);

  function calculate(){

  var price = 0;
  var Food = document.querySelector('input[name="Food"]:checked').value;

  if(Food =='Hamburguer'){
    price = 5.5;
  }
  else if(Food =='Pizza'){
    price = 5.5;

  }
  else if(Food =='Fish and Chips'){
    price = 5.5;
  }
  else if (Food =='Salad') {
    price = 5.5;
  }
  else if (Food =='Sandwich') {
    price = 5.5;
  }
  if(document.querySelector('[name="withmeat"]:checked') != null) {

    document.getElementById("price").setAttribute('value', '$' + (price + 3));
  }
  else {

    document.getElementById("price").setAttribute('value', '$' + price);    
  }  
}