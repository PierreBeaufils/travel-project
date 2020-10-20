const db = require('../database');
const CoreModel = require('../models/CoreModel');

class Travel extends CoreModel {
    static tableName = 'travel';
    constructor (data) {
        super(data);
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    
}

module.exports = Travel;