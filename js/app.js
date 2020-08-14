'use strict'

// random interger from mdn/w3schools

//function getRndInteger(min, max) {
// return Math.floor(Math.random() * /////(max - min)) + min;
//}//


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// object literals/store locations

var seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookiePurch: 6.3,
  sales: [],
  getRandomInteger: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  salesData: function () {
    for (var i = 0; i < hours.length; i++) {
      this.sales.push(Math.ceil(this.getRandomInteger(this.minCust, this.maxCust) * this.avgCookiePurch));
    }

  },

  render: function () {
    this.salesData();
  }

};

//seattle.salesData();
//console.log(seattle.sales);



var section = document.getElementById('locationList');
//console.log(section);
var divEl = document.createElement('div');
//console.log(divEl);
section.append(divEl);






/*    var tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookiePurch: 1.2,

  sales: []
getRandomInteger: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  salesData: function () {
    for (var i = 0; i < hours.length; i++) {
      this.sales.push(Math.ceil(this.getRandomInteger(this.minCust, this.maxCust) * this.avgCookiePurch));
    }

  },

  render: function() {
    this.salesData();
  }


};

var dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookiePurch:3.7,

  sales: []
getRandomInteger: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  salesData: function () {
    for (var i = 0; i < hours.length; i++) {
      this.sales.push(Math.ceil(this.getRandomInteger(this.minCust, this.maxCust) * this.avgCookiePurch));
    }

  },

  render: function() {
    this.salesData();
  }


};

var paris = {
  minCust: 20,
  maxCust: 38,
  avgCookiePurch: 2.3,

  sales: []

getRandomInteger: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  salesData: function () {
    for (var i = 0; i < hours.length; i++) {
      this.sales.push(Math.ceil(this.getRandomInteger(this.minCust, this.maxCust) * this.avgCookiePurch));
    }

  },

  render: function() {
    this.salesData();
  }


};

var Lima = {
  minCust: 2,
  maxCust: 16,
  avgCookiePurch: 4.6,

  sales: []
getRandomInteger: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  salesData: function () {
    for (var i = 0; i < hours.length; i++) {
      this.sales.push(Math.ceil(this.getRandomInteger(this.minCust, this.maxCust) * this.avgCookiePurch));
    }

  },

  render: function() {
    this.salesData();
  }




};*/







