const submitButton = document.querySelector('button');
const containerDiv = document.querySelector('.container');
const resultDiv = document.querySelector('.result-page');

submitButton.addEventListener('click', () => {
  const ratingInput = document.querySelector('input[name="rating"]:checked');
  if (ratingInput) {
    const ratingValue = ratingInput.value;

    const ratingResult = resultDiv.querySelector('.ratingResult');
    ratingResult.innerHTML = `You selected ${ratingValue} out of 5`;

    resultDiv.classList.remove('hidden');
    containerDiv.classList.add('hidden');

    containerDiv.replaceWith(resultDiv);
  }
});
