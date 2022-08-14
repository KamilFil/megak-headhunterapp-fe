import { FormEvent, useState } from 'react';
import { expectedTypeWork } from 'types';
import './StudentForm.css';

export const StudentForm = () => {
  const [form, setForm] = useState({
    tel: '',
    githubUsername: '',
    projectPortfolio: '',
    projectUrl: '',
    bonusProjectUrls: '',
    bio: '',
    expectedTypeWork: expectedTypeWork,
    targetWorkCity: '',
    expectedContractType: '',
    expectedSalary: 0,
    canTakeApprenticeship: 0,
    monthsOfCommercialExp: 0,
    education: '',
    workExperience: '',
    courses: '',
  });

  const handleForm = (key: string, value: any) => {
    // {
    //   form.email.length > 5 ? console.log('masz problem') : ' nie masz';
    // }
    console.log(form.tel);
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  const handleSendStudent = (e: FormEvent) => {
    e.preventDefault();
    console.log('poszlo');
  };

  return (
    <form className='student-form' onClick={handleSendStudent}>
      <input
        type='tel'
        placeholder='Wpisz swój numer telefonu'
        className='student-form-input'
        value={form.tel}
        onChange={(e) => handleForm('tel', e.target.value)}
      />
      <input
        className='student-form-input'
        placeholder='Nazwa konta github'
        value={form.githubUsername}
        onChange={(e) => handleForm('githubUsername', e.target.value)}
      />
      <input
        className='student-form-input'
        placeholder='Link do portfolio'
        value={form.projectPortfolio}
        onChange={(e) => handleForm('projectPortfolio', e.target.value)}
      />
      <input
        className='student-form-input'
        placeholder='Link do projektu'
        value={form.projectUrl}
        onChange={(e) => handleForm('projectUrl', e.target.value)}
      />
      <input
        className='student-form-input'
        placeholder='Link do projektu Scrum'
        value={form.bonusProjectUrls}
        onChange={(e) => handleForm('bonusProjectUrls', e.target.value)}
      />
      <input
        className='student-form-input'
        placeholder='Twój opis bio'
        value={form.bio}
        onChange={(e) => handleForm('bio', e.target.value)}
      />
      <select
        value={form.expectedTypeWork}
        onChange={(e) => handleForm('expectedTypeWork', e.target.value)}>
        <option key={1}>expectedTypeWork</option>
        <option key={expectedTypeWork.Hybrid} value={expectedTypeWork.Hybrid}>
          expectedTypeWork.Hybrid
        </option>
        <option key={3}></option>
        <option key={4}></option>
      </select>
      <input
        className='student-form-input'
        value={form.targetWorkCity}
        onChange={(e) => handleForm('targetWorkCity', e.target.value)}
      />
      <input
        className='student-form-input'
        value={form.expectedContractType}
        onChange={(e) => handleForm('expectedContractType', e.target.value)}
      />
      <input
        type='number'
        className='student-form-input'
        value={form.expectedSalary}
        onChange={(e) => handleForm('expectedSalary', e.target.value)}
      />
      <input
        type='checkbox'
        className='student-form-input'
        value={form.canTakeApprenticeship}
        onChange={(e) => handleForm('canTakeApprenticeship', e.target.value)}
      />
      <input
        type='number'
        className='student-form-input'
        value={form.monthsOfCommercialExp}
        onChange={(e) => handleForm('monthsOfCommercialExp', e.target.value)}
      />
      <input
        className='student-form-input'
        value={form.education}
        onChange={(e) => handleForm('education', e.target.value)}
      />
      <input
        className='student-form-input'
        value={form.workExperience}
        onChange={(e) => handleForm('workExperience', e.target.value)}
      />
      <input
        className='student-form-input'
        value={form.courses}
        onChange={(e) => handleForm('courses', e.target.value)}
      />
      <button type='submit'>Zapisz zmiany</button>
    </form>
  );
};
