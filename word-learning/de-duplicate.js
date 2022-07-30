const fs = require('fs');

const reg = /\w+/g;
const content = fs.readFileSync('word-learning/关键单词表.md').toString();
const lines = content.split('\n')
let newContent = "";
const map = {}
for (let i = 0; i < lines.length; i++) {
    const res = [...lines[i].matchAll(reg)];
    let found = false;
    res.forEach(o => {
        // console.log(o[0])
        if (map[o[0]]) {
            console.log('find dup', o[0], 'new', i + 1, 'old', map[o[0]])
            found = true;
        }
        map[o[0]] = i + 1
    })
    if (found && i > 415) {
        continue;
    }
    newContent += lines[i] + '\n'
}

fs.writeFileSync('word-learning/关键单词表-new.md', newContent)