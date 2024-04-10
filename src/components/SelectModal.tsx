import "../styles/modal.css";
const SelectModal = ({ category, selectedCategory, onCategoryChange }) => {
  const handleCategoryClick = (selectedCategory) => {
    onCategoryChange(selectedCategory);
  };

  return (
    <div className="modal-select-container">
      {category.map((item, index) => (
        <div
          key={index}
          className={`each-item-sel ${selectedCategory === item ? "selected" : ""
            }`}
          onClick={() => handleCategoryClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SelectModal;
