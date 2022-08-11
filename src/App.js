import React from 'react';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    console.log(response);
    const json = await response.json();
    console.log(json);

    setDados(json);
    setLoading(false);
  }

  return (
    <div>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Tablet
      </button>
      {loading && <p>Loading...</p>}
      {!loading && dados && <Produto dados={dados} />}
    </div>
  );
};
export default App;
