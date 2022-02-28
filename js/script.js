// <<<<<<<<<<<<<<<Search Phone Field>>>>>>>>>>>>>>>
const loadPhone = () => {
    const searchInput = document.getElementById('search-input')
    const searchInputValue = searchInput.value;
    searchInput.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

// <<<<<<<<<<<<<<<Display Phone Field>>>>>>>>>>>>>>>
const displayPhone = phones => {
    for(const phone of phones){
        const searchResult = document.getElementById('search-result');
        const div = document.createElement('div');
        div.classList.add('col-12', 'col-md-6', 'col-lg-4');
        div.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="img-fluid" alt="Mobile Phone">
            <div class="card-body">
                <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
                <p>Brand: ${phone.brand}</p>
                <button class="btn btn-primary" onclick="PhoneDetails('${phone.slug}')">Explore</button>
            </div>
        </div>
        `
        searchResult.appendChild(div);
    }
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
    // console.log(info)
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
    <div class="card w-75 my-5 mx-auto">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${info.data.image}" class="img-fluid w-100 rounded-start" alt="mobile phone">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title">Name: ${info.data.name}</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Release Date: ${info.data.releaseDate}</li>
                        <li class="list-group-item">Brand: ${info.data.brand}</li>
                        <li class="list-group-item">ChipSet: ${info.data.mainFeatures.chipSet}</li>
                        <li class="list-group-item">Memory: ${info.data.mainFeatures.displaySize}</li>
                        <li class="list-group-item">Memory: ${info.data.mainFeatures.memory}</li>
                        <li class="list-group-item">Storage: ${info.data.mainFeatures.storage}</li>
                        <h3 class="mt-3">Sensor</h3>
                        <li class="list-group-item">Sensor: ${info.data.mainFeatures.sensors}</li>
                        <h3 class="mt-3">others</h3>
                        <li class="list-group-item">Bluetooth: ${info.data.others.Bluetooth}</li>
                        <li class="list-group-item">GPS: ${info.data.others.GPS}</li>
                        <li class="list-group-item">NFC: ${info.data.others.NFC}</li>
                        <li class="list-group-item">Radio: ${info.data.others.Radio}</li>
                        <li class="list-group-item">USB: ${info.data.others.USB}</li>
                        <li class="list-group-item">WLAN: ${info.data.others.WLAN}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
}
