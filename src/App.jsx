import Lists from './components/Lists';

function App() {
  return (
    <div className="container">
      <div className="overlay"></div>
      <nav className="title">
        <img src="./pokemon-title.png" alt="" />
      </nav>
      <Lists />
    </div>
  )
}

export default App;
