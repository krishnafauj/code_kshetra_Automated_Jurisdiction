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
import UserComplaintFOrm from "./components/Userpage/userComplaintForm";
import AdvocateCivilComplaintFomr from "./components/AdvocatePage/AdvocateCivilComplaintForm"
import LoginPage from "./components/Userpage/Loginpage";
import PoliceLogin from "./components/PolicePage/PoliceLogin";
import Magistrate from "./components/Magistrate/MagistrateLogin";
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
          path="/test"
          element={

            <Layout>
              <UserComplaintFOrm />
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
            }
          /> */}
        <Route path="/userlogin" element={
          <LoginPage />
        } />
        <Route path="/policeLogin" element={
          <PoliceLogin />
        } />
        <Route path="/magistrateLogin" element={
          <Magistrate
          />
        } />

      </Routes>

    </Router>
    // </UserContext.Provider>
  );
}

export default App;
