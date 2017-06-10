var amazonData=[  
{ 
"amazonUserDetails": 
      { 
        "firstName":"sanju", 
        "lastName" :"sonu", 
         "email" : "saisanjanreddy@gmail.com", 
        "purchasedProducts":["iphone","watch"], 
        "toatalPurchasedAmount":68000, 
        "registeredcity":"vijayawada" 
      } 
} 
] 
var sa = function (amazonData){ 
for (var item in amazonData) 
    { 
      console.log(amazonData[item].amazonUserDetails.firstName); 
    } 
}; 
sa(amazonData);