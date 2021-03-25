import { useCallback, useState } from "react";

function useInput(initialValue = null) {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
}

export default useInput;