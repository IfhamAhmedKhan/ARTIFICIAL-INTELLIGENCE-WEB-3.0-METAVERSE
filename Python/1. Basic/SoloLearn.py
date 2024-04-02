# sports = ["football", "Basketball", "Tennis"]

# group = [x for x in sports if "ball" in x]

# print(group)

# scores = [43,75,88,443,857,97]

# high_scores = [scores for scores in scores if scores > 80]

# print(high_scores)

# #------------------------------------

# words = ["tree", "button", "cat", "window", "defenestrate"]

# longer_list = [x for x in words if len(x) > 4]

# print(longer_list)

# # -----------------
# # Exception

# prices = [250, 300, "240", 400]
# try:
#   total = sum(prices)
#   print(total)
# except TypeError:
#   print("Invalid data type")

# print("Happy Shopping")

# my example
# numberOne = 10
# numberTwo = 0
# try:
#     total = numberOne/numberTwo

# except ZeroDivisionError:
#     print("please don't divide by zero")



# print(numberOne+numberTwo)

# example ->
# products = ['ball', 'toy', 'paper']
# try:
#   count = len(products)
# except:
#  print("Error")
# else:
#   print("Count of products:", count)

# numb = [1,2,3]
# print(numb[10])

# functional programming
# def shout(text):  
#     return text.upper()
# yell = shout
# print(yell("Hello"))

# lambda function
# greet = lambda name: "Welcome, " + name

# print(greet("Bob"))

# map function
# names = ["alice", "bob", "CHARLIE", "Tom"]

# def capitalize(name):
#   return name.capitalize()

# capitalized = map(capitalize, names)
# capitalized = list(capitalized)

# print(capitalized)

# Transforms the items of an iterable: map()
# Returns items that meet a condition: filter()

# args
# def total(*args):
#   result = 0
#   for arg in args:
#     result += arg
#   return result

# def display(*words):
#   for item in words:
#     print(item)
# display("paper", "pen", "pencil")

# kwargs
# def display_info(**kwargs):
#   for key, value in kwargs.items():
#     print(key, ":", value)

# args is like tuple
# kwargs is like dict

# practice question 
# user_answers = ["Yes", "", "No", "", "Maybe", "", "Yes"]

# # Create a new list without empty answers
# clean_list = list(filter(lambda answer: answer != "", user_answers))

# # Display the cleaned list of answers
# print(clean_list)

# ----------------------

# OOP pillars task:

class Dog:
    def __init__(self, name):
        self.name = name
