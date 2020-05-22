import AppDispather from "../AppDispather";
import * as ActionTypes from "../ActionTypes";

function computeSummary(counterValues) {
  let  summary = 0;
  for (const key in counterValues) {
    if (counterValues.hasOwnProperty(key)) {
      summary += counterValues[key]
    }
  }

  return summary
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
  getSummary() {
    return computeSummary(CounterStore.getCounterValues())
  }
})

SummaryStore.dispatchToken = AppDispather.register(action => {
  if (action.type === ActionTypes.INCREMENT ||action.type === ActionTypes.DECREMENT) {
    AppDispather.waitFor([CounterStore.dispatchToken])
    SummaryStore.emitChange()
  }
})
