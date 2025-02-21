import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Calendar, Clock, CheckCircle, XCircle, AlertCircle, ChevronRight } from 'lucide-react';

const CaseCard = ({ caseItem }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/case/${caseItem.id}`);
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case 'accepted':
        return {
          icon: CheckCircle,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          label: 'Accepted'
        };
      case 'rejected':
        return {
          icon: XCircle,
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          label: 'Rejected'
        };
      default:
        return {
          icon: Clock,
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          label: 'Pending'
        };
    }
  };

  const statusConfig = getStatusConfig(caseItem.status);
  const StatusIcon = statusConfig.icon;

  return (
    <div
      onClick={handleClick}
      className="group bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {caseItem.title}
              </h3>
              <p className="text-sm text-gray-500">Case #{caseItem.caseNumber}</p>
            </div>
          </div>
          <div className={`px-3 py-1.5 rounded-full ${statusConfig.bgColor} ${statusConfig.borderColor} border`}>
            <div className="flex items-center gap-2">
              <StatusIcon className={`w-4 h-4 ${statusConfig.color}`} />
              <span className={`text-sm font-medium ${statusConfig.color}`}>
                {statusConfig.label}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              Filed: {new Date(caseItem.filingDate).toLocaleDateString()}
            </span>
          </div>
          {caseItem.nextHearing && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Next Hearing: {new Date(caseItem.nextHearing).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>

        {caseItem.status === 'rejected' && caseItem.reason && (
          <div className="mt-2 p-3 bg-red-50 rounded-lg">
            <p className="text-sm text-red-700">
              Reason: {caseItem.reason}
            </p>
          </div>
        )}

        <div className="mt-4 flex items-center justify-end">
          <div className="flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
            View Details
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;