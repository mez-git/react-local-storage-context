import React, { createContext, useContext, useState } from 'react';

type StorageContextType<T> = {
  value: T | null;
  setValue: (data: T) => void;
  clearValue: () => void;
};

const StorageContext = createContext<StorageContextType<any> | undefined>(undefined);

export const StorageProvider = <T,>({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState<T | null>(null);

  const saveValue = (data: T) => {
    setValue(data);
    localStorage.setItem('appData', JSON.stringify(data));
  };

  const clearValue = () => {
    setValue(null);
    localStorage.removeItem('appData');
  };

  return (
    <StorageContext.Provider value={{ value, setValue: saveValue, clearValue }}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorage = <T,>() => {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error('useStorage must be used within a StorageProvider');
  }
  return context as StorageContextType<T>;
};
