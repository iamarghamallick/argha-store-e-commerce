import React from 'react'
import { FaStarHalfAlt, FaRegStar, FaStar } from "react-icons/fa";
import styled from 'styled-components';

const Stars = ({ stars, reviews }) => {

    const ratingStar = Array.from({ length: 5 }, (_, i) => {
        let num = i + 0.5;
        return (
            <span key={i}>
                {stars >= i + i ? (
                    <FaStar className='icon' />
                ) : stars >= num ? (
                    <FaStarHalfAlt className='icon' />
                ) : (
                    <FaRegStar className='icon' />
                )}
            </span>
        )
    })
    return <Wrapper>
        <div className="icon-style">
            {ratingStar}
            <p>({reviews} customer reviews)</p>
        </div>
    </Wrapper>
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Stars