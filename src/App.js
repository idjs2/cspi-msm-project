import './App.css';

function App() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <div className="App">
      <header>
        <div className="right-bar">
          <a href="https://accounts.google.com/b/0/AddMailService">Gmail</a>
          <a href="https://www.google.com/imghp?hl=ko&tab=ri&authuser=0&ogbl">이미지</a>
          <img src={process.env.PUBLIC_URL + `/assets/erlenmeyer-flask.png`}/>
          <img src={process.env.PUBLIC_URL + `/assets/dots-menu.png`}/>
        </div>
      </header>
    </div>
  );
}

export default App;
