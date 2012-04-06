
/**
 * dom绑定事件
 */
document.getElementById('t').addEventListener('click', clickHandle, false);
function clickHandle (e) {
    console.group('Event Listener:');
    console.log('this is ' + e.type);
    console.groupEnd();
}

/**
 * delegate
 */

var ul = document.querySelector('#delegate');
ul.addEventListener('click', function(e) {
    var t = e.target;

    if (t.tagName.toLowerCase() === 'li') {
        console.log(t.innerText);
    };
}, false);


/**
 * local storage
 */

var key = document.querySelector('#key');
var key2 = document.querySelector('#key2');
var value = document.querySelector('#value');
var btn = document.querySelector('#btn');
var btn2 = document.querySelector('#btn2');
var clear = document.querySelector('#clear');
btn.addEventListener('click', function() {
    if (key.value !== '' && value.value !== '') {
        localStorage.setItem(key.value, value.value);
    }
}, false);

btn2.addEventListener('click', function() {
    localStorage.removeItem(key2.value);
}, false);

clear.addEventListener('click', function() {
    localStorage.clear();
}, false);


/**
 * ajax
 */

var ajaxbtn = document.querySelector('#ajax');
var resp = document.querySelector('#resp');
ajaxbtn.addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../test.json');
    xhr.onload = function (e) {
        console.group('XMLHttpRequest:');
        console.log('"test.json" loaded.');
        resp.innerHTML = xhr.responseText;
        console.groupEnd();
    }
    xhr.send();
}, false);





/**
 * watch expressions
 */
console.group('watch expressions:');
var arr = [0, 'a', true, /.+/, {}];
for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
};
console.groupEnd();
/**
 * call stack
 */ 
function f1 () {
    f2();
}
function f2 () {
    f3();
}
function f3 () {
    f4()
}
function f4 () {
    console.group('调用堆栈:');
    console.log('call stack');
    console.groupEnd('调用堆栈');
}
f1();

/**
 * closure
 */
console.group('closure:');
var c = (function() {
    var a = 1,
        b = 'closure variable';

    function cc () {
        var i = b;
        console.log(i);
        i = null;
        a = null;
    }
    return cc;
})();
c();
console.groupEnd('closure');



/**
 * loadImage
 */
var content = document.querySelector('#content');
/*function loadImage (e) {
    e.preventDefault();
    var img = new Image(),
        p = this.parentElement;
    img.src = 'http://www.ueder.net/testhtml/picshow/datapic/0e0c883622903fb1a61e12be.jpg';
    content.appendChild(img);
}*/
/**
 * excute js
 */
function excutejs () {
    console.time('耗费时间：')
    for (var i = 0; i < 10000; i++) {
         var p = document.createElement('p');
         p.innerHTML = i + '<br /><img src="http://www.ueder.net/testhtml/picshow/datapic/0e0c883622903fb1a61e12be.jpg">';
         content.appendChild(p);
         
    }
    console.timeEnd('耗费时间：')
}


// document.getElementById('loadImage').addEventListener('click', loadImage, false);
document.getElementById('loadImage').addEventListener('click', excutejs, false);



/**
 * cookie
 */
console.group('cookie:');
document.cookie = 'a=1';
document.cookie = 'b=2';
document.cookie = 'c=3';
console.log(document.cookie);
console.groupEnd();

/**
 * database
 */
/*var db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);
var addMsg = function (msg) {
    var box = document.getElementById('box'),
        p = document.createElement('p');
    p.innerHTML = msg;
    box.appendChild(p);
};

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS foo (id unique, text)');
    tx.executeSql('INSERT INTO foo (id, text) VALUES (1, "测试数据")');

    addMsg('Table created and row inserted.');
});

db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM foo', [], function (tx, results) {
        var len = results.rows.length, i;

        addMsg('记录条数row: '+len);

        for (i = 0; i < len; i++){
            addMsg("数据库记录 "+ i +"：<b>" + results.rows.item(i).text + "</b>");
        }

    }, null);
});*/



