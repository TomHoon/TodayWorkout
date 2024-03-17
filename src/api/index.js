import axios from 'axios';

function createInstance() {
    const mode = import.meta.env.MODE;
    const baseUrl = mode == 'dev' ? 'http://localhost:3300' : 'http://tomhoon.duckdns.org:13300';

    let instance = axios.create({
      baseURL: baseUrl
    });

    return instance;
}

const request = createInstance();

export default request;