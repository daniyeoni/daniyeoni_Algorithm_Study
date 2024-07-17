import sys

num_list = list()
count = 0

while True:
    if count < 9:
        num = int(sys.stdin.readline())
        num_list.append(num)
        count += 1
        
    else:
        break

max_result = max(num_list)
index_result = num_list.index(max_result)+1
print(max_result)
print(index_result)
