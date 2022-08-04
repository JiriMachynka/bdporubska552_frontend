import React from 'react'
import Nadpis from '../components/Nadpis'
//import * as fsys from 'fs';


function Documents(props) {
  /*  
  const dir = './files';
  let files; 
  fsys.readdir(dir, (err, files) => {
    console.log(files);
  });
  */
  
  
  return(
    <>
    <Nadpis name={props.page} />
    
    <p>Důležité dokumenty ve formátu pdf.</p>

    <div>
      <div>
        <a href='./files/Stanovy-2021.pdf' target='blanc' >Stanovy družstva</a>
        <button>
          <a href='./files/stanovy-2021.pdf' download aria-describedby='Stáhnout stanovy'></a>
          Stáhnout
        </button>
        </div>
    </div>

</>
    )
}

export default Documents