import React , { useState} from 'react';


const SearchBox = ({HandleSearch}) => {
    const [value, setValue] = useState("");

    
  const onSearch = () => {
    if (value.length > 3){
      return HandleSearch(value);
    }
  };

  return (
    <div className="App">
      <h1>Ricerca Email</h1>
      

      <div className="flex-search-container">
        <div className="search">
          <input type="text" value={value} onChange={event => setValue(event.target.value)} />
          <button  onClick={onSearch}> Cerca </button>
          <button type="button" onClick={() => setValue("")}  >Clear</button>
        </div>
      </div>
      <div className='list'>
        
      </div>
    </div>
  );

}

export default SearchBox;