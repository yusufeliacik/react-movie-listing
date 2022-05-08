import styled from "styled-components";

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationItemButton = styled.button<{ isActive?: boolean }>`
  background: #fff;
  border: 2px solid #666;
  border: ${({ isActive }) => (isActive ? "2px solid blue" : "2px solid #666")};
  padding: 10px 15px;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  position: relative;
  margin: 0 5px;
  cursor: pointer;
  &:disabled {
    box-shadow: 0 !important;
  }
  &:hover {
    box-shadow: 0 0 10px blue;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .active {
    border: 2px solid red;
  }
`;

export const PrevNextButton = styled.button<{ isDisabled: boolean }>`
  background: #fff;
  border: none;
  padding: 10px;
  color: ${({ isDisabled }) => (isDisabled ? "#999" : "blue")};
  ${({ isDisabled }) => isDisabled && "pointer-events: none"};
  ${({ isDisabled }) => isDisabled && "box-shadow: none"};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  margin: 0 10px;
  cursor: pointer;
`;
