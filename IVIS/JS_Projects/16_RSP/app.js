let playerScore = 0;
let computerScore = 0;
let moves = 1;

const playerScoreBoard = document.querySelector('.p-count');
	const computerScoreBoard = document.querySelector('.c-count');
	const result = document.querySelector('.result');

const game = () => {

	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['바위','보','가위']
		

		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `${moves} 라운드`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				winner(this.innerText,computerChoice)
				
				if(moves == 10){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	const winner = (player,computer) => {
		if(player === computer){
			result.textContent = '비김!'
		}
		else if(player == '바위'){
			if(computer == '보'){
				result.textContent = '컴퓨터 승리!';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = '당신의 승리!'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == '가위'){
			if(computer == '바위'){
				result.textContent = '컴퓨터 승리!';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = '당신의 승리!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == '보'){
			if(computer == '가위'){
				result.textContent = '컴퓨터 승리!';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = '당신의 승리!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		console.log("아무거나");
		result.textContent = "dkarjsk";
	}

	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

		chooseMove.innerText = '게임 오버!!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = '승리!!'
            document.body.style.backgroundColor='#99ffff'
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = '패배...';
            document.body.style.backgroundColor='red'
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = '비김!';
            document.body.style.backgroundColor='purple'
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}

	playGame();
	
}


game();
