$(document).ready(readyNow);

const employees = [{
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function displayEmployees() {
  let el = $('#output');
  el.empty();
  for (let item of employees) {
    let employeeBonus = employeeCalculator(item);
    el.append('<ul>' 
              + '<li>' + 'Name: ' + employeeBonus.name + '</li>'
              + '<li>' + 'Bonus Percentage: ' + employeeBonus.bonusPercentage + '</li>'
              + '<li>' + 'Total Compensation: ' + employeeBonus.totalCompensation + '</li>'
              + '<li>' + 'Total Bonus: ' + employeeBonus.totalBonus + '</li>'
              + '</ul>');
  }
}

function employeeCalculator(object) {
  let bonusPercentage = 0;
  let totalCompensation = 0;
  let totalBonus = 0;

  let reviewRating = object.reviewRating;

  if (reviewRating <= 2) {
    bonusPercentage = 0;
  } else if (reviewRating === 3) {
    bonusPercentage = .04;
  } else if (reviewRating === 4) {
    bonusPercentage = .06;
  } else {
    bonusPercentage = .10;
  }

  // object.employeeNumber.length ???
  if ((object.employeeNumber).length === 4) {
    bonusPercentage += .05;
  }

  if (object.annualSalary > 65000) {
    bonusPercentage -= .01;
  }

  if (bonusPercentage > .13) {
    bonusPercentage = .13;
  } else if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  totalBonus = Math.round(object.annualSalary * bonusPercentage);

  totalCompensation = Number(object.annualSalary) + totalBonus;

  let newObject = {
    name: object.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }

  return newObject;
}

function readyNow() {
  $('#execute').on('click', displayEmployees);
}

console.log(employees);