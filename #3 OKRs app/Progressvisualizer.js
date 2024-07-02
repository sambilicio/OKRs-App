import React from 'react';

const ProgressVisualizer = ({ keyResults }) => {
  const totalProgress = keyResults.reduce((acc, keyResult) => acc + keyResult.progress, 0);
  const averageProgress = totalProgress / keyResults.length;

  return (
    <div>
      <h3>Progress</h3>
      <div style={{ width: '100%', height: '20px', backgroundColor: '#ddd' }}>
        <div
          style={{
            width: `${averageProgress}%`,
            height: '100%',
            backgroundColor: 'green',
          }}
        />
      </div>
      <p>Average Progress: {averageProgress}%</p>
    </div>
  );
};

export default ProgressVisualizer;