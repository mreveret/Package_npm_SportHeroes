const {isValid,defineMaxSpeed, Activity, Marathon} = require('./index.js');

let test = new Activity('running',1000,60);
let test3 = new Activity('ring',1000,60);
let test2 = new Marathon(1,1,240);
let test4 = new Activity('running',-1000,60);
let test5 = new Activity('running',1000,-60);
let test6 = new Marathon(10);

QUnit.test('Wrong value', function (assert){
		assert.equal(isValid(test2),'Speed is invalid\n', 'Speed too high\n');
		assert.equal(isValid(test3),Activity.getSportTypes(), 'Wrong type\n');
		assert.equal(isValid(test4),'Invalid distance\n', ' distance < 0\n');
		assert.equal(isValid(test5),'Invalid duration\n', 'duration < 0\n');
		assert.equal(isValid(test6),'Speed is invalid\n', 'Speed too high for a Marathon\n');
		});

QUnit.test('Good values', function (assert){
		assert.equal(isValid(test),'Everything is valid\n', 'Everything is ok\n');
		});
