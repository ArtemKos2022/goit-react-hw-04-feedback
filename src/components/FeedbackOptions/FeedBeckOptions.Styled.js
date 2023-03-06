const { default: styled } = require('styled-components');

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
`;
export const Button = styled.button`
  height: 26px;
  margin-right: 15px;
  font-weight: 700;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: #7ea3e9;
  }
`;
