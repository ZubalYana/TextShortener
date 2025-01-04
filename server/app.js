const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); 

app.post('/shortenText', (req, res) => {
    const { text } = req.body; 
    const shortenedText = text.substring(0, 20) + '...';
    res.json({ shortenedText });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
