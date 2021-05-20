# make
glut: main.o hw-glut.o hw-glut-utils.o
	g++ -o main main.o hw-glut.o hw-glut-utils.o -framework OpenGL -framework GLUT -lGLEW
glfw: main.o hw-glfw.o glad.o
	g++ -o main main.o hw-glfw.o glad.o -lglfw3 -framework Cocoa -framework OpenGL -framework IOKit -L hw-glfw/glfw/lib -I hw-glfw/glfw/include

# main
main.o: main.c
	g++ -c main.c

# glut
hw-glut-utils.o: hw-glut/utils.c
	g++ -o hw-glut-utils.o -c hw-glut/utils.c
hw-glut.o: hw-glut/hw-glut.c
	g++ -o hw-glut.o -c hw-glut/hw-glut.c

# glfw
glad.o: hw-glfw/glad/glad.c
	g++ -o glad.o -c hw-glfw/glad/glad.c
hw-glfw.o: hw-glfw/hw-glfw.cpp
	g++ -o hw-glfw.o -c hw-glfw/hw-glfw.cpp

# clean
clean:
	rm ./*.o
	rm main