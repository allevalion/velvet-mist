import { catalogItems } from '@/constants/catalog';
import styles from './Catalog.module.css';
import ProductCard from './components/ProductCard';
const Catalog = () => {
  return (
    <section className={styles.wrapper}>
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
