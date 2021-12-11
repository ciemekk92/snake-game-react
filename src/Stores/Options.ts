import { ActionTypes } from './constants';
import { updateObject } from 'Utils/updateObject';
import { AppThunkAction } from './store';

export interface OptionsState {
  isHardMode: boolean;
  gameSpeed: number;
  hasObstacles: boolean;
  snakeColor: string;
  foodColor: string;
}

const initialState: OptionsState = {
  isHardMode: false,
  gameSpeed: 100,
  hasObstacles: false,
  snakeColor: 'green',
  foodColor: 'red'
};

interface SetIsHardModeAction {
  type: typeof ActionTypes.SET_IS_HARD_MODE;
  isHardMode: boolean;
}

interface SetGameSpeedAction {
  type: typeof ActionTypes.SET_GAME_SPEED;
  gameSpeed: number;
}

interface SetHasObstaclesAction {
  type: typeof ActionTypes.SET_HAS_OBSTACLES;
  hasObstacles: boolean;
}

interface SetSnakeColorAction {
  type: typeof ActionTypes.SET_SNAKE_COLOR;
  snakeColor: string;
}

interface SetFoodColorAction {
  type: typeof ActionTypes.SET_FOOD_COLOR;
  foodColor: string;
}

export type OptionsActionTypes =
  | SetIsHardModeAction
  | SetGameSpeedAction
  | SetHasObstaclesAction
  | SetSnakeColorAction
  | SetFoodColorAction;

const setIsHardMode = (state: OptionsState, action: SetIsHardModeAction) => {
  return updateObject(state, {
    isHardMode: action.isHardMode
  });
};

const setGameSpeed = (state: OptionsState, action: SetGameSpeedAction) => {
  return updateObject(state, {
    gameSpeed: action.gameSpeed
  });
};

const setHasObstacles = (
  state: OptionsState,
  action: SetHasObstaclesAction
) => {
  return updateObject(state, {
    hasObstacles: action.hasObstacles
  });
};

const setSnakeColor = (state: OptionsState, action: SetSnakeColorAction) => {
  return updateObject(state, {
    snakeColor: action.snakeColor
  });
};

const setFoodColor = (state: OptionsState, action: SetFoodColorAction) => {
  return updateObject(state, {
    foodColor: action.foodColor
  });
};

export const actionCreators = {
  setIsHardMode:
    ({
      isHardMode
    }: {
      isHardMode: boolean;
    }): AppThunkAction<OptionsActionTypes> =>
    async (dispatch, getState) => {
      const appState = getState();

      if (appState && appState.options) {
        dispatch({
          type: ActionTypes.SET_IS_HARD_MODE,
          isHardMode
        });
      }
    },
  setGameSpeed:
    ({
      gameSpeed
    }: {
      gameSpeed: number;
    }): AppThunkAction<OptionsActionTypes> =>
    async (dispatch, getState) => {
      const appState = getState();

      if (appState && appState.options) {
        dispatch({
          type: ActionTypes.SET_GAME_SPEED,
          gameSpeed
        });
      }
    },
  setHasObstacles:
    ({
      hasObstacles
    }: {
      hasObstacles: boolean;
    }): AppThunkAction<OptionsActionTypes> =>
    async (dispatch, getState) => {
      const appState = getState();

      if (appState && appState.options) {
        dispatch({
          type: ActionTypes.SET_HAS_OBSTACLES,
          hasObstacles
        });
      }
    },
  setSnakeColor:
    ({
      snakeColor
    }: {
      snakeColor: string;
    }): AppThunkAction<OptionsActionTypes> =>
    async (dispatch, getState) => {
      const appState = getState();

      if (appState && appState.options) {
        dispatch({
          type: ActionTypes.SET_SNAKE_COLOR,
          snakeColor
        });
      }
    },
  setFoodColor:
    ({
      foodColor
    }: {
      foodColor: string;
    }): AppThunkAction<OptionsActionTypes> =>
    async (dispatch, getState) => {
      const appState = getState();

      if (appState && appState.options) {
        dispatch({
          type: ActionTypes.SET_FOOD_COLOR,
          foodColor
        });
      }
    }
};

export const reducer = (
  state: OptionsState = initialState,
  action: OptionsActionTypes
) => {
  switch (action.type) {
    case ActionTypes.SET_IS_HARD_MODE:
      return setIsHardMode(state, action);
    case ActionTypes.SET_GAME_SPEED:
      return setGameSpeed(state, action);
    case ActionTypes.SET_HAS_OBSTACLES:
      return setHasObstacles(state, action);
    case ActionTypes.SET_SNAKE_COLOR:
      return setSnakeColor(state, action);
    case ActionTypes.SET_FOOD_COLOR:
      return setFoodColor(state, action);
    default:
      return state;
  }
};
