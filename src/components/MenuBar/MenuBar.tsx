import {Logo} from '../Logo/Logo';
import {PersonLabel} from '../PersonLabel/PersonLabel';
import './MenuBar.css';

export const MenuBar = () => {
    return (
        <div className='menu-bar'>
            <Logo width='70px' margin='auto 0'/>
            <PersonLabel/>
        </div>
    );
};
