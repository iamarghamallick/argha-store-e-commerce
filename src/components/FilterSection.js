import React, { useState } from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext';
import { FaCheck } from "react-icons/fa";
import FormatPrice from '../helpers/FormatPrice';
import { IoFilter, IoSearch } from "react-icons/io5";
import { Button } from '../styles/Button';

const FilterSection = () => {
  const { filters: { text, category, color, price, maxPrice, minPrice }, updateFilterValue, all_products, clearFilters } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curr) => {
      return curr[attr];
    });

    if (attr === "colors") {
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  }

  return (
    <Wrapper>
      <div className="filter-search">
        {/* filter button for mobile */}
        <button onClick={toggleFilterMenu} type="button" className='filter-btn'><IoFilter className='icon' /></button>
        {/* search form  */}
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="text" value={text} id="text" placeholder='Search' onChange={updateFilterValue} />
        </form>
        <button type="button" className='filter-btn'><IoSearch className='icon' /></button>
      </div>
      <div className={showFilterMenu ? 'filter-container' : 'filter-container hide-filter-container'}>
        <div className="filter-category">
          <h3>Category</h3>
          <div>
            {categoryData.map((curElem, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={curElem}
                  className={curElem === category ? "active" : ""}
                  onClick={updateFilterValue}>
                  {curElem[0].toUpperCase() + curElem.slice(1)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="filter-company">
          <h3>Company</h3>

          <form action="#">
            <select
              name="company"
              id="company"
              className="filter-company--select"
              onChange={updateFilterValue}>
              {companyData.map((curElem, index) => {
                return (
                  <option key={index} value={curElem} name="company">
                    {curElem[0].toUpperCase() + curElem.slice(1)}
                  </option>
                );
              })}
            </select>
          </form>
        </div>

        <div className="filter-colors colors">
          <h3>Colors</h3>

          <div className="filter-color-style">
            {colorsData.map((curColor, index) => {
              if (curColor === "all") {
                return (
                  <button
                    key={index}
                    type="button"
                    value={curColor}
                    name="color"
                    className="color-all--style"
                    onClick={updateFilterValue}>
                    All
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  style={{ backgroundColor: curColor }}
                  className={color === curColor ? "btnStyle active" : "btnStyle"}
                  onClick={updateFilterValue}>
                  {color === curColor ? <FaCheck className="checkStyle" /> : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="filter_price">
          <h3>Price</h3>
          <p>
            <FormatPrice price={price} />
          </p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </div>

        <div className="filter-clear">
          <Button onClick={clearFilters}>Clear Filters</Button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .filter-container {
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .filter-btn {
    display: none;
  }

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    margin-top: 10px;
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    input {
      padding: 0.6rem 1rem;
      width: 100%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .hide-filter-container {
      display: none;
    }
    .filter-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
  }
  }
`;

export default FilterSection