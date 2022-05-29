{
    let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('body').appendChild(table);


let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Cliente. No.";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Run Identity";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "First Name";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Last Name";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "Company";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
thead.appendChild(row_1);

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "1.";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "26.001.002-3";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "Melchior";
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "Saint";
let row_2_data_5 = document.createElement('td');
row_2_data_5.innerHTML = "ClaroChile";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
row_2.appendChild(row_2_data_5);
tbody.appendChild(row_2);

let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "2.";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "26.002.003-4.";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "Juan.";
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "Leandro.";
let row_3_data_5 = document.createElement('td');
row_3_data_5.innerHTML = "Fenasa. SA.";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
row_3.appendChild(row_3_data_5);
tbody.appendChild(row_3);



let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = ".";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = ".";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = ".";
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = ".";
let row_4_data_5 = document.createElement('td');
row_4_data_5.innerHTML = ".";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
row_4.appendChild(row_4_data_5);
tbody.appendChild(row_4);
}