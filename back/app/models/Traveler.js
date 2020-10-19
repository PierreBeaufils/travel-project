const db = require('../database');
const CoreModel = require ('./CoreModel');

class Traveler extends CoreModel {

    static tableName = 'traveler';

    constructor (data) {
        super(data);
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    
}



module.exports = Traveler;