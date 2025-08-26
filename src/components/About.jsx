import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { abt1, abt2, abt3, abt4, abt5, check } from '../assets/images';
import { featureLists, profileLists } from '../constants';

const About = () => {
  useGSAP(() => {
    const titleSplit = new SplitText('.about h2', {
      type: 'words',
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: 'expo.out',
        stagger: 0.02,
      })
      .from(
        '.profiles',
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'expo.out',
        },
        '-=0.5'
      )
      .from('.profile-img', {
        opacity: 0,
        ease: 'circ.inOut',
        duration: 1,
        stagger: 0.08,
      })
      .from(
        '.top-grid div, .bottom-grid div',
        {
          opacity: 0,
          duration: 1,
          ease: 'power1.inOut',
          stagger: 0.04,
        },
        '-=0.5'
      )
      .to('.reveal-overlay', {
        opacity: 100,
        ease: 'circ.inOut',
        duration: 5,
        delay: 2,
      });
  });

  return (
    <section id="about" className="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>{' '}
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="md:text-3xl text-xl font-bold">
                  <span>4.5</span>/5
                </p>
                <p className="text-sm text-white-100">
                  More than +12000 customers
                </p>
              </div>
              <div className="profiles relative inline-flex items-center background-gradient rounded-3xl px-4 py-2">
                <div className="noisy rounded-3xl" />
                <div className="flex flex-row -space-x-5 relative z-10">
                  {profileLists.map((profile, i) => (
                    <img
                      key={i}
                      src={profile.imgPath}
                      alt="profile"
                      className="profile-img w-11 h-11 rounded-full object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={abt1} alt="" />
        </div>

        <div className="md:col-span-3 relative">
          <div className="noisy z-10" />
          <img
            src={abt5}
            alt=""
            className="w-full h-full object-cover rounded-3xl -z-10"
          />

          <div className="reveal-overlay background-gradient absolute inset-0 p-6 col-center gap-4 rounded-3xl opacity-0">
            <div className="z-20">
              <p className="font-modern-negra text-4xl text-white">
                Crafted to Impress
              </p>
              <hr className="w-full border-white mt-4 mb-6" />
              <ul className="space-y-4 mt-1.5">
                {featureLists.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5">
                      <img
                        src={check}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <p className="text-white">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src={abt2} alt="" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src={abt3} alt="" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src={abt4} alt="" />
        </div>
      </div>
    </section>
  );
};
export default About;
