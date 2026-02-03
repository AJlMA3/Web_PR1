document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.cancelable && e.preventDefault();
    const name = document.getElementById('name').value;
    if(name.length < 2) {
        alert("Введите корректное имя");
    } else {
        alert("Сообщение отправлено!");
        this.reset();
    }
});