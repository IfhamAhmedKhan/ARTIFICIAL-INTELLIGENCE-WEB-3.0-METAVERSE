# List

# Write a Python program to sum all the items in a list.
mylist = [2,5,6,50]
sum = 0
length = len(mylist)
for i in range(length):
    sum += mylist[i]

print("Addition: ",sum)

# Write a Python program to multiply all the items in a list.
mylist = [2,2,2]
multiply = 1
length = len(mylist)
for i in range(length):
    multiply *= mylist[i]

print("multiplication: ", multiply)

# Write a Python program to get the largest number from a list.
mylist = [50,2,90,5,100]
larger = 0
length = len(mylist)
for i in range(length-1):
    if(mylist[i]>mylist[i+1]):
        larger = mylist[i] 
    elif (mylist[i]<mylist[i+1]):
        larger = mylist[i+1]

print("Largest number: ", larger)

# Write a Python program to get the smallest number from a list. (Need to work on it)
mylist = [50,2,90,5,100]
Smallest = 0
length = len(mylist)
for i in range(length-1):
    if(mylist[i]<mylist[i+1]):
        Smallest = mylist[i] 

print("Smallest number: ", Smallest)

# Write a Python program to count the number of strings where the string length is 2 or more and the first and last character are the same from a given list of strings.


# Write a Python program to remove duplicates from a list.


# Write a Python program to check if a list is empty or not.


# Write a Python program to clone or copy a list.


# Write a Python program to find the second largest number in a list.


# Write a Python program to find the second smallest number in a list.




