let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'cross',
    'circle',
];

function init() {
    render();
}

function render() {
    const contentElement = document.getElementById('content');
    contentElement.innerHTML = ''; // leert den Container
  
    const table = document.createElement('table');
    for (let i = 0; i < 3; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement('td');
        const index = i * 3 + j;
        cell.textContent = fields[index] === 'circle' ? 'O' : (fields[index] === 'cross' ? 'X' : '');
        cell.addEventListener('click', () => onCellClick(index));
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  
    contentElement.appendChild(table);
  }
  
  function onCellClick(index) {
    // Hier können Sie die Logik für den Klick auf ein Feld implementieren
    // Zum Beispiel, den Zustand des Felds ändern und dann render() aufrufen
  }
  
  // Initialisierung des Spiels
