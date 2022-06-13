const readline = require('readline');
const fs = require('fs');
const comma = ',';

function splitString(stringToSplit, separator) {
    return stringToSplit.split(separator);
}

class QueueManagerClass {
    queue = [];
    filePath = '';

    async readFile(filePath){
        const self = this;
        this.filePath = filePath;
        const readInterface = readline.createInterface({
            input: fs.createReadStream(this.filePath),
            console: false
        });

        //чтение файла
        let result = readInterface.on('line', function(line) {
            let arrayOfData = splitString(line, comma); //[name of command, number]

            switch (arrayOfData[0]) {
                case 'ADD':
                    self.add(arrayOfData[1]);
                    break;
                case 'REMOVE_USER':
                    self.removeByUser(arrayOfData[1]);
                    break;
                case 'MOVE':
                    self.move(arrayOfData[1], arrayOfData[2]);
                    break;
                case 'REMOVE_POSITION':
                    self.removeByPosition(arrayOfData[1]);
                    break;
                case 'SWAP':
                    self.swap(arrayOfData[1], arrayOfData[2]);
                    break;
                case 'PRINT':
                    self.print();
                    break;
                case 'REVERSE':
                    self.reverse();
                    break;
                default:
                    break;
            }
        });

        console.log('THIS.queue', this.queue)
    }

    //1. add – gets a userId as a parameter. Returns the position it got in the queue.
    // 2. removeByUser – gets a userId as a parameter. Removes the user from the queue.
    // 3. removeByPosition – gets a position as a parameter (starting from 1). Removes the user at
    // that position.
    // 4. move – gets a fromPosition and toPosition as parameters. Moves the user to the new
    // position.
    // 5. swap – gets position1 and position2 as parameters. Swaps the users between the
    // positions.
    // 6. reverse – reverses the order of the queue: whoever was last is now first.
    // 7. print – prints to stdout the queue in correct order in the following format
    // {position}:{userId}

    add(userId) {
        this.queue.push(userId);
        console.log('Add called with userId', userId);
        //console.log('this.queue', this.queue);
    }

    removeByUser(userId){
        console.log('removeByUser', userId);
    }

    removeByPosition(positionId){
        console.log('removeByPosition', positionId);
    }

    move(fromPosition, toPosition){
        console.log('move fromPosition and toPosition', fromPosition, toPosition);
    }

    swap(position1, position2){
        console.log('swap', position1, position2);
    }

    reverse(){
        console.log('reverse');
    }

    print(){
        console.log('print {position}:{userId}');
    }

    getQueue() {
        return this.queue;
    }
}

module.exports = QueueManagerClass;
