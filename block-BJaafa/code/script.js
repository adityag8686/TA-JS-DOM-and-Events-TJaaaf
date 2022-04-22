let data = [
    {
        state : "Gujarat",
        capital : "Gandhinagar"
    },
    {
        state : "Maharastra",
        capital : "Mumbai"
    },
    {
        state : "Madhya Pradesh",
        capital : "Bhopal"
    },
    {
        state : "Rajasthan",
        capital : "Jaipur"
    },
    {
        state : "Uttar Pradesh",
        capital : "Lucknow"
    },
    {
        state : "Haryana",
        capital : "Chandigarh"
    },
    {
        state : "Punjab",
        capital : "Chandigarh"
    },
    {
        state : "Himachal Pradesh",
        capital : "Shimla"
    },
    {
        state : "Uttarakhand",
        capital : "Dehradun"
    },
    {
        state : "Bihar",
        capital : "Patna"
    },
    {
        state : "Jharkhand",
        capital : "Ranchi"
    },
    {
        state : "Chattisgarh",
        capital : "Raipur"
    },
    {
        state : "Odisha",
        capital : "Bhubaneshwar"
    },
    {
        state : "West-Bengal",
        capital : "Kolkata"
    },
    {
        state : "Assam",
        capital : "Dispur"
    },
    {
        state : "Arunachal Pradesh",
        capital : "Itanagar"
    },
    {
        state : "Sikkim",
        capital : "Gangtok"
    },
    {
        state : "Manipur",
        capital : "Imphal"
    },
    {
        state : "Meghalaya",
        capital : "Shillong"
    },
    {
        state : "Mizoram",
        capital : "Aizwal"
    },
    {
        state : "Nagaland",
        capital : "Kohima"
    },
    {
        state : "Karnataka",
        capital : "Bengaluru"
    },
    {
        state : "Andra Pradesh",
        capital : "Amrawati"
    },
    {
        state : "Telangana",
        capital : "Hyderabad"
    },
    {
        state : "Goa",
        capital : "Panji"
    },
    {
        state : "Kerela",
        capital : "Thiruvananthpuram"
    },
    {
        state : "Tamil Nadu",
        capital : "Chennai"
    },
    {
        state : "Tripura",
        capital : "Agartala"
    },

]



let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let button  = document.querySelector('button');

function generateRandomNumbers(num){
    return Math.floor(Math.random() * num);
}

function handleClick(){
    let randomIndex = generateRandomNumbers(data.length);
    let randomShortCut = data[randomIndex];
    h2.innerText = randomShortCut.state;
    h3.innerText = randomShortCut.capital;
}

button.addEventListener('click', handleClick)
handleClick();