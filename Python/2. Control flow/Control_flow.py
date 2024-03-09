# If Statement:
# Write an if statement that checks if a variable num is greater than 10. If it is, print "Num is greater than 10", otherwise print "Num is not greater than 10".

num = 15

if (num>10):
    print("Num is greater than 10")
else:
    print("Num is not greater than 10")
    
    
#If-Else Statement:

# Write an if-else statement that checks if a variable is_raining is True. If it is, print "Bring an umbrella", otherwise print "No need for an umbrella".

is_raining = True

if (is_raining == True):
    print("Bring an umbrella")
else: 
    print("No need for an umbrella")

# Elif Statement:

# Write an if-elif-else statement that checks the value of a variable day (1-7) and prints the corresponding day of the week (e.g., 1 for Monday, 2 for Tuesday, etc.).

day = 5

if(day == 1):
    print("Monday")
elif (day == 2):
    print("Tuesday")
elif (day == 3):
    print("Wednesday")
elif (day == 4):
    print("Thursday")
elif (day == 5):
    print("Friday")
elif (day == 6):
    print("Saturday")
elif (day == 7):
    print("Sunday")
else:
    print("You mom's day ;)")

# Nested Statements:

# Write a nested if-else statement to determine if a number is positive, negative, or zero. Print the result accordingly.

num = 0

if (num >= 0):
    if (num == 0): 
        print("your number is zero")
    else:
        print("positive number")
else:
    print("negative number")


# Looping:

# Use a for loop to iterate over a list of numbers (e.g., [1, 2, 3, 4, 5]) and print each number multiplied by 2.

for i in range(1,6):
    print(2*i)

# While Loop:

# Use a while loop to print numbers from 1 to 5.
num=1
while(num<=5):
    print(num)
    num+=1