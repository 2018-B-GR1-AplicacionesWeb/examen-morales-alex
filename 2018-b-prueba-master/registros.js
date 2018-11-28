const fs = require('fs');

module.exports.load = function (filepath) {
    try {
        const content = fs.readFileSync(filepath, 'utf-8');
        return JSON.parse(content);
    } catch (e) {
        fs.openSync(filepath, 'w');
        return [];
    }
}