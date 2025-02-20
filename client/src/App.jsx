import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import Layout from "./layouts/Layout"
import Home from "./pages/Home";
import AdvocateCivilComplaintForm from "./pages/AdvocatePage/AdvocateCivilComplaintForm"
import UserComplaintForm from "./pages/Userpage/userComplaintForm";
import LoginPage from "./pages/Userpage/Loginpage";
import PoliceLogin from "./pages/PolicePage/PoliceLogin";
import MagistrateLogin from "./pages/Magistrate/MagistrateLogin";
import AdvocateLogin from "./pages/AdvocatePage/AdvocateLogin";
function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // Attempt to fetch user data if logged in
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get("/api/v1/admin/verify-token"); // Verify token endpoint
  //       if (response.data.isAuthenticated) {
  //         setUser(response.data.name); // Set user name or any other info you want to pass down
  //       }
  //     } catch (error) {
  //       console.error("User not authenticated:", error);
  //     }
  //   };
  //   fetchUser();
  // }, []);
   const handleloginfunction= async()=>
  {

  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={

            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/user-complaint"
          element={

            <Layout>
              <UserComplaintForm />
            </Layout>
          }
        />
        <Route
          path="/advocate-complaint"
          element={

            <Layout>
              <AdvocateCivilComplaintForm />
              <UserComplaintForm />
            </Layout>
          }
        />

        {/* <Route
            path="/xyz"
            element={
              <AuthMiddleware>
                <Layout>
                  <XYZ />
                </Layout>
              </AuthMiddleware>
            }=
          /> */}
        <Route path="/userlogin" element={
          <LoginPage />
        } />
        <Route path="/policeLogin" element={
          <PoliceLogin />
        } />
        <Route path="/magistrateLogin" element={
          <MagistrateLogin/>
        } />
        <Route path="/advocateLogin" element={
          <AdvocateLogin/>
        } />

      </Routes>

    </Router>
    // </UserContext.Provider>
  );
}

export default App;
