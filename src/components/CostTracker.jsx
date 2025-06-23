import { useState } from 'react';
import { calculateHabitCost } from '../api/habitAPI';

export default function CostTracker() {
  const [goal, setGoal] = useState('');
  const [dailyMinutes, setDailyMinutes] = useState(20);
  const [difficulty, setDifficulty] = useState(3);
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const data = await calculateHabitCost({ goal, dailyMinutes, difficulty });
    setResult(data);
  };

  return (
    <div>
      <h2>Willpower Cost Tracker</h2>
      <input value={goal} onChange={e => setGoal(e.target.value)} placeholder="Goal" />
      <input type="number" value={dailyMinutes} onChange={e => setDailyMinutes(+e.target.value)} />
      <input type="number" value={difficulty} onChange={e => setDifficulty(+e.target.value)} />
      <button onClick={handleCheck}>Calculate</button>

      {result && (
        <div>
          <p>Effort Score: {result.willpowerCostScore}</p>
          <p>Estimated Time (weeks): {result.estimatedTimeWeeks}</p>
        </div>
      )}
    </div>
  );
}
