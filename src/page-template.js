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
