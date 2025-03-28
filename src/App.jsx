import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries'

const restCountriesApi = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = res.json();
  return data;
}

function App() {
  const fetchApi = restCountriesApi()
  return (
    <>
      <Suspense fallback={<h3>Loading fetch api...</h3>}>
        <Countries fetchApi={fetchApi}></Countries>
      </Suspense>
    </>
  )
}

export default App
