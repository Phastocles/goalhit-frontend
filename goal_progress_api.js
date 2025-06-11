<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GoalHit-BitByBit — Build Habits That Stick</title>
  <meta name="description" content="Turn your goals into lasting habits with science-backed strategies. Break down your ambitions, track your progress, and stay motivated with GoalHit-BitByBit." />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
  </script>
  <style>
    body {
      font-family: system-ui, sans-serif;
      background: #023047;
      margin: 0;
      padding: 2rem;
      color: #8ECAE6;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .container {
      max-width: 600px;
      width: 100%;
      text-align: center;
    }
    input, select {
      width: 100%;
      padding: 1rem;
      border-radius: 1rem;
      border: 1px solid #8ECAE6;
      margin-bottom: 1rem;
      font-size: 1rem;
    }
    button {
      padding: 0.75rem 2rem;
      font-size: 1rem;
      border: none;
      border-radius: 1rem;
      background-color: #FFB703;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #FB8500;
    }
    .results {
      background: white;
      padding: 2rem;
      border-radius: 1.5rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      margin-top: 2rem;
      text-align: left;
    }
    h1, h2, h3 {
      margin-bottom: 0.5rem;
    }
    ul {
      padding-left: 1.5rem;
    }
    canvas {
      max-width: 100%;
      margin-top: 2rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1></h1>
    <p>Turn dreaming into doing by breaking down your habits into small, actionable wins — all powered by behavioral science* and habit stacking.</p>

    <input type="text" id="goalInput" placeholder="What's your goal (write a novel, mental offload, acheive academically, etc.)?" />
    <button onclick="generateHabit()">Break It Down</button>

    <div id="habitResults" class="results" style="display: none;">
      <h2>🎯 Your Goal: <span id="goalText"></span></h2>
      <h3>📅 Daily Habit Plan:</h3>
      <ul id="habitList"></ul>

      <h3>📍 Trigger Suggestions:</h3>
      <ul id="triggerList"></ul>

      <h3>🎁 Reward Suggestions:</h3>
      <ul id="rewardList"></ul>
    </div>

    <div class="results">
      <h2>💡 Habit Cost Tracker</h2>
      <input type="text" id="habitCostName" placeholder="Describe your habit" />
      <input type="range" id="habitTime" min="5" max="120" />
      <input type="range" id="habitDifficulty" min="0" max="100" />
      <button onclick="trackCost()">Estimate Cost</button>
      <div id="habitCostOutput" style="display:none">
        <h3 id="costSummary"></h3>
        <p><strong>Time to form:</strong> <span id="formTime"></span></p>
        <p><strong>Willpower Load:</strong> <span id="willpower"></span></p>
        <p><strong>Dropout Risk:</strong> <span id="dropout"></span></p>
      </div>
    </div>

    <div class="results">
      <h2>📈 Progress Tracker</h2>
      <input type="text" id="progressGoal" placeholder="e.g. Write a book" />
      <input type="number" id="progressDays" placeholder="Days to track (e.g. 30)" />
      <button onclick="trackProgress()">Visualize Progress</button>
      <canvas id="progressChart"></canvas>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    async function generateHabit() {
      const goal = document.getElementById("goalInput").value;
      if (!goal.trim()) return;

      const res = await fetch("/api/generate-habit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal })
      });
      const data = await res.json();

      document.getElementById("goalText").textContent = data.goal;
      document.getElementById("habitList").innerHTML = data.habits.map(h => `<li>${h}</li>`).join('');
      document.getElementById("triggerList").innerHTML = data.triggers.map(t => `<li>${t}</li>`).join('');
      document.getElementById("rewardList").innerHTML = data.rewards.map(r => `<li>${r}</li>`).join('');
      document.getElementById("habitResults").style.display = "block";
    }

    async function trackCost() {
      const habit = document.getElementById("habitCostName").value;
      const timePerDay = document.getElementById("habitTime").value;
      const difficulty = document.getElementById("habitDifficulty").value;

      const res = await fetch("/api/habit-cost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ habit, timePerDay, difficulty })
      });
      const data = await res.json();

      document.getElementById("costSummary").textContent = data.summary;
      document.getElementById("formTime").textContent = data.timeToForm;
      document.getElementById("willpower").textContent = data.willpowerLoad;
      document.getElementById("dropout").textContent = data.dropoutRisk;
      document.getElementById("habitCostOutput").style.display = "block";
    }

    async function trackProgress() {
      const goalName = document.getElementById("progressGoal").value;
      const days = document.getElementById("progressDays").value;

      const res = await fetch("/api/goal-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goalName, days })
      });
      const { graphData } = await res.json();

      const ctx = document.getElementById("progressChart").getContext("2d");
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: graphData.map(p => `Day ${p.day}`),
          datasets: [{
            label: 'Progress %',
            data: graphData.map(p => p.progress),
            fill: false,
            borderColor: '#023047',
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { min: 0, max: 100 }
          }
        }
      });
    }
  </script>
</body>
</html>
