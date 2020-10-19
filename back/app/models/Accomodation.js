const db = require('../database');
const CoreModel = require("./CoreModel");

class Accomodation extends CoreModel {

        static tableName = 'accomodation';

    constructor (data) {
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    // static async findAllOfTravel(travelId){
    //     const accomodations = await db.query('SELECT * FROM accomodation WHERE travel_id = $1 ;', [travelId]);
    //     return accomodations.rows;
    // }

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

module.exports = Accomodation;