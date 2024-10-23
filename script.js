const form = document.querySelector('form');
const table = document.querySelector('table');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nama = document.querySelector('input[name="nama"]').value;
  const tanggalLahir = document.querySelector('input[name="tanggalLahir"]').value;
  const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
  const pesan = document.querySelector('textarea[name="pesan"]').value;

  const row = table.insertRow();
  const namaCell = row.insertCell();
  const tanggalLahirCell = row.insertCell();
  const jenisKelaminCell = row.insertCell();
  const pesanCell = row.insertCell();
  const profileCell = row.insertCell();
  const deleteCell = row.insertCell();

  namaCell.textContent = nama;
  tanggalLahirCell.textContent = tanggalLahir;
  jenisKelaminCell.textContent = jenisKelamin;
  pesanCell.textContent = pesan;
  profileCell.innerHTML = '<button onclick="profile()">Klik Disini</button>';
  deleteCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

  form.reset();
});

function profile() {
  // Implementasikan fungsi untuk menampilkan profil
  alert('Profil akan ditampilkan di sini.');
}

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  table.deleteRow(row.rowIndex);
}