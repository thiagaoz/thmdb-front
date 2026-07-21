import React from 'react';
import Navbar from '../src/components/Navbar';

function Zero() {
  const [data, setData] = React.useState<string>("");

  const handleCsvToJson = async () => {
    try {
      const response = await fetch('http://localhost:8000/imdb_csv_to_json');
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      // Use .text() instead of .json() because the backend returns a raw string
      const result = await response.text();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImdbToAtracao = async () => {
    try {
      const response = await fetch('http://localhost:8000/imdb_to_atracao');
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      // Use .text() instead of .json() because the backend returns a raw string
      const result = await response.text();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="header-container">
        <div className="titulo-principal">
          <h1 className="nome neon">Thiago's Movie Database</h1>
          <p>Menu secreto para administração da página</p>
        </div>
        <Navbar />
      </div>
      <div>
        {data && <p>{data}</p>}
      </div>
      <div className="navbar rating-menu">
        <button className="link-button rating-btn" onClick={handleCsvToJson}>
          IMDB csv to Json
        </button>
        <button className="link-button rating-btn" onClick={handleImdbToAtracao}>
          IMDB to Atracoes
        </button>
      </div>
    </>
  );
}

export default Zero;