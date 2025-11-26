import { Monitor, DollarSign, Phone, Users, Briefcase } from 'lucide-react';

interface DepartmentCardsProps {
  selectedDepartment: string | null;
  onDepartmentClick: (dept: string) => void;
}

export function DepartmentCards({ selectedDepartment, onDepartmentClick }: DepartmentCardsProps) {
  const departments = [
    {
      id: "it",
      name: "IT Department",
      icon: Monitor,
      color: "bg-blue-600",
      responsibilities: [
        "Configure and maintain digital platforms (HIMS, Website, App)",
        "Secure data integration and provide system support",
        "Generate membership reports for Operations"
      ]
    },
    {
      id: "billing",
      name: "Billing Department",
      icon: DollarSign,
      color: "bg-green-600",
      responsibilities: [
        "Register walk-in members, verify and update data",
        "Inform patients about membership benefits",
        "Submit daily registration reports"
      ]
    },
    {
      id: "ivr",
      name: "IVR Team",
      icon: Phone,
      color: "bg-purple-600",
      responsibilities: [
        "Promote membership via calls and guide through registration",
        "Maintain call logs and forward data to Operations"
      ]
    },
    {
      id: "janseva",
      name: "Janseva Team",
      icon: Users,
      color: "bg-orange-600",
      responsibilities: [
        "Field awareness and community registration campaigns",
        "Collaborate for mass outreach and daily reporting"
      ]
    },
    {
      id: "operations",
      name: "Operations / PRM Team",
      icon: Briefcase,
      color: "bg-pink-600",
      responsibilities: [
        "Oversee and coordinate the drive",
        "Validate membership data and prepare consolidated reports",
        "Facilitate smooth interdepartmental collaboration"
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {departments.map((dept) => {
        const Icon = dept.icon;
        const isSelected = selectedDepartment === dept.id;
        
        return (
          <button
            key={dept.id}
            onClick={() => onDepartmentClick(isSelected ? '' : dept.id)}
            className={`bg-white rounded-lg shadow-md p-6 text-left transition-all duration-300 
              hover:shadow-xl hover:scale-105 cursor-pointer
              ${isSelected ? 'ring-4 ring-yellow-400 scale-105' : ''}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`${dept.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900">{dept.name}</h3>
            </div>

            <div className={`transition-all duration-300 ${isSelected ? 'block' : 'hidden'}`}>
              <h4 className="text-gray-700 mb-2">Responsibilities:</h4>
              <ul className="space-y-2">
                {dept.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-green-600 flex-shrink-0">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {!isSelected && (
              <p className="text-gray-500 text-sm mt-2">Click to view responsibilities</p>
            )}
          </button>
        );
      })}
    </div>
  );
}
