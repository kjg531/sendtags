import React from 'react';
import './App.css';
import SendTags from './components/SendTags';

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      />
      <header className="App-header" style={{ backgroundColor: '#153D5C' }}>
        <img
          alt="nr_beta_logo"
          src="https://noterouter-staging.firebaseapp.com/static/media/logo.b10c9223.png"
          style={{ width: 300 }}
        />
        <SendTags />
      </header>
    </div>
  );
}

export default App;
