import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="sorting-list--grid">
        {!grid_view && <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </button>}

        {grid_view && <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView}>
          <BsList className="icon" />
        </button>}
      </div>
      {/* 2nd column  */}
      <div className="product-data">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>

      {/* 3rd column  */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onChange={sorting}>
            <option value="relevence">Relevence</option>
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: 2rem;
    .product-data p {
      text-align: center;
    }
    
  }
`;

export default Sort;