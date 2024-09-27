import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../partials/BaseHeader";
import BaseFooter from "../partials/BaseFooter";

function Coupon() {
  const [show, setShow] = useState(false);
  const [showAddCoupon, setShowAddCoupon] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCouponClose = () => setShowAddCoupon(false);
  const handleAddCouponShow = () => setShowAddCoupon(true);

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
                {/* Card header */}
                <div className="card-header d-lg-flex align-items-center justify-content-between">
                  <div className="mb-3 mb-lg-0">
                    <h3 className="mb-0">Coupons</h3>
                    <span>Manage all your coupons from here</span>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddCouponShow}
                  >
                    Add Coupon
                  </button>
                </div>
                {/* Card body */}
                <div className="card-body">
                  {/* List group */}
                  <ul className="list-group list-group-flush">
                    {/* List group item */}
                    <li className="list-group-item p-4 shadow rounded-3">
                      <div className="d-flex">
                        <div className="ms-3 mt-2">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h4 className="mb-0">CODE1</h4>
                              <span>3 Student</span>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="mt-2">
                              <span className="me-2 fw-bold">
                                Discount:{" "}
                                <span className="fw-light">20% Discount</span>
                              </span>
                            </p>
                            <p className="mt-1">
                              <span className="me-2 fw-bold">
                                Date Created:{" "}
                                <span className="fw-light">30/11/24</span>
                              </span>
                            </p>
                            <p>
                              <button
                                class="btn btn-outline-secondary"
                                type="button"
                                onClick={handleShow}
                              >
                                Update Coupon
                              </button>

                              <button
                                  class="btn btn-danger ms-2"
                                  type="button"
                                >
                                  <i className="fas fa-trash"></i>
                                </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Update Coupon - <span className="fw-bold">CODE1</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Code
              </label>
              <input
                type="text"
                placeholder="Code"
                value={"CODE1"}
                className="form-control"
                name=""
                id=""
              />
              <label for="exampleInputEmail1" class="form-label mt-3">
                Discount
              </label>
              <input
                type="text"
                placeholder="Discount"
                value={"20%"}
                className="form-control"
                name=""
                id=""
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Update Coupon <i className="fas fa-check-circle"> </i>
            </button>

            <Button className="ms-2" variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      <Modal show={showAddCoupon} onHide={handleAddCouponClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Code
              </label>
              <input
                type="text"
                placeholder="Code"
                value={"CODE1"}
                className="form-control"
                name=""
                id=""
              />
              <label for="exampleInputEmail1" class="form-label mt-3">
                Discount
              </label>
              <input
                type="text"
                placeholder="Discount"
                value={"20%"}
                className="form-control"
                name=""
                id=""
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Create Coupon <i className="fas fa-plus"> </i>
            </button>

            <Button
              className="ms-2"
              variant="secondary"
              onClick={handleAddCouponClose}
            >
              Close
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      <BaseFooter />
    </>
  );
}

export default Coupon;
