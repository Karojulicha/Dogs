import { useState, useEffect } from "react";

const URL = 'https://api.thedogapi.com/v1/images/search';

function InformacionDogs () {
  const [Perros, setPerros]=useState([]);
  };
     const fetchePerros = async () => {
  try {
    const result = (await fetch (URL)).json();
    setPerros(result.result)} 
  catch (error) { console.log (error) }
};

useEffect ((data) => {
  fetchePerros();
},[])