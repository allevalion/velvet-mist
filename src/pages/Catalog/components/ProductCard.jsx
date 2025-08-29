const ProductCard = ({
  name,
  category,
  detail,
  price,
  image,
  description,
  badge,
}) => {
  return (
    <div className="p-8 background-gradient">
      <div className="noisy" />
      <div className="gap-4 col-center">
        {badge && <span className="absolute right-5 top-5 badge">{badge}</span>}{' '}
        <img src={image} alt="" />
        <h2 className="text-4xl text-bright">{name}</h2>
        <p className="text-lg text-center">{description}</p>
        <div className="flex items-center justify-around gap-10 mt-4 text-base">
          <span>{category[0].toUpperCase() + category.slice(1)}</span>
          <span>{detail}</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
