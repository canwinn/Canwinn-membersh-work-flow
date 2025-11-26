import { X } from 'lucide-react';

interface PhaseDetailsProps {
  phase: number;
  onClose: () => void;
}

export function PhaseDetails({ phase, onClose }: PhaseDetailsProps) {
  const phaseData = {
    1: {
      title: "Planning and Preparation",
      color: "bg-blue-500",
      activities: [
        "Finalize membership benefits, structure, and discount details",
        "Department-wise training on registration workflow",
        "Test and integrate registration platforms",
        "Prepare reference materials and communication guides"
      ]
    },
    2: {
      title: "Launch Phase",
      color: "bg-purple-500",
      activities: [
        "Official drive announcement through internal channels",
        "Set up Membership Help Desks at key locations",
        "Display membership information and QR codes for easy access"
      ]
    },
    3: {
      title: "Execution and Outreach",
      color: "bg-green-500",
      activities: [
        "Billing: Walk-in registrations at billing/discharge using HIMS",
        "IVR: Remote caller registration via Website Portal",
        "Janseva: Community registrations using Canwinn Connect App",
        "Operations/PRM: Outreach and hospital registrations using Canwinn Connect App"
      ]
    },
    4: {
      title: "Monitoring and Reporting",
      color: "bg-orange-500",
      activities: [
        "Compile daily registration data, share with IT/Operations",
        "Weekly performance reviews and gap analysis",
        "Ensure data accuracy and prevent duplication",
        "Conduct regular feedback sessions"
      ]
    },
    5: {
      title: "Post-Drive Activities",
      color: "bg-pink-500",
      activities: [
        "Collect and analyze member feedback for improvements",
        "Recognize and reward outstanding departments/individuals",
        "Continue digital follow-up for renewals and referrals"
      ]
    }
  };

  const data = phaseData[phase as keyof typeof phaseData];

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 border-2 border-gray-200 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 ${data.color} text-white rounded-full flex items-center justify-center flex-shrink-0`}>
            {phase}
          </div>
          <h3 className="text-gray-900">Phase {phase}: {data.title}</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-4">
        <h4 className="text-gray-800 mb-3">Key Activities:</h4>
        <ul className="space-y-3">
          {data.activities.map((activity, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <span className={`w-6 h-6 ${data.color} text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm`}>
                ✓
              </span>
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
