//import './CatSelector.css'

const CatSelector = (props) => {
  return (
    <div>
      <label htmlFor="categories" className="propTitle">
        Choose a category
      </label>
      <br></br>
      <select name="categories" id="cat"></select>
    </div>
  );
};

export default CatSelector;
