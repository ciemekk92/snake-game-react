import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { FormField } from 'Shared/FormField';
import { FormCheckbox } from 'Shared/FormCheckbox';
import { DialogContainer } from './OptionsDialog.styled';
import { ApplicationState } from 'Stores/store';
import { actionCreators } from 'Stores/Options';
import { Dropdown } from '../../Shared/Dropdown/Dropdown';
import { COLOR_OPTIONS } from '../../Shared/constants';

interface Props {
  handleClose: () => void;
}

export const OptionsDialog = ({ handleClose }: Props): JSX.Element => {
  const options = useSelector(
    (state: ApplicationState) => state.options,
    shallowEqual
  );

  const dispatch = useDispatch();

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    switch (target.name) {
      case 'isHardMode':
        dispatch(actionCreators.setIsHardMode({ isHardMode: target.checked }));
        break;
      case 'hasObstacles':
        dispatch(
          actionCreators.setHasObstacles({ hasObstacles: target.checked })
        );
        break;
      default:
        return;
    }
  };

  const handleSelectingColor =
    (isFood: boolean = false) =>
    (value: string) => {
      if (isFood) {
        dispatch(actionCreators.setFoodColor({ foodColor: value }));
      } else {
        dispatch(actionCreators.setSnakeColor({ snakeColor: value }));
      }
    };

  return (
    <DialogContainer>
      <h2>Options</h2>
      <FormField label="Tryb trudny">
        <FormCheckbox
          name="isHardMode"
          checked={options?.isHardMode}
          onChange={onChange}
        />
      </FormField>
      <FormField label="Przeszkody">
        <FormCheckbox
          name="hasObstacles"
          checked={options?.hasObstacles}
          onChange={onChange}
        />
      </FormField>
      <FormField label="Kolor węża">
        <Dropdown
          title="Wybierz kolor"
          dropdownOptions={COLOR_OPTIONS}
          value={options!.snakeColor}
          onSelect={handleSelectingColor(false)}
        />
      </FormField>
      <FormField label="Kolor jedzenia">
        <Dropdown
          title="Wybierz kolor"
          dropdownOptions={COLOR_OPTIONS}
          value={options!.foodColor}
          onSelect={handleSelectingColor(true)}
        />
      </FormField>
    </DialogContainer>
  );
};
