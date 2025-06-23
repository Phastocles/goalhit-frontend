import { useState } from 'react';
import { getProgress } from '../api/habitAPI';

export default function ProgressTracker() {
  const [goal, setGoal] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);
  const [result, setResult] = useState(null);

  const handleTrack = async () => {
    const data = await getProgress({ goal, progressPercent });
    setResult(data);
  };

  return (
    <div>
      <h2>Track Progress</h2>
      <input value={goal} onChange={e => setGoal(e.target.value)} placeholder="Goal" />
      <input type="range" min="0" max="100" value={progressPercent} onChange={e => setProgressPercent(+e.target.value)} />
      <button onClick={handleTrack}>Get Progress</button>

      {result && (
        <p>{result.message} — {result.daysRemaining} days left</p>
      )}
    </div>
  );
}
