import styled from 'styled-components';

export const StyledCheckbox = styled.input`
  appearance: none;
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 3px;
  background-clip: content-box;
  border: 1.5px solid #bbbbbb;
  border-radius: 3px;
  background-color: #e7e6e7;
  margin-left: 15px;
  margin-right: 15px;

  &:checked {
    background-color: ${(props) => props.theme.accent};
  }

  &:focus {
    outline: none !important;
  }
`;
