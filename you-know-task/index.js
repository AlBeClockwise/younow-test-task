const QueueManagerClass = require('./queueManagerClass');
const TestClass = require('../fragments/test');
let filePath = './action.txt';

(async () => {
    let queueManager = new QueueManagerClass();
    let res = await queueManager.readFile(filePath);
    console.log('RESULT', queueManager.getQueue());

    // let newTestClass = new TestClass();
    // newTestClass.add(1);
    // newTestClass.add(1);
    // newTestClass.add(1);
    // newTestClass.getSum();
    // newTestClass.add(1);
    // newTestClass.add(1);
    // newTestClass.getSum();
    // console.log('newTestClass.sum', newTestClass.sum);

})();
