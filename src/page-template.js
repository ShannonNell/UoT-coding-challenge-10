//employee cards
const generateCards = teamArray => {
    let stringResponse = '';

    teamArray.forEach(element => {
        if (element.role === 'Manager') {
            stringResponse += `
            <div class="card" style="width: 18rem;">
                <div class="card-header text-white bg-primary mb-3">
                    <h5 class="card-title"> ${element.name} </h5>
                    <h6 class="card-subtitle mb-2">${element.role}</h6> 
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${element.id}</li>
                        <li class="list-group-item">
                            Email: <a href="mailto:${element.email}">${element.email}</a>
                        </li>
                        <li class="list-group-item">Office Number: ${element.officeNum}</li>
                    </ul>
                </div>
            </div>
            `;
        }
        if (element.role === 'Engineer') {
            stringResponse += `
            <div class="card" style="width: 18rem;">
                <div class="card-header text-white bg-primary mb-3">
                    <h5 class="card-title"> ${element.name} </h5>
                    <h6 class="card-subtitle mb-2">${element.role}</h6> 
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${element.id}</li>
                        <li class="list-group-item">
                            Email: <a href="mailto:${element.email}">${element.email}</a>
                        </li>
                        <li class="list-group-item">
                            <a href="https://github.com/${element.gitHub}">${element.gitHub}</a>
                        </li>
                    </ul>
                </div>
            </div>
            `;
        }
        if (element.role === 'Intern') {
            stringResponse += `
            <div class="card" style="width: 18rem;">
                <div class="card-header text-white bg-primary mb-3">
                    <h5 class="card-title"> ${element.name} </h5>
                    <h6 class="card-subtitle mb-2">${element.role}</h6> 
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${element.id}</li>
                        <li class="list-group-item">
                            Email: <a href="mailto:${element.email}">${element.email}</a>
                        </li>
                        <li class="list-group-item">School: ${element.school}</li>
                    </ul>
                </div>
            </div>
            `;
        }
    });
    return stringResponse;
};

//generate actual page HTML
const generateHTML = teamArray => {
    generateCards(teamArray);
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="./src/style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h2>
        </header>
        <main>
            ${generateCards(teamArray)}
        </main> 
    </body>
    </html>   
    `
};

module.exports = generateHTML;
