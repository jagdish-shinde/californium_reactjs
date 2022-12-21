import './board.css'
import Square from '../square/square'
import {Fragment, useState} from 'react'

export default function Board () {
    const [states,setStates] = useState(Array(10).fill(null))
    const [is0tern , setIs0tern] = useState(false)

    function handleClick (index) {
        const statesCopy = [...states]
        const itemToAdd = is0tern ? '0' : 'X'
        statesCopy[index] = itemToAdd
        setStates(statesCopy)
        setIs0tern(!is0tern)
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

    return(
        <div className = 'board'>
            {
                winner ? 
                <div>
                     <h1>Winner of this game is {winner}</h1>
                     <button 
                        className='restartBtn'
                        onClick = {()=>window.location.reload()}
                        >Play Again
                    </button>
                </div> :
                <Fragment>
                    <div className = 'boardRow'>
                        <Square value = {states[0]} handleClick = {() => handleClick(0)}/>
                        <Square value = {states[1]} handleClick = {() => handleClick(1)}/>
                        <Square value = {states[2]} handleClick = {() => handleClick(2)}/>
                    </div> 
                    <div className = 'boardRow'>
                        <Square value = {states[3]} handleClick = {() => handleClick(3)}/>
                        <Square value = {states[4]} handleClick = {() => handleClick(4)}/>
                        <Square value = {states[5]} handleClick = {() => handleClick(5)}/>
                    </div> 
                    <div className = 'boardRow'>
                        <Square value = {states[6]} handleClick = {() => handleClick(6)}/>
                        <Square value = {states[7]} handleClick = {() => handleClick(7)}/>
                        <Square value = {states[8]} handleClick = {() => handleClick(8)}/>

                    </div>
                </Fragment>
           
            }
        </div>
    )
}