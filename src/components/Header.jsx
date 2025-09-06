import { navLinks } from '@constants';
import { logo } from '@assets/images';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { useAnchorLink } from '@hooks/useAnchorLink';
import { CartContext } from '@/context/CartContext';
import { useContext } from 'react';

const Header = () => {
  const { getCartItemsCount } = useContext(CartContext);

  const handleAnchorClick = useAnchorLink();

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      },
    });

    navTween.fromTo(
      'nav',
      {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0px)',
        zIndex: '999999',
      },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      }
    );
  });

  return (
    <header>
      <nav>
        <div>
          <Link to="/velvet-mist/" className="flex items-center gap-2">
            <img src={logo} alt="" />
            <p>Velvet Mist</p>
          </Link>

          <ul>
            {navLinks.map((link) => {
              if (link.title === 'Cart') {
                return (
                  <li key={link.url}>
                    <div className="relative px-0">
                      <a
                        href={link.url}
                        onClick={(e) => handleAnchorClick(e, link.url)}
                        className="cursor-pointer"
                      >
                        {link.title}
                      </a>
                      {getCartItemsCount() > 0 && (
                        <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full top-4 -right-5">
                          {getCartItemsCount()}
                        </span>
                      )}
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.url}>
                  {link.url.includes('#') ? (
                    <a
                      href={link.url}
                      onClick={(e) => handleAnchorClick(e, link.url)}
                      className="cursor-pointer"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link to={link.url}>{link.title}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
