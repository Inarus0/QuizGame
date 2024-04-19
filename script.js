document.getElementById('quizb_ar').addEventListener('click', function() {
    document.getElementById('question_bg').classList.toggle('animate');
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('quizb_ar').style.display = 'none';
    document.getElementById('quizb_fr').style.display = 'none';
    // Redirect to the specified URL when the button is clicked
    window.location.href = 'Quiz_ar/quiz_ar.html';
});

document.getElementById('quizb_fr').addEventListener('click', function() {
    document.getElementById('question_bg').classList.toggle('animate');
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('quizb_ar').style.display = 'none';
    document.getElementById('quizb_fr').style.display = 'none';
     // Redirect to the specified URL when the button is clicked
     window.location.href = 'Quiz_fr/quiz_fr.html';
    
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Empêche l'ouverture du menu contextuel
});
