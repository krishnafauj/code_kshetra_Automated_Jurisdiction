import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FileText, Calendar, MapPin, Clock, User, Phone, Mail, Home, Shield, AlertTriangle, X, ChevronRight, BadgeAlert } from 'lucide-react';

const CasesStatus = () => {
  const email = localStorage.getItem('userEmail') || 'No Email Provided';
  const [cases, setCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.post('http://localhost:3001/getcases', { email });
        setCases(response.data);
      } catch (error) {
        console.error('Error fetching cases:', error);
      }
    };

    if (email !== 'No Email Provided') {
      fetchCases();
    }
  }, []);

  const openModal = (caseItem) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCase(null);
    setIsModalOpen(false);
  };

  const getStatusColor = (status) => {
    return 'bg-yellow-100 text-yellow-800'; // For pending status
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Case Management Dashboard
          </h1>
          <div className="flex items-center space-x-2 text-gray-600">
            <Shield className="w-5 h-5" />
            <span>{email}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cases.map((caseItem) => (
            <div
              key={caseItem._id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor('pending')}`}>
                    Pending
                  </span>
                  <BadgeAlert className="w-5 h-5 text-red-500" />
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {caseItem.complaintTitle}
                </h2>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FileText className="w-4 h-4 mr-2" />
                    <span className="text-sm">{caseItem.complaintType}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {new Date(caseItem.incidentDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm line-clamp-1">{caseItem.incidentLocation}</span>
                  </div>
                </div>

                <button
                  onClick={() => openModal(caseItem)}
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {isModalOpen && selectedCase && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-0 overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Case Details</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[70vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Complaint Information</h3>
                      <div className="space-y-3">
                        <DetailItem icon={FileText} label="Title" value={selectedCase.complaintTitle} />
                        <DetailItem icon={AlertTriangle} label="Type" value={selectedCase.complaintType} />
                        <DetailItem icon={Calendar} label="Date" value={new Date(selectedCase.incidentDate).toLocaleDateString()} />
                        <DetailItem icon={Clock} label="Time" value={selectedCase.incidentTime} />
                        <DetailItem icon={MapPin} label="Location" value={selectedCase.incidentLocation} />
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Complainant Details</h3>
                      <div className="space-y-3">
                        <DetailItem icon={User} label="Name" value={selectedCase.name} />
                        <DetailItem icon={Phone} label="Mobile" value={selectedCase.mobile} />
                        <DetailItem icon={Mail} label="Email" value={selectedCase.email} />
                        <DetailItem icon={Home} label="Address" value={selectedCase.address} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Victims</h3>
                      {selectedCase.victims.map((victim, index) => (
                        <div key={index} className="mb-4 last:mb-0 border-b last:border-0 border-gray-200 pb-4 last:pb-0">
                          <div className="space-y-2">
                            <DetailItem icon={User} label="Name" value={victim.name} />
                            <DetailItem icon={Phone} label="Mobile" value={victim.mobile} />
                            <DetailItem icon={Calendar} label="Age" value={victim.age} />
                            <DetailItem icon={Home} label="Address" value={victim.address} />
                          </div>
                        </div>
                      ))}
                    </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">FIR Details</h3>
                                            {selectedCase.fir.map((fir, index) => (
                                              <div key={index} className="mb-4 last:mb-0 border-b last:border-0 border-gray-200 pb-4 last:pb-0">
                                                <div className="space-y-2">
                                                  {/* FIR Number */}
                      
                                                  {/* FIR Date */}
                                                  <DetailItem icon={Calendar} label="Charges addition" value={new Date(fir.firDate).toLocaleDateString()} />
                      
                      
                      
                                                  {/* Police Station */}
                      
                                                  {/* FIR Entries */}
                                                  <div className="mt-4">
                                                    <h4 className="text-md font-medium text-gray-900 mb-2">IPC Entries</h4>
                                                    {fir.firEntries.map((entry, entryIndex) => (
                                                      <div key={entryIndex} className="space-y-2">
                                                        <DetailItem icon={FileText} label="Entry IPC Number" value={entry.firNumber} />
                                                        <DetailItem icon={FileText} label="Entry IPC Details" value={entry.firDetails} />
                                                      </div>
                                                    ))}
                                                  </div>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Culprits</h3>
                      {selectedCase.culprits.map((culprit, index) => (
                        <div key={index} className="mb-4 last:mb-0 border-b last:border-0 border-gray-200 pb-4 last:pb-0">
                          <div className="space-y-2">
                            <DetailItem icon={User} label="Name" value={culprit.name} />
                            <DetailItem icon={Phone} label="Mobile" value={culprit.mobile} />
                            <DetailItem icon={Calendar} label="Age" value={culprit.age} />
                            <DetailItem icon={Home} label="Address" value={culprit.address} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Complaint Details</h3>
                  <p className="text-gray-700 whitespace-pre-wrap">{selectedCase.complaintDetails}</p>
                   <h3 className="text-lg mt-10 font-semibold text-gray-900 mb-4">Docs Details</h3>
                                        <div className="bg-gray-50 rounded-xl p-4">
                                          <h3 className="text-lg font-semibold text-gray-900 mb-4"></h3>
                                          {selectedCase.documents.map((victim, index) => (
                                            <div key={index} className="mb-4 last:mb-0 border-b last:border-0 border-gray-200 pb-4 last:pb-0">
                                              <div className="space-y-2">
                                                <DetailItem icon={FileText} label="Document name" value={victim.documentName} />
                                                <DetailItem
                                                  icon={Phone}
                                                  label="Doc CID NO"
                                                  value={
                                                    <a href={`https://gateway.pinata.cloud/ipfs/${victim.cid}`} target="_blank" rel="noopener noreferrer">
                                                      {victim.cid}
                                                    </a>
                                                  }
                                                />
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                </div>
                
              </div>

              <div className="border-t border-gray-100 p-6">
                <button
                  onClick={closeModal}
                  className="w-full bg-gray-900 text-white py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const DetailItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-start">
    <Icon className="w-4 h-4 text-gray-500 mt-1 mr-3 flex-shrink-0" />
    <div className="flex-1">
      <span className="text-sm text-gray-500">{label}</span>
      <p className="text-gray-900">{value}</p>
    </div>
  </div>
);

export default CasesStatus;