export const setItemLS = (key: string, value: string) => {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
  };
  
  export const getItemLS = (key: string) => {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
  };