
async function generateHabit() {
  const goal = document.getElementById("goalInput").value;
  if (!goal.trim()) return;

  try {
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
  } catch (error) {
    alert("Something went wrong :-( Please try again later. Remember that you matter, and every win counts.");
    console.error(error);
  }
}
