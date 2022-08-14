import React from 'react';
import { AdminEntity, HrEntity, StudentEntity, UserEntity } from 'types';

import { Cv } from '../../Cv/Cv';
interface Props {
  data: UserEntity | null;
}
export const CvStudent = (props: Props) => {
  return (
    <>
      <Cv data={props.data} />
    </>
  );
};
