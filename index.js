//fungsi jam//
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("jam").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function() {
        startTime();
    }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

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

//fungsi menambahkan//
var data = 0;

function menambahkan() {
    let tabel = document.getElementById("tableItem").querySelector("tbody");
    let nim = document.getElementById("nim").value;
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;

    if (nim == 0) {
        warning();
    } else if (nama == 0) {
        warning();
    } else if (alamat == 0) {
        warning();
    } else {
        let colnim = '<td id="nim' + data + '">' + nim + "</td>";
        let colnama = '<td id="nama' + data + '">' + nama + "</td>";
        let colalamat = '<td id="alamat' + data + '">' + alamat + "</td>";
        let btn1 = '<button type="button" class="edit" id="edit' + data + '" onclick = "edit(this.id)"> Edit </button>';
        let btn2 = '<button type="button" class="delete" id="hapus' + data + '" onclick = "hapus(this.id)"> Delete </button>';
        let btn = "<td>" + btn1 + btn2 + "</td>";

        let newRow = '<tr id="' + data + '">' + colnim + colnama + colalamat + btn + "</tr>";
        tabel.innerHTML += newRow;
        data = data + 1;
        popup();
    }
}
//fungsi merubah data pada modal edit
function edit(id_edit) {
    var editid = id_edit.substring(4);
    modaledit();
    document.getElementById("nimedit").value = document.getElementById("nim" + editid).innerHTML;
    document.getElementById("namaedit").value = document.getElementById("nama" + editid).innerHTML;
    document.getElementById("alamatedit").value = document.getElementById("alamat" + editid).innerHTML;
    //cancel
    document.getElementById("cancel").onclick = function() {
        document.querySelector(".modaledit").style.display = "none";
    };
    //fungsi save
    document.getElementById("save").onclick = function simpan() {
        //memunculkan warning jika edit data tdk lengkap
        let nama = document.getElementById("namaedit").value;
        let alamat = document.getElementById("alamatedit").value;
        if (nama == "") {
            myModaledit.style.display = "none";
            warning();
        } else if (alamat == "") {
            myModaledit.style.display = "none";
            warning();
        } else {
            //databaru pada modal edit
            var newnama = document.getElementById("namaedit").value;
            var newalamat = document.getElementById("alamatedit").value;
            document.getElementById("nama" + editid).value = newnama;
            document.getElementById("nama" + editid).innerHTML = newnama;
            document.getElementById("alamat" + editid).value = newalamat;
            document.getElementById("alamat" + editid).innerHTML = newalamat;
            myModaledit.style.display = "none";
            document.querySelector(".modalbaru").style.display = "block";
        }
    };
}
//fungsi delete
function hapus(id_hapus) {
    var hapusid = id_hapus.substr(5);
    document.getElementById(hapusid).outerHTML = "";
    modaldelete();
}
//js untuk modal disatukan pada halaman html