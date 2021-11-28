const body1 = {
  backgroundColor: "#98B4D4",
  fontFamily: "Arial",
};
//applying styles 

//navigation bar
function Navbar() {
  return (
    <div className="container-fluid" style={body1}>
      <nav className="navbar navbar-expand-md navbar-light pt-5 pb-4">
        <div className="container-xxl">
          <a className="navbar-brand" href="#intro">
            <span className="fw-bold">Geo Info Tech</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#topics">
                  Button 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reviews">
                  Button 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Button 3
                </a>
              </li>
              <li className="nav-item  d-md-none">
                <a className="nav-link" href="#pricing">
                  Button 4
                </a>
              </li>
              <li className="nav-item ms-2 d-none d-md-inline">
                <a className="btn btn-secondary" href="#pricing">
                  Button 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
//exporting navigation bar