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

void _mergeSort2V(int a[], int c1, int f1, int c2, int f2, int b[], int *numerodeComparacoes, int *numerodeTrocas)
{ 
    int i1 = c1;
    int i2 = c2;
    int j = 0;
    while(i1 <= f1 && i2 <= f2)
    {
        if(a[i1] <= a[i2])
        {
            (*numerodeComparacoes)++;
            b[j] = a[i1];
            (*numerodeTrocas)++;
            j++;
            i1++; 
        }
        else
        {
            (*numerodeComparacoes)++;
            b[j] = a[i2];
            (*numerodeTrocas)++;
            j++;
            i2++; 
        }
    }
    while(i1 <= f1)
    {
        b[j] = a[i1];
        (*numerodeTrocas)++;
        j++;
        i1++;
    }
    while(i2 <= f2)
    {
        b[j] = a[i2];
        (*numerodeTrocas)++;
        j++;
        i2++;
    }
    j = 0;
    for(int i = c1; i <= f2; i++, j++)
    { 
        a[i] = b[j];
        (*numerodeTrocas)++;
    }
}

void _mergeSort(int a[], int c, int f, int b[], int *numerodeComparacoes, int *numerodeTrocas)
{ 
    if(c >= f)
    { 
        return;
    }
    int m = (c + f) / 2;
    _mergeSort(a, c, m, b, numerodeComparacoes, numerodeTrocas);
    _mergeSort(a, m + 1, f, b, numerodeComparacoes, numerodeTrocas);
    _mergeSort2V(a, c, m, m + 1, f, b, numerodeComparacoes, numerodeTrocas);
    
}

void mergeSort(int a[], int n)
{
    int comparacoes = 0, *numerodeComparacoes;
    numerodeComparacoes = &comparacoes;    
    int Trocas = 0, *numerodeTrocas;
    numerodeTrocas = &Trocas;
    int *b = (int *) malloc(n*sizeof(int));
    if(b == NULL)
    { 
        printf("Erro na alocacao\n");
        exit(-1);
    }
    _mergeSort(a, 0, n - 1, b, numerodeComparacoes, numerodeTrocas);    
    printf("M %d %d %d\n", n, Trocas, comparacoes);
    free(b);
}

//int main(int argc, char *argv[])
//{
//    int n;
//    if(!scanf("%d", &n))
//    { 
//        printf("Erro na leitura!");
//    }
//    int *a = lerVetor(n);
//    mergeSort(a, n);
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


