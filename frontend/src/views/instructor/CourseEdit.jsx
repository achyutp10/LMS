import Sidebar from './Partials/Sidebar'
import Header from './Partials/Header'
import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'
import { Link } from 'react-router-dom';


function CourseEdit() {
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
              <>
                <section className="py-4 py-lg-6 bg-primary rounded-3">
                  <div className="container">
                    <div className="row">
                      <div className="offset-lg-1 col-lg-10 col-md-12 col-12">
                        <div className="d-lg-flex align-items-center justify-content-between">
                          {/* Content */}
                          <div className="mb-4 mb-lg-0">
                            <h1 className="text-white mb-1">Update Course</h1>
                            <p className="mb-0 text-white lead fw-bold">
                              Learn React.Js 2024
                            </p>
                          </div>
                          <div>
                            <Link to="/instructor/courses/" className="btn" style={{ backgroundColor: "white" }}> <i className='fas fa-arrow-left'></i> Back to Course</Link>
                            <a href="instructor-courses.html" className="btn btn-dark ms-2">Save <i className='fas fa-check-circle'></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="pb-8 mt-5">
                  <div className="card mb-3">

                    {/* Basic Info Section */}
                    <div className="card-header border-bottom px-4 py-3">
                      <h4 className="mb-0">Basic Information</h4>
                    </div>
                    <div className="card-body">
                      <label htmlFor="courseTHumbnail" className="form-label">Thumbnail Preview</label>
                      <img style={{ width: "100%", height: "330px", objectFit: "cover", borderRadius: "10px" }} className='mb-4' src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" alt="" />
                      <div className="mb-3">
                        <label htmlFor="courseTHumbnail" className="form-label">Course Thumbnail</label>
                        <input
                          id="courseTHumbnail"
                          className="form-control"
                          type="file"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="courseTitle" className="form-label">
                          Intro Video
                        </label>
                        <input
                          id="introvideo"
                          className="form-control"
                          type="file"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="courseTitle" className="form-label">
                          Title
                        </label>
                        <input
                          id="courseTitle"
                          className="form-control"
                          type="text"
                          placeholder=""
                        />
                        <small>Write a 60 character course title.</small>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Courses category</label>
                        <select className="form-select">
                          <option value="">-------------</option>
                          <option value="React">React</option>
                          <option value="Javascript">Javascript</option>
                          <option value="HTML">HTML</option>
                          <option value="Vue">Vue js</option>
                          <option value="Gulp">Gulp js</option>
                        </select>
                        <small>
                          Help people find your courses by choosing categories
                          that represent your course.
                        </small>
                      </div>
                      <div className="mb-3">
                        <option value="">-------------</option>
                        <select className="form-select">
                          <option value="">Select level</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="Beignners">Beignners</option>
                          <option value="Advance">Advance</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Course Description</label>
                        <textarea name="" className='form-control' id="" cols="30" rows="10"></textarea>
                        <small>A brief summary of your courses.</small>
                      </div>
                      <label htmlFor="courseTitle" className="form-label">
                        Price
                      </label>
                      <input
                        id="courseTitle"
                        className="form-control"
                        type="number"
                        placeholder="$20.99"
                      />
                    </div>


                    {/* Curriculum Section */}
                    <div className="card-header border-bottom px-4 py-3">
                      <h4 className="mb-0">Curriculum</h4>
                    </div>
                    <div className="card-body ">
                      <div className='border p-2 rounded-3 mb-3' style={{ backgroundColor: "#ededed" }}>
                        <div className="d-flex mb-4">
                          <input
                            type="text"
                            placeholder="Section Name"
                            required
                            className='form-control'
                          />
                          <button className='btn btn-danger ms-2' type='button' ><i className='fas fa-trash'></i></button>
                        </div>

                        <div className=' mb-2 mt-2 shadow p-2 rounded-3 ' style={{ border: "1px #bdbdbd solid" }}>
                          <input
                            type="text"
                            placeholder="Lesson Title"
                            className='form-control me-1 mt-2'
                            name='title'
                          />
                          <textarea name="" id="" cols="30" className='form-control mt-2' placeholder='Lesson Description' rows="4"></textarea>
                          <input
                            type="file"
                            placeholder="Item Price"
                            className='form-control me-1 mt-2'
                            name='price'
                          />
                          <button className='btn btn-sm btn-outline-danger me-2 mt-2' type='button'>Delete Lesson <i className='fas fa-trash'></i></button>
                        </div>
                        <button className='btn btn-sm btn-primary mt-2' type='button'>+ Add Lesson</button>
                      </div>
                      <button className='btn btn-sm btn-secondary w-100 mt-2' type='button'>+ New Section</button>
                    </div>

                  </div>
                  <button className='btn btn-lg btn-success w-100 mt-2' type='button'>Save Changes <i className='fas fa-check-circle'></i></button>
                </section>
              </>

            </div>

          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  )
}

export default CourseEdit