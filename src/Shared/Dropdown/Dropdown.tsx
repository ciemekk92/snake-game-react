import React from 'react';
import {
  DropdownButton,
  DropdownListContainer,
  DropdownTitle,
  DropdownItem,
  DropdownWrapper
} from './Dropdown.styled';

interface Props {
  title: string;
  dropdownOptions: {
    label: string;
    value: string;
  }[];
  value: string;
  onSelect: (value: string) => void;
}

export const Dropdown = ({
  title,
  dropdownOptions,
  value,
  onSelect
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleTogglingList = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectingItem = (value: string) => () => {
    onSelect(value);
  };

  return (
    <DropdownWrapper>
      <DropdownButton type="button" onClick={handleTogglingList}>
        <DropdownTitle>{title}</DropdownTitle>
        <span className="material-icons">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </DropdownButton>
      {isOpen && (
        <DropdownListContainer role="list">
          {dropdownOptions.map((el) => (
            <DropdownItem
              key={el.label}
              onClick={handleSelectingItem(el.value)}
            >
              {el.label}
              {value === el.value ? (
                <span className="material-icons">{'done'}</span>
              ) : null}
            </DropdownItem>
          ))}
        </DropdownListContainer>
      )}
    </DropdownWrapper>
  );
};
