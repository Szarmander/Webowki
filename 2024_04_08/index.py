with open('przyklad.txt', 'r') as file:
    words = file.readlines()

with open('wyniki4_1.txt', 'w') as result_file:
    # 4.1
    result_file.write('4.1\n')
    for word in words:
        if(word.count('w') == word.count('k')):
            result_file.write(word.strip() + '\n')

    # 4.2
    result_file.write('4.2\n')
    for word in words:
        times = 0
        howManyW = word.count('w')
        howManyA = word.count('a') // 2
        howManyK = word.count('k')
        howManyC = word.count('c')
        howManyJ = word.count('j')
        howManyE = word.count('e')
        lst = [howManyW, howManyA, howManyK, howManyC, howManyJ, howManyE]
        print(f"{howManyW} {howManyA} {howManyK} {howManyC} {howManyJ} {howManyE}")
        if(howManyW >= min(lst) and howManyA >= min(lst) and howManyK >= min(lst) and howManyC >= min(lst) and howManyJ >= min(lst) and howManyE >= min(lst)):
            times = min(lst)
        result_file.write(f"{times} ")

    # 4.3
    result_file.write('\n4.3\n')
    wakacje = ['w', 'a', 'k', 'a', 'c', 'j', 'e']
    for word in words:
        wakacjeIterator = 0
        ileWyjebac = 0
        for letter in word:
            if(letter == wakacje[wakacjeIterator]):
                wakacjeIterator += 1
                if(wakacjeIterator > 6):
                    wakacjeIterator = 0
            else:
                ileWyjebac += 1
        result_file.write(f"{ileWyjebac} ")

