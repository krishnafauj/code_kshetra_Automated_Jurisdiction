import React, { useState } from 'react';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    filingOnBehalf: 'self',
    name: '',
    mobile: '',
    email: '',
    age: '',
    gender: '',
    fatherName: '',
    address: '',
    district: '',
    policeStation: '',
    incidentDate: '',
    incidentTime: '',
    incidentLocation: '',
    complaintType: '',
    complaintTitle: '',
    complaintDetails: '',
    victims: [], // Array to store multiple victims
    culprits: [], // Array to store multiple culprits
    evidence: null,
    additionalComments: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormData((prev) => ({ ...prev, [name]: files.length > 0 ? files : null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleVictimChange = (index, e) => {
    const { name, value } = e.target;
    const updatedVictims = [...formData.victims];
    updatedVictims[index] = { ...updatedVictims[index], [name]: value };
    setFormData((prev) => ({ ...prev, victims: updatedVictims }));
  };

  const handleCulpritChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCulprits = [...formData.culprits];
    updatedCulprits[index] = { ...updatedCulprits[index], [name]: value };
    setFormData((prev) => ({ ...prev, culprits: updatedCulprits }));
  };
  const removeCulprit = (index) => {
    const updatedCulprits = formData.culprits.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, culprits: updatedCulprits }));
  };
  const addVictim = () => {
    setFormData((prev) => ({
      ...prev,
      victims: [...prev.victims, { name: '', mobile: '', age: '', address: '' }],
    }));
  };

  const addCulprit = () => {
    setFormData((prev) => ({
      ...prev,
      culprits: [...prev.culprits, { name: '', mobile: '', age: '', address: '' }],
    }));
  };
  const removeVictim = (index) => {
    const updatedVictims = formData.victims.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, victims: updatedVictims }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please accept the consent to proceed.');
      return;
    }
    console.log('Complaint submitted:', formData);
  };

  return (
    <div className="max-w-3xl min-w-screen mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Complaint Registration Form</h2>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
          {/* Filing Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Filing On Behalf:</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="filingOnBehalf"
                  value="self"
                  checked={formData.filingOnBehalf === 'self'}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Self</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="filingOnBehalf"
                  value="onBehalf"
                  checked={formData.filingOnBehalf === 'onBehalf'}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">On Behalf</span>
              </label>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  id="age"
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="0"
                  max="120"
                  className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Victims Section */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Victims Details</h3>
            {formData.victims.map((victim, index) => (
              <div key={index} className="space-y-4 border p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Victim Fields */}
                  <div>
                    <label htmlFor={`victim-name-${index}`} className="block text-sm font-medium text-gray-700">
                      Victim Name
                    </label>
                    <input
                      id={`victim-name-${index}`}
                      type="text"
                      name="name"
                      value={victim.name}
                      onChange={(e) => handleVictimChange(index, e)}
                      required
                      className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor={`victim-mobile-${index}`} className="block text-sm font-medium text-gray-700">
                      Mobile Number
                    </label>
                    <input
                      id={`victim-mobile-${index}`}
                      type="tel"
                      name="mobile"
                      value={victim.mobile}
                      onChange={(e) => handleVictimChange(index, e)}
                      required
                      className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor={`victim-age-${index}`} className="block text-sm font-medium text-gray-700">
                      Age
                    </label>
                    <input
                      id={`victim-age-${index}`}
                      type="number"
                      name="age"
                      value={victim.age}
                      onChange={(e) => handleVictimChange(index, e)}
                      required
                      className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor={`victim-address-${index}`} className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      id={`victim-address-${index}`}
                      type="text"
                      name="address"
                      value={victim.address}
                      onChange={(e) => handleVictimChange(index, e)}
                      required
                      className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => removeVictim(index)}
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Remove Victim
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addVictim}
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Victim
            </button>
          </div>

        {/* Culprits Section */}
<div className="bg-gray-50 p-4 rounded-lg space-y-4">
  <h3 className="text-lg font-medium text-gray-900 mb-4">Culprits Details</h3>

  {/* Add Culprit Button */}
  
  {/* Culprit Fields */}
  {formData.culprits.map((culprit, index) => (
    <div key={index} className="space-y-4 border p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Culprit Name */}
        <div>
          <label htmlFor={`culprit-name-${index}`} className="block text-sm font-medium text-gray-700">
            Culprit Name
          </label>
          <input
            id={`culprit-name-${index}`}
            type="text"
            name="name"
            value={culprit.name}
            onChange={(e) => handleCulpritChange(index, e)}
            required
            className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        {/* Culprit Mobile */}
        <div>
          <label htmlFor={`culprit-mobile-${index}`} className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            id={`culprit-mobile-${index}`}
            type="tel"
            name="mobile"
            value={culprit.mobile}
            onChange={(e) => handleCulpritChange(index, e)}
            required
            className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        {/* Culprit Age */}
        <div>
          <label htmlFor={`culprit-age-${index}`} className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            id={`culprit-age-${index}`}
            type="number"
            name="age"
            value={culprit.age}
            onChange={(e) => handleCulpritChange(index, e)}
            required
            className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        {/* Culprit Address */}
        <div>
          <label htmlFor={`culprit-address-${index}`} className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            id={`culprit-address-${index}`}
            type="text"
            name="address"
            value={culprit.address}
            onChange={(e) => handleCulpritChange(index, e)}
            required
            className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Remove Culprit Button */}
      <button
        type="button"
        onClick={() => removeCulprit(index)}
        className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Remove Culprit
      </button>
    </div>
  ))}
  <button
    type="button"
    onClick={addCulprit}
    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Add Culprit
  </button>

</div>
          {/* Incident Details Section */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Incident Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select District</option>
                  <option value="District1">District 1</option>
                  <option value="District2">District 2</option>
                </select>
              </div>

              <div>
                <label htmlFor="incidentDate" className="block text-sm font-medium text-gray-700">Date of Incident</label>
                <input
                  id="incidentDate"
                  type="date"
                  name="incidentDate"
                  value={formData.incidentDate}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="complaintType" className="block text-sm font-medium text-gray-700">Complaint Type</label>
                <select
                  id="complaintType"
                  name="complaintType"
                  value={formData.complaintType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select Complaint Type</option>
                  <option value="Loot">Loot</option>
                  <option value="Cyber Crime">Cyber Crime</option>
                  <option value="Missing Person">Missing Person</option>
                </select>
              </div>

              <div>
                <label htmlFor="complaintTitle" className="block text-sm font-medium text-gray-700">Complaint Title</label>
                <input
                  id="complaintTitle"
                  type="text"
                  name="complaintTitle"
                  value={formData.complaintTitle}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="complaintDetails" className="block text-sm font-medium text-gray-700">Complaint Details</label>
              <textarea
                id="complaintDetails"
                name="complaintDetails"
                value={formData.complaintDetails}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              ></textarea>
            </div>

            <div>
              <label htmlFor="evidence" className="block text-sm font-medium text-gray-700">Evidence Upload (Optional)</label>
              <input
                id="evidence"
                type="file"
                name="evidence"
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="consent" className="font-medium text-gray-700">
                I confirm that the information provided above is true and accurate to the best of my knowledge
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!formData.consent}
            >
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;