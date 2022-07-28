import { useState , useEffect}  from "react";
import "./App.css";
import SearchBox from './components/searchbox';
import axios from 'axios';
import RestList from './components/restlist';

export default function App() {
  const [InitialState, setInitialState] = useState('InitialState');
  const [resultSet, setResultSet] = useState('');
  const [filtered, setFiltered] = useState([]);
  
  const HandleDelete = () => {
    

  }
 
  const HandleSearch = (value) =>{
    const res = resultSet.filter(item => item.email.toLowerCase().includes(value));
      setFiltered(res);
    }
      

  const pino = async () => {
    
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users") ;
    
        let data = res.data;
        return data;
      } catch (error) {
        console.log(error.response); 
    
        return error.response;
      }
  };
  useEffect(() => {
    pino().then(res => {
      setResultSet(res);
      setInitialState(res);
    });
  }, []);
  return (
    <>
    <SearchBox HandleSearch={HandleSearch} />
    <RestList resultSet={resultSet} filtered={filtered}/>
    
    </>
    
  )

  }