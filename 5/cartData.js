export default function cartData(index) {
    let data;
    let result = [];
    $.ajax({
        url: 'cart.json',
        success: function (result) {
            data = result;
            return result;
        },
        async: false
    }, "text");
    let storeData;
    let test = false;
    let keyStore = localStorage.key(0);
    if (keyStore !== null) {
        storeData = JSON.parse(localStorage.getItem(keyStore));
        for (let i = 0; i < storeData.length; i++) {
            if (storeData[i] !== data[i]) {
                test = true;
            }
        }
    }
    if (localStorage.key(0) === null || test === true){
        localStorage.clear();
        localStorage.setItem('id',JSON.stringify(data));
        result = data;
    } else {
        for(let i = 0; i < storeData.length ; i++){

            result.push(storeData[i])
        }
    }

    return result;
}

