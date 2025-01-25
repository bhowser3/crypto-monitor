import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [price, setPrice] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/bitcoin-price');
                setPrice(response.data.price);
                setError(null); 
            } catch (err) {
                setError('Failed to fetch price');
            }
        };

        const interval = setInterval(fetchPrice, 30000);
        fetchPrice();
        return () => clearInterval(interval);
    }, []);

    return (
      <div id='container'>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Kode+Mono:wght@400..700&display=swap" rel="stylesheet"></link>

        <div class='priceText' >
            BTC = {price ? <>{price} USD </> : <>error</> ? <>{error}</> : <>Loading...</>}
        </div>
      </div>
    );
}

export default App;
