const Auction = () => {
    return ( 
        <div className="command">
            <h1>Auction Command</h1>
            <hr />
            <h2>Aliases:</h2>
                <ul>
                    <li>- auc</li>
                    <li>- a  </li>
                </ul>
            <hr />
            <h2>SubCommands</h2>
            
            <ul>
                <li>
                    <h3>auc start [Starting Bid] [Item Name]</h3>
                    <p>Starts an auction in the current channel.</p>
                    <p>{">>"} !?auc start 1000 Elytra</p>
                </li>
                <li>
                    <h3>auc end</h3>
                    <p>Ends the active auction in the current channel.</p>
                    <p>{">>"} !?auc end</p>
                </li>
                <li>
                    <h3>auc offer [New Bid]</h3>
                    <p>Bids to the auction that is active in the current channel.</p>
                    <p>{">>"} !?auc bid 1500</p>
                </li>
                <li>
                    <h3>auc setwinner [@MentionUser]</h3>
                    <p>Sets a new auction winner.</p>
                    <p>{">>"} !?auc setwinner @Darkgoatie</p>
                </li>
                <li>
                    <h3>auc setbid [New Bid]</h3>
                    <p>Same as auc setwinner, but for the price (bid).</p>
                    <p>{">>"} !?auc setbid 1200</p>
                </li>
                <li>
                    <h3>auc setmanager [Manager role ID]</h3>
                    <p>Sets an auction manager role</p>
                    <p>{">>"} !?auc setmanager 123123123123123123</p>
                </li>
            </ul>
            <a href="/commands/all">Go back</a>
            <br /> <br />
            
        </div>
     );
}
 
export default Auction;