const db = require('../database');
const CoreModel = require("./CoreModel");

class Activity extends CoreModel {

        static tableName = 'activity';

    constructor (data) {
        super(data);
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    

    
}

module.exports = Activity;