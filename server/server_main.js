let express = require("express");
const MongoClient = require('mongodb').MongoClient;
let path = require("path");
let random = require("random")

const port = 9000;
const url = "mongodb://localhost:27017/";

const app = express()

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, Origin");
    next();
});

app.get("/api/getQuestionaire", (req, res) => {

    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((db) => {
        console.log("connection successfull")
        collection = db.db("quizApp").collection("questionaire");

        collection.find({}).count()
        .then((n_document) => {
            let index = 0;
            let question_id_list = [];
            while (index <5) {
                let question_number = random.int(min = 0, max = n_document)
                if (!question_id_list.includes(question_number)) {
                    question_id_list.push(question_number)
                    index += 1
                }
            }
            return question_id_list;
        })
        .then((question_id_list) => {
            return collection.find({"question_id": {$in: question_id_list}}).toArray()
        })
        .then((document) => {
            res.send(document);
        })
        .then(() => {
            console.log("closing database connection")
            db.close();
        })
        .catch((err) => {
            console.log("Document cannot be fetched")
            res.send({status: 404, message: "No document found"})
        })
    })
    .catch((err) => {
        console.log("Connection cannot be established")
        res.send({status: 500, message: "No connection established"})
    })
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})