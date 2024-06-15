import React, { useState } from 'react';
import logo from '../../img/film-logo.svg';
import style from './Header.module.css';

function Header() {
  const [sortOption, setSortOption] = useState('');

  return (
    <header className={style.header}>
      <img className={style.logo} src={logo} alt="Logo" />
      <div>
        <select 
          className={style.select}
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option disabled value="">
            Сортировка по
          </option>
          <option value="genre">По жанру</option>
          <option value="rating">По рейтингу</option>
          <option value="age">По году выпуска</option>
        </select>
        <input
          className={style.input}
          type="text"
          placeholder="Поиск по названию"
        />
      </div>
    </header>
  );
}

export default Header;
