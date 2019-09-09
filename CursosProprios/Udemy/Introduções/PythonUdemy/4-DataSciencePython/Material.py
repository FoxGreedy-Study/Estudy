# Visualização de dados com pytho
# Aprenderemos a visualizar dados e alguns conceitos de datascience com o python 
# Usando a blibliote matplotlib

import matplotlib.pyplot as plt

x1 = [1, 3, 5, 7, 9]
y1 = [2, 4, 6, 8, 10]

x2 = [2, 4, 6, 8, 10]
y2 = [2, 5, 9, 5, 8]

titulo = "Meu primeiro grafico com python"
labelx = "Eixo X"
labely = "Eixo Y"

# Legendas do grafico em python
plt.title(titulo)
plt.xlabel(labelx)
plt.ylabel(labely)

# Conseguimos fazer graficos de barrasd com o comando .bar ou de linhas com o comando .plot
# plt.plot(x1, y1)

# Conseguimos comparar dois graficos de barras como vemos a seguir
# plt.bar(x1, y1, label = "Grupo 1")
# plt.bar(x2, y2, label = "Grupo 2")
# plt.legend()

# Consigo mesclar dois tipo de graficos do matplotlib apenas chamando eles com o mesmo valor
plt.plot(x1, y2, color="k")
# Scatterplot, grafico de pontos, label, color e marker servem como parametros para passarmos coisas
plt.scatter(x1, y2,  label= "meus pontos", color = "red", marker= "h", s= 100)
plt.legend()

plt.show()

import matplotlib.pyplot as plt
 
x = [1, 3, 5, 7, 9]
y = [2, 3, 7, 1, 0]
z = [200, 25, 400, 3300, 100]
 
titulo = "Scatterplot: gráfico de dispersão"
eixox = "Eixo X"
eixoy = "Eixo Y"
 
# Legendas
plt.title(titulo)
plt.xlabel(eixox)
plt.ylabel(eixoy)
 
plt.plot(x, y, color="#000000", linestyle="--")
plt.scatter(x, y, label="Meus pontos", color="k", marker=".", s=z)
plt.legend()
# plt.show()
# Configo salvar o grafico em um arquivo de imagem através do método .savefig
plt.savefig("figura1.png", dpi = 300)

