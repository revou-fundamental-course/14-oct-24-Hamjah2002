document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Mengambil nilai dari form
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Menampilkan pesan sukses
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = `Pendaftaran berhasil! Nama: ${name}, Tanggal Lahir: ${dob}, Email: ${email}, Jenis Kelamin: ${gender}.`;
    successMessage.classList.remove('hidden');

    // Mengatur ulang form
    document.getElementById('registrationForm').reset();
});
