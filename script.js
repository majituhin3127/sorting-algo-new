let sampleArray = [];

// ———— Helper Functions ————
function clearOutput() {
  document.getElementById('output').innerHTML = '';
}

function printLine(text) {
  const p = document.createElement('p');
  p.textContent = text;
  document.getElementById('output').appendChild(p);
}

function updateCurrentArrayDisplay() {
  const disp = document.getElementById('current-array');
  disp.innerHTML = `Current array: <em>[${sampleArray.join(', ')}]</em>`;
}

// ———— User‐Input Setup ————
document.getElementById('set-array-btn').addEventListener('click', () => {
  const raw = document.getElementById('user-array').value.trim();
  if (!raw) {
    alert('Please enter at least one number.');
    return;
  }
  const parts = raw.split(',').map(s => s.trim());
  const nums = [];
  for (let part of parts) {
    const n = Number(part);
    if (isNaN(n)) {
      alert(`"${part}" is not a valid number.`);
      return;
    }
    nums.push(n);
  }
  sampleArray = nums;
  updateCurrentArrayDisplay();
  clearOutput();
});

// ———— Sorting Routines ————
function runBubbleSort() {
  if (sampleArray.length === 0) { alert('Set your array first!'); return; }
  clearOutput();
  let arr = sampleArray.slice();
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    printLine(`After pass ${i + 1}: [${arr.join(', ')}]`);
    if (!swapped) break;
  }
  printLine(`Sorted array: [${arr.join(', ')}]`);
}

function runSelectionSort() {
  if (sampleArray.length === 0) { alert('Set your array first!'); return; }
  clearOutput();
  let arr = sampleArray.slice();
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    printLine(`After pass ${i + 1}: [${arr.join(', ')}]`);
  }
  printLine(`Sorted array: [${arr.join(', ')}]`);
}

function runInsertionSort() {
  if (sampleArray.length === 0) { alert('Set your array first!'); return; }
  clearOutput();
  let arr = sampleArray.slice();
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    printLine(`After pass ${i}: [${arr.join(', ')}]`);
  }
  printLine(`Sorted array: [${arr.join(', ')}]`);
}
