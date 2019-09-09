

# #Sa porra é como se faz comentario no .py
# #Não se faz sentido

# #Definindo o ascii como utf-8
# # -*- coding: utf-8 -*- 
# print("Helló word")

# # Multiplicação em python
# print(2 * 3)
# #Exponenciação em python
# print(2 ** 3)
# #Resto, operador módulo
# print(10 % 3)

# #Definindo uma variável
# minha_variavel = "Olá mundo" #Variável string
# var1 = 1                     #Variável int
# var2 = 1.1                   #Variável float
# var3 = False
# var3 = True

# print(minha_variavel)
# print(var1)
# print(var2)
# print(var3)

# #Operadores logicos
# # and &&
# # or ||
# # not !

# #Operadores condicionais
# if var2 > var1:
#     print("var2 é maior que var1")
# #comando else if
# elif var2 == var1:
#     print("Ambos são iguais mano")
# else:
#     print("var 1 é maior que var2")

# #Laço de repetição while
# while1 = 1
# while while1 < 10:
#     print("ahahahahahahha")
#     while1 += 1

# #Aprendendo umas coisas bem legais looooooooooooooool
# batata = ["Ronaldinho gachugo", 12, 14, "Gachugo ronaldinho"]
# for i in batata:
#     print(i)
# #Agora vem nimim no comando range
# #range(c==0; c<10; c+=)
# for c in range(0, 10, 1):
#     print(c)

# #Comando input = Scanner do Java
# numero = input("Digite um numero: ")
# print(numero)
# print("O número digitado é " + numero)

# #Entendendo como funciona melhor as strings
# a = " Xuxu "
# b = " Batata "
# print(len(a + " e " + b))
# print(a[1:4])

# #toUpperCase e toLowerCase do Python
# print(a.lower())
# print(b.upper())

# #strip serve para tirar espaços e caracteres especiais
# print(a.strip().lower())
# #split, converte uma sequencia em uma lista
# minha_string = "O rato roeu a roupa do rei de roma"
# for i in minha_string.split("r"):
#     print(i)
# #O método find serve para achar a posição de uma certa palavra, se ele não encontrou a string ele retorna -1
# print(minha_string.find("rei"))

# #Substitui parte de uma string, é o método replace
# print(minha_string.replace("rei", "rainha"))

#############################################################################################################
# #Lista de strings
# minha_lista = ["Abacaxi", "Melancia", "Abacate"]

# #Lista com numeros
# minha_lista2 = [1, 2, 3, 4, 5]

# #Lista mista
# minha_lista3 = [3, 5, 8, "Batata", "Xuxu", 22]

# #Adicionar um novo item na lista -> appen()
# minha_lista.append("Camarão")

# for item in minha_lista:
#     print(item)

# #Para conseguirmos saber se um elemento está numa lista nó usamos a palavra in junto com if
# if 2 in minha_lista2:
#     print("2 está na lista")

# del minha_lista[:]
# print(minha_lista)

# minha_lista4 = []
# minha_lista4.append(57)
# print(minha_lista4)

# # Ordenando listas
# lista = [123, 122, 120, 125, 12]

# # Sorted( retorna uma lista ordenada), método sort modifica a lista
# # Ordenar de forma decrescente, sort(reverse = true), o método rever inverte a ordem da sua lista
# lista.sort(reverse = True)

# print(lista)

# Dicionários são lista de associação compostas por uma chave em um valor correspondente
# Dicionário eu declaro entre chaves, var dicio = {"chave":"nomedicio"}

# meu_dicionario = {"A":"Ameixa", "B":"Bola", "C":"Cachorro"}

# # Consigo pegar as chaves do meu dicionario através do comando for
# for chave in meu_dicionario:
#     print(chave +"-"+ meu_dicionario[chave])

# # Existe o comando items(), onde consigo pegar cada item do meu dicionario e colocar numa variavel
# # keys() pego as chaves, values() pego os valores dentro das chaves
# for i in meu_dicionario.items():
#     # Tupla, conjunto de dados que são imutaveis
#     print(i)

# Com o for que vimos embaixo, consigo separar a chave de um valor num dicionario, assim consigo usa-los separados 
# tudo graças ao método items()
dicionario = {"Batata":"doce", "Xuxu":"Repolho"}

for  fields, values in dicionario.items():
    print(fields +" e "+ values)
