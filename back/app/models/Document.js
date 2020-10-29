const {S3} = require("aws-sdk");
const { urlencoded } = require("express");
const uuid = require("uuid");

const s3 = new S3();


class Document {
    
    static Bucket = "globe-trotter-travel";
    constructor (data) {
        this.travel_id = data.travel_id;
        this.Bucket = Document.Bucket ;
        for (const prop in data) {
            this[prop] = data[prop];
        }
        this.url = this.getUrl();
        this.name = this.getName();
    
    }


    static async getAllPublic(prefix) {
        
            
           const objectPromise = await  s3.listObjectsV2({Bucket: this.Bucket,Prefix: prefix}).promise().catch((err) => {
                return "une erreur c'est produite : " + err ;
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
        let url = "https://" + this.Bucket + ".s3.amazonaws.com/" + this.Key;
        url = encodeURI(url);
        return url;
    }

    getName() {
        const regex = /[a-zA-Z0-9-_.]+[.][a-z,A-Z,0-9]+$/gi
        let name =  this.Key.match(regex) ;
        if (name != null) {
        return name[0];
    }
    }




}

module.exports = Document ;