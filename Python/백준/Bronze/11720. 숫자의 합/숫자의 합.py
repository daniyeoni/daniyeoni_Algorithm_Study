import sys

# def Finput():
#     sys.stdin.readline()

# def FastInput():
#     sys.stdin.readline().rstrip()

num = int(sys.stdin.readline())
num_list = list(map(int, str(sys.stdin.readline().rstrip())))
print(sum(num_list))
