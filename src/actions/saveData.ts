import {UserSelectedData} from '../utils/common-types';

interface ActionData {
  type: string;
  payload: UserSelectedData;
}

export const saveData = (data): ActionData => {
  return {
    type: 'DATA_SAVED',
    payload: data
  };
};
