// hw-glut.c
#include "hw-glut.h"

static const GLfloat g_vertex_buffer_data[] = { 
    -1.0f, -1.0f,
     1.0f, -1.0f,
    -1.0f,  1.0f,
     1.0f,  1.0f
};
static const GLushort g_element_buffer_data[] = { 0, 1, 2, 3 };

/**
 * Main Progress
 */
int runHW(int argc, char** argv)
{
    /* GLUT init */
    glutInit(&argc, argv);

    /* buffer */
    // GLUT_DOUBLE指提供两个color buffer
    glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE);

    /* window */
    glutInitWindowSize(800, 600);
    glutCreateWindow("Hello World");

    /* callback */
    // 渲染图像
    glutDisplayFunc(&render);  // render our image when the window needs displaying
    // 更新两个图像（当前帧与下一帧）的淡入淡出
    glutIdleFunc(&update_fade_factor);  // update the fade factor between the two images over time

    /* GLEW init */
    glewInit();
    if (!GLEW_VERSION_2_0) {
        fprintf(stderr, "OpenGL 2.0 not available\n");
        return 1;
    }

    if (!make_resources()) {
        fprintf(stderr, "Failed to load resources\n");
        return 1;
    }

    /* display the window, start receiving UI events and invoke the callbacks  */
    glutMainLoop();

    /* never get reached */
    return 0;
}

// buffer
static GLuint make_buffer(
    GLenum target,
    const void *buffer_data,
    GLsizei buffer_size
)
{
    /* generate buffer */
    GLuint buffer;
    glGenBuffers(1, &buffer);
    glBindBuffer(target, buffer);
    glBufferData(target, buffer_size, buffer_data, GL_STATIC_DRAW);  // GL_STATIC_DRAW: usage hint 当前是静态图片所以使用STATIC

    return buffer;
}

// texture 纹理
static GLuint make_texture(const char *filename)
{
    GLuint texture;
    int width, height;

    /* 读取文件图像信息 */
    // TGA格式
    // stored as a flat, packed, uncompressed array of three-byte RGB pixels (actually stored in BGR order)
    // with the pixels ordered starting from the bottom left of the image and working rightward and upward
    void *pixels = read_tga(filename, &width, &height);
    if (!pixels)
        return 0;

    /* generate texture */
    glGenTextures(1, &texture);
    glBindTexture(GL_TEXTURE_2D, texture);

    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S,     GL_CLAMP_TO_EDGE);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T,     GL_CLAMP_TO_EDGE);

    /* allocating textures */
    glTexImage2D(
        GL_TEXTURE_2D, 0,           /* target, level of detail */
        GL_RGB8,                    /* internal format */
        width, height, 0,           /* width, height, border */
        GL_BGR, GL_UNSIGNED_BYTE,   /* external format, type */
        pixels                      /* pixels */
    );
    free(pixels);
    return texture;
}

static void show_info_log(
    GLuint object,
    PFNGLGETSHADERIVPROC glGet__iv,
    PFNGLGETSHADERINFOLOGPROC glGet__InfoLog
)
{
    GLint log_length;
    char *log;

    /* 输出错误信息 */
    glGet__iv(object, GL_INFO_LOG_LENGTH, &log_length);
    log = malloc(log_length);
    glGet__InfoLog(object, log_length, NULL, log);
    fprintf(stderr, "%s", log);
    free(log);
}

static GLuint make_shader(GLenum type, const char *filename)
{
    GLint length;
    GLchar *source = file_contents(filename, &length); // 着色器代码
    GLuint shader;
    GLint shader_ok;

    if (!source)
        return 0;

    /* 编译GLSL着色器代码获取着色器 */
    shader = glCreateShader(type);
    glShaderSource(shader, 1, (const GLchar**)&source, &length);
    free(source);
    glCompileShader(shader);

    /* 检查编译是否成功，若失败则输出错误信息 */
    glGetShaderiv(shader, GL_COMPILE_STATUS, &shader_ok);
    if (!shader_ok) {
        fprintf(stderr, "Failed to compile %s:\n", filename);
        show_info_log(shader, glGetShaderiv, glGetShaderInfoLog);
        glDeleteShader(shader);
        return 0;
    }
    return shader;
}

