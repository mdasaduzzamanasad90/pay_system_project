// amount and pin function
function addmoneyinputfield (id){
    const element = document.getElementById(id).value;
    const numberelement = parseFloat(element);
    return numberelement;
}

// main balance function
function mainbalancefield (id){
    const element = document.getElementById(id).innerText;
    const numberelement = parseFloat(element);
    return numberelement;
}