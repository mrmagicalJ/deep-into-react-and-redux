import * as ActionTypes from "./ActionTypes";
import AppDispather from "./AppDispather";

export const increment = (counterCaption) => {
  AppDispather.dispath({
    type: ActionTypes.INCREMENT,
    counterCaption
  })
}

export const decrement = (counterCaption) => {
  AppDispather.dispath({
    type: ActionTypes.DECREMENT,
    counterCaption
  })
}
