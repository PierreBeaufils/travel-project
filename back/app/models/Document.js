const {S3} = require("aws-sdk");
const { urlencoded } = require("express");
const uuid = require("uuid");

const s3 = new S3();


class Document {

    static Bucket = "globe-trotter-travel";
    constructor (data) {
            this.Bucket = Document.Bucket ;
           for (const prop in data) {
            this[prop] = data[prop];
           }
        
    }


    static async getAllPublic(prefix) {
        
            
           const objectPromise = await  s3.listObjectsV2({Bucket: this.Bucket,Prefix: prefix}).promise().catch((err) => {
               console.log(err);
           });
        return objectPromise;
    }

    async uploadDoc() {
        console.log(this);
            s3.upload(this, (err,data) => {
                if (err) {
                    console.log(err);
                } else {
                    return data;
            }
             });
         
    }

    async getObject() {
        const test = await s3.getObject(this).promise();
        return test ;
    }
    getUrl() {
        let url = "https://" + this.Bucket + ".s3.amazonaws.com/" + this.Key ;
        url = encodeURI(url);
        return url ;
    }




}

module.exports = Document ;