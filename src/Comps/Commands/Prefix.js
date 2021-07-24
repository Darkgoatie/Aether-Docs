const Prefix = () => {
    return ( 
        <div className="command">
            <h1>Prefix command</h1>
            <p>Sets a new prefix for that server</p>
            <p>{">>"} !?prefix ! //-{">"} New prefix is '!'</p>
            <a href="/commands/all">Go back</a>
            <br /> <br />
        </div>
     );
}
 
export default Prefix;