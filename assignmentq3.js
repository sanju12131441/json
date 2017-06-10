var amazonData={ 
"amazonUserDetails": 
[ 
{ 
"firstName":"sanju", 
"lastName" :"sonu", 
"email" : "saisanjanreddy@gmail.com", 
"purchasedProducts":["iphone","watch"], 
"toatalPurchasedAmount":68000, 
"registeredcity":"vijayawada" 
}, 
{ 
"firstName":"prashanth", 
"lastName" :"vamsi", 
"email" : "prashu@gmail.com", 
"purchasedProducts":["nikeShoe","ak47"], 
"toatalPurchasedAmount":68000, 
"registeredcity":"vizag" 
}, 
{ 
"firstName":"praveen", 
"lastName" :"bijjam", 
"email" : "bijju@gmail.com", 
"purchasedProducts":"addidasBat", 
"toatalPurchasedAmount":6800, 
"registeredcity":"mumbai" 
} 
] 
} //end 
var loop = function(amazonData){ 
for(i=0;i<amazonData.amazonUserDetails.length;i++) 
{console.log(amazonData.amazonUserDetails[0].lastName); 
} 
} 
loop(amazonData);