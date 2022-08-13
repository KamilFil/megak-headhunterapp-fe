import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { uploadUsersList } from '../../api/api';

export const ImportButton = () => {
  const [selectedFile, setSelectedFile] = useState('');

  const submit = () => {
    const data = new FormData();
    data.append('list', selectedFile);

    console.log(data);

    uploadUsersList(data);
  };

  console.log(selectedFile);

  return (
    <div className='import-form'>
      <div className='import-form--upload-file'>
        <label>Wybierz plik:</label>
        <input
          type='file'
          className='upload-file'
          value={selectedFile}
          // onChange={(e) => setSelectedFile({ selectedFile: e.target.files[0] })}
        />
      </div>
      <div className='import-form--submit-button'>
        <button type='submit' onClick={submit}>
          Zapisz
        </button>
      </div>
    </div>
  );
};
