consdb = require('../database');

class Travel {
    constructor (data) {
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    static async findOne(id) {

    }

    static async findAll(){

    }

    // update(data){
    //     for(const prop in data){
    //         this[prop] = data[prop];
    //     }
    // }

    async save() {

    }

    async delete() {

    }
}

module.exports = Traveler;