"use strict";

var _redux = require("redux");

var _actions = require("./actions");

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _redux.createStore)(_reducers["default"]);
store.dispatch((0, _actions.addExpense)({
  id: 1,
  amount: 45
}));
store.dispatch((0, _actions.addExpense)({
  id: 2,
  amount: 20
}));
store.dispatch((0, _actions.addExpense)({
  id: 3,
  amount: 30
}));
store.dispatch((0, _actions.removeExpense)({
  id: 2
}));
console.assert(store.getState().balance === 75);
console.assert(store.getState().expenses.length === 2);