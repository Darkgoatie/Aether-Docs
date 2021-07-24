const Vouch = () => {
    return ( 
        <div className="command">
            <h1>Vouch Command</h1>
            <hr />
            <h2>Aliases:</h2>
                <ul>
                    <li>- v</li>
                </ul>
            <hr />
            <h2>SubCommands</h2>
            
            <ul>
                <li>
                    <h3>vouch setchannel [#MentionChannel]</h3>
                    <p>Sets a vouch channel.</p>
                    <p>{">>"} !?v setchannel #Vouches</p>
                </li>
                <li>
                    <h3>vouch set [Number] [@MentionUser]</h3>
                    <p>Sets a specific amt of vouches to someone</p>
                    <p>{">>"} !?v set 100 @Darkgoatie</p>
                </li>
                <li>
                    <h3>+1 [@MentionUser]</h3>
                    <p>Gives +one vouch to that user</p>
                    <p>{">>"} +1 @Lox</p>
                </li>
                <li>
                    <h3>vouch view [@MentionUser] || vouch check [@MentionUser]</h3>
                    <p>Checks the vouches of someone</p>
                    <p>{">>"} !?v view @Lox</p>
                </li>
            </ul>
            <a href="/commands/all">Go back</a>
            <br /> <br />
            
        </div> 
    );
}
 
export default Vouch;