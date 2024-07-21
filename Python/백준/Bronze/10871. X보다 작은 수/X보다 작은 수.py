import sys

num1, num2 = map(int, sys.stdin.readline().split())
num_list = list(map(int, sys.stdin.readline().split()))


for i in num_list:
    if(i < num2):
        print(i, end=" ")