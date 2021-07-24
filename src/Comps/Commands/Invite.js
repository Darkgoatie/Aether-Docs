const Invite = () => {
    return ( 
    <div className="command">
        <h1>Invite Command</h1>
        <hr />
        <h2>Aliases:</h2>
            <ul>
                <li>- i </li>
                <li>- info </li>
            </ul>
        <hr />
        <h2>SubCommands</h2>
        
        <ul>
            <li>
                <h3>invite</h3>
                <p>Sends an invite link for the bot.</p>
                <p>{">>"} !?invite</p>
            </li>
        </ul>
        <a href="/commands/all">Go back</a>
        <br /> <br />
    </div> 
     );
}
 
export default Invite;