import React  from 'react';



const RestList = ({resultSet , filtered}) => {

  if (!resultSet ) {
    return null;
 }
     if ( filtered.lenght> 0){
     return (
    (filtered.map((item) => (
    <>
    <p>{item.email}</p>
    <button className="btn" onClick={() => {}}>DELETE</button>
    </>
     ))
     ))
   
    }
      return (
        (resultSet.map((item) => (
          <>
          <p>{item.email}</p>
          <button className="btn" onClick={() => {}}>DELETE</button>
          </>
        )
        ))
      )
            
};
export default RestList;                                                                                                   