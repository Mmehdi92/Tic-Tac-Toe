import { useState } from "react"

export default function Player({ intitialName, symbol, isActive, onChangeName }) {

    const [playerName, setPlayerName] = useState(intitialName);
    const [isEdeting, setIsEdeting] = useState(false);

    function handleEditClick() {
        setIsEdeting(isEdeting => !isEdeting)
        if (isEdeting) {
            onChangeName(symbol, playerName)
        }
    }


    function handleChange(event) {
        setPlayerName(event.target.value);
    }


    let editablePlayerName = <span className="player-name">{playerName} </span>
    if (isEdeting) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} maxLength={15}></input>
    }


    return <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol"> {symbol} </span>
        </span>
        <button onClick={handleEditClick}>{isEdeting ? "Save" : "Edit"}</button>
    </li>
}