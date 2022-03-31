const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extend: true }))

const db = require('./app/models')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Database Connected`)
    }).catch((err) => {
        console.log(`Cannot connect to database`, err);
        process.exit()
    });

app.get('/', (req, res) => {
    res.json({
        message: "Hello world"
    });
})

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});