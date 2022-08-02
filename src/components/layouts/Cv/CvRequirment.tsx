import { StudentEntity } from 'types';

import './CvRequirment.css';
import { QABox } from '../../common/QABox';

interface Props {
  title: string;
  data: StudentEntity[];
}

export const CvRequirment = (props: Props) => {
  return (
    <div className='coursant-requirment'>
      <h2 className='coursant_requirment-title'>{props.title}</h2>
      {props.data.map((student) => (
        <div key={student.email} className='coursant_requirment-container'>
          <QABox question='Preferowane miejsce pracy' answer={student.expectedTypeWork} />
          <QABox
            question='Docelowe miasto, gdzie chce pracować kandydat'
            answer={student.targetWorkCity}
          />
          <QABox question='Oczekiwany typ kontraktu' answer={student.expectedContractType} />
          <QABox
            question='Oczekiwane wynagrodzenie miesięczne netto'
            answer={`${student.expectedSalary} zł`}
          />
          <QABox
            question='Zgoda na odbycie bezpłatnych praktyk/stażu na początek'
            answer={student.canTakeApprenticeship ? 'Tak' : 'nie'}
          />
          <QABox
            question='Komercyjne doświadczenie w programowaniu'
            answer={`${student.monthsOfCommercialExp} miesięcy`}
          />
        </div>
      ))}
    </div>
  );
};
