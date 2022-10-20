import { useState, useEffect } from 'react';

function useLocalStorage(key, defValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
