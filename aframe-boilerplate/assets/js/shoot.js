var objnum = 3;

function clickHandler(e) {
    var me = document.getElementById(e.target.id);
    me.parentNode.removeChild(me);
    objnum--;
    if (objnum <= 0) {    
        /* クリア画面を動的に生成する */    
        var scene = document.querySelector('a-scene');
        var img = document.createElement('a-image');
        img.setAttribute('src', '#end_img');
        img.setAttribute('rotation', '0 0 0');
        img.setAttribute('scale', '4 2.5 4');
        img.setAttribute('position', '0 4 -3');
        scene.appendChild(img);
    }
}

function init() {
    /* クリックイベントハンドラの登録 */
    var c = document.getElementsByClassName('js-obj');
    for (i = 0; i < c.length; i++) {
        document.getElementById('cheese' + i).addEventListener('click', clickHandler, false);
    }
}