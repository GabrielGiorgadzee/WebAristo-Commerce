const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a href="https://webaristo.com" target="_blank">
          <img
            src="/webaristo.png"
            alt="WebAristo Logo"
            style={{ width: 80, height: 80 }}
          />
        </a>
        <a className="navbar-brand" href="/" style={{ color: "#7b1fa2" }}>
          WebAristo
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="/"
                style={{ color: "#7b1fa2" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#section"
                style={{ color: "#7b1fa2" }}
              >
                MacBook
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://webaristo.com"
                style={{ color: "#7b1fa2" }}
              >
                Official Website
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
