import { useState } from 'react';
import { generateHabit } from '../api/habitAPI';

export default function HabitGenerator() {
  const [goal, setGoal] = useState('');
  const [habits, setHabits] = useState([]);

  const handleGenerate = async () => {
    const data = await generateHabit(goal);
    setHabits(data.habits);
  };

  return (
    <div>
      <h2>Generate Daily Habit Plan</h2>
      <input value={goal} onChange={e => setGoal(e.target.value)} placeholder="Enter goal" />
      <button onClick={handleGenerate}>Generate</button>
      <ul>
        {habits.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </div>
  );
}
