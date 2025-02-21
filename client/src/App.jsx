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
import AdvocateHome from "./pages/AdvocatePage/AdvocateHome";
import PoliceHome from "./pages/PolicePage/PoliceHome";
import MagisterateHome from "./pages/Magistrate/MagisterateHome";
import AdvocateCivilComplaintForm from "./pages/AdvocatePage/AdvocateCivilComplaintForm"
import UserComplaintForm from "./pages/Userpage/userComplaintForm";
import LoginPage from "./pages/Userpage/Loginpage";
import PoliceLogin from "./pages/PolicePage/PoliceLogin";
import MagistrateLogin from "./pages/Magistrate/MagistrateLogin";
import AdvocateLogin from "./pages/AdvocatePage/AdvocateLogin";
import CaseDetails from "./pages/CaseDetails";
import CasesStatus from "./pages/casesStatus";

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


  const casesData = [
    {
      id: '1',
      title: 'Burglary at Downtown',
      status: 'accepted',
      firLink: '/files/fir1.pdf',
      chargesheetLink: '/files/chargesheet1.pdf',
      evidenceLink: '/files/evidence1.zip',
    },
    {
      id: '2',
      title: 'Vandalism in Park',
      status: 'rejected',
      downloadLink: '/files/rejected-case2.pdf',
    },
  ];

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
            </Layout>
          }
        />

        <Route
          path="/police"
          element={

            <Layout>
              <PoliceHome />
            </Layout>
          }
        />
        <Route
          path="/magisterate"
          element={

            <Layout>
              <MagisterateHome />
            </Layout>
          }
        />
        {/* <Route
          path="/test"
          element={

            <Layout>
              <CaseCard />
            </Layout>
          }
        /> */}

      <Route path="/cases" element={<CasesStatus cases={casesData} />} />
      <Route path="/case/:id" element={<CaseDetails casesData={casesData} />} />

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
        <Route path="/policelogin" element={
          <PoliceLogin />
        } />
        <Route path="/magistratelogin" element={
          <MagistrateLogin/>
        } />
        <Route path="/advocateLogin" element={
          <AdvocateLogin/>
        } />
        <Route path="/advocate" element={
          <Layout><AdvocateHome /></Layout>
            
        } />

      </Routes>

    </Router>
    // </UserContext.Provider>
  );
}

export default App;
