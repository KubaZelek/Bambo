import React, { useState, useEffect } from 'react';

function Auction() {
    const [auctions, setAuctions] = useState([]);
  
    useEffect(() => {
      const fetchAuctions = async () => {
        try {
          const response = await fetch('http://localhost:5000/home'); // Zastąp '/api/auctions' adresem URL Twojego API
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setAuctions(data);
        } catch (error) {
          console.error('Error fetching auctions:', error);
        }
      };
  
      fetchAuctions();
    }, []); // Pusta tablica oznacza, że useEffect wywoła się tylko raz po zamontowaniu komponentu
  
    return (
      <div className='Auction'>
        <ul>
          {auctions.map(auction => (
            <li key={auction.id}>
              <p>{auction.title}</p>
              <p>{auction.photo}</p>
              <p>{auction.price}</p>
              <p>by: {auction.sold_by}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Auction;