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
mylist = [50, 2, 90, 5, 100]
largest = mylist[0]  # Assume the first element is the largest
for num in mylist:
    if num > largest:
        largest = num

print("Largest number:", largest)


# or another easy way of doing it

mylist = [90,10,5,95,100]
mylist.sort()
Largest = mylist[-1]

print("Largest number: ", Largest)

# Write a Python program to get the smallest number from a list. 
mylist = [90,10,5,95,100]
mylist.sort()
Smallest = mylist[0]

print("Smallest number: ", Smallest)

# Write a Python program to count the number of strings where the string length is 2 or more and the first and last character are the same from a given list of strings.
string_list = ["level", "python", "radar", "hello", "racecar"]
length = len(string_list)
counter = 0
for i in range(length):
    work = string_list[i]
    if(work[0]==work[-1]):
        counter+=1

print("Counter: ",counter)
# Write a Python program to remove duplicates from a list.
mylist = [1, 1, 1, 2, 3, 3, 4, 2]
newList = []
mylist.sort()
length = len(mylist)
for i in range(length):
    if i == 0 or mylist[i] != mylist[i - 1]:  
        newList.append(mylist[i])

print(newList)


# Write a Python program to check if a list is empty or not.
mylist = []

if not mylist:
    print("The list is empty.")
else:
    print("The list is not empty.")


# Write a Python program to clone or copy a list.
mylist = [1, 2, 3, 4, 5]
copyList = []
length = len(mylist)  
for i in range(length):
    copyList.append(mylist[i])  

print(copyList)  

# Write a Python program to find the second largest number in a list.
mylist = [90,10,5,95,100]
mylist.sort()
Largest = mylist[-2]

print("Second Largest number: ", Largest)

# Write a Python program to find the second smallest number in a list.
mylist = [90,10,5,95,100]
mylist.sort()
Smallest = mylist[1]

print("Second Smallest number: ", Smallest)



