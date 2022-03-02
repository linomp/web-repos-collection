// child process example from: https://nodejs.org/docs/latest/api/child_process.html

const { spawn } = require('child_process');
const ls = spawn('git', ['--version']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});


/* Git Submodule
- Add:
git submodule add <remote_url> <destination_folder>

- Pull:
git submodule update --init --recursive

- Remove:
git submodule deinit <submodule>
git rm <submodule>
*/