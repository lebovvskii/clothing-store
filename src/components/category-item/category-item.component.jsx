import "./category-item.styles.scss";

export const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-items-container">
      {/* <img /> */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
