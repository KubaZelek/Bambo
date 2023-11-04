import { useState } from "react";
import { React } from "react";
import axios from 'axios';

function Signup(){
    const [values, setValues] = useState({
        username: '',
        password: '',
        email: ''
    })
    const handleChange = (event) => {
        setValues({...values, [event.target.name]:[event.target.value]})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/signup', {values})
        .then(res => console.log("Registered!"))
        .catch(err => console.log(err));
    }
    return(
        <div className="Signup">
            <h1>Rejestracja</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nazwa użytkownika</label>
                <input type="text" name="username" placeholder="Wpisz nazwę" onChange={handleChange} />
                <label htmlFor="password">Hasło</label>
                <input type="text" name="password" placeholder="Wpisz hasło" onChange={handleChange} />
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" placeholder="Wpisz e-mail" onChange={handleChange} />
                <button type="submit" onChange={handleSubmit}></button>
            </form>
        </div>
    );
}

export default Signup;