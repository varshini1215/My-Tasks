const axios = require('axios');


const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    throw error;
  }
};

const fetchSequentially = async () => {
  const results = [];
  for (const url of urls) {
    const data = await fetchData(url);
    results.push(data);
  }
  return results;
};

const fetchInParallel = async () => {
  const promises = urls.map(url => fetchData(url));
  const results = await Promise.all(promises);
  return results;
};

const main = async () => {
  try {
    console.log('Fetching data sequentially:');
    const sequentialResults = await fetchSequentially();
    console.log('Sequential Results:', sequentialResults);

    console.log('Fetching data in parallel:');
    const parallelResults = await fetchInParallel();
    console.log('Parallel Results:', parallelResults);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

main();
