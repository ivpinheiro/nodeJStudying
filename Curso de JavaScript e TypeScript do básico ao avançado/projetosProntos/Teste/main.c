#include <stdio.h>
#include <stdlib.h>
#include "insertion.h"
#include "merge.h"

int main()
{
    int quantidadeVetores = 0;
    if(!scanf("%d", &quantidadeVetores))
    {
        printf("Erro de leitura!");
        exit(-1);
    }
    int *vetorTamanhos = (int*) malloc (quantidadeVetores*sizeof(int));       
    for(int i = 0; i < quantidadeVetores; i++)
    {
        if(!scanf("%d", &vetorTamanhos[i]))
        {
            printf("Erro de leitura!");
            exit(-1);
        } 
    }
    int **vetorDeVetores = (int**) malloc (quantidadeVetores*sizeof(int*));    
    for(int i = 0; i < quantidadeVetores; i++)
    {
        vetorDeVetores[i] = (int*) malloc (vetorTamanhos[i]*sizeof(int));
    }
    for(int i = 0; i < quantidadeVetores; i++)
    {
        for(int j = 0; j < (vetorTamanhos[i]); j++)
        {
            if(!scanf("%d", &vetorDeVetores[i][j]))
            {
                printf("Erro de leitura!");
                exit(-1);
            } 
        }
    }
    for(int i = 0; i < quantidadeVetores; i++)
    {
        insertionSort(vetorDeVetores[i], vetorTamanhos[i]);
        mergeSort(vetorDeVetores[i], vetorTamanhos[i]);
    }  
    //for(int i = 0; i < quantidadeVetores; i++)
    //{
    //    for(int j = 0; j < vetorTamanhos[i]; j++)
    //    {
    //        printf("%i ", vetorDeVetores[i][j]);            
    //    }
    //}    
    for(int i = 0; i < quantidadeVetores; i++)
    {
        free(vetorDeVetores[i]);
    }
    free(vetorDeVetores);
    free(vetorTamanhos);
}