'use strict'

// random interger from mdn/w3schools




var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//constructors

function Store(name, minCust, maxCust, avgCookiePurch) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePurch = avgCookiePurch;
  this.sales = [];
  this.getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

var seattle = new Store('seattle', 23, 65, 6.3);

console.log(seattle);

/*function Store(name, minCust, maxCust, avgCookiePurch) {
  
}

function Store(name, minCust, maxCust, avgCookiePurch) {
  
}

function Store(name, minCust, maxCust, avgCookiePurch) {
  
}

function Store(name, minCust, maxCust, avgCookiePurch) {
  
}





//literals
//seattle

var seattle = {
  name: 'Seattle',
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

seattle.salesData();
console.log(seattle.sales);



var section = document.getElementById('locationList');
//console.log(section);
var divEl = document.createElement('div');
//console.log(divEl);
section.append(divEl);

var h2 = document.createElement('h2');
h2.textContent = seattle.name;
divEl.appendChild(h2);

var ul = document.createElement('ul');
section.append(ul);

for (var i = 0; i < seattle.sales.length; i++) {
  var li = document.createElement('li');
  li.textContent = seattle.sales[i];
  ul.appendChild(li);
}



//tokyo


var tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiePurch: 1.2,
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

tokyo.salesData();
console.log(tokyo.sales);



var section = document.getElementById('locationList');
//console.log(section);
var divEl = document.createElement('div');
//console.log(divEl);
section.append(divEl);

var h2 = document.createElement('h2');
h2.textContent = tokyo.name;
divEl.appendChild(h2);

var ul = document.createElement('ul');
section.append(ul);

for (var i = 0; i < tokyo.sales.length; i++) {
  var li = document.createElement('li');
  li.textContent = tokyo.sales[i];
  ul.appendChild(li);
}

//dubai

var dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiePurch: 3.7,
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

dubai.salesData();
console.log(dubai.sales);



var section = document.getElementById('locationList');
//console.log(section);
var divEl = document.createElement('div');
//console.log(divEl);
section.append(divEl);

var h2 = document.createElement('h2');
h2.textContent = dubai.name;
divEl.appendChild(h2);

var ul = document.createElement('ul');
section.append(ul);

for (var i = 0; i < dubai.sales.length; i++) {
  var li = document.createElement('li');
  li.textContent = dubai.sales[i];
  ul.appendChild(li);
}


//paris

var paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookiePurch: 2.3,
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

paris.salesData();
console.log(paris.sales);



var section = document.getElementById('locationList');
//console.log(section);
var divEl = document.createElement('div');
//console.log(divEl);
section.append(divEl);

var h2 = document.createElement('h2');
h2.textContent = paris.name;
divEl.appendChild(h2);

var ul = document.createElement('ul');
section.append(ul);

for (var i = 0; i < paris.sales.length; i++) {
  var li = document.createElement('li');
  li.textContent = paris.sales[i];
  ul.appendChild(li);
}

//lima

var lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookiePurch: 4.6,
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

lima.salesData();
console.log(lima.sales);



var section = document.getElementById('locationList');
//console.log(section);
var divEl = document.createElement('div');
//console.log(divEl);
section.append(divEl);

var h2 = document.createElement('h2');
h2.textContent = lima.name;
divEl.appendChild(h2);

var ul = document.createElement('ul');
section.append(ul);

for (var i = 0; i < lima.sales.length; i++) {
  var li = document.createElement('li');
  li.textContent = lima.sales[i];
  ul.appendChild(li);
}*/