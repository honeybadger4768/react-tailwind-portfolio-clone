import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainTemplate from 'components/MainTemplate';
import { routes } from 'global';



function App() {
  return (
    <Routes>
      <Route path='/' element={<MainTemplate />}>
        {routes.map((route, i) =>{
          let props = {
            path: route.link,
            element: route.component
          }

          return <Route {...props} />
        })}
      </Route>
    </Routes>
  );
}

export default App;
