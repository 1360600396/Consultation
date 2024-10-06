// src/workers/dataWorker.ts

// 声明用于处理数据的函数
self.onmessage = function (event) {
  const { type, payload } = event.data;

  if (type === 'processData') {
    const processedData = processData(payload);
    self.postMessage({ type: 'dataProcessed', payload: processedData });
  }
};

function processData(data: any[]) {
  // 模拟数据处理
  return data.map(item => ({
    ...item,
    processed: true
  }));
}
