import $ from "jquery";
import './css/1.css'
import './css/1.less'

$(function () {
    $("li:odd").css("background", "yellow");
    $("li:even").css("background", "green");
});

class Person {
    static info = 'aaa'
}

console.log(Person.info)