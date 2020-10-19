const db = require('../database');

class CoreModel {

        _id;
        _travel_id

    constructor (data) {
       this._id = data.id;
       this._travel_id = this._travel_id;
    }

    get id() {
        return this._id ;
    }

    get travel_id() {
        return this._travel_id;
    }

    

    static async findAllTravelComponent(travelId){
        console.log(this.tableName);
        console.log(travelId);

        const component = await db.query(`SELECT * FROM ${this.tableName} WHERE travel_id = $1 ;`, [travelId]);
        return component.rows;
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

module.exports = CoreModel ;