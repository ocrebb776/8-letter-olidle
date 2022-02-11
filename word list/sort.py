def readFile(fileName):
        fileObj = open(fileName, "r") #opens the file in read mode
        words = fileObj.read().splitlines() #puts the file into an array
        fileObj.close()
        return words
yea=readFile("words.txt")
small = [x for x in yea if len(x)<9 and len(x)>7]
print(small)
w= open("8letters.txt", "w")
w.write(str(small))
w.close()
input()
