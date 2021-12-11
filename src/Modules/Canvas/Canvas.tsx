import React from 'react';
import { debounce } from 'lodash';
import { shallowEqual, useSelector } from 'react-redux';

import {
  DIRECTION_START,
  DIRECTIONS,
  FOOD_START,
  INITIAL_SPEED,
  SCALE,
  SNAKE_START
} from 'Shared/constants';
import { Point } from 'Types/Point';
import { useInterval } from 'Hooks/useInterval';
import { StyledCanvas, StyledControls, StyledWrapper } from './Canvas.styled';
import { ApplicationState } from '../../Stores/store';

export const Canvas = (): JSX.Element => {
  const canvasDimensions = React.useMemo(
    () => ({
      width: document.documentElement.clientWidth * 0.9,
      height: document.documentElement.clientHeight * 0.9
    }),
    []
  );

  const optionsData = useSelector(
    (state: ApplicationState) => state.options,
    shallowEqual
  );

  const [dimensions, setDimensions] = React.useState(canvasDimensions);

  const [snake, setSnake] = React.useState<Point[]>(SNAKE_START);
  const [food, setFood] = React.useState<Point>(FOOD_START);
  const [speed, setSpeed] = React.useState<number | null>(null);
  const [direction, setDirection] = React.useState<Point>(DIRECTION_START);

  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [isGameOver, setIsGameOver] = React.useState<boolean>(false);

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const startGame = () => {
    setIsPlaying(true);
    setSnake(SNAKE_START);
    setFood(FOOD_START);
    setDirection(DIRECTION_START);
    setSpeed(INITIAL_SPEED);
    setIsGameOver(false);

    wrapperRef.current!.focus();
  };

  const endGame = () => {
    setIsPlaying(false);
    setSpeed(null);
    setIsGameOver(true);
  };

  const moveSnake = (e: React.KeyboardEvent) => {
    const { key } = e;

    if (
      key === 'ArrowUp' ||
      key === 'ArrowDown' ||
      key === 'ArrowRight' ||
      key === 'ArrowLeft'
    ) {
      if (direction.x + DIRECTIONS[key].x && direction.y + DIRECTIONS[key].y) {
        setDirection(DIRECTIONS[key]);
      }
    }
  };

  const createRandomFood = () => {
    return {
      x: Math.floor((Math.random() * dimensions.width - 10) / SCALE),
      y: Math.floor((Math.random() * dimensions.height - 10) / SCALE)
    };
  };

  const checkFoodCollision = (newSnake: Point[]) => {
    if (newSnake[0].x === food.x && newSnake[0].y === food.y) {
      let newFood = createRandomFood();
      while (checkCollision(newFood, newSnake)) {
        newFood = createRandomFood();
      }
      setFood(newFood);
      return true;
    }
    return false;
  };

  const checkCollision = (piece: Point, snakeBody: Point[] = snake) => {
    if (
      piece.x * SCALE >= dimensions.width - SCALE ||
      piece.x < 0 ||
      piece.y * SCALE >= dimensions.height - SCALE ||
      piece.y < 0
    ) {
      return true;
    }

    for (const segment of snakeBody) {
      if (piece.x === segment.x && piece.y === segment.y) {
        return true;
      }
    }

    return false;
  };

  const gameLoop = () => {
    const snakeCopy = [...snake];
    const newSnakeHead: Point = {
      x: snakeCopy[0].x + direction.x,
      y: snakeCopy[0].y + direction.y
    };

    snakeCopy.unshift(newSnakeHead);

    if (checkCollision(newSnakeHead)) {
      endGame();
    }

    if (!checkFoodCollision(snakeCopy)) {
      snakeCopy.pop();
    }

    setSnake(snakeCopy);
  };

  const handleMovingSnake = (e: React.KeyboardEvent) => moveSnake(e);

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        width: document.documentElement.clientWidth * 0.9,
        height: document.documentElement.clientHeight * 0.9
      });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) {
      return;
    }
    ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    ctx.fillStyle = optionsData!.snakeColor;
    snake.forEach(({ x, y }) => ctx.fillRect(x, y, 1, 1));

    ctx.fillStyle = optionsData!.foodColor;
    ctx.fillRect(food.x, food.y, 1, 1);
  }, [snake, food, dimensions, dimensions.width, dimensions.height]);

  useInterval(() => gameLoop(), speed);

  return (
    <StyledWrapper>
      <StyledControls
        ref={wrapperRef}
        role="button"
        onKeyDown={handleMovingSnake}
      >
        {console.log({ optionsData })}
        <StyledCanvas ref={canvasRef} isGameOver={isGameOver} />
        <button onClick={startGame}>Start Game</button>
      </StyledControls>
    </StyledWrapper>
  );
};