static GLuint make_program(GLuint vertex_shader, GLuint fragment_shader)
{
    GLint program_ok;

    /* create, attach and link program */
    // If shader objects are the object files of the GLSL build process,
    // then program objects are the finished executables.
    GLuint program = glCreateProgram();
    glAttachShader(program, vertex_shader);
    glAttachShader(program, fragment_shader);
    glLinkProgram(program);

    /* 检查链接是否成功，若失败则输出错误信息 */
    glGetProgramiv(program, GL_LINK_STATUS, &program_ok);
    if (!program_ok) {
        fprintf(stderr, "Failed to link shader program:\n");
        show_info_log(program, glGetProgramiv, glGetProgramInfoLog);
        glDeleteProgram(program);
        return 0;
    }
    return program;
}

static int make_resources(void)
{
    /* make buffers */
    // 顶点buffer
    g_resources.vertex_buffer = make_buffer(
        GL_ARRAY_BUFFER,
        g_vertex_buffer_data,
        sizeof(g_vertex_buffer_data)
    );
    // 元素buffer
    g_resources.element_buffer = make_buffer(
        GL_ELEMENT_ARRAY_BUFFER,
        g_element_buffer_data,
        sizeof(g_element_buffer_data)
    );

    /* make textures */
    g_resources.textures[0] = make_texture(FILE_hello1);
    g_resources.textures[1] = make_texture(FILE_hello2);

    if (g_resources.textures[0] == 0 || g_resources.textures[1] == 0)
        return 0;
    
    /* make shaders */
    g_resources.vertex_shader = make_shader(
        GL_VERTEX_SHADER,
        FILE_glsl_v
    );
    if (g_resources.vertex_shader == 0)
        return 0;

    g_resources.fragment_shader = make_shader(
        GL_FRAGMENT_SHADER,
        FILE_glsl_f
    );
    if (g_resources.fragment_shader == 0)
        return 0;

    /* make program */
    g_resources.program = make_program(
        g_resources.vertex_shader,
        g_resources.fragment_shader
    );
    if (g_resources.program == 0)
        return 0;

    /* Looking up shader variable locations */
    g_resources.uniforms.fade_factor
        = glGetUniformLocation(g_resources.program, "fade_factor");
    g_resources.uniforms.textures[0]
        = glGetUniformLocation(g_resources.program, "textures[0]");
    g_resources.uniforms.textures[1]
        = glGetUniformLocation(g_resources.program, "textures[1]");

    g_resources.attributes.position
        = glGetAttribLocation(g_resources.program, "position");

    return 1;
}

static void update_fade_factor(void)
{
    /* Animating the scene */
    int milliseconds = glutGet(GLUT_ELAPSED_TIME);
    g_resources.fade_factor = sinf((float)milliseconds * 0.001f) * 0.5f + 0.5f;
    glutPostRedisplay();
}

static void render(void)
{
    // glClearColor(1.0f, 1.0f, 1.0f, 1.0f);
    // glClear(GL_COLOR_BUFFER_BIT);
    // glutSwapBuffers();

    /* Activating the shader program and assigning uniforms */
    // begin by activating our shader program
    glUseProgram(g_resources.program);

    // each member corresponding to a possible type for a uniform variable in a GLSL program
    glUniform1f(g_resources.uniforms.fade_factor, g_resources.fade_factor);

    // Assigning textures to samplers
    glActiveTexture(GL_TEXTURE0);
    glBindTexture(GL_TEXTURE_2D, g_resources.textures[0]);
    glUniform1i(g_resources.uniforms.textures[0], 0);

    glActiveTexture(GL_TEXTURE1);
    glBindTexture(GL_TEXTURE_2D, g_resources.textures[1]);
    glUniform1i(g_resources.uniforms.textures[1], 1);

    /* Setting up the vertex array */
    glBindBuffer(GL_ARRAY_BUFFER, g_resources.vertex_buffer);
    glVertexAttribPointer(
        g_resources.attributes.position,  /* attribute */
        2,                                /* size */
        GL_FLOAT,                         /* type */
        GL_FALSE,                         /* normalized? */
        sizeof(GLfloat)*2,                /* stride */
        (void*)0                          /* array buffer offset */
    );
    glEnableVertexAttribArray(g_resources.attributes.position);

    /* Submitting the rendering job */
    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, g_resources.element_buffer);
    glDrawElements(
        GL_TRIANGLE_STRIP,  /* mode */
        4,                  /* count */
        GL_UNSIGNED_SHORT,  /* type */
        (void*)0            /* element array buffer offset */
    );

    /* Cleaning up after ourselves */
    glDisableVertexAttribArray(g_resources.attributes.position);
    
    /* Displaying our finished scene */
    glutSwapBuffers();
}