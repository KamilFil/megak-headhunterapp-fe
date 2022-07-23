import {useEffect, useState} from 'react';
import {FilledArrow} from '../common/FilledArrow/FilledArrow';
import {PersonMenu} from '../PersonMenu/PersonMenu';
import womanImage from '../../img/woman-svgrepo-com.svg';
import './PersonLabel.css';

export const PersonLabel = () => {
    const [visiblePersonMenu, setVisiblePersonMenu] = useState(false);

    useEffect(() => {
        const personMenu: HTMLDivElement | null = document.querySelector('.person-menu');
        const filledArrow: HTMLDivElement | null = document.querySelector('.filled-arrow');
        const personLabel: HTMLDivElement | null = document.querySelector('.person-label--wrap');
        personMenu?.classList.toggle('person-menu--visible');
        filledArrow?.classList.toggle('filled-arrow--rotate');
        personLabel?.classList.toggle('person-label--wrap--visible');
    }, [visiblePersonMenu]);

    return (
        <div className='person-label' tabIndex={0} onBlur={() => setVisiblePersonMenu(false)}>
            <div
                className='person-label--wrap'
                onClick={() => {
                    setVisiblePersonMenu(!visiblePersonMenu);
                }}>
                <img src={womanImage} alt='Zdjęcie użytkownika'/>
                <p>Anna Kowalska</p>
                <FilledArrow/>
            </div>
            <PersonMenu setVisible={setVisiblePersonMenu}/>
        </div>
    );
};
