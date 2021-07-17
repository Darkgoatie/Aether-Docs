const Deps = () => {
    const Dependencies = `"dependencies": {
        "@top-gg/sdk": "^3.1.1",
        "better-sqlite3": "^7.4.0",
        "dbdjs.db": "^1.0.4",
        "discord-giveaways": "^4.5.1",
        "discord.js": "^12.5.3",
        "enmap": "^5.8.5",
        "express": "^4.17.1",
        "mathjs": "^9.3.2",
        "ms": "^2.1.3",
        "quick.db": "^7.1.3"
      }`
    return (
        <div className="dependencies">
            <code lang="text/json">
                {Dependencies}
            </code>
            <hr></hr>
            <br />
            <a href="/home" id="DepsBackBtn">Go Back</a>
            <br /> <br />
        </div>
    );
}
 
export default Deps;
