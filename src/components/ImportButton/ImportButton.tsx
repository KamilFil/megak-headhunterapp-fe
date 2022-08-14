import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { uploadUsersList } from '../../api/api';

import './ImportButton.css';

export const ImportButton = () => {
  const [selectedFile, setSelectedFile] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData();
    data.append('list', selectedFile);

    console.log(data);
    try {
      uploadUsersList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedFile = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  console.log(selectedFile);

  return (
    <form onSubmit={handleSubmit} className='upload-form'>
      <label className='upload-form--label'>Import kursantów:</label>
      <input type='file' className='upload-form--button' onChange={handleSelectedFile} />
      <input type='submit' className='upload-form--submit' value='Zapisz' />
    </form>
  );
};
