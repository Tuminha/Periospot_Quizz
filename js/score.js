window.onload = function() {
    // Get the score from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');

    // Display the score on the page
    document.getElementById('score-highlight').textContent = score;

    // Get the incorrect answers from the URL
    const incorrectAnswers = urlParams.get('incorrect').split(',');

    // Display the incorrect answers on the page
    const incorrectAnswersElement = document.getElementById('incorrect-answers');
    incorrectAnswersElement.textContent = `You answered the following questions incorrectly: ${incorrectAnswers.join(', ')}`;
}