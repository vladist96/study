import morePic from "./morePic.js";
import cartData from "./cartData.js";
import cartShow from "./cartShow.js";

window.onload = function () {
    morePic();
    cartShow(cartData());
};