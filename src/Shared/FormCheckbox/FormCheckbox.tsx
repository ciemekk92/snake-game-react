import React from 'react';
import { StyledCheckbox } from './FormCheckbox.styled';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormCheckbox = ({
  checked = false,
  onChange,
  ...rest
}: Props): JSX.Element => {
  return (
    <StyledCheckbox
      checked={checked}
      onChange={onChange}
      type="checkbox"
      {...rest}
    />
  );
};
