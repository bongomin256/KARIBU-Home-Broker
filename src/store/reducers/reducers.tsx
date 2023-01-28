import React, { useReducer } from "react";
// import { ReducerActionType } from '../constants/action'
import { REDUCER_ACTION_TYPE } from "../actions/action";

type ReducerActionType = {
  type: REDUCER_ACTION_TYPE;
};

export const reducer = (state: any, action: ReducerActionType): any => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.UPDATE_PROPERTY:
      return {
        ...state,
        // properties: [...action.properties]
      };

    default:
      return state;
  }
};
