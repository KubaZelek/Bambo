import React, { useState } from 'react';
import axios from 'axios';

function CreateAuction() {
  const [values, setValues] = useState({
    title: '',
    photo: '',
    price: '',
    description: ''
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/create_auction', values)
      .then((res) => {
        console.log("Registered!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="CreateAuction">
      <h1>Dodaj ogloszenie</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Nazwa przedmiotu</label>
        <input type="text" name="title" placeholder="Wpisz nazwę" onChange={handleChange} />
        <label htmlFor="photo">Zdjęcie przedmiotu</label>
        <input type="file" name="photo" accept="image/png, image/jpeg" onChange={handleChange} />
        <label htmlFor="price">Cena</label>
        <input type="number" name="price" placeholder="Wpisz cenę [zł]" min='0' onChange={handleChange} />
        <label htmlFor="desc">Dodaj opis</label>
        <textarea name="description" placeholder="Opisz przedmiot" onChange={handleChange} />
        <button type="submit">Dodaj ogłoszenie</button>
      </form>
    </div>
  );
}

export default CreateAuction;
