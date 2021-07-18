const Server = () => {
    return (
    <div className="command">
        <h1>Server Command</h1>
        <hr />
        <h2>Aliases:</h2>
            <ul>
                <li>- s </li>
                <li>- guild </li>
            </ul>
        <hr />
        <h2>SubCommands</h2>
        
        <ul>
            <li>
                <h3>s info</h3>
                <p>Shows server info.</p>
                <p>{">>"} !?s info</p>
            </li>
            <li>
                <h3>s roles</h3>
                <p>Lists server roles.</p>
                <p>{">>"} !?s roles</p>
            </li>
            <li>
                <h3>s icon</h3>
                <p>Shows server icon.</p>
                <p>{">>"} !?s icon</p>
            </li>
        </ul>
        <a href="/commands/all">Go back</a>
        <br /> <br />
    </div> 
    );
}
 
export default Server;