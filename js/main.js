document.addEventListener('DOMContentLoaded', (event) => {
    let score = 0;  // Initialize score
    let incorrectAnswers = [];  // Initialize incorrect answers array

    // Add event listeners for the submit buttons of each question
    document.querySelector(".container button").addEventListener('click', startQuiz);

    document.querySelector("#question3 input[type='submit']").addEventListener('click', handleThirdQuestionSubmit);
    document.querySelector("#question4 input[type='submit']").addEventListener('click', handleFourthQuestionSubmit);
    document.querySelector("#question5 input[type='submit']").addEventListener('click', handleFifthQuestionSubmit);
    document.querySelector("#question6 input[type='submit']").addEventListener('click', handleSixthQuestionSubmit);
    document.querySelector("#question7 input[type='submit']").addEventListener('click', handleSeventhQuestionSubmit);
    document.querySelector("#question8 input[type='submit']").addEventListener('click', handleEighthQuestionSubmit);
    document.querySelector("#question9 input[type='submit']").addEventListener('click', handleNinthQuestionSubmit);

    function startQuiz() {
        // Hide the introductory content
        document.querySelector(".container").style.display = "none";
    
        // Show the form
        document.getElementById("quizForm").style.display = "block";
    
        // Attach the form submission event listener
        document.getElementById("quizForm").addEventListener("submit", function(event){
            event.preventDefault();
            const firstName = document.getElementById("firstName").value;
            console.log(`First Name: ${firstName}`);
            // Use the values as required, for example, to personalize the experience
    
            // Hide the form
            document.getElementById("quizForm").style.display = "none";
    
            // Show the third question
            showThirdQuestion(firstName); 
        });
    }

    // When second question (or another event) is done, show the third question
    function showThirdQuestion(firstName) {
        document.getElementById("question3").classList.remove("hidden");
        document.getElementById("userNameDisplay").textContent = firstName;
    }

    function handleThirdQuestionSubmit(e) {
        console.log('handleThirdQuestionSubmit called');  // Debugging line
    
        e.preventDefault();
    
        // Gather the user's answer
        let selectedOptions = Array.from(document.querySelectorAll("#question3 input[type='checkbox']:checked")).map(option => option.value);
        console.log(`Selected options: ${selectedOptions.join(', ')}`);
    
    
        // Hide the third question
        document.getElementById("question3").classList.add("hidden");
    
        // Show the fourth question
        showFourthQuestion();
    }
    
    // When third question (or another event) is done, show the fourth question
    function showFourthQuestion() {
        console.log('showFourthQuestion called');  // Debugging line
    
        document.getElementById("question4").classList.remove("hidden");
    }
    
    function handleFourthQuestionSubmit(e) {
        e.preventDefault();
    
        // Gather the user's answer
        let selectedOption = document.querySelector("#question4 input[type='radio']:checked").value;
        console.log(`Selected option: ${selectedOption}`);

        // Check if the answer is correct
        if (selectedOption !== 'Berglundh') {
            incorrectAnswers.push(4);  // Add question number to incorrect answers array
        } else {
            score++;  // Increase score by 1
        }
    
        // Hide the fourth question
        document.getElementById("question4").classList.add("hidden");
    
        // Show the fifth question
        showFifthQuestion();
    }
    
    // When fourth question (or another event) is done, show the fifth question
    function showFifthQuestion() {
        document.getElementById("question5").classList.remove("hidden");
    }
    
    function handleFifthQuestionSubmit(e) {
        e.preventDefault();
        
        // Gather the user's answer
        let selectedOption = document.querySelector("#question5 input[type='radio']:checked").value;
        console.log(`Selected option: ${selectedOption}`);

        // Check if the answer is correct
        if (selectedOption !== 'None of the above') {
            incorrectAnswers.push(5);  // Add question number to incorrect answers array
        } else {
            score++;  // Increase score by 1
        }
    
        // Hide the fifth question
        document.getElementById("question5").classList.add("hidden");
    
        // Show the sixth question
        showSixthQuestion();
    }
    
    // When fifth question (or another event) is done, show the sixth question
    function showSixthQuestion() {
        document.getElementById("question6").classList.remove("hidden");
    }
    
    function handleSixthQuestionSubmit(e) {
        e.preventDefault();
    
        // Gather the user's answer
        let selectedOption = document.querySelector("#question6 input[type='radio']:checked").value;
        console.log(`Selected option: ${selectedOption}`);

        // Check if the answer is correct
        if (selectedOption !== 'E') {
            incorrectAnswers.push(6);  // Add question number to incorrect answers array
        } else {
            score++;  // Increase score by 1
        }
    
        // Hide the sixth question
        document.getElementById("question6").classList.add("hidden");
    
        // Show the seventh question
        showSeventhQuestion();
    }
    
    // When sixth question (or another event) is done, show the seventh question
    function showSeventhQuestion() {
        document.getElementById("question7").classList.remove("hidden");
    }
    
    function handleSeventhQuestionSubmit(e) {
        e.preventDefault();
    
        // Gather the user's answer
        let selectedOptionElement = document.querySelector("#question7 input[type='radio']:checked");
        if (selectedOptionElement) {
            let selectedOption = selectedOptionElement.value;
            console.log(`Selected option: ${selectedOption}`);
    
            // Check if the answer is correct
            if (selectedOption !== 'B') {
                incorrectAnswers.push(7);  // Add question number to incorrect answers array
            } else {
                score++;  // Increase score by 1
            }
    
            // Hide the seventh question
            document.getElementById("question7").classList.add("hidden");
    
            // Show the eighth question
            showEighthQuestion();
        } else {
            console.log("No option selected");
            return;  // Stop the function if no option is selected
        }
    }
    
    // When seventh question (or another event) is done, show the eighth question
    function showEighthQuestion() {
        document.getElementById("question8").classList.remove("hidden");
    }
    
    function handleEighthQuestionSubmit(e) {
        e.preventDefault();
    
        // Gather the user's answer
        let selectedOptionElement = document.querySelector("#question8 input[type='radio']:checked");
        if (selectedOptionElement) {
            let selectedOption = selectedOptionElement.value;
            console.log(`Selected option: ${selectedOption}`);
    
            // Check if the answer is correct
            if (selectedOption !== 'C') {
                incorrectAnswers.push(8);  // Add question number to incorrect answers array
            } else {
                score++;  // Increase score by 1
            }
    
            // Hide the eighth question
            document.getElementById("question8").classList.add("hidden");
    
            // Show the ninth question
            showNinthQuestion();
        } else {
            console.log("No option selected");
            return;  // Stop the function if no option is selected
        }
    }

    // When eighth question (or another event) is done, show the ninth question
    function showNinthQuestion() {
        document.getElementById("question9").classList.remove("hidden");
    }

    // When eighth question (or another event) is done, show the ninth question
    function handleNinthQuestionSubmit(e) {
        e.preventDefault();
    
        // Gather the user's answer
        let selectedOptionElement = document.querySelector("#question9 input[type='radio']:checked");
        if (selectedOptionElement) {
            let selectedOption = selectedOptionElement.value;
            console.log(`Selected option: ${selectedOption}`);
    
            // Check if the answer is correct
            if (selectedOption === 'B') {
                score++;  // Increase score by 1
            }
    
            // Hide the ninth question
            document.getElementById("question9").classList.add("hidden");
    
            // Show the results
            showResults();
        } else {
            console.log("No option selected");
            return;  // Stop the function if no option is selected
        }
    }

    function showResults() {
        // Convert the incorrectAnswers array to a string
        const incorrectAnswersString = incorrectAnswers.join(',');
    
        // Redirect the user based on the score
        if (score >= 6) {
            window.location.href = 'scorehigh.html?score=' + score + '&incorrect=' + incorrectAnswersString;
        } else if (score >= 3) {
            window.location.href = 'scoremedium.html?score=' + score + '&incorrect=' + incorrectAnswersString;
        } else {
            window.location.href = 'scorelow.html?score=' + score + '&incorrect=' + incorrectAnswersString;
        }
    }

    
    // Add click event listeners to the image options in question 7
    let imageOptions = document.querySelectorAll("#question7 .image-option");
    imageOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove the 'selected' class from all image options
            imageOptions.forEach(opt => opt.classList.remove('selected'));
    
            // Add the 'selected' class to the clicked image option
            this.classList.add('selected');
    
            // Uncheck all corresponding radio buttons
            document.querySelectorAll("#question7 input[type='radio']").forEach(radio => radio.checked = false);
    
            // Check the corresponding radio button
            let radioButtonId = this.getAttribute('data-radio');
            document.getElementById(radioButtonId).checked = true;
        });
    });

    // Add click event listeners to the image options in question 9
    let imageOptions9 = document.querySelectorAll("#question9 .image-option");
    imageOptions9.forEach(option => {
        option.addEventListener('click', function() {
            // Remove the 'selected' class from all image options
            imageOptions9.forEach(opt => opt.classList.remove('selected'));

            // Add the 'selected' class to the clicked image option
            this.classList.add('selected');

            // Uncheck all corresponding radio buttons
            document.querySelectorAll("#question9 input[type='radio']").forEach(radio => radio.checked = false);

            // Check the corresponding radio button
            let radioButtonId = this.getAttribute('data-radio');
            document.getElementById(radioButtonId).checked = true;
        });
    });
});
