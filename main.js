function filterQuestions() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const questionList = document.getElementById('question-list');
    const questions = questionList.getElementsByTagName('li');
    
    for (let i = 0; i < questions.length; i++) {
        const questionText = questions[i].getElementsByTagName('a')[0].textContent.toLowerCase();
        if (questionText.includes(searchInput)) {
            questions[i].style.display = '';
        } else {
            questions[i].style.display = 'none';
        }
    }
}
