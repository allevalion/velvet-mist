import {
  barLocations,
  contactInfo,
  openingHours,
  socials,
} from '@constants/index.js';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import {
  footer_drinks,
  footer_left_leaf,
  footer_right_leaf,
} from '@assets/images';

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', { type: 'words' });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      ease: 'power1.inOut',
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from('#contact h3, #contact p', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to('#f-right-leaf', {
        y: '-50',
        duration: 1,
        ease: 'power1.inOut',
      })
      .to(
        '#f-left-leaf',
        {
          y: '50',
          duration: 1,
          ease: 'power1.inOut',
        },
        '<'
      );
  });

  return (
    <footer className="footer" id="contact">
      <img src={footer_right_leaf} alt="" id="f-right-leaf" />
      <img src={footer_left_leaf} alt="" id="f-left-leaf" />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bars</h3>
          <ul>
            {barLocations.map((loc) => (
              <li key={loc.name}>
                <span>{loc.name}</span>
                {loc.address}
              </li>
            ))}
          </ul>
        </div>

        <div className="gap-2 col-center">
          <h3>Contact Us</h3>
          <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="gap-5 flex-center">
            {socials.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="transition-transform duration-300 hover:scale-125"
              >
                <img src={icon} alt="" className="w-10 h-10" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <img src={footer_drinks} className="justify-self-end" alt="" />
    </footer>
  );
};

export default Contact;
