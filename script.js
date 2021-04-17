const cellList = Array.from(document.getElementsByClassName('cell'))
let countMarked = 0

let cellvisit = []

cellList.forEach((currentCell,i)=>{
    cellvisit.push(0)
    currentCell.addEventListener('click', ()=>{ 
        if(cellvisit[i]==0){
            cellvisit[i] = 1
        let sign = getSign()
        let classList = currentCell.classList.value.split(' ')
            removeExtraClasses(classList, currentCell)       
            currentCell.classList.add(sign)
        countMarked += 1
        markWave()
        } 
    })
})

function getSign(){
    let sign = 'o'
    if(countMarked%2==0){
        sign = 'x'
    }
    return sign
}

function removeExtraClasses(classList, currentCellList){
    classList.forEach((className)=>{
        if(className!="cell") currentCellList.classList.remove(className)
    })
}
function markWave(){
    let sign = getSign()
    if(countMarked%2==0){
        sign = 'x'
    }
    for(let i=0; i<cellvisit.length;i++){
        if(cellvisit[i]==0){
            let classList = cellList[i].classList.value.split(' ')
            removeExtraClasses(classList, cellList[i])
            cellList[i].classList.add('wave')
            cellList[i].classList.add(sign)
        }      
    }
}

markWave()