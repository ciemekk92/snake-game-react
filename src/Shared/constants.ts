import { Point } from 'Types/Point';

export const SNAKE_START: Point[] = [
  { x: 10, y: 10 },
  { x: 11, y: 10 }
];

export const DIRECTION_START = { x: 0, y: -1 };
export const FOOD_START = { x: 8, y: 3 };
export const SCALE = 20;
export const INITIAL_SPEED = 50;

export const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};

export const COLOR_OPTIONS = [
  {
    label: 'Zielony',
    value: 'green'
  },
  {
    label: 'Czerwony',
    value: 'red'
  },
  {
    label: 'Żółty',
    value: 'yellow'
  },
  {
    label: 'Niebieski',
    value: 'blue'
  },
  {
    label: 'Pomarańczowy',
    value: 'orange'
  },
  {
    label: 'Różowy',
    value: 'pink'
  }
];
