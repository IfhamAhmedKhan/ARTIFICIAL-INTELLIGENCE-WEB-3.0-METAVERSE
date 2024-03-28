# Variables: Create a variable called name and assign your name to it.

# Data Types:

# Create a variable called age and assign your age to it.
# Create a variable called is_student and assign a boolean value indicating whether you are a student or not.
# Basic Operators:

# Calculate the sum of 5 and 3 and store the result in a variable called sum_result.
# Divide 10 by 2 and store the result in a variable called division_result.
# Input/Output:

# Use the input() function to ask the user for their favorite color and store it in a variable called favorite_color.
# Print a message that includes your name, age, favorite color, and the results of the sum and division operations.


name = "Ifham Ahmed Khan"
age = 23
is_student = True 
sum_result = 5 + 3
division_result = 10 / 2
favorite_color = input("Enter your favorite color: ")

print("\nName:", name, "\nAge:", age, "\nFavorite color:", favorite_color, "\nSum result:", sum_result, "\nDivision result:", division_result)


#--------------------------------------
# this is for table
def table(num):
    for i in range(11):
        ans = num * i
        print(num, "X", i, "=", ans)


# guess the number game
def guess_the_number(userNumber):
    if (userNumber == 69):
        print("you guessed it right")
    else:
        print("you are dead!")

guess_the_number(input("Enter a number: "))