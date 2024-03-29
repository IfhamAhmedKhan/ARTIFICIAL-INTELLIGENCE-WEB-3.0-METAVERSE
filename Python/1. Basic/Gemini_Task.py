"""
Beginner

    Number Guessing Game:
        The computer generates a random number.
        The player guesses the number in a set number of attempts.
        Give hints like "higher" and "lower" after each guess.

    Calculator:
        Create a simple calculator that handles addition, subtraction, multiplication, and division.
        Let the user choose an operation and input the numbers.

    Mad Libs Generator:
        Create a story template with blanks for words like nouns, adjectives, verbs.
        Ask the user to fill in the blanks.
        Print the hilarious, completed story.

"""

import random

def guessNumber():
    myNumber = random.randint(1, 10)
    score = False  

    for i in range(2):
        userNumber = int(input("Guess the number: "))
        if userNumber == myNumber:
            print("Congrats! you guessed it right")
            score = True
            break  
        elif userNumber < myNumber:
            print("Oh no! you guess a lower number, try higher number ^.^")
        elif userNumber > myNumber:
            print("Oh no! you guess a higher number, try lower number ^.^")
        else:
            print("Wrong input!")

    if not score: 
        print("You didn't guess it in time. The number was", myNumber)

guessNumber()

# Calculator
def calculator():
    operations = {"+": "addition", "-": "subtraction", "*": "multiplication", "/": "division"}

    while True:  
        firstNum = int(input("Enter first number: "))
        secondNum = int(input("Enter second number: "))

        operation = input("Operation (+, -, *, /): ").lower() 
        if operation not in operations:
            print("Invalid operation")
            continue  

        if operation == "+": 
            answer = firstNum + secondNum
        elif operation == "-": 
            answer = firstNum - secondNum
        elif operation == "*": 
            answer = firstNum * secondNum
        elif operation == "/": 
            if secondNum == 0:
                print("Error: Cannot divide by zero")
            else:
                answer = firstNum / secondNum

        print("The result of", operations[operation], "is:", answer)

        another_calculation = input("Do you want to perform another calculation? (yes/no): ").lower()
        if another_calculation != "yes":
            break

calculator()


# Mad Libs Generator

def MadLibsGame():
    print("Last night when I ___ playing _ game ____ my friends I was having so ____ fun. Later I decided that I ______ watch a movie. But I ___ no idea which movie to watch, __ I asked my friends ___ we watched a movie together!")
    print("Now your task is to fill all the blanks: ")
    userList = ["none", "none", "none", "none", "none", "none", "none", "none"]
    ansList = ["was", "a", "with", "much", "should", "had", "so", "and"]
    score = 0
    for i in range(7):
        userList[i] = input()
        if(userList[i] == ansList[i]):
            score+=1
        
    print("You scored: ", score)

MadLibsGame()