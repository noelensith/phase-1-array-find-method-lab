// code your solution here
function superbowlWin(record) {
    function isWinning(year) {
        if (year.result === 'W') {
            return true
        }
    }

    const winningYearObject = record.find(isWinning)

    if (winningYearObject) {
        return winningYearObject.year
    }
}
