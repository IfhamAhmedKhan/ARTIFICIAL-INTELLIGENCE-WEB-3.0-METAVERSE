#! /usr/bin/env node
import inquirer from 'inquirer';

const MAX_ROUNDS = 3;
let round = 1;
let score = 0;

function startGame() {
    if (round <= MAX_ROUNDS) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        inquirer.prompt({
            type: 'input',
            name: 'guess',
            message: `Round ${round}/${MAX_ROUNDS}: Guess the number (1-10): `,
            validate: (input: string) => { // Explicitly type input as string
                const guess = parseInt(input.trim());
                if (isNaN(guess) || guess < 1 || guess > 10) {
                    return 'Please enter a valid number between 1 and 10.';
                }
                return true;
            }
        }).then((answers: { guess: string }) => { // Explicitly type answers
            const guess = parseInt(answers.guess.trim());
            if (guess === randomNumber) {
                console.log('Congratulations! You guessed the correct number.');
                score++;
            } else {
                console.log(`Wrong! The correct number was ${randomNumber}.`);
            }
            round++;
            startGame();
        });
    } else {
        console.log(`Game over! Your score: ${score}/${MAX_ROUNDS}`);
    }
}

startGame();
