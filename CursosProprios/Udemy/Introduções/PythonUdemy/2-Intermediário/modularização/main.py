# Import é parecido com o require do javascript, entretanto é preciso que o arquivo esteja na mesma pasta que o main
# o "as" é como eu quero chamarum arquivo externo internamente
import aleatorio as a
import media as m


lista = a.getListaAleatoria(10)
print("Minha lista: ")
print(lista)

media = m.media(lista)
mediana = m.mediana(lista)
moda = m.moda(lista)

print("A média da minha lista é: " + str(media))
print("A mediana da minha lista é: " + str(mediana))
print("A moda da minha lista é: " + str(moda))