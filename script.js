let tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("send-data").addEventListener("click", function() {
    let data = { action: "clicked", user: tg.initDataUnsafe.user };
    tg.sendData(JSON.stringify(data));  // Botga ma’lumot yuborish
});
