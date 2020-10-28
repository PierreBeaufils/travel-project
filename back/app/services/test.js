const Document = require("../models/Document");

const document1 = new Document({
    Key: "15/public/Banane peze horizontal.mp4",
    url: ".s3.amazonaws.com/"
});


console.log(document1.url);



