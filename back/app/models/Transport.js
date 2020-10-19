const db = require('../database');
const CoreModel = require("./CoreModel");

class Transport extends CoreModel {

        static tableName = 'transport';

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

module.exports = Transport;