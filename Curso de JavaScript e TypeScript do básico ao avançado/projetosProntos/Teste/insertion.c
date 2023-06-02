#include <stdio.h>
#include <stdlib.h>

//int *lerVetor(int n) 
//{
//    int *a = malloc(sizeof(int)*n);
//    if(a == NULL)
//    {
//        printf("Nao deu\n");
//        exit(-1);
//    }
//    for(int i = 0; i < n; i++)
//    {
//        int x;
//        if(!scanf("%d", &x))
//        { 
//            printf("Erro de leitura!");
//        }
//        a[i] = x;
//    }
//    return a;
//}
//
//int estaOrdenado(int a[], int n)
//{
//    for(int i = 0; i < n - 1; i++)
//    { 
//        if(a[i] > a[i+1])
//        {
//            return 0;
//        }
//    }
//    return 1;
//}
//
//void destruirVetor(int *a)
//{ 
//    free(a);
//}

void insertionSort(int vetorCopia[], int n)
{    
    int numerodeComparacoes = 0;
    int numerodeTrocas = 0;
    int *a = (int *) malloc(n*sizeof(int));    
    for(int i = 0; i < n; i++)
    {    
       a[i] = vetorCopia[i];
    }
    //printf("\nTESTE VETOR ");
    // for(int i = 0; i < n; i++)
    // {
        // printf("%d ", a[i]);
    // } 
    for(int i = 1; i < n; i++)
    { 
        int x = a[i];
        int j = i - 1;
        numerodeTrocas++;
        while(j >= 0 && a[j] > x)
        {   
            numerodeComparacoes++;    
            a[j + 1] = a[j];
            numerodeTrocas++;
            j--;     
        }
        if((a[j] <= x) && (j >= 0))
        {
            numerodeComparacoes++;    
        }            
        a[j + 1] = x;        
        numerodeTrocas++;            
    }    
    //printf("\n");
    //for(int i = 0; i < n; i++)
    //{
    //    printf("%d ", a[i]);
    //}     
    printf("I %d %d %d\n", n, numerodeTrocas, numerodeComparacoes);
    free(a);
}

//int main(int argc, char *argv[])
//{
//    int n;
//    if(!scanf("%d", &n))
//    { 
//        printf("Erro na leitura!");
//    }
//    int *a = lerVetor(n);
//    insertionSort(a, n);
//    if(estaOrdenado(a, n))
//    {
//        printf("esta ordenado\n");        
//    }
//    else
//    { 
//        printf("nao esta ordenado");
//    } 
//    destruirVetor(a);
//    exit(0);
//}