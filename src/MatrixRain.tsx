import { useEffect, useRef } from "react";

const MATRIX_HEIGHT = 440;

const CELL_WIDTH = 20;

const CELL_HEIGHT = 26;
const ROWS = MATRIX_HEIGHT / CELL_HEIGHT;

const RAINDROP_SPAWN_RATE = 0.8;
const MATRIX_CHARACTERS = [
  "ሀ",
  "ሁ",
  "ሂ",
  "ሃ",
  "ሄ",
  "ህ",
  "ሆ",
  "ለ",
  "ሉ",
  "ሊ",
  "ላ",
  "ሌ",
  "ል",
  "ሎ",
  "ሐ",
  "ሑ",
  "ሒ",
  "ሓ",
  "ሔ",
  "ሕ",
  "ሖ",
  "መ",
  "ሙ",
  "ሚ",
  "ማ",
  "ሜ",
  "ም",
  "ሞ",
  "ሠ",
  "ሡ",
  "ሢ",
  "ሣ",
  "ሤ",
  "ሥ",
  "ሦ",
  "ረ",
  "ሩ",
  "ሪ",
  "ራ",
  "ሬ",
  "ር",
  "ሮ",
  "ሰ",
  "ሱ",
  "ሲ",
  "ሳ",
  "ሴ",
  "ስ",
  "ሶ",
  "ሸ",
  "ሹ",
  "ሺ",
  "ሻ",
  "ሼ",
  "ሽ",
  "ሾ",
  "ቀ",
  "ቁ",
  "ቂ",
  "ቃ",
  "ቄ",
  "ቅ",
  "ቆ",
  "በ",
  "ቡ",
  "ቢ",
  "ባ",
  "ቤ",
  "ብ",
  "ቦ",
  "ተ",
  "ቱ",
  "ቲ",
  "ታ",
  "ቴ",
  "ት",
  "ቶ",
  "ቸ",
  "ቹ",
  "ቺ",
  "ቻ",
  "ቼ",
  "ች",
  "ቾ",
  "ኀ",
  "ኁ",
  "ኂ",
  "ኃ",
  "ኄ",
  "ኅ",
  "ኆ",
  "ኈ",
  "ኊ",
  "ኋ",
  "ኌ",
  "ኍ",
  "ነ",
  "ኑ",
  "ኒ",
  "ና",
  "ኔ",
  "ን",
  "ኖ",
  "ኘ",
  "ኙ",
  "ኚ",
  "ኛ",
  "ኜ",
  "ኝ",
  "ኞ",
  "አ",
  "ኡ",
  "ኢ",
  "ኣ",
  "ኤ",
  "እ",
  "ኦ",
  "ከ",
  "ኩ",
  "ኪ",
  "ካ",
  "ኬ",
  "ክ",
  "ኮ",
  "ኰ",
  "኱",
  "ኲ",
  "ኳ",
  "ኴ",
  "ኵ",
  "኶",
  "ኸ",
  "ኹ",
  "ኺ",
  "ኻ",
  "ኼ",
  "ኽ",
  "ኾ",
  "ወ",
  "ዉ",
  "ዊ",
  "ዋ",
  "ዌ",
  "ው",
  "ዎ",
  "ዐ",
  "ዑ",
  "ዒ",
  "ዓ",
  "ዔ",
  "ዕ",
  "ዖ",
  "ዘ",
  "ዙ",
  "ዚ",
  "ዛ",
  "ዜ",
  "ዝ",
  "ዞ",
  "ዠ",
  "ዡ",
  "ዢ",
  "ዣ",
  "ዤ",
  "ዥ",
  "ዦ",
  "የ",
  "ዩ",
  "ዪ",
  "ያ",
  "ዬ",
  "ይ",
  "ዮ",
  "ደ",
  "ዱ",
  "ዲ",
  "ዳ",
  "ዴ",
  "ድ",
  "ዶ",
  "ጀ",
  "ጁ",
  "ጂ",
  "ጃ",
  "ጄ",
  "ጅ",
  "ጆ",
  "ገ",
  "ጉ",
  "ጊ",
  "ጋ",
  "ጌ",
  "ግ",
  "ጎ",
  "ጠ",
  "ጡ",
  "ጢ",
  "ጣ",
  "ጤ",
  "ጥ",
  "ጦ",
  "ጰ",
  "ጱ",
  "ጲ",
  "ጳ",
  "ጴ",
  "ጵ",
  "ጶ",
  "ጸ",
  "ጹ",
  "ጺ",
  "ጻ",
  "ጼ",
  "ጽ",
  "ጾ",
  "ፀ",
  "ፁ",
  "ፂ",
  "ፃ",
  "ፄ",
  "ፅ",
  "ፆ",
  "ፈ",
  "ፉ",
  "ፊ",
  "ፋ",
  "ፌ",
  "ፍ",
  "ፎ",
  "ፐ",
  "ፑ",
  "ፒ",
  "ፓ",
  "ፔ",
  "ፕ",
  "ፖ",
  "፠",
  "፡",
  "።",
  "፣",
  "፤",
  "፥",
  "፦",
  "፧",
  "፨",
  "፩",
  "፪",
  "፫",
  "፬",
  "፭",
  "፮",
  "፯",
  "፰",
  "፱",
  "፲",
  "፳",
  "፴",
  "፵",
  "፶",
  "፷",
  "፸",
  "፹",
  "፺",
  "፻",
  "፼",
] as const;
const GREENS = ["#15803d", "#16a34a", "#22c55e", "#4ade80"] as const;

