import "./HomeHeader.css";

const HomeHeader = ({ onLogout }) => {
  return (
    <div className="header">
      <h1>A Typical Page</h1>
      <div className="header-nav">
        <span>Users</span>
        <span>Admin</span>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;
