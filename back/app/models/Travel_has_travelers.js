const db = require('../database');
const CoreModel = require('./CoreModel');

class travel_has_traveler extends CoreModel {

    static tableName = 'travel_has_traveler';

    constructor (data) {
        super(data);
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    static async findTravelersByTravel(travelId) {
        const travelers = await db.query (`
        SELECT traveler_id, first_name, last_name, phone, email
        FROM travel_has_traveler
        JOIN travel ON travel_has_traveler.travel_id = travel.id
        JOIN traveler ON travel_has_traveler.traveler_id = traveler.id
        WHERE travel_has_traveler.travel_id = $1
        `, [travelId]);

        return travelers.rows;

    }
}

module.exports = travel_has_traveler;