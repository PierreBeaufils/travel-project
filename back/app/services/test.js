const Document = require("../models/Document");

const document1 = new Document({
    Key: "15/test.txt",
    Body: "Ceci est est un test"
});

console.log(document1);

test = async () => {
await document1.uploadDoc();
};

test();

