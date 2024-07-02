import React from 'react';

const OKRList = () => {
  // Sample OKR data
  const okrs = [
    {
      id: 1,
      objective: 'Improve coding skills',
      keyResults: [
        { id: 1, description: 'Complete 10 coding projects', progress: 30 },
        { id: 2, description: 'Learn a new programming language', progress: 50 },
      ],
    },
    {
      id: 2,
      objective: 'Contribute to open-source projects',
      keyResults: [
        { id: 3, description: 'Submit 5 pull requests', progress: 20 },
      ],
    },
  ];

  return (
    <div>
      <h2>OKRs</h2>
      <ul>
        {okrs.map((okr) => (
          <li key={okr.id}>
            <h3>{okr.objective}</h3>
            <ul>
              {okr.keyResults.map((keyResult) => (
                <li key={keyResult.id}>
                  {keyResult.description} - Progress: {keyResult.progress}%
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OKRList;