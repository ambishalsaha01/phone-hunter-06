// <<<<<<<<<<<<<<<Search Phone Field>>>>>>>>>>>>>>>
const loadPhone = () => {
    const searchInput = document.getElementById('search-input')
    const searchInputValue = searchInput.value;
    searchInput.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data.slice(0, 20)))
}

// <<<<<<<<<<<<<<<Display Phone Field>>>>>>>>>>>>>>>
const displayPhone = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = ''
    phones.forEach(phone =>{
        const div = document.createElement('div');
        div.classList.add('col-12', 'col-md-6', 'col-lg-4');
        div.innerHTML = `
        <div class="card product-item">
            <img src="${phone.image}" class="img-fluid" alt="Mobile Phone">
            <div class="card-body">
                <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
                <p>Brand: ${phone.brand}</p>
                <button class="btn explore-btn" onclick="PhoneDetails('${phone.slug}')">Explore</button>
            </div>
        </div>
        `
        searchResult.appendChild(div);
    });
}

// <<<<<<<<<<<<<<<Phone Details Field>>>>>>>>>>>>>>>
const PhoneDetails = phone => {
    const url = `https://openapi.programming-hero.com/api/phone/${phone}`;
    fetch(url)
    .then(res => res.json())
    .then(data => loadPhoneDetail(data))
}

// <<<<<<<<<<<<<<<Load Phone Details Field>>>>>>>>>>>>>>>
const loadPhoneDetail = info => {
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
    <div class="card border-0 w-75 my-5 mx-auto phone-detail">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${info.data.image}" class="img-fluid w-100 rounded-start" alt="mobile phone">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title">Name: ${info.data.name}</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> <span class="list-title">Release Date:</span> ${info.data.releaseDate}</li>
                        <li class="list-group-item"> <span class="list-title">Brand:</span> ${info.data.brand}</li>
                        <li class="list-group-item"> <span class="list-title">ChipSet:</span> ${info.data.mainFeatures.chipSet}</li>
                        <li class="list-group-item"> <span class="list-title">Memory:</span> ${info.data.mainFeatures.displaySize}</li>
                        <li class="list-group-item"> <span class="list-title">Memory:</span> ${info.data.mainFeatures.memory}</li>
                        <li class="list-group-item"> <span class="list-title">Storage:</span> ${info.data.mainFeatures.storage}</li>
                        <h3 class="mt-3">Sensor</h3>
                        <li class="list-group-item"> <span class="list-title">Sensor:</span> ${info.data.mainFeatures.sensors}</li>
                        <h3 class="mt-3">others</h3>
                        <li class="list-group-item"> <span class="list-title">Bluetooth:</span> ${info.data.others.Bluetooth}</li>
                        <li class="list-group-item"> <span class="list-title">GPS:</span> ${info.data.others.GPS}</li>
                        <li class="list-group-item"> <span class="list-title">NFC:</span> ${info.data.others.NFC}</li>
                        <li class="list-group-item"> <span class="list-title">Radio:</span> ${info.data.others.Radio}</li>
                        <li class="list-group-item"> <span class="list-title">USB:</span> ${info.data.others.USB}</li>
                        <li class="list-group-item"> <span class="list-title">WLAN:</span> ${info.data.others.WLAN}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
}
