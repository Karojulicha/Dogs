import logo from './logo.svg';
import './App.css';
import Dogs from './Componentes.jsx/Dogs';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

  //const { data, error} = useSWR('/api/user', fetcher) 
//if (error) {
//  return <div> aild to load </div>
//}
//if (!data || !Perros) {
//  return  <div> loading... </div>
//}
//if (!Perros){
//  return <div> loading...</div>
//}
//return <div> Dogs {Perros}</div>


function App() {
  return (
    <div className="App">
      <InformacionDogs></InformacionDogs>
    </div>
  );
}

export default App;
