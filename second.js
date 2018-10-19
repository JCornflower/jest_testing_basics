function slice(text, maxLen) {
    const sliced = String(text).slice(0, maxLen);

    return (sliced.length < String(text).length) ? sliced.concat('...') : sliced;
    
}
module.exports = slice;