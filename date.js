
module.exports.getDay = getDay; //notice no () as otherwise code will execute


function getDay() {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-us", options);


}
