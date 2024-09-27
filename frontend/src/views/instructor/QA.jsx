import React from "react";
import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import Modal from "react-bootstrap/Modal";

import BaseHeader from "../partials/BaseHeader";
import BaseFooter from "../partials/BaseFooter";
import { Link } from "react-router-dom";

function QA() {
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
              <h4 className="mb-0 mb-1">
                {" "}
                <i className="fas fa-envelope"></i> Question and Answer
              </h4>

              <div className="card">
                {/* Card header */}
                <div className="card-header border-bottom p-0 pb-3">
                  {/* Title */}
                  <h4 className="mb-3 p-3">Discussion</h4>
                  <form className="row g-4 p-3">
                    {/* Search */}
                    <div className="col-sm-12 col-lg-12">
                      <div className="position-relative">
                        <input
                          className="form-control pe-5 bg-transparent"
                          type="search"
                          placeholder="Search Questions"
                          aria-label="Search"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/* Card body */}
                <div className="card-body p-0 pt-3">
                  <div className="vstack gap-3 p-3">
                    {/* Question item START */}
                    <div className="shadow rounded-3 p-3" key={1}>
                      <div className="d-sm-flex justify-content-sm-between mb-3">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm flex-shrink-0">
                            <img
                              src={
                                "https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-4.jpg"
                              }
                              className="avatar-img rounded-circle"
                              alt="avatar"
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="ms-2">
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="text-decoration-none text-dark"
                              >
                                Angelina Fernado
                              </a>
                            </h6>
                            <small>Asked 10 Hours ago</small>
                          </div>
                        </div>
                      </div>
                      <h5>
                        Note Title {""}
                        <span className="badge bg-success">21</span>
                      </h5>
                      <p className="mb-2">Note Content</p>
                      <button className="btn btn-primary btn-sm mb-3 mt-3">
                        Join Conversation <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>

                    {/* {questions?.length < 1 && <p>No Questions</p>} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversations Modal */}
      <Modal show={null} size="lg" onHide={null}>
        <Modal.Header closeButton>
          <Modal.Title>Question: Question Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border p-2 p-sm-4 rounded-3">
            <ul
              className="list-unstyled mb-0"
              style={{ overflowY: "scroll", height: "500px" }}
            >
              <li className="comment-item mb-3">
                <div className="d-flex">
                  <div className="avatar avatar-sm flex-shrink-0">
                    <a href="#">
                      <img
                        className="avatar-img rounded-circle"
                        src={
                          "https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-4.jpg"
                        }
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                        alt="womans image"
                      />
                    </a>
                  </div>
                  <div className="ms-2">
                    {/* Comment by */}
                    <div className="bg-light p-3 rounded w-100">
                      <div className="d-flex w-100 justify-content-center">
                        <div className="me-2 ">
                          <h6 className="mb-1 lead fw-bold">
                            <a
                              href="#!"
                              className="text-decoration-none text-dark"
                            >
                              {" "}
                              Destiny Franks
                            </a>
                            <br />
                            <span style={{ fontSize: "12px", color: "gray" }}>
                              20/20/2024
                            </span>
                          </h6>

                          <p
                            className="mb-3"
                            dangerouslySetInnerHTML={{
                              __html: `MEssage Here`,
                            }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <div ref={null} />
            </ul>

            <form class="w-100 d-flex">
              <textarea
                readOnly
                name="message"
                class="one form-control pe-4 w-75 bg-light"
                id="autoheighttextarea"
                rows="2"
                placeholder="What's your question?"
              ></textarea>
              <button class="btn btn-primary ms-2 mb-0 w-25" type="submit">
                Sending... <i className="fas fa-spinner fa-spin"></i>
              </button>
            </form>
            <form class="w-100 d-flex">
              <textarea
                required
                name="message"
                class="one form-control pe-4 w-75"
                id="autoheighttextarea"
                rows="2"
                placeholder="What's your question?"
              ></textarea>
              <button class="btn btn-primary ms-2 mb-0 w-25" type="submit">
                Post <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <BaseFooter />
    </>
  );
}

export default QA;
