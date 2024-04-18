const express = require("express");
const dbCalls = require("./dbCalls.js");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("backend/randomJoke", async (req,res) => {
    const joke = await dbCalls.randomJoke();
    res,json(joke);
});

app.post("/backend/submitJoke", async (req, res) => {
    console.log(req.body, "submitJoke");
    const submit = await dbCalls.submitJoke(
        req.body.joke,
        req.body.category,
        req.body.email
    );
    res.json(200);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
