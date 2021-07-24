const Sidebar = () => {
  return (
    <div className="sidenav">
      <img
        alt="SidebarLogo"
        className="logo"
        src="https://images.discordapp.net/avatars/805537268349665290/71fb39825db04396548d25d604a139bb.png?size=128"
      />
      <a href="/home" className="link">
        <span className="mask">
          <div className="link-container">
            <span className="link-title1 title">Home Page</span>
            <span className="link-title2 title">Click!</span>
          </div>
        </span>
      </a>
      <a href="/support" className="link">
        <span className="mask">
          <div className="link-container">
            <span className="link-title1 title">Get help</span>
            <span className="link-title2 title">Click!</span>
          </div>
        </span>
      </a>
      <a href="/vote" className="link" target="_blank">
        <span className="mask">
          <div className="link-container">
            <span className="link-title1 title">Vote</span>
            <span className="link-title2 title">Click!</span>
          </div>
        </span>
      </a>
      <a href="/invite" className="link" target="_blank">
        <span className="mask">
          <div className="link-container">
            <span className="link-title1 title">Invite</span>
            <span className="link-title2 title">Click!</span>
          </div>
        </span>
      </a>
      <a href="/commands" className="link">
        <span className="mask">
          <div className="link-container">
            <span className="link-title1 title">Commands</span>
            <span className="link-title2 title">Click!</span>
          </div>
        </span>
      </a>
      <a href="/donate" className="link" target="_blank">
        <span className="mask">
          <div className="link-container">
            <span className="link-title1 title">Donate</span>
            <span className="link-title2 title">Click!</span>
          </div>
        </span>
      </a>
    </div>
  );
};

export default Sidebar;
