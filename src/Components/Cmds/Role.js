const Role = () => {
    return ( 
        <div className="command">
            <h1>Role Command</h1>
            <hr />
            <h2>Aliases:</h2>
                <ul>
                    <li>- r</li>
                </ul>
            <hr />
            <h2>SubCommands</h2>
            
            <ul>
                <li>
                    <h3>role members [Role]</h3>
                    <p>Lists all the members of a role.</p>
                    <p>{">>"} !?role members @Owner</p>
                </li>
                <li>
                    <h3>role info [Role] </h3>
                    <p>Shows info about a role.</p>
                    <p>{">>"} !?role info @Mods</p>
                </li>
            </ul>
            <a href="/commands/all">Go back</a>
            <br /> <br />
            
        </div> 
        );
}
 
export default Role;