import AppDispather from "../AppDispather";
import * as ActionTypes from "../ActionTypes";

const CounterValues = {
  First: 0,
  Second: 10,
  Third: 30
}
const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues: () => CounterValues,
  emitChange() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb)
  },
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb)
  }
})

CounterStore.dispatchToken = AppDispather.register(action => {
  if (action.type === ActionTypes.INCREMENT) {
    CounterValues[action.counterCaption] ++
    CounterStore.emitChange()
  } else if (action.type === ActionTypes.DECREMENT) {
    CounterValues[action.counterCaption] --
    CounterStore.emitChange()
  }
})
