import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  width: 22.5rem;
  font-size: 1.4rem;
  user-select: none;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  border: 1px solid rgb(223, 223, 233);
  border-radius: 3px;
  background-color: white;
  line-height: 3.8rem;
  cursor: pointer;
  font-family: Lato, sans-serif;

  & span {
    display: flex;
    margin-right: 1.8rem;
    font-size: 2rem;
  }
`;

export const DropdownTitle = styled.div`
  margin: 0.2rem 3rem 0.2rem 2rem;
  font-weight: 400;
  font-size: 1.4rem;
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  border: 1px solid rgb(223, 223, 223);
  border-top: none;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 2px 5px -1px rgb(232, 232, 232);
  background-color: white;
  font-weight: 700;
  text-align: left;
  -webkit-overflow-scrolling: touch;
`;

export const DropdownItem = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  padding: 1.2rem;
  line-height: 1.6rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  font-family: Lato, sans-serif;
  font-size: 1.4rem;
  border: none;
  transition: all 0.4s ease;

  &:hover {
    background-color: rgb(203, 203, 203);
  }

  & span {
    font-size: 1.8rem;
    margin-right: 0.5rem;
  }
`;
