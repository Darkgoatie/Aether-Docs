const Channel = () => {
    return ( 
        <div className="command">
            <h1>Channel Command</h1>
            <hr />
            <h2>Aliases:</h2>
                <ul>
                    <li>- chan</li>
                    <li>- c</li>
                </ul>
            <hr />
            <h2>SubCommands</h2>
            
            <ul>
                <li>
                    <h3>chan lock</h3>
                    <p>Locks the channel.</p>
                    <p>{">>"} !?chan lock</p>
                </li>
                <li>
                    <h3>chan unlocks</h3>
                    <p>Unlocks the channel.</p>
                    <p>{">>"} !?chan unlock </p>
                </li>
            </ul>
            <a href="/commands/all">Go back</a>
            <br /> <br />
            
        </div>
        );
}
 
export default Channel;