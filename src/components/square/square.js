import './square.css'

export default function Square ({value,handleClick}) {

    return(
        <div 
            className = 'square' 
            onClick={handleClick}
            >{value}
        </div>
    )
}