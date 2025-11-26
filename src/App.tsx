import { useState } from 'react';
import { WorkflowDiagram } from './components/WorkflowDiagram';
import { DepartmentCards } from './components/DepartmentCards';
import { PhaseDetails } from './components/PhaseDetails';

export default function App() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-blue-900 mb-2">
              Canwinn Aarogya Dham Membership Drive
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hierarchical Workflow - Promoting membership expansion through streamlined registration and enhanced patient engagement
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Objective Section */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
          <h2 className="text-blue-900 mb-3">Objective</h2>
          <p className="text-gray-700">
            Promote and expand Canwinn Aarogya Dham Membership Program by increasing public awareness, 
            streamlining registration, and enhancing patient engagement.
          </p>
        </div>

        {/* Goals Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-md p-6">
          <h2 className="text-blue-900 mb-4">Key Goals</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <p className="text-gray-700">
                  Increase number of active Canwinn Membership enrollments
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <p className="text-gray-700">
                  Ensure accurate and efficient registration (HIMS, Website, Canwinn Connect App)
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <p className="text-gray-700">
                  Enhance patient loyalty and satisfaction through membership benefits
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-blue-900 mb-6 text-center">Implementation Workflow</h2>
          <WorkflowDiagram 
            onPhaseClick={setSelectedPhase}
            selectedPhase={selectedPhase}
          />
        </div>

        {/* Phase Details */}
        {selectedPhase !== null && (
          <PhaseDetails 
            phase={selectedPhase} 
            onClose={() => setSelectedPhase(null)}
          />
        )}

        {/* Department Cards */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-blue-900 mb-6 text-center">Departments & Responsibilities</h2>
          <DepartmentCards 
            selectedDepartment={selectedDepartment}
            onDepartmentClick={setSelectedDepartment}
          />
        </div>

        {/* Expected Outcomes */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-md p-6">
          <h2 className="text-blue-900 mb-4">Expected Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📈</span>
                <p className="text-gray-700">
                  Significant growth in registrations
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <p className="text-gray-700">
                  Improved interdepartmental coordination and data management
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌟</span>
                <p className="text-gray-700">
                  Strengthened community engagement and patient trust
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👁️</span>
                <p className="text-gray-700">
                  Enhanced visibility of Canwinn Aarogya Dham's services
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500">
            Canwinn Aarogya Dham - Membership Drive Implementation Plan
          </p>
        </div>
      </footer>
    </div>
  );
}
