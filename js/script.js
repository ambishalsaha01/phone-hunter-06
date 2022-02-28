// search phone
const loadPhone = () => {
    const searchInput = document.getElementById('search-input')
    const searchInputValue = searchInput.value;
    searchInput.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

// display phone
const displayPhone = phones => {
    // console.log(phones.data)
    for(const phone of phones){
        console.log(phone)
        const searchResult = document.getElementById('search-result');
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="img-fluid" alt="Mobile Phone">
            <div class="card-body">
                <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
                <p>Brand: ${phone.brand}</p>
                <a href="#" class="btn btn-primary">Explore</a>
            </div>
        </div>
        `
        searchResult.appendChild(div);
    }
}
