const Dono = () => {
    return ( 
        <div className="command">
            <h1>Donation Command</h1>
            <hr />
            <h2>Aliases:</h2>
                <ul>
                    <li>- dono </li>
                    <li>- d </li>
                </ul>
            <hr />
            <h2>SubCommands</h2>
            
            <ul>
                <li>
                    <h3>d view [@MentionUser]</h3>
                    <p>Views the donations of someone.</p>
                    <p>{">>"} !?d view @Darkgoatie</p>
                </li>
                <li>
                    <h3>dono set [Amount] [@MentionUser]</h3>
                    <p>Sets the donations of someone.</p>
                    <p>{">>"} !?d set 1000 @Darkgoatie</p>
                </li>
                <li>
                    <h3>dono add [Amount] [@MentionUser]</h3>
                    <p>Adds donation to someone</p>
                    <p>{">>"} !?d add 200 @Darkgoatie</p>
                </li>
                <li>
                    <h3>dono remove [Amount] [@MentionUser]</h3>
                    <p>Opposite of dono add.</p>
                    <p>{">>"} !?d remove 150 @Darkgoatie </p>
                </li>
            </ul>
            <a href="/commands/all">Go back</a>
            <br /> <br />
        </div> 
     );
}
 
export default Dono;