function updateBuddyList(){
    const buddyName = document.getElementById("buddyNameInput").value;
    if(buddyName) createRow(buddyName);      
    checkListSize();
}

function checkListSize(){
    const table = document.getElementById('tableBody');
    let trs = table.getElementsByTagName('tr');
    if(trs.length){
        document.getElementById("emptyList").style.visibility="hidden";
        // console.log("it is not visible");
    }
    else{
        document.getElementById("emptyList").style.visibility="visible";
        // console.log("it is visible")
    }
}

function removeCompletedTask(activateButton){
    // if(activateButton) console.log("activate button called");
    // else console.log("remove tasks called");
    const table = document.getElementById('tableBody');
    let trs = table.getElementsByTagName('tr');
    let activateCount = 0;
    let i=0;
    while(i<trs.length){
        let tds = trs[i].getElementsByTagName('td');
        // console.log(tds[0], i);
        let checkbox = tds[0].querySelector('input[name="checkbox"]');
        // console.log(checkbox.checked);
        if(activateButton){
            if(checkbox.checked) activateCount++;
            i++;
        }
        else{
            if(checkbox.checked){
                table.removeChild(trs[i]);
                // console.log("row removed");
            }
            else i++;
        }
    }  
    if(activateCount>0) {
        document.getElementById('completedButton').style.visibility="visible";
    }
    else{
        document.getElementById('completedButton').style.visibility="hidden";
    }
    checkListSize();
}
function createRow(buddyName) {
    const row = document.createElement('tr');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.value = "value";
    checkbox.id = "id";    
    const tabledata1 = document.createElement('td');
    tabledata1.appendChild(checkbox);
    const tabledata2 = document.createElement('td');
    const inputCol = document.createElement('input');
    inputCol.value = buddyName;
    tabledata2.appendChild(inputCol);
    row.appendChild(tabledata1);
    row.appendChild(tabledata2);
    const tablebody = document.getElementById('tableBody');
    tablebody.appendChild(row);
    checkbox.addEventListener('change', removeCompletedTask);
}