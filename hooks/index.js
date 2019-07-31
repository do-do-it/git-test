const fs = require('fs')
const path = require('path')
let preCommitFile = fs.readFileSync(path.join(__dirname, './pre-push'))

fs.writeFileSync('.git/hooks/pre-push', preCommitFile, {
    encoding: 'utf8',
    mode: 0o777
})