const WHITE = "#f0fdf4";

const FRAME_RATE = 1000 / 30;

type Greens = (typeof GREENS)[number];

type Color = typeof WHITE | Greens;

type Cell = {
  position: number;
  activeFor: number;
  char: string;
  retainChar: number;
  color: Color;
  retainColor: number;
};

type Column = {
  cells: Cell[];
  head?: Cell;
  trail: number;
  ticksLeft: number;
  speed: number;
};

type Matrix = Column[];

export function MatrixRainV12() {
  const matrixCanvasRef = useRef<HTMLCanvasElement | null>(null);
  let matrix: Matrix | undefined;

  useEffect(() => {
    if (matrixCanvasRef.current) {
      const canvas = matrixCanvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        const handleResize = () => {
          const width = window.innerWidth;
          const height = window.innerHeight;

          canvas.width = width;
          canvas.height = height;

          const updatedCOLUMNS = Math.floor(width / CELL_WIDTH);
          const updatedROWS = Math.floor(height / CELL_HEIGHT);

          matrix = createMatrix(updatedCOLUMNS, updatedROWS);
          const fontSize = Math.min(CELL_WIDTH, CELL_HEIGHT) + "px monospace";
          context.font = fontSize;

          renderMatrix(matrix, context, canvas);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        const intervalId = setInterval(() => {
          if (matrix) {
            updateMatrix(matrix); // Now you can use the matrix variable
            renderMatrix(matrix, context, canvas);
          }
        }, FRAME_RATE);

        context.font = "17px monospace";

        return () => {
          window.removeEventListener("resize", handleResize);
          clearInterval(intervalId);
        };
      }
    }
  }, []);

  function createMatrix(columns: number, rows: number): Matrix {
    const columnsArr: Column[] = [];

    for (let i = 0; i < columns; i++) {
      const cells: Cell[] = [];

      for (let j = 0; j < rows; j++) {
        const cell: Cell = {
          position: j,
          activeFor: 0,
          char: "",
          retainChar: 0,
          color: WHITE,
          retainColor: 0,
        };

        cells.push(cell);
      }

      columnsArr.push({
        cells,
        head: undefined,
        trail: 0,
        ticksLeft: 0,
        speed: 2,
      });
    }

    return columnsArr;
  }
  function renderMatrix(
    matrix: Matrix,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ): void {
    context.fillStyle = "rgb(0, 16, 0)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    let x = 0;
    for (const column of matrix) {
      let y = CELL_HEIGHT;
      for (const cell of column.cells) {
        context.fillStyle = cell.color;
        context.fillText(cell.char, x, y);

        y += CELL_HEIGHT;
      }

      x += CELL_WIDTH;
    }
  }



  let tickCount = 0;

  function updateMatrix(matrix: Matrix): void {
    for (const column of matrix) {
      if (tickCount % column.speed !== 0) {
        continue;
      }

      const animationComplete = column.ticksLeft <= 0;

      if (animationComplete && Math.random() > RAINDROP_SPAWN_RATE) {
        column.trail = getRandomNumberBetween(3, ROWS * 2);
        column.ticksLeft = ROWS + column.trail;
        column.speed = getRandomNumberBetween(1, 6);
        column.head = column.cells[0];
        column.head.char = getRandomChar();
        column.head.activeFor = column.trail;
      } else {
        if (column.head) {
          const nextCell = column.cells[column.head.position + 1];
          if (nextCell) {
            column.head = nextCell;
            nextCell.activeFor = column.trail;
          } else {
            column.head.char = "";
            column.head = undefined;
          }
        }
        column.ticksLeft -= 1;
      }

      for (const cell of column.cells) {
        if (cell.activeFor > 0) {
          if (column.head === cell) {
            cell.color = WHITE;
            cell.retainColor = 0;
            cell.char = getRandomChar();
            cell.retainChar = getRandomNumberBetween(1, 10);
          } else {
            if (cell.retainColor <= 0) {
              cell.color = getRandomGreen();
              cell.retainColor = getRandomNumberBetween(1, 10);
            } else {
              cell.retainColor -= 1;
            }
            if (cell.retainChar <= 0) {
              cell.char = getRandomChar();
              cell.retainChar = getRandomNumberBetween(1, 10);
            } else {
              cell.retainChar -= 1;
            }
          }
          cell.activeFor -= 1;
        } else {
          cell.char = "";
        }
      }
    }

    tickCount += 1;
  }

  function getRandomChar(): string {
    return getRandomFromArray(MATRIX_CHARACTERS);
  }

  function getRandomGreen(): Greens {
    return getRandomFromArray(GREENS);
  }

  function getRandomFromArray<T>(array: readonly T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function getRandomNumberBetween(min: number, max: number): number {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  return (
    <div className="flex justify-center">
      <canvas
        ref={matrixCanvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        className="mb-4"
      ></canvas>
    </div>
  );
}
