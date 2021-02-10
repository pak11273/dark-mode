import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (value) => {
  const [storedValue, setValue] = useLocalStorage(value, "dark mode");
  return [storedValue, setValue];
};
