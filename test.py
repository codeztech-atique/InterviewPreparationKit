a = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', ' ']
b = "HackerEarth Tests"
for i in a:
    if i not in b:
        a = a[:a.index(i)]+a[a.index(i)+1:]
print(a) 