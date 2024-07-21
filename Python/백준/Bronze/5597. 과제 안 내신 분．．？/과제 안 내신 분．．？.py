import sys

num_list = list()

for i in range(28):
    num = int(sys.stdin.readline().rstrip())
    num_list.append(num)

for r in range(1,31,1):
    if r in num_list:
        continue
    print(r)
