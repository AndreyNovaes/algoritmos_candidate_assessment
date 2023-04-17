mixed_array = ["a", 10, "b", "hola", 122, 15]

letras = []
numbers = []
notNumbersAndNotLetters = []

for i in mixed_array:
    if type(i) == str and len(i) == 1 and i.isalpha():
      letras.append(i)
    if type(i) == int:
      numbers.append(i)
    else:
      notNumbersAndNotLetters.append(i)

print(letras)
print(numbers)
print(max(numbers))
