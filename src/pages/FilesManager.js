/********************************************************************
*  Formulář pro přidání souboru do seznamu souborů pro zobrazení na *
*  stránkách 'Dokumenty a Formuláře                                 *
********************************************************************/

import React from "react"

const FilesManager = () => {




  return(
    <div>
      <form className='flex flex-col w-[700px] gap-2 mx-auto'>
        <label htmlFor="selectFile" className="label">Vyberte soubor</label>
        <input 
            type='file' 
            name="fileName"
            className='input-container'
        />  
        <button 
          type="submit" 
          className='border-[3px] border-green-300 bg-green-300 rounded-lg font-bold h-[50px] text-2xl
                     hover:border-black'
        >
          Uložit
        </button>
      </form>
    </div>      
  )


}

export default FilesManager