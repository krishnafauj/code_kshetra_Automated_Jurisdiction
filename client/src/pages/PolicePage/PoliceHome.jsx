import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PoliceSidebar from '../../components/policeSidebar';
import {
  Scale,
  FileText,
  Search,
  Clock,
  BarChart3,
  Building2,
  Users,
  Calendar,
  Moon,
  Sun,
  MessageSquare,
  Globe,
} from "lucide-react";
import StatCard from "../../components/StatCard";
import ActionButton from "../../components/ActionButton";


function PoliceHome() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const handleNavigate = () => {
    localStorage.setItem("userEmail", email);
  };
  return (
    
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'} `}>
      <PoliceSidebar/>
      <div className='w-screen  z-90'>
               <nav className="bg-white shadow-md dark:bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Scale className="w-8 h-8 text-blue-600" />
                    <span className="text-xl font-bold text-gray-800 dark:text-white">JusticeHub</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button>
                      Login
                    </button>
                  
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div>
          <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-6">
              Swift Action, Secure Records
            </h1>
            <p className="text-xl mb-12 text-blue-100">
              Investigate, manage, and resolve cases efficiently while upholding
              public trust.
            </p>
            <div className="text-white flex flex-wrap justify-center gap-4">
            <Link to="">
            <button>
              All Requested Case  List
            </button>
            </Link>
           
            <Link to="/policecase">
                          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all text-white hover:text-blue-600 font-medium">
                            View All Cases
                          </button>
                          </Link>
            <Link>
            <button>
              All non cognizable case List
            </button>
            </Link>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900"></div> */}
      </section>

      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={FileText}
              title="Cases Registered Today"
              value="1,452"
              color="border-green-500"
            />
            <StatCard
              icon={Clock}
              title="Pending Approvals"
              value="320"
              color="border-red-500"
            />
            <StatCard
              icon={Scale}
              title="Cases in Court"
              value="5,634"
              color="border-blue-500"
            />
            <StatCard
              icon={BarChart3}
              title="Cases Resolved This Month"
              value="2,189"
              color="border-purple-500"
            />
          </div>
        </div>
      </section>

      

      {/* Resources Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Legal Resources
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Know Your Rights
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Court Schedules
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Legal Aid Support
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Emergency Contacts
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Legal Helpline:</strong> 1800-XXX-XXXX
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Women's Helpline:</strong> 1091
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Police Emergency:</strong> 100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          </div>
      
    </div>
  );
}

export default PoliceHome;
