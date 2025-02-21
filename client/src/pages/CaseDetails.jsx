import React from 'react';
import { useParams } from 'react-router-dom';

const CaseDetails = ({ casesData }) => {
  const { id } = useParams();
  // Find the case based on the id from the route
  const caseItem = casesData.find((c) => c.id === id);

  if (!caseItem) return <div>Case not found</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{caseItem.title}</h1>
      <p className="mb-4">Status: <span className={`font-semibold ${
          caseItem.status === 'accepted' ? 'text-green-600' : 'text-red-600'
        }`}>{caseItem.status}</span></p>
      {/* Additional details can be displayed here */}
      <div className="mt-4">
        {caseItem.status === 'accepted' ? (
          <div className="space-x-4">
            <a
              href={caseItem.firLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Download FIR
            </a>
            <a
              href={caseItem.chargesheetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Download Chargesheet
            </a>
            <a
              href={caseItem.evidenceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Download Evidence
            </a>
          </div>
        ) : (
          <a
            href={caseItem.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Download
          </a>
        )}
      </div>
    </div>
  );
};

export default CaseDetails;
