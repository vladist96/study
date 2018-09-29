export default function cartShow(data) {
    let divPop = document.createElement('div');
    divPop.id = 'popTable';
    divPop.setAttribute('display', 'none !important');
    document.body.appendChild(divPop);

    let tabPop = document.createElement('table');
    divPop.appendChild(tabPop);

    for (let i = 0; i < data.length; i++) {
        let imgSrc = 'img/' + data[i];

        let trPop = document.createElement('tr');
        tabPop.appendChild(trPop);

        let tdImg = document.createElement('td');
        trPop.appendChild(tdImg);

        let tdName = document.createElement('td');
        trPop.appendChild(tdName);

        let pic = document.createElement("IMG");
        pic.src = imgSrc;
        pic.height = 50;
        tdImg.appendChild(pic);

        let imgName = document.createElement('p');
        imgName.innerText = data[i];
        tdName.appendChild(imgName);
    }

    $('[data-toggle=popover]').popover({
        content: $('#popTable').html(),
        html: true
    });
}