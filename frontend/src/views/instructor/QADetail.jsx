import React from 'react'
import { Link } from 'react-router-dom'

import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'
import Sidebar from './Partials/Sidebar'
import Header from './Partials/Header'

function QADetail() {
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
                            <h4 className="mb-0 mb-4"> <i className='fas fa-envelope'></i> Q/A - Angular Masterclass Course</h4>

                            <div className="card mb-4">
                                <div className="card-header">
                                    <span>Course: <b>Angular Masterclass Course</b></span> <br />
                                    <span>Questions: <b>16</b></span>
                                </div>
                                <div className="p-2 p-sm-4">
                                    <ul className="list-unstyled mb-0" style={{ overflowY: "scroll", height: "500px" }}>
                                        <li className="comment-item mb-3">
                                            <div className="d-flex">
                                                <div className="avatar avatar-sm flex-shrink-0">
                                                    <a href="#">
                                                        <img className="avatar-img rounded-circle" src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-2.jpg" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} alt="womans image" />
                                                    </a>
                                                </div>
                                                <div className="ms-2">
                                                    {/* Comment by */}
                                                    <div className="bg-light p-3 rounded w-100">
                                                        <div className="d-flex w-100 justify-content-center">
                                                            <div className="me-2 ">
                                                                <h6 className="mb-1 lead fw-bold">
                                                                    <a href="#!" className='text-decoration-none text-dark'> Jenny Adga </a><br />
                                                                    <span style={{ fontSize: "12px", color: "gray" }}>5hrs Ago</span>
                                                                </h6>
                                                                <p className="mb-0 mt-3  ">Removed demands expense account
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>

                                        <li className="comment-item mb-3">
                                            <div className="d-flex">
                                                <div className="avatar avatar-sm flex-shrink-0">
                                                    <a href="#">
                                                        <img className="avatar-img rounded-circle" src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-1.jpg" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} alt="womans image" />
                                                    </a>
                                                </div>
                                                <div className="ms-2">
                                                    {/* Comment by */}
                                                    <div className="bg-light p-3 rounded w-100">
                                                        <div className="d-flex w-100 justify-content-center">
                                                            <div className="me-2 ">
                                                                <h6 className="mb-1 lead fw-bold">
                                                                    <a href="#!" className='text-decoration-none text-dark'> Sam Freddy </a><br />
                                                                    <span style={{ fontSize: "12px", color: "gray" }}>5hrs Ago</span>
                                                                </h6>
                                                                <p className="mb-0 mt-3  ">Removed demands expense account from the debby building in a hall  town tak with
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>

                                        <li className="comment-item mb-3">
                                            <div className="d-flex">
                                                <div className="avatar avatar-sm flex-shrink-0">
                                                    <a href="#">
                                                        <img className="avatar-img rounded-circle" src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} alt="womans image" />
                                                    </a>
                                                </div>
                                                <div className="ms-2">
                                                    {/* Comment by */}
                                                    <div className="bg-light p-3 rounded w-100">
                                                        <div className="d-flex w-100 justify-content-center">
                                                            <div className="me-2 ">
                                                                <h6 className="mb-1 lead fw-bold">
                                                                    <a href="#!" className='text-decoration-none text-dark'> Louis Ferguson </a><br />
                                                                    <span style={{ fontSize: "12px", color: "gray" }}>5hrs Ago</span>
                                                                </h6>
                                                                <p className="mb-0 mt-3  ">Removed demands expense account
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>

                                        <li className="comment-item mb-3">
                                            <div className="d-flex">
                                                <div className="avatar avatar-sm flex-shrink-0">
                                                    <a href="#">
                                                        <img className="avatar-img rounded-circle" src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} alt="womans image" />
                                                    </a>
                                                </div>
                                                <div className="ms-2">
                                                    {/* Comment by */}
                                                    <div className="bg-light p-3 rounded w-100">
                                                        <div className="d-flex w-100 justify-content-center">
                                                            <div className="me-2 ">
                                                                <h6 className="mb-1 lead fw-bold">
                                                                    <a href="#!" className='text-decoration-none text-dark'> Louis Ferguson </a><br />
                                                                    <span style={{ fontSize: "12px", color: "gray" }}>5hrs Ago</span>
                                                                </h6>
                                                                <p className="mb-0 mt-3  ">Removed demands expense account
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <form class="w-100 row">
                                        <div className="col-lg-10">
                                            <textarea class="one form-control pe-4 bg-light w-100" id="autoheighttextarea" rows="2" placeholder="Write a message..."></textarea>
                                        </div>
                                        <div className="col-lg-2">
                                            <button class="btn btn-primary ms-2 mb-0 w-100" type="button">Post <i className='fas fa-paper-plane'></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BaseFooter />
        </>
    )
}

export default QADetail