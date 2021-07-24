const Message = () => {
    return (  
        <div className="command">
            <h1>Message Command</h1>
            <hr />
            <h2>Aliases:</h2>
                <ul>
                    <li>- msg</li>
                    <li>- m</li>
                </ul>
            <hr />
            <h2>SubCommands</h2>
            
            <ul>
                <li>
                    <h3>msg purge [Number]</h3>
                    <p>Purges [number] messages.</p>
                    <p>{">>"} !?msg purge 69</p>
                </li>
            </ul>
            <a href="/commands/all">Go back</a>
            <br /> <br />
            
        </div>
        );
}
 
export default Message;