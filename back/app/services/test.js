const Activity = require("../models/Activity");

const test = new Activity({
  "name": "Chasse a cour",
  "topic": "TEST",
  "place": "886 Surrey Lane",
  "duration": "35 minute",
  "description": "Operative composite productivity",
  "date": "2020-11-16T10:58:36.000Z",
  "unit_price": "85.99",
  "quantity": 4,
  "coordinate": {
    "x": 8.33333,
    "y": 9.66666
  }
});

  console.log(test);