import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Bikers Ocean`;
  }, [title]);
};

export default useTitle;
