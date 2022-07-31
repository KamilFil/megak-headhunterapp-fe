import { StudentEntity } from 'types';
import { CvRequirmentItem } from './CvRequirmentItem';
import './CvRequirment.css';

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
          <CvRequirmentItem
            question='Preferowane miejsce pracy'
            answer={student.expectedTypeWork}
          />
          <CvRequirmentItem
            question='Docelowe miasto, gdzie chce pracować kandydat'
            answer={student.targetWorkCity}
          />
          <CvRequirmentItem
            question='Oczekiwany typ kontraktu'
            answer={student.expectedContractType}
          />
          <CvRequirmentItem
            question='Oczekiwane wynagrodzenie miesięczne netto'
            answer={`${student.expectedSalary} zł`}
          />
          <CvRequirmentItem
            question='Zgoda na odbycie bezpłatnych praktyk/stażu na początek'
            answer={student.canTakeApprenticeship}
          />
          <CvRequirmentItem
            question='Komercyjne doświadczenie w programowaniu'
            answer={`${student.monthsOfCommercialExp} miesięcy`}
          />
        </div>
      ))}
    </div>
  );
};
