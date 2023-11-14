const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Men's",
    },
    {
      id: 5,
      title: "Women's",
    },
  ];

  return (
    <div className="categories__contaner">
      {categories.map(({ title }) => (
        <div className="category">
          {/* <img /> */}
          <div className='category__background'/>
          <div className="category__item">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
