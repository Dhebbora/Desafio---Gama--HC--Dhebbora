$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});

$('#myModal').modal({
  keyboard: false
});


function handleChange() {
  const saveDados = [];
  saveDados.push(localStorage.getItem('emailCadastro'));
  saveDados.push(emailChave.value);
  localStorage.setItem('emailCadastro', saveDados);
};