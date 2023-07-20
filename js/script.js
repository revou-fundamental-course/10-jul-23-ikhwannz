let hasil = document.getElementById("hasil"); //menyimpan variabel hasil
let hasilArea = document.querySelector(".hasil"); 
let error = document.querySelector(".error"); //menyimpan pesan error

//fungsi untuk menyeleksi apakah terdapat bagian yang kosong atau tidak
function hitung(){
    let umur = document.getElementById("umur"); //menyimpan inputan umur
    let laki = document.getElementById("m"); //menyimpan inputan laki-laki
    let perempuan = document.getElementById("f"); //menyimpan inputan perempuan
    let tinggi = document.getElementById("tinggi"); //menyimpan inputan tinggi
    let berat = document.getElementById("berat"); //menyimpan inputan berat

    //percabangan untuk menyeleksi bagian yang kosong, 
    //jika ditemukan ada bagian yang kosong, maka akan menampilkan pesan error
    //jika tidak ditemukan, maka akan mengeksekusi fungsi hitungbmi
    if(umur.value=='' || tinggi.value=='' || berat.value=='' || (laki.checked==false && perempuan.checked==false)){
        error.style.display = "block";
        error.innerHTML = "Tolong isi bagian yang kosong";
        setTimeout(()=>{
            error.style.display = "none";
        },2000)
    }
    else {
      hitungbmi();
    }
}

//fungsi untuk menjalankan perhitungan dari BMI
function hitungbmi(){
    let tinggi = parseFloat(document.getElementById("tinggi").value);
    let berat = parseFloat(document.getElementById("berat").value);
    let bmi = berat/(tinggi/100)**2;
    let rangebmi = bmi.toFixed(2);
    let comment = '';

    //percabangan untuk menyeleksi berdasarkan range kategori
    if(rangebmi < 18.5){
        comment = 'Kekurangan berat badan';
    }
    else if(rangebmi >= 18.5 && rangebmi < 25){
        comment = 'Normal (ideal)';
    }
    else if(rangebmi >= 25 && rangebmi < 30){
        comment = 'Kelebihan berat badan';
    }
    else if(rangebmi >= 30){
        comment = 'Kegemukan (Obesitas)';
    }

    //menampilkan hasil
    hasilArea.style.display = "block";
    document.querySelector(".comment").innerHTML = `Anda termasuk <span id="comment">${comment}</span>`;
    hasil.innerHTML= "BMI Anda : "+ rangebmi;
}