// Kayıt formunu dinliyoruz
document.getElementById("kayitFormu").addEventListener("submit", function (e) {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini önle

    // Kullanıcı bilgilerinin alınması
    const ad = document.getElementById("ad").value.trim();
    const email = document.getElementById("email").value.trim();
    const sifre = document.getElementById("sifre").value.trim();

    // Boş alan kontrolü
    if (!ad || !email || !sifre) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    // LocalStorage'dan mevcut kullanıcıları al
    const ogrenciler = JSON.parse(localStorage.getItem("ogrenciler")) || [];

    // E-posta kontrolü (aynı e-posta ile kayıt olmayı engelle)
    const mevcutOgrenci = ogrenciler.find((ogrenci) => ogrenci.email === email);
    if (mevcutOgrenci) {
        alert("Bu e-posta ile daha önce kayıt olunmuş!");
        return;
    }

    // Yeni kullanıcıyı ekle
    const yeniOgrenci = { ad, email, sifre };
    ogrenciler.push(yeniOgrenci);

    // LocalStorage'a kaydet
    localStorage.setItem("ogrenciler", JSON.stringify(ogrenciler));

    // Başarı mesajı
    alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");

    // Kullanıcıyı giris.html sayfasına yönlendir
    window.location.href = "giris.html";
});
