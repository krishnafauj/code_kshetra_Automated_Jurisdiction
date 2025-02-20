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
import UserComplaintFOrm from "./components/userComplaintForm";

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

  return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              
              // <Layout>
                <Home />
              // </Layout>
            }
          />
          <Route
            path="/complaintForm"
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
 
        </Routes>
      </Router>
    // </UserContext.Provider>
  );
}

export default App;
