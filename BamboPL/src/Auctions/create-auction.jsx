import React, { useState } from 'react';
import axios from 'axios';

function CreateAuction() {
  const [values, setValues] = useState({
    title: '',
    photo: '',
    price: '',
    description: '',
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setValues({ ...values, photo: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('photo', values.photo);
    formData.append('price', values.price);
    formData.append('description', values.description);

    try {
      const response = await axios.post('http://localhost:5000/create-auction', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Registered!", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="CreateAuction">
      <h1>Dodaj ogłoszenie</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="title">Nazwa przedmiotu</label>
        <input type="text" name="title" placeholder="Wpisz nazwę" onChange={handleChange} />
        
        <label htmlFor="photo">Zdjęcie przedmiotu</label>
        <input type="file" name="photo" accept="image/png, image/jpeg" onChange={handleFileChange} />
        
        <label htmlFor="price">Cena</label>
        <input type="number" name="price" placeholder="Wpisz cenę [zł]" min='0' onChange={handleChange} />
        
        <label htmlFor="description">Dodaj opis</label>
        <textarea name="description" placeholder="Opisz przedmiot" onChange={handleChange} />
        
        <button type="submit">Dodaj ogłoszenie</button>
      </form>
    </div>
  );
}

export default CreateAuction;
