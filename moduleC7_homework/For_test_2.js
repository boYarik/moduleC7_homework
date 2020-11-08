
// Последовательность Финобачи
// a, b - Первые 2 числа
// c - Количество сложений
function finnobaci(a, b, c){
    finnobaciList=[]
    finnobaciList.push(a)
    finnobaciList.push(b)
    for (i=2;i <= c ;i++) {
        d = finnobaciList[i-2] + finnobaciList[i-1]
        finnobaciList.push(d)
    }
    return(finnobaciList[c])
}
module.exports = finnobaci