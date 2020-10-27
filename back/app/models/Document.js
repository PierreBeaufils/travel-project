
const {S3} = require("aws-sdk");
const uuid = require("uuid");

const objectParams = {
    Bucket: "globe-trotter-travel",
    // Body: "Ceci est un fichier test bizzaroide"
};





const test = async () =>  await new S3().listObjectsV2(objectParams, (err,results) => {
console.log(results);
});

test();




