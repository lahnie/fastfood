const STORAGE_KEY = 'restrcitWordList';

function loadRestrictWordList() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveRestrictedWords(words) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
}

function addRestrictWord(word) {
    const words = loadRestrictWordList();
    words.push(word.toLowerCase());
    saveRestrictedWords(words);
}

function deleteRestrictWord(word) {
  const words = loadRestrictWordList();
  const index = words.indexOf(word);
  if (index !== -1) {
    words.splice(index, 1);
    saveRestrictedWords(words);
  }
}

function renderWordList() {
    const wordList = loadRestrictWordList();
    let wordListHTML = '';

    wordList.forEach(element => {
        const wordTemplate = `
            <div class="word">
                <p>${element}</p>
                <div class="btnGroup">
                    <button class="btnIcon delete">
                        <i class="fa-solid fa-trash"></i> 
                    </button>
                </div>
            </div>`;

        wordListHTML += wordTemplate;
    });

    document.getElementById('listWords').innerHTML = wordListHTML;

    addDeleteEventListeners();
}

function addDeleteEventListeners() {
    const btnDeleteWord = document.querySelectorAll('.delete');

    btnDeleteWord.forEach((btn) => {
        btn.onclick = () => {
            const wordElement = btn.closest('.word').querySelector('p');
            const wordToDelete = wordElement.textContent.trim();
            deleteRestrictWord(wordToDelete);
            renderWordList();
        };
    });
}

//comfig menu
const btnConfig = document.getElementById("configBtn")
const menu = document.getElementById("configMenu")
const modalRW = document.getElementById("modalRW")

btnConfig.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

window.addEventListener('click', function(e) {
  if (!btnConfig.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = 'none';
  }
});

//modal
const btnOpenModal = document.getElementById("openModal")
const btnCloseModal = document.getElementById("closeModal")

btnOpenModal.onclick = () => {
  event.preventDefault();
  modalRW.showModal();
  renderWordList();
};

btnCloseModal.onclick = () => {
  modalRW.close();
};
 
//modal - add word
const btnAddWord = document.getElementById("btnAddWord")
const inputWord = document.getElementById("inputWord")

inputWord.addEventListener("keypress", (e) => {
  const charCode = e.which ? e.which : e.keyCode;
  const charStr = String.fromCharCode(charCode);

  if (!/^[a-zA-Z]+$/.test(charStr) && charCode !== 8 && charCode !== 9) {
    e.preventDefault();
  }
  if (e.key === "Enter") {
    btnAddWord.click();
  }
});

btnAddWord.onclick = () => {
  const newWordInput = document.getElementById("inputWord");
  const newWord = newWordInput.value.trim();

  if (newWord !== '') {
      addRestrictWord(newWord);
      renderWordList();
      newWordInput.value = '';
  }
};

//Validate description
function validateDescription(description) {
  const restrictedWords = loadRestrictWordList();
  const inputWord = description.value.toLowerCase();
  const foundWords = restrictedWords.filter(word => inputWord.includes(word));

  if (foundWords.length > 0) {
    description.setCustomValidity("La descripción contiene palabras restringidas");
    return false;
  }

  description.setCustomValidity("");
}