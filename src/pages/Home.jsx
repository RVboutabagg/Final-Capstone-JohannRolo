
import PotholeCard from "../Components/PotholeCard";

const sampleReports = [
  {
    location: "East Oakland",
    description: "Medium size pothole 2 inches deep",
    date: "3/6/26",
    severity: "Medium Severity",
  },
  {
    location: "West Oakland",
    description: "Samll size pothole 1/2 inch deep",
    date: "1/10/26",
    severity: "Low Severity",
  },
  {
    location: "North Oakland",
    description: "Large sie pothole 3 inches deep",
    date: "4/18/26",
    severity: "High Severity",
  },
];

function Home({ onNavigate }) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      
      <div className="bg-yellow-400 rounded-2xl p-6 mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Oakland Pothole Tracker</h1>
        <p className="text-gray-700 text-sm mb-4">
          Track, report, and advocate for better roads in Oakland.
        </p>
        
      </div>

      
      <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Reports</h2>
      <div className="flex flex-col gap-4">
        {sampleReports.map((report, index) => (
          <PotholeCard
            key={index}
            location={report.location}
            description={report.description}
            date={report.date}
            severity={report.severity}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;