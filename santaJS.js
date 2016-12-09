/**
 * Created by jbari_000 on 12/8/2016.
 */
var dragAndDrop = (function () {
    var X = '';
    var Y = '';
    var selecImg = '';

    function resetZ() {
        var elements = document.querySelectorAll('img');
        for (var i = elements.length - 1; i >= 0; i--) {
            elements[i].style.zIndex = 5;
        }

    }

    function moveStart(ev) {
        selecImg = ev.target;

        if (ev.offsetX === undefined)
        {
            X = ev.layerX
        } else {
            X = ev.offsetX
        }
        if (ev.offsetY === undefined)
        {
            Y = ev.layerY
        } else {
            Y = ev.offsetY
        }
        resetZ();
        selecImg.style.zIndex = 10;
    }
    function  moveDragOver(ev) {
        ev.preventDefault();
    }
    function  moveDrop(ev) {
        ev.preventDefault();
        selecImg.style.left = ev.pageX - X + 'px';
        selecImg.style.top = ev.pageY - Y + 'px';
    }
    document.querySelector('body').addEventListener('dragstart', moveStart, false);
    document.querySelector('body').addEventListener('dragover', moveDragOver, false);
    document.querySelector('body').addEventListener('drop', moveDrop, false);

})();
