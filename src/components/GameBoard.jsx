
export default function GameBoard({ onSelectSqaure, board }) {
 

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSqaure(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map((innerArray => [...innerArray]))]
    //         updatedBoard[rowIndex][colIndex] = 'X'
    //         return updatedBoard;
    //     });

    //     onSelectSqaure();
    // }

    return <ol id="game-board">
        {board.map((row, rowIndex) =>
            <li key={rowIndex}>
                <ol>
                    {row.map((playersymbol, colIndex) =>
                        <li key={colIndex}>
                            <button disabled={playersymbol !== null} onClick={() => onSelectSqaure(rowIndex, colIndex)}>{playersymbol}</button>
                        </li>
                    )}
                </ol>
            </li>)}
    </ol>
}