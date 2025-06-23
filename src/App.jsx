import HabitGenerator from './components/HabitGenerator';
import CostTracker from './components/CostTracker';
import ProgressTracker from './components/ProgressTracker';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <HabitGenerator />
      <hr />
      <CostTracker />
      <hr />
      <ProgressTracker />
    </div>
  );
}
