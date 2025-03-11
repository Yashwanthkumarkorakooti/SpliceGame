let arr = [1, 7, 3, 1, 0, 20, 77];
let startIndexInput = document.getElementById('startIndexInput');
let deleteCountInput = document.getElementById('deleteCountInput');
let itemToAddInput = document.getElementById('itemToAddInput'); 
let updatedArray = document.getElementById('updatedArray');
let spliceBtn = document.getElementById('spliceBtn');

function convertToJSON(){
    let covertToJSON = JSON.stringify(arr);
    updatedArray.textContent = covertToJSON ;
}
convertToJSON();
spliceBtn.onclick = function(){
    let startIndexValue = startIndexInput.value ;
    let deleteCountValue = deleteCountInput.value;
    let itemToAddValue = itemToAddInput.value;
    
    if(startIndexValue === ''){
        alert("Please enter valid Index");
        return;
    }
    if(deleteCountValue === ''){
        deleteCountValue = 0;
    }
    
    if(itemToAddValue === ''){
        arr.splice(parseInt(startIndexValue),parseInt(deleteCountValue));
    }
    else{
        arr.splice(parseInt(startIndexValue),parseInt(deleteCountValue),itemToAddValue);
    }
    startIndexInput.value = '';
    deleteCountInput.value = '';
    itemToAddInput.value = '';
    convertToJSON();
}