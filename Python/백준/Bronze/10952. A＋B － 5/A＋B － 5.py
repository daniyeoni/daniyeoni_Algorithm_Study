import sys

def Finput():
    return sys.stdin.readline().split()


while True:
    num1, num2 = map(int, Finput())

    if num1==0 & num2==0:
        break
    else:
        print(num1+num2)

