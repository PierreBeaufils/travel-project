const Document = require("../models/Document");

const document1 = new Document({
    Key: "15/public/Banane peze horizontal.mp4"
});

console.log(document1.getUrl());



