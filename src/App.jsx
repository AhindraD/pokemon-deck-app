import { useState } from 'react';
import Lists from './components/Lists';

function App() {
  let [pageNo, setPageNo] = useState(1);
  let [offset, setOffset] = useState(0);
  const LIMIT = 40;

  function prevPage() {
    if (pageNo > 1) {
      setPageNo((curr) => curr - 1);
      setOffset((curr) => curr - LIMIT);
    }
  }
  function nextPage() {
    if (pageNo < 28) {
      setPageNo((curr) => curr + 1);
      setOffset((curr) => curr + LIMIT);
    }
  }

  return (
    <div className="container">
      <div className="overlay"></div>
      <nav className="title">
        <img src="./pokemon-title.png" alt="" />
      </nav>
      <Lists offset={offset} />
      <div className="toggle">
        <button className="prev" onClick={() => prevPage()}>⏮</button>
        <div className="page-no">Page: {pageNo}</div>
        <button className="next" onClick={() => nextPage()}>⏭</button>
      </div>
    </div>
  )
}

export default App;
