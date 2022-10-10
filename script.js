const list = document.getElementById('list');
const input = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    
    const myItem = input.value;
    input.value = "";

    if(myItem == ''){
        alert('Please fill the input field');
    } else{
    
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');
    
        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete'
    
        list.appendChild(listItem);
    
        listBtn.addEventListener('click', () =>{
            list.removeChild(listItem);
        });
        
        input.focus();
    }



})