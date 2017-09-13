$(document).ready(function(){
	console.log("ready!")

	// timer
	var number = 100;
	var intervalId;

	function run() {
		intervalId = setInterval(decrement, 1000);
	}

	function decrement(){
		number--;

		$("#timer").html("<h1>" + number + "</h1>");

		if (number === 0) {

			stop();

			alert("Time up!");
		}
	}

	function stop(){
		clearInterval(intervalId);
	}
	run();

	// quiz
	function quizTime(){

		var output = [];

		questions.forEach(function(currentQuest, questNum){
			var answers =[];

			for (choices in currentQuest.answers){
				answers.push(
		          `<label>
		            <input type="radio" name="question${questNum}" value="${choices}">
		            ${choices} :
		            ${currentQuest.answers[choices]}
		          </label>`
		      	);
			}
			output.push(
		        `<div class="question"> ${currentQuest.question} </div>
		        <div class="answers"> ${answers.join('')} </div>`
     		 );
		});

		console.log(output)

		quizBox.innerHTML = output.join('');

	};

	function showResults(){
		var getAnswers = quizBox.querySelectorAll('.answers');

		var numCorrect = 0;

		questions.forEach(function(currentQuest, questNum){
			var chosenAns = getAnswers[questNum];
			var selector = 'input[name=question"+questNum+"]:checked';
			var userAnswer = (chosenAns.querySelector(selector) || {}).value;

			if(userAnswer === currentQuest.answer){
				numCorrect++;

			getAnswers[questNum].style.color = 'lightgreen';
				
			}
			else {
				getAnswers[questNum].style.color = 'red';
			}
		});

		results.innerHTML = numCorrect + " out of " + questions.length
	};

	var quizBox = $("#quiz")
	var submit = $("#submit")
	var results = $("#results")


	var questions = [
		{
			question1: "1. How many Pokemon can Eevee evolve into?",
			choices: ['a. 6', 'b. 7', 'c. 8', 'd. 9'],
			answer: "b. 7"
		},
		{
			question2: "2. Which Pokemon does Pikachu evolve into?",
			choices: ['a. Pichu', 'Raichu', 'Does Not Evole', 'Pachirisu'],
			answer: "b. Raichu"
		},
		{
			question3: "3. What is Ash's full name?",
			choices: ['a. Ash Ketchum', 'b. Ash Ketchup', 'c. Ash Cetchum', 'Ad. sh Catch-em'],
			answer: "a. Ash Ketchum"
		},
		{
			question4: "4. Who constantly tries to steal Pokemon?",
			choices: ['a. Team Rocket', 'b. Team Magma', 'c. Team Aqua', 'd. Team Skull'],
			answer: "a. Team Rocket"
		},
		{
			question5: "5. What is the legend of where Pokemon come from?",
			choices: ['a. Earth', 'b. Space', 'c. Ocean', 'd. Volcano'],
			answer: "b. Space"
		},
		{
			question6: "6. What is round and cute but will sing you to sleep?",
			choices: ['a. Jiggypuff', 'b. Celfairy', 'c. Chansey', 'd. Clefable'],
			answer: "a. Jiggypuff"
		},
		
	];

	quizTime();

	$("#submit").on("click", function(){

	});

});

