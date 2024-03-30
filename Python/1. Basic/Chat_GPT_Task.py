# write a python function to calculate the factorial of a given number

def factorial(num):
    ans = 1
    for i in range(1,num+1):
        ans = ans*i

    return ans

result = factorial(7)
print(result)


