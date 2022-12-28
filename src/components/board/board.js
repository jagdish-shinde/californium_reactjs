import './board.css'
import Square from '../square/square'
import {Fragment, useState} from 'react'

export default function Board () {
    const [states,setStates] = useState(Array(10))
    // Array(10) -> gives array of length = 10 , with all element undefined
    // Array(10) -> [undefined,undefined ....]

    const [isFirstPlayerTern , setIsFirstPlayerTurn] = useState(false)
    // state to differentiate the turn of each player

    function handleClick (index) {
        const statesCopy = [...states]

        // this is check so that same box should not get update more than one time
        // if first box is clicked and we have assigned 'X' , if again clicked on the same box 
        // it will check that box if the box already containg value the it will not update that box again 
        //  for know more this check , disable this check and and click on same box again and again

        if(statesCopy[index]){
            return
        }
        const itemToAdd = isFirstPlayerTern ? '0' : 'X'
        statesCopy[index] = itemToAdd
        setStates(statesCopy)
        setIsFirstPlayerTurn(!isFirstPlayerTern)
    }

    const winningCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const strtingIndexes = {
        0 : [0,1,2],
        1 : [3,4,5],
        2 : [6,7,8]
    }

    function getWinner () {
        let winner ;
        winningCombination.forEach(combination => {
            const [c1,c2,c3] = combination || []
            if(states[c1] && states[c1] === states[c2] && states[c1] === states[c3]){
                winner = states[c3]
            }
        })
        return winner
    }

    const winner = getWinner()

    if(winner) {
        //  if we got winner we will retun this part 
        return(
            <div>
                <h1>Winner of this game is {winner}</h1>
                <button 
                    className='restartBtn'
                    onClick = {()=>window.location.reload()}
                    >Play Again
                </button>
            </div>
        )
    }

    return(
        <div className = 'board'>
            <Fragment>
                {Array(3).fill(1).map((_,index) => (
                <div className = 'boardRow' key={index}>
                    <Square 
                        value = {states[strtingIndexes[index][0]]} 
                        handleClick = {() => handleClick(strtingIndexes[index][0])}
                    />
                    <Square 
                        value = {states[strtingIndexes[index][1]]} 
                        handleClick = {() => handleClick(strtingIndexes[index][1])}
                    />
                    <Square 
                        value = {states[strtingIndexes[index][2]]} 
                        handleClick = {() => handleClick(strtingIndexes[index][2])}
                    />
                </div> 
                ))}
            </Fragment>
        </div>
    )
}