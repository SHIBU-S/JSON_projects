const jsonData = [
    {
        "id":1,
        "name": "Shibu",
        "age": 21,
        "email": "shibusahadevan018@gmail.com"
    },
    {
        "id":2,
        "name": "Vijay",
        "age": 50,
        "email": "joseph.vijay@gmail.com"
    },
    {
        "id":3,
        "name": "SahaDevan",
        "age": 50,
        "email": "sahadevanbharatbakes@gmail.com"
    },
    {
        "id":4,
        "name": "Shibitha",
        "age": 19,
        "email": "paapi@gmail.com"
    },
    {
        "id":5,
        "name": "Ajay",
        "age": 65,
        "email": "ajay@gmail.com"
    }
];

function populateTable(data) 
{
    const tableBody = document.getElementById("tablebody");
    tableBody.innerHTML = '';

    for(const item of data)
    {
        const row = document.createElement('tr');
        
        const idcell = document.createElement("td");
            idcell.innerHTML = item.id;
        
        const nameCell = document.createElement('td');
            nameCell.innerHTML = item.name;
        
        const ageCell = document.createElement('td');
            ageCell.innerHTML = item.age;
        
        const emailCell = document.createElement('td');
            emailCell.innerHTML = item.email;
        
        row.appendChild(idcell);
        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(emailCell);
        
        tableBody.appendChild(row);
    }
}




function addNewRow() 
{ 
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const email = document.getElementById("email").value;

    jsonData.push({id, name, age, email });

    populateTable(jsonData);
    
    document.getElementById("data-form").reset();
}



function deleteSelectedRows()
{
    let userInput = document.getElementById("delete").value;
    if(userInput === "")
    {
        document.getElementById("delete_error").innerHTML = "Please enter a value to delete";
    }
    else
    {
        json_data = jsonData.filter(item => item.name.toLowerCase() !== userInput.toLowerCase());
        document.getElementById("delete_error").innerHTML = "";
        populateTable(json_data);
    }
}




function searchname()
{
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filteredname = jsonData.filter(items => items.name.toLowerCase().includes(searchValue) || items.email.toLocaleLowerCase().includes(searchValue));
    if(searchValue === "")
    {
        document.getElementById("name_error").innerHTML = "Please enter a name to search";
    }
    else 
    {
        document.getElementById("name_error").innerHTML = "";
        populateTable(filteredname);
    }
}


function searchfilter()
{
    const searchValue = parseInt(document.getElementById("age-filter").value);
    const filterage = jsonData.filter(item => item.age === searchValue || item.id === searchValue);
    if(searchValue === "")
    {
        document.getElementById("age_error").innerHTML = "Please enter a age to search";
    }
    else
    {
        populateTable(filterage);
    }
}


function sort_atoz()
{
    jsonData.sort((a,b)=>{
        if(a.name < b.name)
        {
            return -1;
        }
        populateTable(jsonData);
    });
}


function sort_ztoa()
{
    jsonData.sort((a,b)=>{
        if(a.name > b.name)
        {
            return -1;
        }
        populateTable(jsonData);
    });
}




populateTable(jsonData);


