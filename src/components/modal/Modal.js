//script untuk modal//
//---------modal data berhasil ditambahkan-----------//
var modal = document.getElementById("myModal");
var btn = document.getElementById("tambah");
var span = document.getElementsByClassName("close")[0];

function popup() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//-------------modal data edit---------------//
var modalEdit = document.getElementById("myModaledit");
var btn = document.getElementsByClassName("edit");
var span = document.getElementsByClassName("close3")[0];

function modaledit() {
    modalEdit.style.display = "block";
}
span.onclick = function() {
    modalEdit.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modalEdit.style.display = "none";
    }
};
//-----------modal data berhasil dihapus-----------//
var modaldel = document.getElementById("myModaldel");
var span = document.getElementsByClassName("close1")[0];

function modaldelete() {
    modaldel.style.display = "block";
}
span.onclick = function() {
    modaldel.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modaldel.style.display = "none";
    }
};
//---------------modal warning---------------------//
var modalwar = document.getElementById("myModalwarning");
var span = document.getElementsByClassName("close2")[0];

function warning() {
    modalwar.style.display = "block";
}
span.onclick = function() {
    modalwar.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modalwar.style.display = "none";
    }
};
//---------modal data berhasil diperbarui-----------//
var perbarui = document.getElementById("myModalbaru");
var span = document.getElementsByClassName("close4")[0];

function perbarui() {
    perbarui.style.display = "block";
}
span.onclick = function() {
    perbarui.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        perbarui.style.display = "none";
    }
};