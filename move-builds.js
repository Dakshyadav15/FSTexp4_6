const fs = require('fs-extra');
const path = require('path');

async function moveBuilds() {
  const dist = path.join(__dirname, 'dist');
  
  // Define source and target paths
  const maps = [
    { src: 'Experiment-4/auth-context-app/dist', dest: 'Experiment-4/auth-context-app' },
    { src: 'Experiment-4/dark-mode-context/dist', dest: 'Experiment-4/dark-mode-context' },
    { src: 'Experiment-5/dist', dest: 'Experiment-5' },
    { src: 'Experiment-6/dist', dest: 'Experiment-6' }
  ];

  for (const map of maps) {
    const targetDir = path.join(dist, map.dest);
    await fs.ensureDir(targetDir);
    await fs.copy(path.join(__dirname, map.src), targetDir);
  }
}

moveBuilds();