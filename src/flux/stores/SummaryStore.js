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
