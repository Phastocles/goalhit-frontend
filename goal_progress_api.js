<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GoalHit-BitByBit — Build Habits That Stick</title>
  <meta name="description" content="Turn your goals into lasting habits with science-backed strategies. Break down your ambitions, track your progress, and stay motivated with GoalHit-BitByBit." />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
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
      color: #000;
    }
    h1, h2, h3 {
      margin-bottom: 0.5rem;
    }
    ul {
      padding-left: 1.5rem;
      text-align: left;
    }
    canvas {
      max-width: 100%;
      margin-top: 2rem;
    }
    footer {
      margin-top: 3rem;
      text-align: center;
      font-size: 0.9rem;
      color: #8ECAE6;
      max-width: 600px;
    }
    .tagline {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
    .subtext {
      font-size: 1rem;
      margin: 1rem 0;
    }
    .benefits {
      list-style: none;
      padding: 0;
      margin: 1rem 0 2rem;
    }
    .benefits li::before {
      content: "✔️ ";
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Ungettable Goals Transformed into Heroic Habits</h1>
    <p class="tagline">Turn dreaming into doing by breaking down your habits into small, actionable wins – all powered by behavioural science* and habit stacking.</p>
    <p class="subtext">
      If you struggle to stay consistent, our free, science-backed AI tool breaks your goals down into a personalized daily habit plan that you can start today. Whatever it may be.
    </p>
    <ul class="benefits">
      <li>Built on behavioral science and habit stacking</li>
      <li>100% free — no login or email required</li>
      <li>No fluff and zero overwhelm. Just clearness and clarity</li>
    </ul>

    <input type="text" id="goalInput" placeholder="What's your goal (write a novel, mental offload, ace exams, etc.)?" />
    <button onclick="generateHabit()">Break It Down For Me</button>

    <div id="habitResults" class="results" style="display: none;">
      <h2>🎯 Your Goal: <span id="goalText"></span></h2>
      <h3>📅 Daily Habit Plan:</h3>
      <ul id="habitList"></ul>

      <h3>📍 Trigger Suggestions:</h3>
      <ul id="triggerList"></ul>

      <h3>🎁 Reward Suggestions:</h3>
      <ul id="rewardList"></ul>

      <button onclick="downloadPlan()">Download Your Plan as PDF</button>
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

    <!-- FAQ -->
    <div class="results">
      <h2>❓ Why Break Goals Into Habits?</h2>
      <ul>
        <li>Big goals don’t fail because you’re lazy. They fail because they feel overwhelming.</li>
        <li>The brain craves simplicity. Small steps feel doable.</li>
        <li>Daily habits can keep you going, even when you're tired, distracted or unmotivated.</li>
        <li>Consistency beats intensity. Success comes bit by bit.</li>
      </ul>
      <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3505409/" target="_blank">🔗 See the science: Lally et al. (2010)</a></p>

      <h3>🧠 Is This Scientifically Backed?</h3>
      <p>Yes. We draw from behavioral psychology, habit stacking, and simplicity science to build recommendations that work.</p>

      <ul>
        <li>
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3505409/" target="_blank" rel="noopener noreferrer">
            Gardner, et al. (2012) – <em>Making health habitual</em> (NIH)
          </a>
        </li>
        <li>
          <a href="https://psycnet.apa.org/record/1999-05760-004" target="_blank" rel="noopener noreferrer">
            Gollwitzer (1999) – <em>Implementation Intentions</em> (APA)
          </a>
        </li>
        <li>
          <a href="https://doi.org/10.1207/s15516709cog1202_4" target="_blank" rel="noopener noreferrer">
            Sweller (1988) – <em>Cognitive Load During Problem Solving</em> (Cognitive Science)
          </a>
        </li>
        <li>
          <a href="https://charlesduhigg.com/the-power-of-habit/" target="_blank" rel="noopener noreferrer">
            Charles Duhigg – <em>The Power of Habit</em>
          </a>
        </li>
        <li>
          <a href="https://jamesclear.com/atomic-habits" target="_blank" rel="noopener noreferrer">
            James Clear – <em>Atomic Habits</em>
          </a>
        </li>
      </ul>

      <h3>👤 Who Is This For?</h3>
      <p>Anyone chasing change — whether you feel financially frustrated or creatively cramped. Whether you're an uninspired writer, overwhelmed student, exhausted parent – or just anyone stuck in a rut. If you've ever said, "I just need to see a way to succeed" you're in the right place.</p>

      <h3>🔓 Do I Need to Sign Up?</h3>
      <p>Nope. Everything on this site works instantly. Then you can copy download your habit plan as a PDF.</p>
    </div>
  </div>

  <!-- Footer -->
<style>
  footer {
    font-size: 0.9rem;
    color: #ccc;
    background-color: #001219;
    padding: 2rem 1rem;
    text-align: center;
    line-height: 1.6;
    margin-top: 4rem;
    border-top: 1px solid #264653;
  }

  footer a {
    color: #8ecae6;
    text-decoration: underline;
  }

  details {
    margin-top: 1rem;
    border: none;
    text-align: left;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  summary {
    cursor: pointer;
    font-weight: bold;
    color: #8ecae6;
    list-style: none;
    position: relative;
    padding-left: 1.5rem;
  }

  summary::before {
    content: "+";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1.2rem;
    line-height: 1;
  }

  details[open] summary::before {
    content: "−";
  }

  details p {
    margin-top: 0.5rem;
    color: #ccc;
  }
</style>

<footer>
  <p>Built by humans who procrastinate, just like you.</p>
  <p>© 2025 GoalHit-BitByBit — All rights reserved.</p>

  <details>
    <summary>Affiliate Disclosure</summary>
    <p>
      Some links on this site are affiliate links. We may earn a small commission if you make a purchase through them — at no extra cost to you.
    </p>
  </details>

  <details>
    <summary>Disclaimer:</summary>
    <p>
      The content provided on this website is for general informational and educational purposes only and is <b>not</b> a substitute for professional advice. Always consult a qualified expert before making medical, psychological, legal, or financial decisions based on this content. Use of this site is at your own risk.
    </p>
  </details>

  <p style="margin-top: 1rem;"><strong>Reminder:</strong> Never share personal, sensitive, or identifying information with AI tools.</p>
</footer>

  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    // Existing JS unchanged
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
      document.getElementById("downloadButton").style.display = "inline-block";
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
    async function downloadPlan() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
  
      const goal = document.getElementById("goalText").textContent;
      const habits = Array.from(document.querySelectorAll("#habitList li")).map(li => li.textContent);
      const triggers = Array.from(document.querySelectorAll("#triggerList li")).map(li => li.textContent);
      const rewards = Array.from(document.querySelectorAll("#rewardList li")).map(li => li.textContent);

      let y = 10;
      doc.setFontSize(14);
      doc.text("🎯 Goal: " + goal, 10, y);
      y += 10;

      doc.setFontSize(12);
      doc.text("📅 Daily Habits:", 10, y);
      y += 8;
      habits.forEach(h => {
        doc.text("- " + h, 12, y);
        y += 6;
      });

      y += 6;
      doc.text("📍 Triggers:", 10, y);
      y += 8;
      triggers.forEach(t => {
        doc.text("- " + t, 12, y);
        y += 6;
      });

      y += 6;
      doc.text("🎁 Rewards:", 10, y);
      y += 8;
      rewards.forEach(r => {
        doc.text("- " + r, 12, y);
        y += 6;
      });

      doc.save("goalhit-habit-plan.pdf");
    }
  </script>
</body>
</html>
