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

    static async findAllTravels(travelerId) {
        const travels = await db.query (`
        SELECT *
        FROM travel_has_traveler 
        JOIN travel ON travel_has_traveler.travel_id = travel.id
        JOIN traveler ON travel_has_traveler.traveler_id = traveler.id
        WHERE travel_has_traveler.traveler_id = $1 AND travel.return_date > now()
        ORDER BY travel.departure_date;
        `, [travelerId]);

        return travels.rows;
    }    
}

module.exports = Travel;