document.querySelector('.hint-btn').addEventListener('click', function() {
  alert('Для слова "кулон" анаграммами являются слова: "клоун", "колун", "лукно", "уклон"');
});

const anagrammsArr = ['кулон', 'клоун', 'колун', 'лукно', 'уклон'];

function findAnagramms() {
  let newWord = '';
  const container = document.querySelector('.word');
  Array.from(document.querySelectorAll('.letter')).forEach(letter => newWord += letter.dataset.letter);
  if (anagrammsArr.includes(newWord)) {
    container.style.borderColor = 'rgb(0, 128, 0)';
  } else container.style.borderColor = 'rgb(255, 0, 0)';
}
findAnagramms()