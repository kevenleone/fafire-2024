import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import Allocation from './pages/Allocation';
import Course from './pages/Course';
import Department from './pages/Department';
import Home from './pages/Home';
import Layout from './components/Layout';
import Professor from './pages/Professor';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path='/' element={<Home />} />

          <Route path='/allocation' element={<Allocation />} />
          <Route path='/course' element={<Course />} />
          <Route path='/department' element={<Department />} />
          <Route path='/professor' element={<Professor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
