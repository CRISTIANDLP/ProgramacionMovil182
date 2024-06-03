import asyncio

numeros = [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6]

async def mispares(numeros):
    pares = []
    for numero in numeros
        if numero % 2 == 0:
            pares.append(numero)
        await asyncio.sleep(0)
    return pares

async def main():
    pares = await mispares(numeros)
    print("Todos mis numeros:", numeros)
    print("Mis numeros pares son:", pares)

asyncio.run(main())


