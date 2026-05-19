function hitungftth() {
    const daya = parseFloat(document.getElementById('dayaPemancar').value) || 0;
    const panjang = parseFloat(document.getElementById('panjangKabel').value) || 0;
    const konektor = parseFloat(document.getElementById('jumlahKonektor').value) || 0;
    const sambungan = parseFloat(document.getElementById('jumlahSambungan').value) || 0;
    const splitter1 = parseFloat(document.getElementById('splitter1').value) || 0;
    const splitter2 = parseFloat(document.getElementById('splitter2').value) || 0;

    if (daya == 0) {
        alert('⚠️ Harap isi daya pemancar!');
        return;
    }else if (panjang == 0){
        alert('⚠️ Harap isi panjang kabel!');
        return;
    }else if (konektor == 0){
        alert('⚠️ Harap isi jumlah konektor!');
        return;
    }else if (sambungan == 0){
        alert('⚠️ Harap isi jumlah sambungan!');
        return;
    }  

    //ubah meter ke kilometer
    const panjangKM=panjang/1000;

    if (splitter1 === "" || splitter1 === "none") redamansplitter1 = 0;
    else if (splitter1 == '1/2') redamansplitter1 = 3.7;
    else if (splitter1 == '1/4') redamansplitter1 = 7.25;
    else if (splitter1 == '1/8') redamansplitter1 = 10.38;       
    else if (splitter1 == '1/16') redamansplitter1 = 14.1;
    else redamansplitter1 = 0;

    if (splitter2 === "" || splitter2 === "none") redamansplitter2 = 0;
    else if (splitter2 == '1/2') redamansplitter2 = 3.7;
    else if (splitter2 == '1/4') redamansplitter2 = 7.25;
    else if (splitter2 == '1/8') redamansplitter2 = 10.38;   
    else if (splitter2 == '1/16') redamansplitter2 = 14.1;    
    else redamansplitter2 = 0;

    // Perhitungan
    const totalredamansaluran = (panjangKM*0.35 + konektor*0.25 + sambungan*0.1 + splitter1 + splitter2);
    const PerhitunganRSLFTTH = (daya - totalredamansaluran -7);

    // Tampilkan hasil
    const hasilText = `${PerhitunganRSLFTTH.toFixed(2)} dBm`;
    
    document.getElementById('hasilText').innerHTML = hasilText;
    document.getElementById('resultCard').classList.add('show');
    document.getElementById('resultCard').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetFormftth() {
    document.getElementById('dayaPemancar').value = '';
    document.getElementById('panjangKabel').value = '';
    document.getElementById('jumlahKonektor').value = '';
    document.getElementById('jumlahSambungan').value = '';
    document.getElementById('splitter1').value = '';
    document.getElementById('splitter2').value = '';
    document.getElementById('resultCard').classList.remove('show');
}

function hitungfo(){
    const PanjangKabel = parseFloat(document.getElementById('panjangKabelFO').value) || 0;
    const TitikSambung = parseFloat(document.getElementById('titiksambung').value) || 0;
    const TerminasiOTB = parseFloat(document.getElementById('terminasiotb').value) || 0;
    const Konektor = parseFloat(document.getElementById('konektor').value) || 0;
    const JenisKabel = document.getElementById('jenisKabelFO').value;

    if (PanjangKabel == 0) {
        alert('⚠️ Harap isi panjang kabel!');
        return;
    }else if (TitikSambung == 0){
        alert('⚠️ Harap isi jumlah titik sambung!');
        return;
    }else if (TerminasiOTB == 0){
        alert('⚠️ Harap isi jumlah terminasi OTB!');
        return;
    }else if (Konektor == 0){
        alert('⚠️ Harap isi jumlah konektor!');
        return;
    }else if (JenisKabel == 0){
        alert('⚠️ Harap isi jenis kabel!');
        return;
    }  

    //ubah meter ke kilometer
    const PanjangKabelKM=PanjangKabel/1000;

    if (JenisKabel == '655c') redamanKabel = 0.21;        
    else redamanKabel = 0.35;

    // Perhitungan
    const PerhitunganLinkBudget = (0.15*TitikSambung + 0.15*TerminasiOTB + 0.5*Konektor + redamanKabel*PanjangKabelKM);

    // Tampilkan hasil
    const hasilText = `${PanjangKabel} m / ${PerhitunganLinkBudget.toFixed(2)} dB`;
    
    document.getElementById('hasilText').innerHTML = hasilText;
    document.getElementById('resultCard').classList.add('show');
    document.getElementById('resultCard').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetFormfo() {
    document.getElementById('titiksambung').value = '';
    document.getElementById('panjangKabelFO').value = '';
    document.getElementById('terminasiotb').value = '';
    document.getElementById('konektor').value = '';
    document.getElementById('jenisKabelFO').value = '';
    document.getElementById('resultCard').classList.remove('show');
}
