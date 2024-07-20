import sys

input_num = int(sys.stdin.readline().rstrip())
num_list = list(map(int, sys.stdin.readline().split()))
num = int(sys.stdin.readline())

print(num_list.count(num))
