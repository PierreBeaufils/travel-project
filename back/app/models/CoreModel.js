const db = require('../database');

class CoreModel {

    _id;
    // _travel_id

    constructor (data) {
       this._id = data.id;
    //    this._travel_id = this._travel_id;
    }

    get id() {
        return this._id ;
    }

    // get travel_id() {
    //     return this._travel_id;
    // }   

    set id(value) {
        if (isNaN(parseInt(value,10))) {
            throw Error("L'id du core model doit être un entier");
        }
        this._id = value;
    }

    // set travel_id(value) {
    //     if (isNaN(parseInt(value,10))) {
    //         throw Error("L'id du core model doit être un entier");
    //     }
    //     this.travel_id = value;
    // }

    static async findAllTravelComponent(travelId){
        console.log(this.tableName);
        console.log(travelId);

        const component = await db.query(`SELECT * FROM ${this.tableName} WHERE travel_id = $1 ;`, [travelId]);
        return component.rows;
    }

    static async findOneTravelComponent(travelId,componentId){
        if (travelId) {
            console.log(`SELECT * FROM ${this.tableName} WHERE travel_id = ${travelId} id = ${componentId} ;`)
            const component = await db.query(`SELECT * FROM ${this.tableName} WHERE travel_id = $1 AND id = $2 ;`, [travelId ,componentId]);
            return component.rows[0];
        }
        else {
        const component = await db.query(`SELECT * FROM ${this.constructor.tableName} WHERE id = $1 ;`, [componentId]);
        return component.rows[0];
    }
    }

    update(data){
        for(const prop in data){
            this[prop] = data[prop];
        }
    }

    async saveAllTravelComponent(){
        const fieldNames = [];
        const fieldIndex = [];
        const fieldValues = [];
        const fieldConcat = [];

        let index = 1 ;

        for (let fieldName in this) {
            if (fieldName === "_id") {
                continue;
            }
            fieldNames.push(`"${fieldName}"`);
            fieldValues.push(this[fieldName]);
            fieldIndex.push("$" + index);
            fieldConcat.push(fieldNames[index-1] + " = " + fieldIndex[index-1]);
            index ++;
        }
        

        if (this.id) {
            fieldValues.push(this.id);
            console.log(fieldValues);
            await db.query(`
            UPDATE ${this.constructor.tableName} SET ${fieldConcat.join(", ")} WHERE id = $${fieldNames.length + 1}
            ;`
            , fieldValues);
        }



        

        else {
        await db.query(`
            INSERT INTO ${this.constructor.tableName} (${fieldNames.join(", ")})
            VALUES (${fieldIndex.join(", ")})
            RETURNING id;`
            , fieldValues) ;}

    }

    // update(data){
    //     for(const prop in data){
    //         this[prop] = data[prop];
    //     }
    // }

    async save() {

    }

    async delete() {
        console.log(`DELETE FROM ${this.constructor.tableName} WHERE id = ${this.id} ;`)
        await db.query(`DELETE FROM ${this.constructor.tableName} WHERE id = $1 ;`, [this.id]);
    }
}

module.exports = CoreModel ;