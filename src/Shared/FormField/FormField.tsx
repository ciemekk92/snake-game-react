import React from 'react';
import { FormContainer, FormLabel } from './FormField.styled';

interface Props {
  label: string;
  children: React.ReactNode;
}

export const FormField = ({ label, children }: Props): JSX.Element => {
  return (
    <FormContainer>
      <FormLabel>{label}</FormLabel>
      {children}
    </FormContainer>
  );
};
