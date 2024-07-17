import sys

word = list(map(str, sys.stdin.readline()))
num = int(sys.stdin.readline())

print(word[num-1])