import React from 'react';
import OKRList from './OKRList';
import OKRForm from './OKRForm';
import ProgressVisualizer from './ProgressVisualizer';

const App = () => {
  return (
    <div>
      <OKRList />
      <OKRForm />
      <ProgressVisualizer
        keyResults={[
          { id: 1, description: 'Complete 10 coding projects', progress: 30 },
          { id: 2, description: 'Learn a new programming language', progress: 50 },
          { id: 3, description: 'Submit 5 pull requests', progress: 20 },
        ]}
      />
    </div>
  );
};

export default App;