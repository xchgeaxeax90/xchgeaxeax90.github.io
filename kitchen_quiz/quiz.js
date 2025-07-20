function renderMultipleChoice(question_name, quiz_elem, form_html) {
    for(const [idx, answer] of quiz_elem['answers'].entries()) {
        const answer_id = question_name + "_" + idx;
        const input = document.createElement("input")
        input.setAttribute('type', 'radio')
        input.setAttribute('name', question_name)
        input.setAttribute('value', idx)
        input.setAttribute('id', answer_id)

        const label = document.createElement("label")
        label.setAttribute('for', answer_id)
        label.innerHTML = answer['text']
        form_html.appendChild(document.createElement("br"))
        form_html.appendChild(input)
        form_html.appendChild(label)
    }
    window.theQuestions[question_name] = quiz_elem;
}

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    const form = e.target;
    var score = 0;
    const questions_entries = Object.entries(window.theQuestions);
    for(const [key, value] of questions_entries) {
        const answers = value['correct'];
        const submitted = form[key];
        if(value['type'] == 'multiple_choice'){
            // Answer is correct
            const answer = parseInt(submitted.value);
            if(isNaN(answer)) continue;

            const label = submitted[answer].labels[0];
            const answer_object = value['answers'][answer];
            label.innerHTML = '';
            label.appendChild(document.createTextNode(answer_object['text'] + " - "))
            const answer_div = document.createElement("span")
            if(answers.includes(answer)){
                score += 1;
                answer_div.appendChild(document.createTextNode(answer_object['on_selected']));
                answer_div.style.color = "green";
                label.appendChild(answer_div)
            }else {
                answer_div.appendChild(document.createTextNode(answer_object['on_selected']));
                answer_div.style.color = "red";
                label.appendChild(answer_div)
            }
        }
        console.log();
    }

    const score_div = document.getElementById("quiz_score");
    score_div.innerHTML = "Score: " + score + " out of " + questions_entries.length;
    return false;
}


function renderQuiz(quiz_json) {
    window.theQuestions = {};
    const form = document.createElement("form");
    for(const [idx, elem] of quiz_json.entries()) {
        const question_name = "question_" + idx
        const question = document.createElement("div");
        question.setAttribute("id", question_name);
        question.appendChild(document.createTextNode(elem['question']));
        if(elem['type'] === 'multiple_choice') {
            renderMultipleChoice(question_name, elem, question);
        }

        form.appendChild(question);
        form.appendChild(document.createElement("br"));
    }

    form.appendChild(document.createElement("br"));
    const button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.setAttribute("value", "Submit Answers");
    form.appendChild(button);
    if (form.attachEvent) {
        form.attachEvent("submit", processForm);
    } else {
        form.addEventListener("submit", processForm);
    }
    const quiz_div = document.getElementById("quiz_body");
    quiz_div.appendChild(form);
}

fetch('quiz_questions.json').then(response => response.json()).then(data => renderQuiz(data));

