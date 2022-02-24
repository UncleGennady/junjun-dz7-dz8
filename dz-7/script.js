'use strict'

function calc() {
    const hours = +prompt('количество часов ?', '');
    console.log(hours + '-часов');
    const result = 3600 * hours;
    console.log(result + '-секунд');
    return
}
calc();