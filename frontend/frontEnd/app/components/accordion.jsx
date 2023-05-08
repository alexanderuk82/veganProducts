function Accordion({ benefits, ingredients, howToUse }) {
  return (
    <ul className="accordion">
      <li className="accordion__list">
        <input type="radio" name="accordion" id="benefits" />
        <label className="accordion__label" htmlFor="benefits">
          benefits
          <span>
            <img
              src="/images/plus-tab.svg"
              alt="open-close-accordion"
              className="accordion__label__icon"
            />
          </span>
        </label>
        <div className="accordion__content">
          <p>{benefits}</p>
        </div>
      </li>
      <li className="accordion__list">
        <input type="radio" name="accordion" id="ingredients" />
        <label className="accordion__label" htmlFor="ingredients">
          Ingredients
          <span>
            <img
              src="/images/plus-tab.svg"
              alt="open-close-accordion"
              className="accordion__label__icon"
            />
          </span>
        </label>
        <p className="accordion__content">{ingredients}</p>
      </li>
      <li className="accordion__list">
        <input type="radio" name="accordion" id="howToUse" />
        <label className="accordion__label" htmlFor="howToUse">
          how To Use?
          <span>
            <img
              src="/images/plus-tab.svg"
              alt="open-close-accordion"
              className="accordion__label__icon"
            />
          </span>
        </label>
        <p className="accordion__content">{howToUse}</p>
      </li>
    </ul>
  );
}

export default Accordion;
