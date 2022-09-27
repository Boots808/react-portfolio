import React from "react";

function Navigation(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <nav id="nav">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`${currentCategory.name === category.name && "navActive"}`}
        >
          <span onClick={() => setCurrentCategory(category)}>
            {category.name}
          </span>
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
