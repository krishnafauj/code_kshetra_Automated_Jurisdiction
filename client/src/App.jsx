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
import Policecases from "./pages/PolicePage/userpolice";
function App() {
  const [user, setUser] = useState(null);


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
          path="/policecase"
          element={
              <Policecases />
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

      <Route path="/cases" element={<CasesStatus/>}/>
      <Route path="/case/:id"  />

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
