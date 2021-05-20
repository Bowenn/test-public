# make
glut: main.o hw-glut.o hw-glut-utils.o
	gcc -o main main.o hw-glut.o hw-glut-utils.o -framework OpenGL -framework GLUT -lGLEW
glfw: main.o hw-glfw.o glad.o
	gcc -o main main.o hw-glfw.o glad.o -lglfw -framework Cocoa -framework OpenGL -framework IOKit

# main
main.o: main.c
	gcc -c main.c

# glut
hw-glut-utils.o: hw-glut/utils.c
	gcc -o hw-glut-utils.o -c hw-glut/utils.c
hw-glut.o: hw-glut/hw-glut.c
	gcc -o hw-glut.o -c hw-glut/hw-glut.c

# glfw
glad.o: hw-glfw/glad/glad.c
	gcc -o glad.o -c hw-glfw/glad/glad.c
hw-glfw.o: hw-glfw/hw-glfw.cpp
	gcc -o hw-glfw.o -c hw-glfw/hw-glfw.cpp

# clean
clean:
	rm ./*.o
	rm main