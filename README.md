
### 目录结构
e2e                                     // 根级的 e2e/ 文件夹中包含一组针对根应用的端到端测试的源文件，以及测试专属的配置文件。
|-app.e2e-spec 
|-app.po
|-tsconfig.e2e
src                                     // 根项目的源文件。
|-app                                   // 包含定义应用逻辑和数据的组件文件。
    |-components                        // 封装的组件文件。
    |-views                             // 页面文件。
    |-app.component.ts                  // 为应用的根组件定义逻辑，名为 AppComponent 。视图树的根。
    |-app.component.html                // 定义与根组件 AppComponent 关联的 HTML 模板。
    |-app.component.css                 // 为根组件 AppComponent 定义了基本的 CSS 样式表。
    |-app.component.spec.ts             // 为根组件 AppComponent 定义了一个单元测试。
    |-app.module.ts                     // 定义了名为 AppModule 的根模块，它会告诉 Angular 如何组装应用。添加更多组件时，必须在这里声明。
    |-app-routing.module.ts             // 路由配置文件。
|-assets                                // 包含要在构建应用时应该按原样复制的图像和其它静态资源文件。
|-environments                          // 包含特定目标环境的构建配置选项。默认情况下，有一个开发环境和一个生产环境。你还可以定义其它的环境。
|-favicon.ico                           // 用作该应用在标签栏中的图标。
|-index.html                            // 当有人访问你的站点时，提供服务的主要 HTML 页面。
|-main.ts                               // 应用的主要切入点。用 JIT 编译器编译应用，然后引导应用的根模块（AppModule）在浏览器中运行。
|-polyfills.ts                          // 为浏览器支持提供了腻子（polyfill）脚本。
|-styles.sass                           // 列出为项目提供样式的 CSS 文件。该扩展还反映了你为该项目配置的样式预处理器。
|-test.ts                               // 单元测试的主入口点，带有一些Angular特有的配置。你通常不需要编辑这个文件。
|-tsconfig.app.json                     // 应用专属的 TypeScript 配置，包括 TypeScript 和 Angular 模板编译器的选项。
|-tsconfig.spec.json                    // 应用测试的 TypeScript 配置。
angular.json                            // 为工作区中的所有项目指定 CLI 的默认配置，包括 CLI 要用到的构建、启动开发服务器和测试工具的配置项。
.gitignore                              // 指定 Git 应忽略的不必追踪的文件。
karma.conf.js                           // 库专属的 Karma 配置。
package-lock.json                       // 提供 npm 客户端安装到 node_modules 的所有软件包的版本信息。
package.json                            // 配置工作空间中所有项目可用的 npm包依赖 。
README.md                               // 根应用的介绍性文档。
tsconfig.json                           // 工作空间中各个项目的默认 TypeScript 配置。
tslint.json                             // 工作空间中各个项目的默认 TSLint 配置。
