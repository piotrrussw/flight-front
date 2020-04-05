import { useEffect, useState } from 'react';
import api from 'api';

const useApi = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await api.get(url, options);
        setData(res.data);
      } catch (e) {
        setError(e);
      }
    };

    callApi();
  }, [url, options]);

  return { data, error };
};

export default useApi;
