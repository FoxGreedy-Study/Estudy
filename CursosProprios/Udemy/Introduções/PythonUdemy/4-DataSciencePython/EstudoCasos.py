# Crescimento da população brasileira 1980 - 2016
# DataSus

import matplotlib.pyplot as plt

dados = open('populacao-brasileira.csv').readlines()

x = []
y = []

# Como eu faria
# for dado in dados:
#     divisao = dado.split(';') 
#     x.append(divisao[0])
#     y.append(divisao[1])

# print(str(x) + " e "+ str(y))

for i in range(len(dados)):
    if i !=0:
        linha = dados[i].split(';')
        x.append(int(linha[0])) 
        y.append(int(linha[1]))

print(y)

plt.plot(x, y)
plt.scatter(x, y, label="Quantidade de população em sua determinada epoca", color="red")
plt.legend()
plt.title("Crescimento da população brasileira")
plt.xlabel("Ano")
plt.ylabel("População Brasileira")
plt.show()
