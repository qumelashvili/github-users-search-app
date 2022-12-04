import { useState} from 'react';
import './App.css';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Info from './components/Info';

function App() {
  const [infoResult, setInfoResult] = useState();
  
  async function makeRequest(inputValue){
    const input = document.querySelector(".search-area")

    try{
      const response = await fetch("https://api.github.com/users/"+inputValue);
      const result = await response.json();
      if(!response.ok){
        input.classList.toggle('error');
        console.log("Error Status",response.status )
      }
      else{
        setInfoResult(result);
        input.classList.remove('error')
      }
    }
    catch(err){
      console.log(err, "this is error")
    }
  }

  function getInputValue(data){
    makeRequest(data);
  }

  
  return (
   <main className="lg:mt-[144px]">
    <Header />
    <SearchInput getInputValue={getInputValue} />
    {infoResult ? <Info info = {infoResult} /> : <></>} 
   </main>
  );
}
export default App;
