export default function morePic() {
    let btn = document.getElementById("btn");
    let a = '';
    let clk = 1;
    let divMore = document.getElementById('morePic');

    btn.onclick = function() {
        clk++;

        let divNext = document.createElement("div");
        divNext.id = "morePic" + clk;
        divMore.appendChild(divNext);

        a = 'p' + clk + '.html';
        console.log(a);
        $('#morePic' + clk).load(a + ' #pic', function( response, status) {
            if ( status == "error" ) {
                let  endPic = document.createElement("IMG");
                endPic.src = 'img/end.jpg';
                endPic.height = 150;
                endPic.style.borderRadius = '100px';
                btn.replaceWith(endPic);
            }
        });
    }
}
