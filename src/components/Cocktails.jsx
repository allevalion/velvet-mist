import { useGSAP } from '@gsap/react';
import { cocktail_left_leaf, cocktail_right_leaf } from '../assets/images';
import { cocktailLists, mockTailLists } from '../constants';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Cocktails = () => {
  useGSAP(() => {
    const titles = document.querySelectorAll('.cocktail-title');

    titles.forEach((title) => {
      const split = new SplitText(title, { type: 'words' });

      gsap.from(split.words, {
        yPercent: 100,
        duration: 2,
        ease: 'expo.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'top 60%',
        },
      });
    });

    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      },
    });

    parallaxTimeline
      .from('#c-left-leaf', {
        x: -100,
        y: 100,
        ease: 'power2.out',
      })
      .from('#c-right-leaf', {
        x: 100,
        y: 100,
        ease: 'power2.out',
      });
  });

  return (
    <section id="cocktails" className="noisy">
      <img id="c-left-leaf" src={cocktail_left_leaf} alt="" />
      <img id="c-right-leaf" src={cocktail_right_leaf} alt="" />

      <div className="list">
        <div className="popular">
          <h2 className="cocktail-title">Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2 className="cocktail-title">Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Cocktails;
