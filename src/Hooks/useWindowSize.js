import { useEffect, useState } from "react";

export default function useWindowSize(){
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [size]);

    return size;
  };
