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
    container.style.backgroundColor = 'rgba(153, 255, 0, 0.5)';
  } else {
    container.style.borderColor = 'rgb(255, 0, 0)';
    container.style.backgroundColor = 'rgba(239, 205, 190, 0.8)';
  }
}

function fnDragStart(e) {
  if (e.target.closest('.letter')) {
    // e.dataTransfer.setData('text/plain', e.target.dataset.letter);
    e.target.style.borderStyle = 'dashed';
  }
}

function fnDragEnd(e) {
  if (e.target.closest('.letter')) {
    // e.dataTransfer.getData('text/plain', e.target.dataset.letter);
    e.target.style.borderStyle = '';
  }
}

function fnDragEnter(e) {
  if (e.target.closest('.letter')) {
    e.preventDefault();
    e.target.classList.add('selected');
  }
}

function fnDragLeave(e) {
  if (e.target.closest('.letter')) {
    // e.preventDefault();
    e.target.classList.remove('selected');
  }
}

function fnDragDrop(e) {
  if (e.target.closest('.letter')) {
    const destination = document.elementFromPoint(e.clientX, e.clientY);
    if (!destination.classList.contains('letter')) return;
    const childrenArray = [...this.children].map((el) => el.dataset.letter);
    const initialPositionOfDraggableLetter = childrenArray.indexOf(e.target.dataset.letter);
    const destinationPositionToDropLetter = childrenArray.indexOf(destination.dataset.letter);
    if (initialPositionOfDraggableLetter > destinationPositionToDropLetter) {
      destination.before(e.target)
    } else if (initialPositionOfDraggableLetter < destinationPositionToDropLetter) {
      destination.after(e.target)
    }
    findAnagramms();
  }
}

document.querySelector('.word').addEventListener('dragstart', fnDragStart);
document.querySelector('.word').addEventListener('dragend', fnDragEnd);
document.querySelector('.word').addEventListener('dragenter', fnDragEnter);
document.querySelector('.word').addEventListener('dragend', fnDragDrop);
document.querySelector('.word').addEventListener('dragleave', fnDragLeave);
document.querySelector('.word').addEventListener('drop', fnDragDrop);