#include "hw-glfw.h"

/**
 * Main Progress
 */
int runHW(int argc, char **argv)
{
    /* 初始化GLFW */
    glfwInit();
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
    glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);

    /* 创建一个窗口 */
    GLFWwindow *window = glfwCreateWindow(800, 600, "HaHaHa", NULL, NULL);
    if (window == NULL)
    {
        std::cout << "Failed to create GLFW window" << std::endl;
        glfwTerminate();
        return -1;
    }
    glfwMakeContextCurrent(window);

    /* 初始化GLAD */
    if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
    {
        std::cout << "Failed to initialize GLAD" << std::endl;
        return -1;
    }

    /* 视口大小 */
    glViewport(0, 0, 800, 600);
    // 用户拖拽改变窗口大小时的回调
    glfwSetFramebufferSizeCallback(window, framebuffer_size_callback);

    /* Render Loop */
    while (!glfwWindowShouldClose(window)) // 检查GLFW是否被要求退出
    {
        processInput(window); 
        glfwSwapBuffers(window); // 交换颜色缓冲
        glfwPollEvents(); // 检查有没有触发什么事件
    }

    /* 释放/删除之前的分配的所有资源 */
    glfwTerminate();
    return 0;
}

void framebuffer_size_callback(GLFWwindow *window, int width, int height)
{
    glViewport(0, 0, width, height);
}

void processInput(GLFWwindow *window)
{
    if(glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
        glfwSetWindowShouldClose(window, true);
}
