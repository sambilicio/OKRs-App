import React, { useState } from 'react';

const OKRForm = () => {
  const [objective, setObjective] = useState('');
  const [keyResults, setKeyResults] = useState(['']);

  const handleObjectiveChange = (event) => {
    setObjective(event.target.value);
  };

  const handleKeyResultChange = (index, value) => {
    const newKeyResults = [...keyResults];
    newKeyResults[index] = value;
    setKeyResults(newKeyResults);
  };

  const handleAddKeyResult = () => {
    setKeyResults([...keyResults, '']);
  };

  const handleRemoveKeyResult = (index) => {
    const newKeyResults = [...keyResults];
    newKeyResults.splice(index, 1);
    setKeyResults(newKeyResults);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can submit the OKR data to the backend API
    console.log('Objective:', objective);
    console.log('Key Results:', keyResults);
  };

  return (
    <div>
      <h2>Add/Edit OKR</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Objective:
            <input type="text" value={objective} onChange={handleObjectiveChange} />
          </label>
        </div>
        <div>
          <label>Key Results:</label>
          {keyResults.map((keyResult, index) => (
            <div key={index}>
              <input
                type="text"
                value={keyResult}
                onChange={(event) => handleKeyResultChange(index, event.target.value)}
              />
              <button type="button" onClick={() => handleRemoveKeyResult(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddKeyResult}>
            Add Key Result
          </button>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default OKRForm;