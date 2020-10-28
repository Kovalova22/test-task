const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");



//middleware
app.use(cors());
app.use(express.json()); //req.body

//Routes
app.get('/', (req, res) => res.send('Hello world'))


app.post("/hotdogs", async(req,res) => {
    try {
        const {name} = req.body;
        const {title} = req.body;
        const {description} = req.body;
        const {image} = req.body;
        const newHotdog = await pool.query("INSERT INTO hotdogs (name, title, description, image) VALUES($1,$2,$3,$4) RETURNING * ",
         [name, title, description, image]);

         res.json(newHotdog.rows[0]); //newHotdog.rows[0]
    } catch (err) {
        console.error(err.message);
    }
});

//get all hotdogs

app.get("/hotdogs", async(req,res) =>{
    try {
        const allHotdogs = await pool.query("SELECT * FROM hotdogs");
        res.json(allHotdogs.rows); //allHotdogs.rows
    } catch (err) {
        console.error(err.message);
    }
});

//get a hotdog

app.get("/hotdogs/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const hotdog = await pool.query("SELECT * FROM hotdogs WHERE hotdog_id = $1", 
        [id]);

        res.json(hotdog.rows[0]); //hotdog.rows[0]
    } catch (err) {
        console.error(err.message);
    }
});

//update a hot dog

app.put("/hotdogs/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const {name} = req.body;
        const {title} = req.body;
        const {description} = req.body; 
        const {image} = req.body;
        const updateHotdog = await pool.query("UPDATE hotdogs SET name, title, description, image = $1,$2,$3,$4 WHERE hotdog_id= $5",
        [name, title, description, image, id]);

        res.json(updateHotdog);
    } catch (err) {
        console.error(err.message);
    }
});

//delete a hotdog

app.delete("/hotdogs/:id", async (req,res) => {
    try {
      const { id } = req.params;
      const deleteHotdog = await pool.query("DELETE FROM hotdogs WHERE hotdog_id = $1", [id]);
      res.json(deleteHotdog); 
    } catch (err) {
        console.error(err.message);        
    }
});

app.listen(3000, () => {
    console.log(`App is running on port 3000`)
  });