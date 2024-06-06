import React, { useState } from 'react';
import CV from './CV';
import CVForm from './CVForm';

const App: React.FC = () => {
  const [view, setView] = useState<'cv' | 'form'>('cv');

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 min-h-screen p-10 flex justify-center items-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-8">
          <button
            onClick={() => setView('cv')}
            className={`px-4 py-2 mx-2 font-bold rounded ${view === 'cv' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            Voir le CV
          </button>
          <button
            onClick={() => setView('form')}
            className={`px-4 py-2 mx-2 font-bold rounded ${view === 'form' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            Remplir le formulaire
          </button>
        </div>
        {view === 'cv' ? <CV /> : <CVForm />}
      </div>
    </div>
  );
};

export default App;
