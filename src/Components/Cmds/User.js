const User = () => {
    return ( 
        <div className="command">
            <h1>User Command</h1>
            <hr />
            <h2>Aliases:</h2>
                <ul>
                    <li>- u</li>
                </ul>
            <hr />
            <h2>SubCommands</h2>
            
            <ul>
                <li>
                    <h3>user kick [@MentionUser]</h3>
                    <p>Kicks someone from the guild.</p>
                    <p>{">>"} !?u kick @John</p>
                </li>
                <li>
                    <h3>user ban [@MentionUser]</h3>
                    <p>Bans someone from the guild.</p>
                    <p>{">>"} !?u ban @John</p>
                </li>
                <li>
                    <h3>user list</h3>
                    <p>Lists all cached users in the guild.</p>
                    <p>{">>"} !?u list</p>
                </li>
            </ul>
            <a href="/commands/all">Go back</a>
            <br /> <br />
            
        </div>
     );
}
 
export default User;