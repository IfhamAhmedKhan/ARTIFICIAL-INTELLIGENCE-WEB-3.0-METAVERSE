# Define a function called multiply that takes two arguments and returns their product.
def multiply(firstNumber,secondNumber):
    return firstNumber*secondNumber

print(multiply(10,5))

# Write a function called is_even that takes a number as input and returns True if the number is even, otherwise False.
def is_even():
    value = int(input("Enter number: "))
    if(value%2==0):
        return True
    else:
        return False
        
print(is_even())

# Create a function called greet that takes a name as an argument and prints a greeting message, such as "Hello, [name]!".
def greet(name):
    print("Greetings!", name, "I hope you are having a good day!")

greet("Ifham")
# Define a function called calculate_area that calculates and returns the area of a circle given its radius.
def calculate_area(radiusValue):
    return 3.141592654*(radiusValue**2)

print(calculate_area(5))

# Write a function called is_prime that takes a number as input and returns True if the number is prime, otherwise False.
import math

def is_prime():
    value = int(input("Enter number: "))
    if value <= 1:
        return False
    for i in range(2, int(math.sqrt(value)) + 1):
        if value % i == 0:
            return False
    return True

print(is_prime())