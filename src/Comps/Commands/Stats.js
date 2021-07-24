const Stats = () => {
    return ( 
        <div className="command">
            <h1>Stats Command</h1>
            <hr />
            <h2>Aliases:</h2>
                <ul>
                    <li>- botstats</li>
                </ul>
            <hr />
            <h2>SubCommands</h2>
            
            <ul>
                <li>
                    <h3>stats</h3>
                    <p>Shows bot stats.</p>
                    <p>{">>"} !?stats</p>
                </li>
            </ul>
            <a href="/commands/all">Go back</a>
            <br /> <br />
            
        </div>
             );
}
 
export default Stats;