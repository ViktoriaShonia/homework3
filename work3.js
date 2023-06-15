const values = [];

function addValues() {
    const input1 = document.getElementById('CarsTypes');
    const input2 = document.getElementById('EngineTypes');
    const value1 = input1.value;
    const value2 = input2.value;


    if (value1 !== '' && value2 !== '') {
        const combinedValue = value1 + ' ' + value2;

        values.push(combinedValue);

        input1.value = '';
        input2.value = '';

        const valueList = document.getElementById('valueList');
        const listItem = document.createElement('li');
        listItem.textContent = combinedValue;
        valueList.appendChild(listItem);
        console.log(values, '122121')
    } else {
        alert('Please fill in both boxes')
    }
}

const deleteValue = [];

function addValues2() {
    values.splice(-2);
    const valueList = document.getElementById('valueList');
    const listItem = document.createElement('li');
    valueList.appendChild(listItem);
    console.log(values);
}

const spliceValue = [];

function addValues3() {
    const input1 = document.getElementById('CarsTypes');
    const input2 = document.getElementById('EngineTypes');
    const value1 = input1.value;
    const value2 = input2.value;

    if (value1 !== '' && value2 !== '') {
        const combinedValue = value1 + ' ' + value2;

        values.unshift(combinedValue)

        input1.value = '';
        input2.value = '';

        const valueList = document.getElementById('valueList');
        const listItem = document.createElement('li');
        listItem.textContent = combinedValue;
        valueList.appendChild(listItem);
        console.log(values, '122121')
    } else {
        alert('Please fill in both boxes')
    }

}


const RemoveElement = [];

function addValues4() {
    values.splice(0, 2);
    const valueList = document.getElementById('valueList');
    const listItem = document.createElement('li');
    valueList.appendChild(listItem);
    console.log(values);
}



