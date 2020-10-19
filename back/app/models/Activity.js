const db = require('../database');
const CoreModel = require("./CoreModel");

class Activity extends CoreModel {

        static tableName = 'activity';

    constructor (data) {
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    

    async save() {

    }

    async delete() {

    }
}

module.exports = Activity;