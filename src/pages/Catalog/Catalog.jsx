import { catalogItems } from '@/constants/catalog';
import styles from './Catalog.module.css';
import ProductCard from './components/ProductCard';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Catalog = () => {
  const titleSplit = new SplitText('h1', { type: 'chars' });

  titleSplit.chars.forEach((char) => char.classList.add('text-gradient'));
  gsap.from(titleSplit.chars, {
    yPercent: 20,
    duration: 0.8,
    ease: 'expo.out',
    stagger: 0.06,
  });

  return (
    <section className={styles.page}>
      <h1>Catalog</h1>
      <div>
        <ul>
          {catalogItems.map((item) => (
            <li key={item.id}>
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Catalog;
