const Lottery = () => {
    return ( 
        <div className="command">
            <h1>Lottery Command</h1>
            <hr />
            <h2>Aliases:</h2>
                <ul>
                    <li>- lotto</li>
                    <li>- raffle  </li>
                </ul>
            <hr />
            <h2>SubCommands</h2>
            
            <ul>
                <li>
                    <h3>!?lotto add [TicketCount] [@MentionUser]</h3>
                    <p>Adds someone to the lottery.</p>
                    <p>{">>"} !?lotto add 25 @Darkgoatie</p>
                </li>
                <li>
                    <h3>lotto list </h3>
                    <p>Lists everyone that is in the lottery.</p>
                    <p>{">>"} !?lotto list</p>
                </li>
                <li>
                    <h3>lotto end </h3>
                    <p>Ends the lottery and gives a random winner.</p>
                    <p>{">>"} !?lotto end</p>
                </li>
            </ul>
            <a href="/commands/all">Go back</a>
            <br /> <br />
            
        </div>
     );
}
 
export default Lottery;