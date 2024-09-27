import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../partials/BaseHeader";
import BaseFooter from "../partials/BaseFooter";

function Students() {
  return (
    <>
      <BaseHeader />

      <section className="pt-5 pb-5">
        <div className="container">
          {/* Header Here */}
          <Header />
          <div className="row mt-0 mt-md-4">
            {/* Sidebar Here */}
            <Sidebar />
            <div className="col-lg-9 col-md-8 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body */}
                <div className="p-4 d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="mb-0">Students</h3>
                    <span>Meet people taking your course.</span>
                  </div>
                  {/* Nav */}
                </div>
              </div>
              {/* Tab content */}
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg"
                          className="rounded-circle avatar-xl mb-3"
                          style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                          alt="avatar"
                        />
                        <h4 className="mb-1">Flourish Franks</h4>
                        <p className="mb-0">
                          {" "}
                          <i className="fas fa-map-pin me-1" /> United States{" "}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between py-2 mt-4 fs-6">
                        <span>Enrolled</span>
                        <span className="text-dark">3/12/2020</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  );
}

export default Students;
