import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MainWrapper from './layouts/MainWrapper'
import PrivateRoute from './layouts/PrivatesRoute'


import { CartContext } from './views/plugin/Context'
import CartId from './views/plugin/CartId'
import apiInstance from './utils/axios'

import Register from './views/auth/Register'
import Login from './views/auth/Login'
import Logout from './views/auth/Logout'
import ForgotPassword from './views/auth/ForgotPassword'
import CreateNewPassword from './views/auth/CreateNewPassword'
import Index from './views/base/Index'
import CourseDetail from './views/base/CourseDetail'
import Cart from './views/base/Cart'
import Checkout from './views/base/Checkout'
import Success from './views/base/Success'
import Search from './views/base/Search'
import StudentDashboard from './views/student/Dashboard'
import StudentCourses from './views/student/Courses'
import StudentCourseDetail from './views/student/CourseDetail'

function App() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    apiInstance.get(`course/cart-list/${CartId()}/`).then((res) => {
      setCartCount(res.data?.length);
    })
    console.log(cartCount)
  }, [])

  return (
    <CartContext.Provider value={[cartCount, setCartCount]}>
      <BrowserRouter>
        <MainWrapper>
          {/* Children */}
          <Routes>
            <Route path='/register/' element={<Register />} />
            <Route path='/login/' element={<Login />} />
            <Route path='/logout/' element={<Logout />} />
            <Route path='/forgot-password/' element={<ForgotPassword />} />
            <Route path='/create-new-password/' element={<CreateNewPassword />} />

            {/* Base routes */}
            <Route path="/" element={<Index />} />
            <Route path="/course-detail/:slug/" element={<CourseDetail />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/checkout/:order_oid/" element={<Checkout />} />
            <Route
              path="/payment-success/:order_oid/"
              element={<Success />}
            />
            <Route path="/search/" element={<Search />} />
            {/* Student Routes */}
            <Route path="/student/dashboard/" element={<StudentDashboard />} />
            <Route path="/student/courses/" element={<StudentCourses />} />
            <Route path="/student/courses/:enrollment_id/" element={<StudentCourseDetail />} />
          </Routes>
        </MainWrapper>
      </BrowserRouter>
    </CartContext.Provider>

  )
}

export default App
