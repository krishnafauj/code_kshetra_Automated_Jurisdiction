export default function StatCard({ icon: Icon, title, value, color }) {
    return (
      <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${color}`}>
        <div className="flex items-center gap-4">
          <Icon className="w-8 h-8 text-gray-600" />
          <div>
            <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
          </div>
        </div>
      </div>
    );
  }