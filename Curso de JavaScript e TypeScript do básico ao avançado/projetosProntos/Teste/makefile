NAME=A2
UTIL=insertion.c
UTIL2=merge.c
MAIN=main.c
BINARY=executavel
T-INPUT=94.in
T-OUTPUT=94.out
S-OUTPUT= out.out
CC = gcc
CCD = gcc -DDEBUG -Wall
CFLAGS = -O3 -march=native -Wall -Wextra -g
LDFLAGS = -lm
VAL = valgrind --tool=memcheck --leak-check=full  --track-origins=yes --show-leak-kinds=all --show-reachable=yes
diff = && diff
CRF=$
CRFi=((n * 10))
n = 100

all:
	 $(CC) $(CFLAGS) $(UTIL) $(UTIL2) $(MAIN) -o $(BINARY) $(LDFLAGS)

run:
	 ./$(BINARY)

debug:
	 $(CCD) $(MAIN) $(UTIL) -o $(BINARY)

valgrind:
	 $(VAL) ./$(BINARY)

clean:
	 @rm *.o

input:
	 ./$(BINARY) < $(T-INPUT)

test:
	 ./$(BINARY) < $(T-INPUT) > $(S-OUTPUT) $(diff) $(S-OUTPUT) $(T-OUTPUT)

test-out:
	 ./$(BINARY) < $(T-INPUT) > $(S-OUTPUT)

zip:
	 @zip -r $(NAME).zip * 

c-random-file:
	$(n) ; (echo $(CRF)n ; seq 1 $(CRF)$(CRFi) | shuf | head -$(CRF)n | cat) > in-$(CRF)n.txt

c-sorted-file:
	$(n) ; (echo $(CRF)n ; seq 1 $(CRF)$(CRFi) | shuf | head -$(CRF)n | sort -n) > in-$(CRF)n.txt

 #"cat -e -t -v  makefile" - Identifica problemas com makefile
 #CFLAGS adicionais -Werror
