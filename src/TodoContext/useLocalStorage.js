import React, { useEffect, useState } from 'react'

/* Para hacer un react hook , debe empezaar por hook */
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);
  useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parseItem 
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parseItem = initialValue;
      } else {
        parseItem = JSON.parse(localStorageItem);
      }
      setItem(parseItem);
      setLoading(false);
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  return { item, saveItem, loading,error };
}

export default useLocalStorage;
