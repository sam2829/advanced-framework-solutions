import { useEffect, useRef, useState } from "react";

// Custom hook to handle click outside toggle functionality
const useClickOutsideToggle = <T extends HTMLElement>() => {
  // This is to check if the hamburger menu is expanded
  const [expanded, setExpanded] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // Collapse the menu if clicked outside of it
        setExpanded(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;