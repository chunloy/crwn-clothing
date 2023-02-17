import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 15px;
  display: flex;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  .name {
    font-size: 16px;
  }
`;
