const cellList = Array.from(document.getElementsByClassName('cell'))
let countMarked = 0

let n = Math.floor(Math.sqrt(cellList.length))

let cellvisit = []

const signMap = {
    'x':1,
    'o':2
}

function checkWinning(sign){
    let count = 0
    
    //top row checking
    for(let i=0;i<n && cellvisit[i]==signMap[sign];i++){ count++}
    if(count==n){
        return true
    }

    //bottom row checking
    count=0
    for(let i=cellList.length-3;i<cellList.length && cellvisit[i]==signMap[sign];i++)
    {
        count++
    }
    if(count==n){
        return true
    }

    //left column checking
    count = 0
    let i=0
    while(count<n && cellvisit[i]==signMap[sign]){
        i += n 
        count++
    }
    if(count==n){
        return true
    }

    //right column checking
    i = n-1
    count = 0 
    while(count<n && cellvisit[i]==signMap[sign]){
        i+=n 
        count++
    }
    if(count==n){
        return true
    }

    //left corner checking
    i = 0
    count = 0
    while(count<n && cellvisit[i]==signMap[sign]){
        i+=n+1
        count++
    }
    if(count==n){
        return true
    }

    //right corner checking
    i=n-1
    count = 0
    while(count<n && cellvisit[i]==signMap[sign]){
        i+=n-1
        count++
    }
    if(count==n){
        return true
    }
    return false
    
}

cellList.forEach((currentCell,i)=>{
    cellvisit.push(0)
    currentCell.addEventListener('click', ()=>{ 
        
        if(cellvisit[i]==0){
            let sign = getSign()
            cellvisit[i] = signMap[sign]
        
        let classList = currentCell.classList.value.split(' ')
            removeExtraClasses(classList, currentCell)       
            currentCell.classList.add(sign)
        countMarked += 1
        markWave()
        if(checkWinning(sign)){
            alert(sign + " won!!")
            window.location.reload()
        }
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