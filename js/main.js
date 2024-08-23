document.getElementById("elem2rightside").addEventListener("click", function() {
    document.getElementById("popupOverlay").classList.add("open");
});

function closePopup() {
    document.getElementById("popupOverlay").classList.remove("open");
}

document.getElementById("popupOverlay").addEventListener("click", function(event) {
    if (event.target === this) {
        closePopup();
    }
});
document.querySelector('.custom-checkbox').addEventListener('click', function() {
    const checkbox = document.getElementById('consent');
    checkbox.checked = !checkbox.checked;
    this.style.backgroundColor = checkbox.checked ? 'white' : 'transparent';
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Форма отправлена!");
    closePopup();
});

document.getElementById("whatsappButton").addEventListener("click", function() { 
    document.getElementById("whatsappPopup").classList.add("open"); 
    document.getElementById("whatsapp-overlay").classList.add("open"); // Показываем затемняющий фон 
    document.body.style.overflow = 'hidden'; 
}); 
function closeWhatsAppPopup() { 
    document.getElementById("whatsappPopup").classList.remove("open"); 
    document.getElementById("whatsapp-overlay").classList.remove("open"); // Убираем затемняющий фон 
    document.body.style.overflow = ''; 
} 

// Закрытие попапа при клике на затемняющий фон
document.getElementById("whatsapp-overlay").addEventListener("click", function(event) {
    if (event.target === this) {
        closeWhatsAppPopup(); // Закрываем попап при клике на затемняющий фон
    }
});