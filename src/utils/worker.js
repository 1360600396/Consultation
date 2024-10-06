// src/workers/dataWorker.js

self.onmessage = function (event) {
  const { type, payload } = event.data

  if (type === 'processData') {
    // 处理数据的逻辑
    const processedData = processData(payload)
    self.postMessage({ type: 'dataProcessed', payload: processedData })
  }
}

function processData(data) {
  // 模拟数据处理
  return data.map(item => ({
    ...item,
    processed: true
  }))
}
