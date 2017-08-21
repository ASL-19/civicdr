'use strict';

import {
  DISPLAY_CODE_OF_PRACTICE,
  DISPLAY_PARTNER_AGREEMENT,
  HIDE_AGREEMENTS
} from '../actions';

export const initialState = {
  type: null,
  isAgreementModalVisible: false
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case DISPLAY_CODE_OF_PRACTICE:
      newState.type = 'codeOfPractice';
      newState.isAgreementModalVisible = true;
      break;
    case DISPLAY_PARTNER_AGREEMENT:
      newState.type = 'partnerAgreement';
      newState.isAgreementModalVisible = true;
      break;
    case HIDE_AGREEMENTS:
      newState.isAgreementModalVisible = false;
      break;
  }
  return newState;
};
