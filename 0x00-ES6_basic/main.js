import { taskFirst, taskNext } from "./0-constants.js";
import returnHowManyArguments from "./4-rest-parameter.js";
import concatArrays from "./5-spread-operator.js";
import getSanFranciscoDescription from "./6-string-interpolation.js";
import getBudgetObject from "./7-getBudgetObject.js";
import getBudgetForCurrentYear from "./8-getBudgetCurrentYear.js";
import getFullBudgetObject from "./9-getFullBudget.js";
import appendToEachArrayValue from "./10-loops.js";
import createEmployeesObject from "./11-createEmployeesObject.js";

console.log(`${taskFirst()} ${taskNext()}}`);
console.log(`${returnHowManyArguments("sd","dkfjsldjf",4,45)}`);
console.log(`${concatArrays(['a','b','c'],['d','e','f'],'Hello')}`);
//console.log(`${getSanFranciscoDescription()}`);
console.log(getBudgetObject(400, 700, 900));
console.log('----------------------------------------------');

const fullBudget = getFullBudgetObject(20, 50, 10);
console.log(fullBudget.gdp);
console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));
console.log('----------------------------------------------');
console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
console.log('----------------------------------------------');
console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));