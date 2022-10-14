/********************************************************************
*  Formulář pro přidání souboru do seznamu souborů pro zobrazení na *
*  stránkách 'Dokumenty a Formuláře                                 *
********************************************************************/

import React, { useCallback } from "react";
import { useDropzone } from 'react-dropzone';

const FilesManager = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps
  } = useDropzone({ onDrop });

  return(
    <div {...getRootProps()}>
      <input {...getInputProps()} />  
      <div>Drag and drop your images here.</div> 
    </div>      
  )
}

export default FilesManager