import "./category-item.styles.scss";

export const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category">
      {/* <img /> */}
      <div
        className="category__background"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category__item">
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
