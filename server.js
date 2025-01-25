const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/bitcoin-price', async (req, res) => {
    try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
        res.json({ price: response.data.bpi.USD.rate });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Bitcoin price' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
