import { StudentEntity } from 'types';

import './CvRequirment.css';
import { QABox } from '../../common/QABox';

interface Props {
  title: string;
  data: StudentEntity;
}

export const CvRequirment = (props: Props) => {
  return (
    <div className='coursant-requirment'>
      <h2 className='coursant_requirment-title'>{props.title}</h2>
        <div key={props.data.email} className='coursant_requirment-container'>
          <QABox question='Preferowane miejsce pracy' answer={props.data.expectedTypeWork} />
          <QABox
            question='Docelowe miasto, gdzie chce pracować kandydat'
            answer={props.data.targetWorkCity}
          />
          <QABox question='Oczekiwany typ kontraktu' answer={props.data.expectedContractType} />
          <QABox
            question='Oczekiwane wynagrodzenie miesięczne netto'
            answer={`${props.data.expectedSalary} zł`}
          />
          <QABox
            question='Zgoda na odbycie bezpłatnych praktyk/stażu na początek'
            answer={props.data.canTakeApprenticeship ? 'Tak' : 'nie'}
          />
          <QABox
            question='Komercyjne doświadczenie w programowaniu'
            answer={`${props.data.monthsOfCommercialExp} miesięcy`}
          />
        </div>
    </div>
  );
};
