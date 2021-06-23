import React from 'react';
import { DetailMixing } from '../../mixing/model/detail-mixing';
import { TMember } from '../api-platform';

export interface IModalDetail {
  entity: any;
}

type TChoicePopupDetail = {
  [key: string]: React.FC<IModalDetail>;
};

const choicePopupDetailType: TChoicePopupDetail = {
  //'ComponentType': DetailMixing,
  'Mixing' : DetailMixing
  //'NormativeDocument': DetailMixing,
};

export function choicePopupDetail<T>(dataEntity: T & TMember): JSX.Element | null {
  const type = dataEntity['@type'];
  if (dataEntity) {
    if (typeof type !== 'string') {
      return null;
    }
    const PopupDetail = choicePopupDetailType[type];
    if (PopupDetail) {
      return <PopupDetail entity={dataEntity} />;
    }
  }
  return null;
}
