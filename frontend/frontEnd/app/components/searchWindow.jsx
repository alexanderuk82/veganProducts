import { useState } from 'react';

function SearchWindow({ toggleSearch }) {
  const [storageValue, setStorageValue] = useState('');

  const handleInputChange = (e) => {
    setStorageValue(e.target.value);
  };

  return (
    <div className="search">
      <div className="search__container">
        <form className="search__container__form">
          <button onClick={toggleSearch} className="closeWindow">
            <img src="/images/close.svg" alt="close window" />
          </button>
          <div className="search__container__input">
            <button type="submit">
              <img src="/images/search.svg" alt="search" />
            </button>
            <input
              type="text"
              placeholder="search any product or name"
              value={storageValue}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <div className="search__container__suggestions">
          <h4 className="search__container__suggestions__title">
            Our recommendations
          </h4>
          <div className="search__container__suggestions__inputs">
            <input
              type="button"
              value="Facial coconut cream"
              className="optionTag"
              onClick={(e) => setStorageValue(e.target.value)}
            />
            <input
              type="button"
              value="Body moistures with aloe"
              className="optionTag"
              onClick={(e) => setStorageValue(e.target.value)}
            />
            <input
              type="button"
              value="Charcoal exfoliant"
              className="optionTag"
              onClick={(e) => setStorageValue(e.target.value)}
            />
            <input
              type="button"
              value="face mist with rose water"
              className="optionTag"
              onClick={(e) => setStorageValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchWindow;
