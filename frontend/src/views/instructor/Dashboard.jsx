import React from 'react'
import Sidebar from './Partials/Sidebar'
import Header from './Partials/Header'

import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'

function Dashboard() {
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
                            <div className="row mb-4">
                                <h4 className="mb-0 mb-4"> <i className='bi bi-grid-fill'></i> Dashboard</h4>
                                {/* Counter item */}

                                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-10 rounded-3">
                                        <span className="display-6 lh-1 text-orange mb-0">
                                            <i className="fas fa-tv fa-fw text-warning" />
                                        </span>
                                        <div className="ms-4">
                                            <div className="d-flex">
                                                <h5 className="purecounter mb-0 fw-bold" >0</h5>
                                            </div>
                                            <p className="mb-0 h6 fw-light">Total Courses</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Counter item */}
                                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div className="d-flex justify-content-center align-items-center p-4 bg-danger bg-opacity-10 rounded-3">
                                        <span className="display-6 lh-1 text-purple mb-0">
                                            <i className="fas fa-graduation-cap text-danger fa-fw" />
                                        </span>
                                        <div className="ms-4">
                                            <div className="d-flex">
                                                <h5 className="purecounter mb-0 fw-bold" >0</h5>
                                            </div>
                                            <p className="mb-0 h6 fw-light">Total Students</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Counter item */}
                                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                                    <div className="d-flex justify-content-center align-items-center p-4 bg-success bg-opacity-10 rounded-3">
                                        <span className="display-6 lh-1 text-success mb-0">
                                            <i className="fas fa-dollar-sign fa-fw" />
                                        </span>
                                        <div className="ms-4">
                                            <div className="d-flex">
                                                <h5 className="purecounter mb-0 fw-bold" >$0.00</h5>
                                            </div>
                                            <p className="mb-0 h6 fw-light">Total Revenue</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-4">
                                <div className="card-header">
                                    <h3 className="mb-0">Courses</h3>
                                    <span>
                                        Manage your courses from here, earch, view, edit or delete courses.
                                    </span>
                                </div>
                                <div className="card-body">
                                    <form className="row gx-3">
                                        <div className="col-lg-12 col-md-12 col-12 mb-lg-0 mb-2">
                                            <input
                                                type="search"
                                                className="form-control"
                                                placeholder="Search Your Courses"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="table-responsive overflow-y-hidden">
                                    <table className="table mb-0 text-nowrap table-hover table-centered text-nowrap">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Courses</th>
                                                <th>Enrolled</th>
                                                <th>Level</th>
                                                <th>Status</th>
                                                <th>Date Created</th>
                                                <th>Action</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <a href="#">
                                                                <img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-python.jpg" alt="course" className="rounded img-4by3-lg" style={{ width: "100px", height: "70px", borderRadius: "50%", objectFit: "cover" }} />
                                                            </a>
                                                        </div>
                                                        <div className="ms-3">
                                                            <h4 className="mb-1 h6">
                                                                <a href="#" className="text-inherit text-decoration-none text-dark">
                                                                    Create a Website with WordPress
                                                                </a>
                                                            </h4>
                                                            <ul className="list-inline fs-6 mb-0">
                                                                <li className="list-inline-item">
                                                                    <small><i className='bi bi-clock-history'></i>
                                                                        <span className='ms-1'>1hr 30 Mins</span>
                                                                    </small>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <small>
                                                                        <i className='bi bi-reception-4'></i>
                                                                        <span className='ms-1'>Beginner</span>
                                                                    </small>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <small>
                                                                        <i className='fas fa-dollar-sign'></i>
                                                                        <span>30.99</span>
                                                                    </small>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><p className='mt-3'>71</p></td>
                                                <td><p className='mt-3 badge bg-success' >Intermediate</p></td>
                                                <td><p className='mt-3 badge bg-warning text-dark' >Intermediate</p></td>
                                                <td><p className='mt-3'>07 Aug, 2025</p></td>
                                                <td>
                                                    <button className='btn btn-primary btn-sm mt-3 me-1'><i className='fas fa-edit'></i></button>
                                                    <button className='btn btn-danger btn-sm mt-3 me-1'><i className='fas fa-trash'></i></button>
                                                    <button className='btn btn-secondary btn-sm mt-3 me-1'><i className='fas fa-eye'></i></button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <a href="#">
                                                                <img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-react.jpg" alt="course" className="rounded img-4by3-lg" style={{ width: "100px", height: "70px", borderRadius: "50%", objectFit: "cover" }} />
                                                            </a>
                                                        </div>
                                                        <div className="ms-3">
                                                            <h4 className="mb-1 h6">
                                                                <a href="#" className="text-inherit text-decoration-none text-dark">
                                                                    Create a Website with WordPress
                                                                </a>
                                                            </h4>
                                                            <ul className="list-inline fs-6 mb-0">
                                                                <li className="list-inline-item">
                                                                    <small><i className='bi bi-clock-history'></i>
                                                                        <span className='ms-1'>1hr 30 Mins</span>
                                                                    </small>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <small>
                                                                        <i className='bi bi-reception-4'></i>
                                                                        <span className='ms-1'>Beginner</span>
                                                                    </small>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <small>
                                                                        <i className='fas fa-dollar-sign'></i>
                                                                        <span>30.99</span>
                                                                    </small>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><p className='mt-3'>71</p></td>
                                                <td><p className='mt-3 badge bg-success' >Intermediate</p></td>
                                                <td><p className='mt-3 badge bg-warning text-dark' >Intermediate</p></td>
                                                <td><p className='mt-3'>07 Aug, 2025</p></td>
                                                <td>
                                                    <button className='btn btn-primary btn-sm mt-3 me-1'><i className='fas fa-edit'></i></button>
                                                    <button className='btn btn-danger btn-sm mt-3 me-1'><i className='fas fa-trash'></i></button>
                                                    <button className='btn btn-secondary btn-sm mt-3 me-1'><i className='fas fa-eye'></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default Dashboard