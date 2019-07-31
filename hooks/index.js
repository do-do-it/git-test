const fs = require('fs')
const path = require('path')
let preCommitFile = fs.readFileSync(path.join(__dirname, './pre-commit'))

fs.writeFileSync('.git/hooks/pre-commit', preCommitFile, {
    encoding: 'utf8',
    mode: 0o777
})