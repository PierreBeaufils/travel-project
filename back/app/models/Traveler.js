const db = require('../database');

class Traveler {
    constructor (data) {
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    static async findAll(){
        const travelers = await db.query ('SELECT * FROM traveler');
        return travelers.rows;
    }

    static async findOne(travelerId) {
        const traveler = await db.query ('SELECT * FROM traveler WHERE id=$1', [travelerId]);
        return traveler.rows[0];        
    }

    // update(data){
    //     for(const prop in data){
    //         this[prop] = data[prop];
    //     }
    // }

    async save() {
        const insertedTraveler = await db.query (`
        INSERT INTO traveler (first_name, last_name, role, gender, dob, adress, zipcode, city, phone, email, email_check, password, passport_number, expiration_date)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING id;
        `, [
            this.first_name,
            this.last_name,
            this.role,
            this.gender,
            this.dob,
            this.adress,
            this.zipcode,
            this.city,
            this.phone,
            this.email,
            this.email_check,
            this.password,
            this.passport_number,
            this.expiration_date,            
        ]);
    }

    async delete() {

    }
}

module.exports = Traveler;