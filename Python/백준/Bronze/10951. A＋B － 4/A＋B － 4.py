import sys

def Finput():
    return sys.stdin.readline().split()

while True:
    try:
        num1, num2 = map(int, Finput())
        result = num1+num2
        print(result)
    except:
        break