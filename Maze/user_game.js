const start_user = document.querySelector('.start_user');

function driveAPiece() {
	const piece = createPiece();
	window.addEventListener('keydown', event => {
		if ((event.key === "ArrowRight") || (event.keyCode === 39)) {
			piece.turnRight();
			console.log(event)
		}
	})
}

function game() {
	resetField();
	driveAPiece();
}

start_user.addEventListener('click', game);