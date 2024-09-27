import React from 'react'
import { Link } from 'react-router-dom'

import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'
import Sidebar from './Partials/Sidebar'
import Header from './Partials/Header'

function Wishlist() {
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
                            <h4 className="mb-0 mb-4"> <i className='fas fa-heart'></i> Wishlist </h4>



                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                        <div className="col-lg-4">
                                            {/* Card */}
                                            <div className="card card-hover">
                                                <Link to={`/course-detail/slug/`}>
                                                    <img
                                                        src="https://geeksui.codescandy.com/geeks/assets/images/course/course-css.jpg"
                                                        alt="course"
                                                        className="card-img-top"
                                                    />
                                                </Link>
                                                {/* Card Body */}
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <span className="badge bg-info">Intermediate</span>
                                                        <a href="#" className="fs-5">
                                                            <i className="fas fa-heart text-danger align-middle" />
                                                        </a>
                                                    </div>
                                                    <h4 className="mb-2 text-truncate-line-2 ">
                                                        <Link to={`/course-detail/slug/`} className="text-inherit text-decoration-none text-dark fs-5">
                                                            How to easily create a website with JavaScript
                                                        </Link>
                                                    </h4>
                                                    <small>By: Claire Evans</small> <br />
                                                    <small>16k Students</small> <br />
                                                    <div className="lh-1 mt-3 d-flex">
                                                        <span className="align-text-top">
                                                            <span className="fs-6">
                                                                <i className='fas fa-star text-warning'></i>
                                                                <i className='fas fa-star text-warning'></i>
                                                                <i className='fas fa-star text-warning'></i>
                                                                <i className='fas fa-star text-warning'></i>
                                                                <i className='fas fa-star-half text-warning'></i>
                                                            </span>
                                                        </span>
                                                        <span className="text-warning">4.5</span>
                                                        <span className="fs-6 ms-2">(9,300)</span>
                                                    </div>
                                                </div>
                                                {/* Card Footer */}
                                                <div className="card-footer">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col">
                                                            <h5 className="mb-0">$39.00</h5>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="#" className="text-inherit text-decoration-none btn btn-primary">
                                                                <i className="fas fa-shopping-cart text-primary me-2 text-white" />
                                                                Enroll Now
                                                            </a>
                                                            <a href="#" className="text-inherit text-decoration-none btn btn-danger ms-2">
                                                                <i className="fas fa-trash text-white" />
                                                            </a>
                                                        </div>

                                                    </div>
                                                </div>
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
    )
}

export default Wishlist