import { navLinks } from '@constants';
import { logo } from '@assets/images';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { useAnchorLink } from '@hooks/useAnchorLink';

const Header = () => {
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
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" />
            <p>Velvet Mist</p>
          </Link>

          <ul>
            {navLinks.map((link) => (
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
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
