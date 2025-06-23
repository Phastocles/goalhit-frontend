const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// 1. Generate Habit Plan
export async function generateHabit(goal) {
  const res = await fetch(`${BASE_URL}/generate-habit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ goal })
  });
  return await res.json();
}

// 2. Habit Cost Tracker
export async function calculateHabitCost({ goal, dailyMinutes, difficulty }) {
  const res = await fetch(`${BASE_URL}/habit-cost-tracker`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ goal, dailyMinutes, difficulty })
  });
  return await res.json();
}

// 3. Progress Tracker
export async function getProgress({ goal, progressPercent }) {
  const res = await fetch(`${BASE_URL}/progress-tracker`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ goal, progressPercent })
  });
  return await res.json();
}
