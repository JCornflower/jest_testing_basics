function isDone(str1, str2) {
    return removeExtraSpaces(str1) === str2;
}

function removeExtraSpaces(s) {
    return s
    .trim()
    .replace(/(\s)+/g, ' ');
};

module.exports = isDone;