const addItem = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const keyValue = document.getElementById('storage-value');
    const value = keyValue.value;


    localStorage.setItem(id, value);
    idInput.value = '';
    keyValue.value = '';
    
}