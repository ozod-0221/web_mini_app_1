let tg = window.Telegram.WebApp; // Telegram API ni chaqiramiz

tg.expand(); // Ekranni to'liq qilib ochish

document.getElementById("user-name").textContent = tg.initDataUnsafe?.user?.first_name || "Noma’lum";

document.getElementById("send-data").addEventListener("click", function() {
    tg.sendData("Foydalanuvchi tugmani bosdi!"); // Botga ma'lumot yuborish
});
console.log("Ma'lumot yuborildi:", data);
