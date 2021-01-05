function sendToPython() {
  var { PythonShell } = require('python-shell');

  let options = {
    mode: 'text',
    args: [input.value]
  };
  PythonShell.run('./py/calc.py', options, function (err) {
    if (err) throw err;
  });
}

btn.addEventListener('click', () => {
  sendToPython();
});

btn.dispatchEvent(new Event('click'));

