import React from 'react'
import Nadpis from '../components/Nadpis'
//import * as fsys from 'fs';


function Documents(props) {
    
  const dir = './files';
  const files = [
    'Aktuality.pdf',
    'GDPR.pdf',
    'Hlaseni-zmen.pdf',
    'Stanovy-2021.pdf',
  ];
   
  return(
    <>
    <Nadpis name={props.page} />
    
    <p>Důležité dokumenty ve formátu pdf.</p>

    <div className=' flex flex-col text-center mt-3 bg-slate-50'>
      
        for(const file of files){
          <div className='py-2'>
            <a  href={dir.concat('/', file)} target='blanc' >{file.split('.')}</a>
            <a className='ml-5' href={dir.concat('/', file)} download aria-describedby='Stáhnout'>Stáhnout</a>
          </div>
        }
        
    </div>

</>
    )
}

export default Documents