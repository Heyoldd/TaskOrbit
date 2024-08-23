const textInput = document.getElementById("inputStuff");
const createButton = document.getElementById("addButton");
const container = document.getElementById("largestContainer");
const itemHeight = 50;
const itemMargin = 15;
 
 
 
function createNumerals(){
    for (let i = 0; i < createText < 0; i++){
        console.log(createNumerals)
    }
}
function createText() {
 
    const text = textInput.value;
    const newText = document.createElement("div");
    const itemCount = container.childElementCount;
     const topPosition = itemCount * (itemHeight + itemMargin);
 
    newText.style.display = 'flex';
    newText.style.width = '375px';
    newText.style.height = `${itemHeight}px`;
    newText.style.fontSize = '40px';
    newText.style.position = "absolute";
    newText.style.left = "10px";
    newText.style.top = `${topPosition}px`;
    newText.style.backgroundColor = '#AEC3AE';
    newText.style.borderRadius = "10px";
    newText.style.border = "white 1.5px solid";
    newText.style.alignItems = 'center';
    newText.style.justifyContent = 'flex-start';
    newText.style.boxSizing = 'border-box';
    newText.style.padding = '10px';
    newText.style.margin = `${itemMargin}px`;
    newText.style.fontFamily = `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`;
    newText.textContent = text;
const editButton = document.createElement("button");
    editButton.textContent = 'Edit';
    editButton.style.position = 'absolute';
    editButton.style.display = 'flex';
    editButton.style.justifyContent = 'center';
    editButton.style.alignItems = 'center';
    editButton.style.right = '80px';
    editButton.style.color = '#94A684';
    editButton.style.backgroundColor = '#E4E4D0';
    editButton.style.borderRadius = '10px';
    editButton.style.border = '2px solid #AEC3AE';
    editButton.style.height = '45px';
    editButton.style.width = '60px';
    editButton.style.fontFamily = `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`;
    editButton.style.cursor = 'pointer';
 
    newText.appendChild(editButton);
 
 
 
    
const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.style.position = 'absolute';
    doneButton.style.display = 'none';
    doneButton.style.justifyContent = 'center';
    doneButton.style.alignItems = 'center';
    doneButton.style.right = '10px';
    doneButton.style.color = '#94A684';
    doneButton.style.backgroundColor = '#E4E4D0';
    doneButton.style.borderRadius = '10px';
    doneButton.style.border = '2px solid #AEC3AE';
    doneButton.style.height = '45px';
    doneButton.style.userSelect = 'none'
    doneButton.style.width = '60px';
    doneButton.style.fontFamily = `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`;
    doneButton.style.cursor = 'pointer';
    newText.appendChild(doneButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    deleteButton.style.width = '60px';
    deleteButton.style.height = '45px';
    deleteButton.style.position = 'absolute';
    deleteButton.style.display = 'flex';
    deleteButton.style.justifyContent = 'center';
    deleteButton.style.alignItems = 'center';
    deleteButton.style.right = '10px';
    deleteButton.style.color = '#94A684';
    deleteButton.style.backgroundColor = '#E4E4D0';
    deleteButton.style.borderRadius = '10px';
    deleteButton.style.border = '2px solid #AEC3AE';
    deleteButton.style.fontFamily = `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`;
    deleteButton.style.cursor = 'pointer';
    newText.appendChild(deleteButton);
    container.appendChild(newText);
    editButton.addEventListener('click', function () {
        newText.contentEditable = true;
        editButton.style.display = 'none';
        doneButton.style.display = 'inline';
    });doneButton.addEventListener('click', function () {
        newText.contentEditable = false;
        doneButton.style.display = 'none';
        editButton.style.display = 'inline';
      });
    deleteButton.addEventListener('click', function () {
        newText.remove();
});
 
 
 
    
 
textInput.value = '';
}
 
 
createButton.addEventListener('click', createText);
 
 
 
