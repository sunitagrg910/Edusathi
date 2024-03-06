import "./App.css";

function App() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className=" col-md-50 col-lg-5 col-12  ft-1">
              <h3>Featured Blogs</h3>
            </div>

            <div className="main">
              <div className="row">
                <div className="col-lg ft-2">
                  <button className=" btn">View all</button>
                  <div className="card">
                    <img src="./images/img1.jpg" alt="" />
                    <div className="card-body">
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg ft-5">
                <div className="card-item">
                  <img src="./images/img2.jpg" alt="" />
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>

                <div className="card-item">
                  <img src="./images/img3.jpg" alt="" />
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-md-6 col-lg-4 col-12 ft-3">
              <div className="footer_icon">
                Follow us on |<i class="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>

            <div className=" col-md-6 col-lg-4 col-12 ft-4">
              <div className="copyright">
                <i className="fa-solid fa-copyright"></i>
              </div>
              <div className="text">
                2024 EduSathi Pvt.Ltd in technical collaboration with Mango
                Infotech
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
