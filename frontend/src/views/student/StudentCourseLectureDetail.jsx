import React from 'react'
import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'
import Sidebar from './Partials/Sidebar'
import Header from './Partials/Header'

import ReactPlayer from 'react-player'

function StudentCourseLectureDetail() {
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
                            <section className="bg-blue py-7">
                                <div className="container">
                                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width={"100%"} height={600} />
                                </div>
                            </section>
                            <section className="mt-4">
                                <div className="container">
                                    <div className="row">
                                        {/* Main content START */}
                                        <div className="col-12">
                                            <div className="card shadow rounded-2 p-0 mt-n5">
                                                {/* Tabs START */}
                                                <div className="card-header border-bottom px-4 pt-3 pb-0">
                                                    <ul
                                                        className="nav nav-bottom-line py-0"
                                                        id="course-pills-tab"
                                                        role="tablist"
                                                    >
                                                        {/* Tab item */}
                                                        <li className="nav-item me-2 me-sm-4" role="presentation">
                                                            <button className="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill" data-bs-target="#course-pills-1" type="button" role="tab" aria-controls="course-pills-1" aria-selected="true">
                                                                Course Lectures
                                                            </button>
                                                        </li>
                                                        {/* Tab item */}
                                                        <li className="nav-item me-2 me-sm-4" role="presentation">
                                                            <button
                                                                className="nav-link mb-2 mb-md-0"
                                                                id="course-pills-tab-2"
                                                                data-bs-toggle="pill"
                                                                data-bs-target="#course-pills-2"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="course-pills-2"
                                                                aria-selected="false"
                                                            >
                                                                Notes
                                                            </button>
                                                        </li>
                                                        {/* Tab item */}
                                                        <li className="nav-item me-2 me-sm-4" role="presentation">
                                                            <button
                                                                className="nav-link mb-2 mb-md-0"
                                                                id="course-pills-tab-3"
                                                                data-bs-toggle="pill"
                                                                data-bs-target="#course-pills-3"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="course-pills-3"
                                                                aria-selected="false"
                                                            >
                                                                Discussion
                                                            </button>
                                                        </li>

                                                        <li className="nav-item me-2 me-sm-4" role="presentation">
                                                            <button
                                                                className="nav-link mb-2 mb-md-0"
                                                                id="course-pills-tab-4"
                                                                data-bs-toggle="pill"
                                                                data-bs-target="#course-pills-4"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="course-pills-4"
                                                                aria-selected="false"
                                                            >
                                                                Leave a Review
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* Tabs END */}
                                                {/* Tab contents START */}
                                                <div className="card-body p-sm-4">
                                                    <div className="tab-content" id="course-pills-tabContent">
                                                        {/* Content START */}
                                                        <div
                                                            className="tab-pane fade show active"
                                                            id="course-pills-1"
                                                            role="tabpanel"
                                                            aria-labelledby="course-pills-tab-1"
                                                        >
                                                            {/* Accordion START */}
                                                            <div
                                                                className="accordion accordion-icon accordion-border"
                                                                id="accordionExample2"
                                                            >
                                                                {/* Item */}
                                                                <div className="accordion-item mb-3">
                                                                    <h6 className="accordion-header font-base" id="heading-1">
                                                                        <button
                                                                            className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse-1"
                                                                            aria-expanded="true"
                                                                            aria-controls="collapse-1"
                                                                        >
                                                                            Introduction of Digital Marketing
                                                                            <span className="small ms-0 ms-sm-2">
                                                                                (3 Lectures)
                                                                            </span>
                                                                        </button>
                                                                    </h6>
                                                                    <div
                                                                        id="collapse-1"
                                                                        className="accordion-collapse collapse show"
                                                                        aria-labelledby="heading-1"
                                                                        data-bs-parent="#accordionExample2"
                                                                    >
                                                                        <div className="accordion-body mt-3">
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Introduction
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">2m 10s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">

                                                                                        What is Digital Marketing What is Digital
                                                                                        Marketing
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0 text-truncate">15m 10s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-lock me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate text-muted ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Type of Digital Marketing
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">18m 10s</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Item */}
                                                                <div className="accordion-item mb-3">
                                                                    <h6 className="accordion-header font-base" id="heading-2">
                                                                        <button
                                                                            className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse-2"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapse-2"
                                                                        >
                                                                            Customer Life cycle
                                                                            <span className="small ms-0 ms-sm-2">
                                                                                (4 Lectures)
                                                                            </span>
                                                                        </button>
                                                                    </h6>
                                                                    <div
                                                                        id="collapse-2"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="heading-2"
                                                                        data-bs-parent="#accordionExample2"
                                                                    >
                                                                        {/* Accordion body START */}
                                                                        <div className="accordion-body mt-3">
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        What is Digital Marketing
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">11m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        15 Tips for Writing Magnetic Headlines
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0 text-truncate">25m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        How to Write Like Your Customers Talk
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">11m 30s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <div>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                            data-bs-toggle="modal"
                                                                                            data-bs-target="#exampleModal"
                                                                                        >
                                                                                            <i className="fas fa-play me-0" />
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="row g-sm-0 align-items-center">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">
                                                                                                How to Flip Features Into Benefits
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="badge text-bg-orange ms-2 ms-md-0">
                                                                                                <i className="fas fa-lock fa-fw me-1" />
                                                                                                Premium
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">
                                                                                    35m 30s
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        {/* Accordion body END */}
                                                                    </div>
                                                                </div>
                                                                {/* Item */}
                                                                <div className="accordion-item mb-3">
                                                                    <h6 className="accordion-header font-base" id="heading-5">
                                                                        <button
                                                                            className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse-5"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapse-5"
                                                                        >
                                                                            What is Search Engine Optimization(SEO)
                                                                            <span className="small ms-0 ms-sm-2">
                                                                                (10 Lectures)
                                                                            </span>
                                                                        </button>
                                                                    </h6>
                                                                    <div
                                                                        id="collapse-5"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="heading-5"
                                                                        data-bs-parent="#accordionExample2"
                                                                    >
                                                                        {/* Accordion body START */}
                                                                        <div className="accordion-body mt-3">
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Introduction
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">1m 10s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Overview of SEO
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0 text-truncate">11m 03s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        How to SEO Optimise Your Homepage
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">15m 00s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        How to SEO Optimise Your Homepage
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">15m 00s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        How to Write Title Tags Search Engines Love
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">25m 30s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        SEO Keyword Planning
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">18m 10s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        eCommerce SEO
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">28m 10s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Internal and External Links
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">45m 10s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Mobile SEO
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">8m 10s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Off-page SEO
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">18m 10s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Measuring SEO Effectiveness
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">35m 10s</p>
                                                                            </div>
                                                                        </div>
                                                                        {/* Accordion body END */}
                                                                    </div>
                                                                </div>
                                                                {/* Item */}
                                                                <div className="accordion-item mb-3">
                                                                    <h6 className="accordion-header font-base" id="heading-6">
                                                                        <button
                                                                            className="accordion-button fw-bold collapsed rounded d-block d-sm-flex d-inline-block"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse-6"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapse-6"
                                                                        >
                                                                            Facebook ADS
                                                                            <span className="small ms-0 ms-sm-2">
                                                                                (3 Lectures)
                                                                            </span>
                                                                        </button>
                                                                    </h6>
                                                                    <div
                                                                        id="collapse-6"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="heading-6"
                                                                        data-bs-parent="#accordionExample2"
                                                                    >
                                                                        {/* Accordion body START */}
                                                                        <div className="accordion-body mt-3">
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Introduction
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">1m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Creating Facebook Pages
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0 text-truncate">25m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Facebook Page Custom URL
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">11m 30s</p>
                                                                            </div>
                                                                        </div>
                                                                        {/* Accordion body END */}
                                                                    </div>
                                                                </div>
                                                                {/* Item */}
                                                                <div className="accordion-item mb-3">
                                                                    <h6 className="accordion-header font-base" id="heading-7">
                                                                        <button
                                                                            className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse-7"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapse-7"
                                                                        >
                                                                            YouTube Marketing
                                                                            <span className="small ms-0 ms-sm-2">
                                                                                (5 Lectures)
                                                                            </span>
                                                                        </button>
                                                                    </h6>
                                                                    <div
                                                                        id="collapse-7"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="heading-7"
                                                                        data-bs-parent="#accordionExample2"
                                                                    >
                                                                        {/* Accordion body START */}
                                                                        <div className="accordion-body mt-3">
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Video Flow
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">25m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Webmaster Tool
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0 text-truncate">15m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Featured Contents on Channel
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">32m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <div>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                            data-bs-toggle="modal"
                                                                                            data-bs-target="#exampleModal"
                                                                                        >
                                                                                            <i className="fas fa-play me-0" />
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="row g-sm-0 align-items-center">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">
                                                                                                Managing Comments
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="badge text-bg-orange ms-2 ms-md-0">
                                                                                                <i className="fas fa-lock fa-fw me-1" />
                                                                                                Premium
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">
                                                                                    20m 20s
                                                                                </p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <div>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                            data-bs-toggle="modal"
                                                                                            data-bs-target="#exampleModal"
                                                                                        >
                                                                                            <i className="fas fa-play me-0" />
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="row g-sm-0 align-items-center">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">
                                                                                                Channel Analytics
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="badge text-bg-orange ms-2 ms-md-0">
                                                                                                <i className="fas fa-lock fa-fw me-1" />
                                                                                                Premium
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">
                                                                                    18m 20s
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        {/* Accordion body END */}
                                                                    </div>
                                                                </div>
                                                                {/* Item */}
                                                                <div className="accordion-item mb-3">
                                                                    <h6 className="accordion-header font-base" id="heading-8">
                                                                        <button
                                                                            className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse-8"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapse-8"
                                                                        >
                                                                            Why SEO
                                                                            <span className="small ms-0 ms-sm-2">
                                                                                (8 Lectures)
                                                                            </span>
                                                                        </button>
                                                                    </h6>
                                                                    <div
                                                                        id="collapse-8"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="heading-8"
                                                                        data-bs-parent="#accordionExample2"
                                                                    >
                                                                        {/* Accordion body START */}
                                                                        <div className="accordion-body mt-3">
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Understanding SEO
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">20m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        On-Page SEO
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0 text-truncate">15m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Local SEO
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">16m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Measuring SEO Effectiveness
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">12m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <div>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                            data-bs-toggle="modal"
                                                                                            data-bs-target="#exampleModal"
                                                                                        >
                                                                                            <i className="fas fa-play me-0" />
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="row g-sm-0 align-items-center">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">
                                                                                                Keywords in Blog and Articles
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="badge text-bg-orange ms-2 ms-md-0">
                                                                                                <i className="fas fa-lock fa-fw me-1" />
                                                                                                Premium
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">
                                                                                    15m 20s
                                                                                </p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <div>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                            data-bs-toggle="modal"
                                                                                            data-bs-target="#exampleModal"
                                                                                        >
                                                                                            <i className="fas fa-play me-0" />
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="row g-sm-0 align-items-center">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">
                                                                                                SEO Keyword Planning
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="badge text-bg-orange ms-2 ms-md-0">
                                                                                                <i className="fas fa-lock fa-fw me-1" />
                                                                                                Premium
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">
                                                                                    36m 12s
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        {/* Accordion body END */}
                                                                    </div>
                                                                </div>
                                                                {/* Item */}
                                                                <div className="accordion-item mb-3">
                                                                    <h6 className="accordion-header font-base" id="heading-9">
                                                                        <button
                                                                            className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse-9"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapse-9"
                                                                        >
                                                                            Google tag manager
                                                                            <span className="small ms-0 ms-sm-2">
                                                                                (4 Lectures)
                                                                            </span>
                                                                        </button>
                                                                    </h6>
                                                                    <div
                                                                        id="collapse-9"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="heading-9"
                                                                        data-bs-parent="#accordionExample2"
                                                                    >
                                                                        {/* Accordion body START */}
                                                                        <div className="accordion-body mt-3">
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        G+ Pages Ranks Higher
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">13m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Adding Contact Links
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0 text-truncate">7m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Google Hangouts
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">12m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">

                                                                                        Google Local Business
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0 text-truncate">7m 20s</p>
                                                                            </div>
                                                                        </div>
                                                                        {/* Accordion body END */}
                                                                    </div>
                                                                </div>
                                                                {/* Item */}
                                                                <div className="accordion-item mb-0">
                                                                    <h6
                                                                        className="accordion-header font-base"
                                                                        id="heading-10"
                                                                    >
                                                                        <button
                                                                            className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse-10"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapse-10"
                                                                        >
                                                                            Integration with Website
                                                                            <span className="small ms-0 ms-sm-2">
                                                                                (3 Lectures)
                                                                            </span>
                                                                        </button>
                                                                    </h6>
                                                                    <div
                                                                        id="collapse-10"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="heading-10"
                                                                        data-bs-parent="#accordionExample2"
                                                                    >
                                                                        {/* Accordion body START */}
                                                                        <div className="accordion-body mt-3">
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Creating LinkedIn Account
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0 text-truncate">13m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        Advance Searching
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0">31m 20s</p>
                                                                            </div>
                                                                            <hr /> {/* Divider */}
                                                                            {/* Course lecture */}
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div className="position-relative d-flex align-items-center">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                                                                    >
                                                                                        <i className="fas fa-play me-0" />
                                                                                    </a>
                                                                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                                                                        LinkedIn Mobile App
                                                                                    </span>
                                                                                </div>
                                                                                <p className="mb-0 text-truncate">25m 20s</p>
                                                                            </div>
                                                                        </div>
                                                                        {/* Accordion body END */}
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            {/* Accordion END */}
                                                        </div>

                                                        <div
                                                            className="tab-pane fade"
                                                            id="course-pills-2"
                                                            role="tabpanel"
                                                            aria-labelledby="course-pills-tab-2"
                                                        >
                                                            <div className="card">
                                                                <div className="card-header border-bottom p-0 pb-3">
                                                                    <div className="d-sm-flex justify-content-between align-items-center">
                                                                        <h4 className="mb-0 p-3">All Notes</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="card-body p-0 pt-3">
                                                                    {/* Note item start */}
                                                                    <div className="row g-4 p-3">
                                                                        <div className="col-sm-10 col-xl-11">
                                                                            <h5> What is Digital Marketing What is Digital Marketing</h5>
                                                                            <p>
                                                                                Arranging rapturous did believe him all had supported.
                                                                                Supposing so be resolving breakfast am or perfectly.
                                                                                It drew a hill from me. Valley by oh twenty direct me
                                                                                so. Departure defective arranging rapturous did
                                                                                believe him all had supported. Family months lasted
                                                                                simple set nature vulgar him. Picture for attempt joy
                                                                                excited ten carried manners talking how. Family months
                                                                                lasted simple set nature vulgar him. Picture for
                                                                                attempt joy excited ten carried manners talking how.
                                                                            </p>
                                                                            {/* Buttons */}
                                                                            <div className="hstack gap-3 flex-wrap">
                                                                                <a href="#" className="btn btn-success mb-0">
                                                                                    <i className="bi bi-pencil-square me-2" /> Edit
                                                                                </a>
                                                                                <a href="#" className="btn btn-danger mb-0">
                                                                                    <i className="bi bi-trash me-2" /> Delete
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="tab-pane fade"
                                                            id="course-pills-3"
                                                            role="tabpanel"
                                                            aria-labelledby="course-pills-tab-3"
                                                        >
                                                            <div className="card">
                                                                {/* Card header */}
                                                                <div className="card-header border-bottom p-0 pb-3">
                                                                    {/* Title */}
                                                                    <h4 className="mb-3 p-3">Discussion</h4>
                                                                    <form className="row g-4 p-3">
                                                                        {/* Search */}
                                                                        <div className="col-sm-6 col-lg-9">
                                                                            <div className="position-relative">
                                                                                <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                                                                                <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                                                                                    <i className="fas fa-search fs-6 " />
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6 col-lg-3">
                                                                            <a
                                                                                href="#"
                                                                                className="btn btn-primary mb-0 w-100"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#modalCreatePost"
                                                                            >
                                                                                Ask Question
                                                                            </a>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                {/* Card body */}
                                                                <div className="card-body p-0 pt-3">
                                                                    <div className="vstack gap-3 p-3">
                                                                        {/* Question item START */}
                                                                        <div className="shadow rounded-3 p-3">
                                                                            <div className="d-sm-flex justify-content-sm-between mb-3">
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="avatar avatar-sm flex-shrink-0">
                                                                                        <img
                                                                                            src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg"
                                                                                            className="avatar-img rounded-circle"
                                                                                            alt="avatar"
                                                                                            style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="ms-2">
                                                                                        <h6 className="mb-0">
                                                                                            <a href="#" className='text-decoration-none text-dark'>Angelina Poi</a>
                                                                                        </h6>
                                                                                        <small>Asked 10 Hours ago</small>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <h5>How can i fix this bug?</h5>
                                                                            <p className="mb-2">
                                                                                As it so contrasted oh estimating instrument. Size
                                                                                like body someone had. Are conduct viewing boy minutes
                                                                                warrant the expense? Tolerably behavior may admit
                                                                                daughters offending her ask own. Praise effect wishes
                                                                                change way and any wanted. Lively use looked latter
                                                                                regard had. Do he it part more last in.
                                                                            </p>
                                                                            <button className='btn btn-primary btn-sm mb-3 mt-3'>Join Conversation <i className='fas fa-arrow-right'></i></button>
                                                                        </div>

                                                                        <div className="shadow rounded-3 p-3">
                                                                            <div className="d-sm-flex justify-content-sm-between mb-3">
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="avatar avatar-sm flex-shrink-0">
                                                                                        <img
                                                                                            src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-2.jpg"
                                                                                            className="avatar-img rounded-circle"
                                                                                            alt="avatar"
                                                                                            style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="ms-2">
                                                                                        <h6 className="mb-0">
                                                                                            <a href="#" className='text-decoration-none text-dark'>Angelina Poi</a>
                                                                                        </h6>
                                                                                        <small>Asked 10 Hours ago</small>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <h5>How can i fix this bug?</h5>
                                                                            <p className="mb-2">
                                                                                As it so contrasted oh estimating instrument. Size
                                                                                like body someone had. Are conduct viewing boy minutes
                                                                                warrant the expense? Tolerably behavior may admit
                                                                                daughters offending her ask own. Praise effect wishes
                                                                                change way and any wanted. Lively use looked latter
                                                                                regard had. Do he it part more last in.
                                                                            </p>
                                                                            <button className='btn btn-primary btn-sm mb-3 mt-3'>Join Conversation <i className='fas fa-arrow-right'></i></button>
                                                                        </div>

                                                                        <div className="border p-2 p-sm-4 rounded-3">
                                                                            <ul className="list-unstyled mb-0" style={{ overflowY: "scroll", height: "500px" }}>
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

                                                                            <form class="w-100 d-flex">
                                                                                <textarea class="one form-control pe-4 bg-light w-75" id="autoheighttextarea" rows="1" placeholder="Write a message..."></textarea>
                                                                                <button class="btn btn-primary ms-2 mb-0 w-25" type="button">Post <i className='fas fa-paper-plane'></i></button>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="tab-pane fade"
                                                            id="course-pills-4"
                                                            role="tabpanel"
                                                            aria-labelledby="course-pills-tab-4"
                                                        >
                                                            <div className="card">
                                                                {/* Card header */}
                                                                <div className="card-header border-bottom p-0 pb-3">
                                                                    {/* Title */}
                                                                    <h4 className="mb-3 p-3">Leave a Review</h4>
                                                                    <div className="mt-2">
                                                                        <form className="row g-3 p-3">

                                                                            {/* Rating */}
                                                                            <div className="col-12 bg-light-input">
                                                                                <select
                                                                                    id="inputState2"
                                                                                    className="form-select js-choice"
                                                                                >
                                                                                    <option selected="">★★★★★ (5/5)</option>
                                                                                    <option>★★★★☆ (4/5)</option>
                                                                                    <option>★★★☆☆ (3/5)</option>
                                                                                    <option>★★☆☆☆ (2/5)</option>
                                                                                    <option>★☆☆☆☆ (1/5)</option>
                                                                                </select>
                                                                            </div>
                                                                            {/* Message */}
                                                                            <div className="col-12 bg-light-input">
                                                                                <textarea
                                                                                    className="form-control"
                                                                                    id="exampleFormControlTextarea1"
                                                                                    placeholder="Your review"
                                                                                    rows={3}
                                                                                    defaultValue={""}
                                                                                />
                                                                            </div>
                                                                            {/* Button */}
                                                                            <div className="col-12">
                                                                                <button type="submit" className="btn btn-primary mb-0">
                                                                                    Post Review
                                                                                </button>
                                                                            </div>
                                                                        </form>
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
                        </div>
                    </div>
                </div>
            </section>

            <BaseFooter />
        </>
    )
}

export default StudentCourseLectureDetail