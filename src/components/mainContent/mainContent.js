import './mainContent.css'

export default function MainContent () {

    const benifitsOfUsingReact = [
        'Component based architecture .',
        'JSX - allows to write html code in js file .',
        'No need to write html file .',
        'Hooks - ease of works .',
        'React Dom - Enable us to make changes in small components , without inteefering whole application' 
    ]

    return(
        <section className='dataWrapper'>
            <h1 className='heading'>Why i am exited to learn react</h1>
            <ol>
                {
                    benifitsOfUsingReact.map((advantage) => (
                        <li className='listItem'>{advantage}</li>
                    ))
                }
            </ol>
        </section>
    )
}