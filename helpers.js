function successfullMessage(msg) {
    return "✅ *QueenAmda*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *QueenAmda*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "• *QueenAmda :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
