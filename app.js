const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extend: true }))

app.get('/', (req, res) => {
    res.json({
         message: "Hello world"
     });
})

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});