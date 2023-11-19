<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<div className="login">
          <h1>
               Rejstracja kont firmowych
          </h1>

          <a href="index.html">
            <div className="minilogo">
              <img src={logo} alt="Logo" className="imgs" />
            </div>
          </Link>

          <div className="down">
            <form onSubmit={handleSubmit}>

              <label htmlFor="account_name">Nazwa firmy<span className='nessesary'>*</span></label><br />
              <input type="text" name="account_name" placeholder="Wpisz nazwę firmy" onChange={handleChange} /><br />

              <p className='break'> </p>

              <label htmlFor="password">Hasło<span className='nessesary'>*</span></label><br />
              <input type="password" name="password" placeholder="Wpisz hasło do konta firmowego" onChange={handleChange} /><br />

              <p className='break'> </p>

              <label htmlFor="email">E-mail<span className='nessesary'>*</span></label><br />
              <input type="text" name="email" placeholder="Wpisz e-mail firmowy" onChange={handleChange} /><br />

              <p className='break'> </p>

              <label htmlFor="account_name">NIP<span className='nessesary'>*</span></label><br />
              <input type="text" name="account_name" placeholder="Wpisz NIP swojej firmy" onChange={handleChange} /><br />

              <p className='break'> </p>

              <button type="submit">Przejdź dalej</button>
            </form>
        </div>
    </div>
</div>

</body>
</html>
    <div className="AccountSignup">
  
    
        