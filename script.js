document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('شكراً لك! تم استلام طلبك، وسيقوم فريقنا (الوسيط) بالتواصل معك لضمان أفضل سعر وأعلى جودة.');
    this.reset();
});
