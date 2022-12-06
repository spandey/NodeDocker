let defaultValue = 10;
module.exports = {
    get: ()=> defaultValue,
    set:(val) => { defaultValue = val}
}