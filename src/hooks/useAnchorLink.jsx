import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useAnchorLink = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = useCallback(
    (e, href) => {
      e.preventDefault();

      const url = new URL(href, window.location.origin);
      const pathname = url.pathname;
      const hash = url.hash;

      if (location.pathname === pathname) {
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        navigate(pathname + hash);

        setTimeout(() => {
          if (hash) {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 100);
      }
    },
    [location.pathname, navigate]
  );

  return handleAnchorClick;
};
