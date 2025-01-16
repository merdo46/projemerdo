// Giriş formunu dinliyoruz
document.getElementById("girisFormu").addEventListener("submit", function (e) {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini önle

    // Kullanıcı giriş bilgilerini al
    const email = document.getElementById("email").value.trim();
    const sifre = document.getElementById("sifre").value.trim();

    // LocalStorage'dan kullanıcıları al
    const ogrenciler = JSON.parse(localStorage.getItem("ogrenciler")) || [];

    // Kullanıcıyı doğrula
    const ogrenci = ogrenciler.find(
        (ogr) => ogr.email === email && ogr.sifre === sifre
    );

    if (ogrenci) {
        alert(`Hoş geldiniz, ${ogrenci.ad}!`);

        // Kullanıcıyı sayfam.html sayfasına yönlendir
        window.location.href = "sayfam.html";
    } else {
        alert("E-posta veya şifre hatalı!");
    }
});
