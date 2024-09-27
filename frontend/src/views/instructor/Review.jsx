import React from 'react'
import Sidebar from './Partials/Sidebar'
import Header from './Partials/Header'

import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'

function Review() {
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
                                        <h3 className="mb-0">Reviews</h3>
                                        <span>You have full control to manage your own account setting.</span>
                                    </div>
                                </div>
                                {/* Card body */}
                                <div className="card-body">
                                    {/* Form */}
                                    <form className="row mb-4 gx-2">
                                        <div className="col-xl-7 col-lg-6 col-md-4 col-12 mb-2 mb-lg-0">
                                            <select className="form-select">
                                                <option value="">ALL</option>
                                                <option value="How to easily create a website">
                                                    How to easily create a website
                                                </option>
                                                <option value="Grunt: The JavaScript Task...">
                                                    Grunt: The JavaScript Task...
                                                </option>
                                                <option value="Vue js: The JavaScript Task...">
                                                    Vue js: The JavaScript Task...
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-4 col-12 mb-2 mb-lg-0">
                                            {/* Custom select */}
                                            <select className="form-select">
                                                <option value="">Rating</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-12 mb-2 mb-lg-0">
                                            {/* Custom select */}
                                            <select className="form-select">
                                                <option value="">Sort by</option>
                                                <option value="Newest">Newest</option>
                                                <option value="Oldest">Oldest</option>
                                            </select>
                                        </div>
                                    </form>
                                    {/* List group */}
                                    <ul className="list-group list-group-flush">
                                        {/* List group item */}
                                        <li className="list-group-item p-4 shadow rounded-3">
                                            <div className="d-flex">
                                                <img
                                                    src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-1.jpg"
                                                    alt="avatar"
                                                    className="rounded-circle avatar-lg"
                                                    style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover" }}
                                                />
                                                <div className="ms-3 mt-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h4 className="mb-0">Eleanor Pena</h4>
                                                            <span>2 hour ago</span>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                data-bs-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Report Abuse"
                                                            >
                                                                <i className="fe fe-flag" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <span className="fs-6 me-1 align-top">
                                                            <i className='fas fa-star text-warning'></i>
                                                            <i className='fas fa-star text-warning'></i>
                                                            <i className='fas fa-star text-warning'></i>
                                                            <i className='fas fa-star text-warning'></i>
                                                            <i className='fas fa-star text-warning'></i>
                                                        </span>
                                                        <span className="me-1">for</span>
                                                        <span className="h5">
                                                            Learn React For Beginners
                                                        </span>
                                                        <p className="mt-2">
                                                            <span className='fw-bold me-2'>Review <i className='fas fa-arrow-right'></i></span>
                                                            The course is very interesting and insightful. I think it
                                                            should have more downloadable resources  downloadable resources
                                                        </p>
                                                        <p className="mt-2">
                                                            <span className='fw-bold me-2'>Response <i className='fas fa-arrow-right'></i></span>
                                                            Thanks for the review!
                                                        </p>
                                                        <p>
                                                            <button class="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                                Send Response
                                                            </button>
                                                        </p>
                                                        <div class="collapse" id="collapseExample">
                                                            <div class="card card-body">
                                                                <form>
                                                                    <div class="mb-3">
                                                                        <label for="exampleInputEmail1" class="form-label">Write Response</label>
                                                                        <textarea name="" id="" cols="30" className='form-control' rows="4"></textarea>
                                                                    </div>

                                                                    <button type="submit" class="btn btn-primary">Send Response <i className='fas fa-paper-plane'> </i></button>
                                                                </form>
                                                            </div>
                                                        </div>

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

            <BaseFooter />
        </>
    )
}

export default Review
