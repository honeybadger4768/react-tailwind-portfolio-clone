import BottomBar from 'components/BottomBar';
import Container from 'components/Container';
import Header from 'components/Header';
import React from 'react';

function App() {
  return (
    <div className="w-full h-screen pt-32">
      <Header />
      <Container />
      <BottomBar />
    </div>
  );
}

export default App;
