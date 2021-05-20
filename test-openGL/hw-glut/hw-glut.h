// hw-glut.h
#include <stdio.h>
#include <GL/glew.h>
#ifdef __APPLE__
#  include <GLUT/glut.h>
#else
#  include <GL/glut.h>
#endif

#include "utils.h"
#include "../static.h"


static struct {
    /* fields for buffer and texture objects */
    GLuint vertex_buffer, element_buffer;
    GLuint textures[2];

    /* fields for shader objects ... */
    GLuint vertex_shader, fragment_shader, program;
    
    struct {
        GLint fade_factor;
        GLint textures[2];
    } uniforms;

    struct {
        GLint position;
    } attributes;

    GLfloat fade_factor;
} g_resources;


// 生成buffer（缓冲）
static GLuint make_buffer(
    GLenum target,
    const void *buffer_data,
    GLsizei buffer_size
);
// 生成texture（纹理）
static GLuint make_texture(const char *filename);
// 生成shader(着色器)
static GLuint make_shader(GLenum type, const char *filename);
// 用于GLSL编译/链接错误时输出错误信息
static void show_info_log(
    GLuint object,
    PFNGLGETSHADERIVPROC glGet__iv,
    PFNGLGETSHADERINFOLOGPROC glGet__InfoLog
);
// 生成program object
static GLuint make_program(GLuint vertex_shader, GLuint fragment_shader);

int runHW(int argc, char** argv);
static int make_resources(void);
static void update_fade_factor(void);
static void render(void);

