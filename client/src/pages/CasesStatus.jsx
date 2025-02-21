import React from 'react';
import CaseCard from "../components/CaseCard"


const CasesStatus = ({ cases }) => {
  return (
    <div className='h-screen w-screen bg-white '>
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-start">
      {cases.map((caseItem) => (
        <CaseCard key={caseItem.id} caseItem={caseItem} />
      ))}
    </div>
    </div>
  );
};

export default CasesStatus;
