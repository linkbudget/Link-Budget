document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  const navbarTitle = document.getElementById("navbarTitle");
  const allLinks = document.querySelectorAll(".nav-link");

  // Simpan title saat klik link di mobile
  allLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992) { // Mobile
        localStorage.setItem("navbarTitle", this.dataset.title);
      }
    });
  });

  // Saat halaman dibuka, set judul & aktifkan link
  document.addEventListener("DOMContentLoaded", () => {
    const savedTitle = localStorage.getItem("navbarTitle");
    if (window.innerWidth < 992 && savedTitle) {
      navbarTitle.textContent = savedTitle;
    } else {
      navbarTitle.textContent = "Link Budget";
    }

    // Set active menu berdasarkan URL
    const currentPage = window.location.pathname.split("/").pop();
    allLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  // Ambil nama file halaman saat ini
  let currentPage = window.location.pathname.split("/").pop();

  // Ambil semua link di navbar
  document.querySelectorAll("nav a").forEach(link => {
    let linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active"); // tambahkan class active
    }
  });

function hitung(){
    const PanjangKabel = parseFloat(document.getElementById('panjangkabel').value) || 0;
    const TitikSambung = parseFloat(document.getElementById('titiksambung').value) || 0;
    const TerminasiOTB = parseFloat(document.getElementById('terminasiotb').value) || 0;
    const Konektor = parseFloat(document.getElementById('konektor').value) || 0;
    const JenisKabel = document.getElementById('jeniskabel').value;

    //ubah meter ke kilometer
    const PanjangKabelKM=PanjangKabel/1000;

    if (JenisKabel == '655c') redamanKabel = 0.22;        
    else redamanKabel = 0.35;

    const PerhitunganLinkBudget = (0.15*TitikSambung + 0.15*TerminasiOTB + 0.5*Konektor + redamanKabel*PanjangKabelKM);

    document.getElementById('hasilhitung').value = PanjangKabel+" m / " + PerhitunganLinkBudget.toFixed(2) + " dB";
}

function hitungftth(){
    const DayaPemancar = parseFloat(document.getElementById('dayapemancar').value) || 0;
    const PanjangKabelFTTH = parseFloat(document.getElementById('panjangkabelftth').value) || 0;
    const TitikSambungFTTH = parseFloat(document.getElementById('titiksambungftth').value) || 0;
    const KonektorFTTH = parseFloat(document.getElementById('konektorftth').value) || 0;
    const JenisSplitter1 = document.getElementById('jenissplitter1').value;
    const JenisSplitter2 = document.getElementById('jenissplitter2').value;

    //ubah meter ke kilometer
    const PanjangKabelFTTHKM=PanjangKabelFTTH/1000;

    if (JenisSplitter1 === "" || JenisSplitter1 === "none") redamansplitter1 = 0;
    else if (JenisSplitter1 == '1/2') redamansplitter1 = 3.7;
    else if (JenisSplitter1 == '1/4') redamansplitter1 = 7.25;
    else if (JenisSplitter1 == '1/8') redamansplitter1 = 10.38;       
    else if (JenisSplitter1 == '1/16') redamansplitter1 = 14.1;
    else redamansplitter1 = 0;

    if (JenisSplitter2 === "" || JenisSplitter2 === "none") redamansplitter2 = 0;
    else if (JenisSplitter2 == '1/2') redamansplitter2 = 3.7;
    else if (JenisSplitter2 == '1/4') redamansplitter2 = 7.25;
    else if (JenisSplitter2 == '1/8') redamansplitter2 = 10.38;   
    else if (JenisSplitter2 == '1/16') redamansplitter2 = 14.1;    
    else redamansplitter2 = 0;

    const totalredamansaluran = (PanjangKabelFTTHKM*0.35 + KonektorFTTH*0.25 + TitikSambungFTTH*0.1 + redamansplitter1 + redamansplitter2);
    const PerhitunganLinkBudgetFTTH = (DayaPemancar - totalredamansaluran -7);

    document.getElementById('hasilhitungftth').value = PerhitunganLinkBudgetFTTH.toFixed(2) + " dB";
}
