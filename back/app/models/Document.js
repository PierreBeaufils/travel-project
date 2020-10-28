const {S3} = require("aws-sdk");
const uuid = require("uuid");


class Document {

    static Bucket = "globe-trotter-travel";
    constructor (data) {
            this.Bucket = Document.Bucket ;
           for (const prop in data) {
            this[prop] = data[prop];
           }
        
    }


    static async getAll() {
       await new S3().listObjectsV2({Bucket: this.Bucket}, (err,results) => {
            if (err) {
                console.log(err);
            } else {
                return results;
        }
        });
        
    }

    async uploadDoc() {
        console.log(this);
            await new  S3().upload(this, (err,data) => {
                if (err) {
                    console.log(err);
                } else {
                    return data;
            }
             });
         
    }



}

module.exports = Document ;