import Icon from "./Aether Icon.png";
const Intro = () => {
  return (
    <div className="Intro">
      <h2>Intro to aether</h2>
      <p>Aether is a multi-purpose bot which fits in any server.</p>
      <p
        style={{
          color: "green",
          fontSize: "150%",
        }}
      >
        Built with js, hardwork and ❤️
      </p>
      <p>
        Aether is able to do auctions, giveaways, vouches, donation tracking and
        much more!
      </p>
      <hr />
      <h2>All commands</h2>
      <div className="AllCmds">
        <a href="/commands/auction">Auction</a>
        <a href="/commands/giveaway">Giveaway</a>
        <a href="/commands/lottery">Lottery</a>
        <a href="/commands/vouch">Vouch</a>
        <a href="/commands/timer">Timer</a>
        <a href="/commands/role">Role</a>
        <a href="/commands/user">User</a>
        <br />
        <br />
        <a href="/commands/message">Message</a>
        <a href="/commands/channel">Channel</a>
        <a href="/commands/server">Server</a>
        <a href="/commands/invite">Invite</a>
        <a href="/commands/donation">Donation</a>
        <a href="/commands/prefix">Prefix</a>
        <a href="/commands/stats">Stats</a>
        <br />
        <br />
        <a href="/home">Back to home menu</a>
      </div>
      <hr />
      <div className="LinksToSee">
        <h2>Must-Visit Links for aether</h2>
        <a href="/commands">Commands guide</a>
        <a href="/donate">Donate</a>
        <a href="/join">Get Support / Report Bugs</a>
        <a href="/vote">Vote aether on top.gg</a>
      </div>
      <img alt="FooterIcon" src={Icon} height="200px" />
    </div>
  );
};

export default Intro;
