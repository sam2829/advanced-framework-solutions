import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top on every route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top ensures it works
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;