const Timer = () => {
    return ( 
        <div className="command">
            <h1>Timer Command</h1>
            <hr />
            <h2>Aliases:</h2>
                <ul>
                    <li>- t  </li>
                </ul>
            <hr />
            <h2>SubCommands</h2>
            
            <ul>
                <li>
                    <h3>t start [Time]</h3>
                    <p>Starts a timer.</p>
                    <p>{">>"} !?t start 1m</p>
                </li>
            </ul>
            <a href="/commands/all">Go back</a>
            <br /> <br />
        </div> 
     );
}
 
export default Timer;