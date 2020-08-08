'use strict'

// random interger from mdn/w3schools

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// object literals/store locations

var seattle = {
  minCust: 23, 
  maxCust: 65, 
  avgCookiePurch: 6.3,
  
  sales: [],


  salesData: function() {
    for(var i = 0; i < 14; i++){
      this.sales.push(getRndInteger(this.minCust, this.maxCust))
    }
    
  }

  
  

  

};

salesData(); 
    console.log(seattle.sales)

var tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookiePurch: 1.2,
  
  sales: []
  
};

var dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookiePurch:3.7,
  
  sales: []
};

var paris = {
  minCust: 20,
  maxCust: 38,
  avgCookiePurch: 2.3,
  
  sales: []


};

var Lima = {
  minCust: 2,
  maxCust: 16,
  avgCookiePurch: 4.6,
  
  sales: []


};