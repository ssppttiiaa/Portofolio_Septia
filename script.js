function showMessage() {
    alert("Semangat Belajar Web!");
}

var i = 0;
var txt = 'Saya Septiana Puji Astuti';
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function() {
    typeWriter();
};

(function () {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const submitBtn = form.querySelector('.btn-submit');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // simple client-side validation (HTML5 handles required/type too)
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Semua bidang wajib diisi.';
        status.style.color = 'crimson';
        return;
      }

// show loading state
submitBtn.disabled = true;
submitBtn.innerHTML = '<span class="loading-spinner"></span> Mengirim...';
status.textContent = '';
status.style.color = 'black';

// simulasi sukses
setTimeout(() => {
  status.style.color = 'rgb(235 ,68, 162)';
  status.textContent = 'Pesan berhasil dikirim. Terima kasih!';
  form.reset();
  submitBtn.disabled = false;
  submitBtn.textContent = 'Kirim';
}, 2000);
});
})();

