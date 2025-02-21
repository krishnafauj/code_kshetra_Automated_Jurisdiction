import React from 'react';
import CaseCard from './CaseCard';

const CasesList = ({ cases }) => {
  return (
    <div className="space-y-4 p-4">
      {cases.map((caseItem) => (
        <CaseCard key={caseItem.id} caseItem={caseItem} />
      ))}
    </div>
  );
};

export default CasesList;
