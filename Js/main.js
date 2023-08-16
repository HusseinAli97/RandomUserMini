const btnGenerate = document.querySelector('#generateUser');
function fetchData() {
    showSpiner()
    fetch('https://randomuser.me/api')
        .then((response) => response.json())
        .then((userData) => {
            hideSpiner()
            displayUser(userData.results[0])
        }
        )
}
function displayUser(user) {
    const userData = document.getElementById('user');
    if (user.gender === 'male') {
        document.querySelector('section').style.backgroundColor = "steelblue"
        btnGenerate.classList.replace('btn-danger', 'btn-primary')
    } else {
        document.querySelector('section').style.backgroundColor = "crimson"
        btnGenerate.classList.replace('btn-primary', 'btn-danger')
    }
    userData.innerHTML =
        `
    <div class="card rounded-5 bg-dark bg-opacity-10">
    <img src="${user.picture.large}" class="card-img-bottom w-100 rounded-circle px-3" alt="...">
    <div class="card-body">
        <h5 class="card-title text-center fw-bolder text-white">${user.name.title}: ${user.name.first} ${user.name.last}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item bg-dark bg-opacity-50 text-white ">
            <span class="fw-bold">
                Age :
            </span>
            ${user.dob.age}
        </li>
        <li class="list-group-item bg-dark bg-opacity-50 text-white ">
            <span class="fw-bold">
                Email :
            </span>
            ${user.email}
        </li>
        <li class="list-group-item bg-dark bg-opacity-50 text-white ">
        <span class="fw-bold">
            Phone :
        </span>
        ${user.phone}
        </li>
        <li class="list-group-item bg-dark bg-opacity-50 text-white ">
        <span class="fw-bold">
            Country :
        </span>
        ${user.location.country}
        </li>
    </ul>
    </div>
    `
}
function showSpiner() {
    document.querySelector('.spinner-border').classList.replace('d-none', 'd-block')
}
function hideSpiner() {
    document.querySelector('.spinner-border').classList.replace('d-block', 'd-none')
}
btnGenerate.addEventListener("click", fetchData)
fetchData()