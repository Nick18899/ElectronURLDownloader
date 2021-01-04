function sendToPython() {
  var { PythonShell } = require('python-shell');

  let options = {
    mode: 'text',
    args: [input.value]
  };
  //console.log(options);
  PythonShell.run('./py/calc.py', options, function (err) {
    if (err) throw err;
    //result.textContent = results;
  });
}

btn.addEventListener('click', () => {
  //result.textContent = 'url';
  sendToPython();
});

btn.dispatchEvent(new Event('click'));

