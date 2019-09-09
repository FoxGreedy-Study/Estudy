##########################Exercicio1#################################

# idadeUser = int(input("Digite a sua idade manox "))
# print("Você é " + "Menor de idade" if idadeUser < 18 else "Maior de idade")

##########################Correção#######################################

# idadeUser = int(input("Digite sua idade: "))
# if idadeUser >= 18:
#     print("Maior de idade")

# elif  idadeUser>0 and idadeUser<18:
#     print("Menor de idade")

# else:
#     print("Idade inválida")

##########################Exercicio2################################

# Nota1 = float(input("Digite sua primeira nota "))
# Nota2 = float(input("Digite sua segunda nota "))

# Media = (Nota1 + Nota2)/2

# print("Você reprovou!" if Media < 6 else "Voce passou!")


##########################Exercicio3################################

# Condicao = "n"

# while Condicao == "n":
#     A = float(input("Digite o valor de A (X²): "))
#     B = float(input("Digite o valor de B  (X): "))
#     C = float(input("Digite o valor de C: "))
    
#     print(str(A) + "X² " + str(B) +" X " + str(C)+" = 0")
#     Condicao = input("Confirma? (n/y): ")

# Delta = B**2 -4*(A*C)
# Sol1 = (-B + Delta ** (1/2)) / 2
# Sol2 = (-B - Delta ** (1/2)) / 2

# if Delta < 0:
#     print("Delta é menor que 0, impossivel de fazer Bhaskara!\nDelta = " + str(Delta))
# else:
#     print("Delta: " + str(Delta) + " " + 
#     "\nBhaskara: " + str(Sol1) + " , " + str(Sol2))

#####################################Exercicio4#######################################

    # Quando queremos ordenar uma lista no python, usamos o sorted

# lista = []
# for c in range(0, len(lista), 1):
#     lista.append(input("Digite o " + str(c+1) + "° elemento da lista: "))

# print(sorted(lista))

#####################################Selection-Sort######################################

# lista = [3,2,1, 700, 500, 99, 3, 5]
# for i in range(len(lista)):
#     menor = i

#     for j in range(i+1, len(lista)):
#         if lista[j] < lista[menor]:
#             menor = j

#     if lista[i] != lista[menor]:
#         aux = lista[i]
#         lista[i] = lista[menor]
#         lista[menor] = aux

# print(lista)

########################################Exercicio5#######################################

# numero1 = float(input("Digite o 1° número: "))
# numero2 = float(input("Digite o 2° número: "))
# Operador = input("Digite o operador: "+
# "\nMultiplicação = * \n Divisão = / \n Subtração = - \n Soma = + \n Potencia = ! \n Radiciação = ? \n")


# if Operador == "+":
#     print(numero1 + numero2)
# elif Operador == "-":
#     print(numero1 - numero2)
# elif Operador == "*":
#     print(numero1 * numero2 )
# elif Operador == "/":
#     print(numero1 /numero2)
# elif Operador == "!":
#     print(numero1 ** numero2)
# elif Operador == "?":
#     print(numero1 ** (1/numero2))
# else:
#     print("Digite um dos comandos acima")