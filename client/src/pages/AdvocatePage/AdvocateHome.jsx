import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  Globe
} from 'lucide-react';
import StatCard from '../../components/StatCard';
import ActionButton from '../../components/ActionButton';

function AdvocateHome() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      {/* <Navbar/> */}

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-6">
              Justice at Your Fingertips
            </h1>
            <p className="text-xl mb-12 text-blue-100">
              Register, Track, and Resolve Cases Effortlessly
            </p>
            <div className="text-white flex flex-wrap justify-center gap-4">
              <ActionButton  icon={FileText} text="Register Client Case" to="/advocate-complaint"/>
              <ActionButton icon={Clock} text="View your Case Status" />
              <ActionButton icon={Search} text="Search all current Cases " />
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900"></div> */}
      </section>

      {/* Statistics Section */}
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

      {/* Stakeholder Sections */}
      <section className="py-12 bg-white dark:bg-gray-800 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Stakeholder Portals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Police Portal */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Police Portal</h3>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• View registered cases</li>
                <li>• Submit charge sheets</li>
                <li>• Track investigations</li>
              </ul>
            </div>

            {/* Magistrate Portal */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Magistrate Portal</h3>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Review case applications</li>
                <li>• Assign court proceedings</li>
                <li>• Handle special petitions</li>
              </ul>
            </div>

            {/* Court Portal */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Court Portal</h3>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Manage hearings calendar</li>
                <li>• Access case documents</li>
                <li>• Update case status</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Legal Resources</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Know Your Rights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Court Schedules</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Legal Aid Support</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Emergency Contacts</h2>
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

      {/* Footer */}
      
    </div>
  );
}

export default AdvocateHome;