const Giveaway = () => {
    return ( 
        <div className="command">
            <h1>Giveaway Command</h1>
            <hr />
            <h2>Aliases:</h2>
                <ul>
                    <li>- gaw</li>
                    <li>- g  </li>
                </ul>
            <hr />
            <h2>SubCommands</h2>
            
            <ul>
                <li>
                    <h3>giveaway start [Time] [Winners] [Requirement] [Prize]</h3>
                    <p>Starts a giveaway.</p>
                    <p>{">>"} !?gaw start 1h 1 none Elytra</p>
                    <p>{">>"} !?gaw start 1h 1 VIPs Elytra</p>
                </li>
                <li>
                    <h3>giveaway end [ID/Name]</h3>
                    <p>Ends a giveaway.</p>
                    <p>{">>"} !?gaw end Elytra</p>
                    <p>{">>"} !?gaw end 345345345345345345</p>
                </li>
                <li>
                    <h3>giveaway reroll [ID/Name]</h3>
                    <p>Rerolls an already-ended giveaway.</p>
                    <p>{">>"} !?gaw reroll Elytra</p>
                    <p>{">>"} !?gaw reroll 345345345345345345</p>
                </li>
                <li>
                    <h3>giveaway list</h3>
                    <p>Lists all giveaways for that server.</p>
                    <p>{">>"} !?gaw list</p>
                </li>
                <li>
                    <h3>giveaway addbypass [role ID/Mention]</h3>
                    <p>Adds some role to req bypass.</p>
                    <p>{">>"} !?auc addbypass 678678678678678678</p>
                </li>
                <li>
                    <h3>giveaway removebypass [role ID/Mention]</h3>
                    <p>Opposite of addbypass.</p>
                    <p>{">>"} !?auc removebypass 123123123123123123</p>
                </li>
            </ul>
            <a href="/commands/all">Go back</a>
            <br /> <br />
            
        </div>
     );
}
 
export default Giveaway;