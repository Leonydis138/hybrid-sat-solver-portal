// Chart rendering
fetch('data/performance-data.json')
  .then(res => res.json())
  .then(data => {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.solvers,
        datasets: [{ label: 'Avg Time (ms)', data: data.avg_time_ms }]
      },
      options: { responsive: true }
    });
    // overall chart
    const ctx2 = document.getElementById('overallChart').getContext('2d');
    new Chart(ctx2, { type: 'bar', data: { labels: data.sets, datasets: [{ label: 'Performance', data: data.set_perf }] }, options: {} });
  });