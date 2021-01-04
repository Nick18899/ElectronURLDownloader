function sendToPython() {
  var {PythonShell} = require('python-shell');
  result.textContent = '123';

  let options = {
    mode: 'text',
    args: [input.value]
  };

  PythonShell.run('./py/calc.py', options, function (err, results) {
    if (err) throw err;
    console.log('fuction done');
    // результаты - это массив, состоящий из сообщений, собранных во время выполнения
    //console.log('results: ', results);
    result.textContent = 'somethingelse';
  });

  python.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  python.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

btn.addEventListener('click', () => {
  result.textContent = 'url';
  sendToPython();
});

btn.dispatchEvent(new Event('click'));

