import { ChevronDown } from 'lucide-react';

interface WorkflowDiagramProps {
  onPhaseClick: (phase: number) => void;
  selectedPhase: number | null;
}

export function WorkflowDiagram({ onPhaseClick, selectedPhase }: WorkflowDiagramProps) {
  const phases = [
    {
      id: 1,
      title: "Planning & Preparation",
      color: "bg-blue-500",
      description: "Foundation setup"
    },
    {
      id: 2,
      title: "Launch Phase",
      color: "bg-purple-500",
      description: "Official announcement"
    },
    {
      id: 3,
      title: "Execution & Outreach",
      color: "bg-green-500",
      description: "Active registration"
    },
    {
      id: 4,
      title: "Monitoring & Reporting",
      color: "bg-orange-500",
      description: "Performance tracking"
    },
    {
      id: 5,
      title: "Post-Drive Activities",
      color: "bg-pink-500",
      description: "Analysis & improvement"
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-4 py-4">
      {phases.map((phase, index) => (
        <div key={phase.id} className="flex flex-col items-center w-full max-w-2xl">
          {/* Phase Box */}
          <button
            onClick={() => onPhaseClick(phase.id)}
            className={`w-full ${phase.color} text-white rounded-lg shadow-lg p-6 
              transition-all duration-300 hover:scale-105 hover:shadow-xl
              ${selectedPhase === phase.id ? 'ring-4 ring-yellow-400 scale-105' : ''}
              cursor-pointer`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">{phase.id}</span>
                </div>
                <div className="text-left">
                  <h3 className="text-white">{phase.title}</h3>
                  <p className="text-white/90 text-sm mt-1">{phase.description}</p>
                </div>
              </div>
              <span className="text-white/80 text-sm">Click for details</span>
            </div>
          </button>

          {/* Arrow */}
          {index < phases.length - 1 && (
            <div className="flex flex-col items-center my-2">
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
