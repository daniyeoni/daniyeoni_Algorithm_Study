import sys

def Finput():
    return sys.stdin.readline().split()

def FastInput():
    return sys.stdin.readline().rstrip()

num = int(FastInput())
number = list(map(int, Finput()))

max = number[0]
min = number[0]

for i in number[1:]:
    if i > max:
        max = i
    elif i < min:
        min = i

print(min, max)