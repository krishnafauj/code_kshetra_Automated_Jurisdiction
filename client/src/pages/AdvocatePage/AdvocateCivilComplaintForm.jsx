import React, { useState } from 'react';
import { FileText, User, Users, Calendar, MapPin, Upload, AlertCircle } from 'lucide-react';

const CivilCaseFilingForm = () => {
  const [formData, setFormData] = useState({
    caseTitle: '',
    caseCategory: '',
    plaintiffName: '',
    plaintiffAddress: '',
    plaintiffMobile: '',
    plaintiffEmail: '',
    defendantName: '',
    defendantAddress: '',
    defendantMobile: '',
    defendantEmail: '',
    incidentDate: '',
    incidentLocation: '',
    caseSummary: '',
    reliefSought: '',
    legalBasis: '',
    evidence: null,
    additionalComments: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please confirm that all information provided is accurate.');
      return;
    }
    console.log('Civil case filed:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-6 py-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-white" />
              <h2 className="text-2xl font-bold text-white">Civil Case Filing Form</h2>
            </div>
          </div>

          {/* Alert Banner */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Please ensure all required fields marked with an asterisk (*) are completed accurately.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-8 space-y-8">
            {/* Basic Case Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                Basic Case Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Case Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="caseTitle"
                    value={formData.caseTitle}
                    onChange={handleChange}
                    required
                    className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Case Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="caseCategory"
                    value={formData.caseCategory}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Category</option>
                    <option value="Property Dispute">Property Dispute</option>
                    <option value="Contract Dispute">Contract Dispute</option>
                    <option value="Family Dispute">Family Dispute</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Plaintiff Details */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <User className="h-5 w-5 text-blue-500" />
                Plaintiff Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="plaintiffName"
                    value={formData.plaintiffName}
                    onChange={handleChange}
                    required
                    className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="plaintiffMobile"
                    value={formData.plaintiffMobile}
                    onChange={handleChange}
                    required
                    className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="plaintiffAddress"
                    value={formData.plaintiffAddress}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="plaintiffEmail"
                    value={formData.plaintiffEmail}
                    onChange={handleChange}
                    className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Defendant Details */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                Defendant Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="defendantName"
                    value={formData.defendantName}
                    onChange={handleChange}
                    required
                    className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="defendantMobile"
                    value={formData.defendantMobile}
                    onChange={handleChange}
                    className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="defendantAddress"
                    value={formData.defendantAddress}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="defendantEmail"
                    value={formData.defendantEmail}
                    onChange={handleChange}
                    className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Incident Details */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                Incident Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Incident <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="incidentDate"
                    value={formData.incidentDate}
                    onChange={handleChange}
                    required
                    className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block  text-sm font-medium text-gray-700">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="incidentLocation"
                    value={formData.incidentLocation}
                    onChange={handleChange}
                    required
                    className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Case Details */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                Case Details
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Case Summary <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="caseSummary"
                    value={formData.caseSummary}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Provide a detailed description of your case..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Relief Sought <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="reliefSought"
                    value={formData.reliefSought}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Specify the relief or remedy you are seeking..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Legal Basis <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="legalBasis"
                    value={formData.legalBasis}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="State the legal grounds for your case..."
                  />
                </div>
              </div>
            </div>

            {/* Evidence Upload */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <Upload className="h-5 w-5 text-blue-500" />
                Supporting Documents
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Evidence Upload
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="evidence" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload files</span>
                        <input
                          id="evidence"
                          name="evidence"
                          type="file"
                          multiple
                          onChange={handleChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, DOC, DOCX, JPG, PNG up to 10MB each
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Comments */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Additional Comments
              </label>
              <textarea
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleChange}
                rows={3}
                className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Any additional information you would like to provide..."
              />
            </div>

            {/* Consent */}
            <div className="relative flex items-start">
              <div className="flex h-5 items-center">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-700">
                  Declaration
                </label>
                <p className="text-gray-500">
                  I hereby confirm that all the information provided above is accurate and true to the best of my knowledge.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!formData.consent}
              >
                Submit Case Filing
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CivilCaseFilingForm;