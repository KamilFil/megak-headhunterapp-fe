import womanImage from '../../img/woman-svgrepo-com.svg';
import './PersonLabel.css';
import {FilledArrow} from '../FilledArrow/FilledArrow';
import {PersonMenu} from '../PersonMenu/PersonMenu';
import {useState} from 'react';

export const PersonLabel = () => {
  const [visiblePersonMenu, setVisiblePersonMenu] = useState(false);

  const handleDropDownMenu = () => {
    setVisiblePersonMenu(!visiblePersonMenu);
    if (visiblePersonMenu) {
      const element: HTMLDivElement | null = document.querySelector('.person-menu');
      element?.focus();
    }
  };

  return (
      <div className='person-label' tabIndex={0} onBlur={() => setVisiblePersonMenu(false)}>
        <div className='person-label--wrap' onClickCapture={handleDropDownMenu}>
          <img src={womanImage} alt='Zdjęcie użytkownika'/>
          <p>Anna Kowalska</p>
          <FilledArrow/>
        </div>
        {visiblePersonMenu && <PersonMenu setVisible={setVisiblePersonMenu}/>}
      </div>
  );
};
