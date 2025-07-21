# UEditor Plus [![star](https://gitee.com/mo3408/ueditorplus/badge/star.svg)](https://gitee.com/mo3408/ueditorplus) [![star](https://img.shields.io/github/stars/mo3408/ueditorplus.svg)](https://github.com/mo3408/ueditorplus)  



🌈🌈🌈祝开发者2025即将到来的国庆及中秋节快乐！UEditorPlus 是基于 UEditor 二次开发的富文本编辑器，让 UEditor 焕然一新,已集成秀米、135编辑器，会不定时更新！！！

![输入图片说明](%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20241116195402.png)
![输入图片说明](%E6%88%AA%E5%9B%BE20250418201117829.png)

> `/dist/` 和 `/dist-min/` 目录分别为构建的非压缩和压缩版代码，可直接使用

## 飞书群：

![输入图片说明](wechat_2025-07-21_134944_790.png)

## 联系方式 (进群请添加vx,请备注来源)
![输入图片说明](_examples/image.png)

## 功能亮点

- 支持文档一键导入，支持Word文档（docx）、Markdown文档（md）文档
- 全新的UI外观，使用字体图标替换原有图片图标
- 移除过时、无用的插件支持，不断完善使用体验
- 图片、文件、视频上传配置化定制增强
- 演示界面重构，右上角可直接查看当前演示界面代码
- 兼容现有UEditor，实现无缝切换

## 使用教程

### 原生使用

```html

<script id="editor" type="text/plain" style="height:300px;"></script>
<script type="text/javascript" src="/path/to/UEditorPlus/ueditor.config.js"></script>
<script type="text/javascript" src="/path/to/UEditorPlus/ueditor.all.js"></script>
<script>
    var ue = UE.getEditor('editor', {
        // ... 更多配置
    });
</script>
```
### vue2 使用
```
npm i --save vue-ueditor-wrap@2.x
# 或
yarn add --save vue-ueditor-wrap@2.x
```
解压 UEditorPlus 到静态资源目录

复制 dist-min 到项目 public/static/UEditorPlus/ 目录
引入组件并使用

```html

<template>
    <div>
        <vue-ueditor-wrap v-model="content" editor-id="editor" :config="editorConfig" :editorDependencies="['ueditor.config.js','ueditor.all.js']" style="height:500px;"/>
    </div>
</template>
<script>
    import VueUeditorWrap from 'vue-ueditor-wrap'
    export default {
        components: {
            VueUeditorWrap
        },
        data() {
            return {
                content: '<p>Hello UEditorPlus</p>',
                editorConfig: {
                    // 后端服务地址，后端处理参考
                    serverUrl: '/api/path/to/server',
                    UEDITOR_HOME_URL: '/static/UEditorPlus/',
                    UEDITOR_CORS_URL: '/static/UEditorPlus/',
                }
            }
        }
    }
</script>
```
### vue3 使用

① 安装插件支持

```shell
npm i --save vue-ueditor-wrap@3.x
# 或
yarn add --save vue-ueditor-wrap@3.x
```
② 解压 UEditorPlus 到静态资源目录

复制 `dist-min` 到项目 `public/static/UEditorPlus/` 目录

③ 引入组件并使用

**main.js**

```javascript
import {createApp} from 'vue'
import App from './App.vue'
import VueUeditorWrap from 'vue-ueditor-wrap';

createApp(App).use(VueUeditorWrap).mount('#app')
```

**App.vue**

```html

<template>
    <div>
        <vue-ueditor-wrap v-model="content"
                          editor-id="editor"
                          :config="editorConfig"
                          :editorDependencies="['ueditor.config.js','ueditor.all.js']"
                          style="height:500px;"/>
    </div>
</template>

<script setup>
    import {ref} from 'vue';

    const content = ref('<p>Hello UEditorPlus</p>');
    const editorConfig = {
        // 后端服务地址，后端处理参考
        // https://open-doc.modstart.com/ueditor-plus/backend.html
        serverUrl: '/api/path/to/server',
        UEDITOR_HOME_URL: '/static/UEditorPlus/',
        UEDITOR_CORS_URL: '/static/UEditorPlus/',
    }
</script>
```

### react 使用

① 安装插件支持

```shell
npm i --save react-ueditor-wrap
# 或
yarn add --save react-ueditor-wrap
```

② 解压 UEditorPlus 到静态资源目录

复制 `dist-min` 到项目 `public/static/UEditorPlus/` 目录

③ 引入组件并使用

```jsx
import RcUeditor from 'react-ueditor-wrap';

function App() {
    const hanldeChage = (value) => {
        console.log('RcUeditor', value);
    }
    return (
        <div className="App">
            <div style={{margin: '0 auto', maxWidth: '800px'}}>
                <RcUeditor
                    value={'<p>Hello UEditorPlus</p>'}
                    ueditorUrl={'/static/UEditorPlus/ueditor.all.js'}
                    ueditorConfigUrl={'/static/UEditorPlus/ueditor.config.js'}
                    editorConfig={{
                        // 后端服务地址，后端处理参考
                        // https://open-doc.modstart.com/ueditor-plus/backend.html
                        initialFrameWidth: '100%',
                        serverUrl: '/api/path/to/server',
                        UEDITOR_HOME_URL: '/static/UEditorPlus/',
                        UEDITOR_CORS_URL: '/static/UEditorPlus/',
                    }}
                    onChange={hanldeChage}/>
            </div>
        </div>
    );
}

export default App;
```

## 二次开发

### 第一步，clone代码到本地

```shell
git clone https://gitee.com/mo3408/ueditorplus

或

git clone https://gitcode.com/mo3408/ueditorplus.git
```

### 第二步，开始功能开发

使用浏览器打开 `dist或者dist-min/index.html` 页面相关内容，完成功能开发


## 更新日志
- 2025-04-18：
- 新增：AI功能，支持富文本续写、内容优化、内容生成等功能
- 新增：toolbarShows 选项配置，支持动态配置工具栏显示
- 新增：shortcutMenuShows 选项配置，支持动态配置快捷菜单显示
- 新增：AI接口对接，支持 OpenAi、DeepSeek 模型对接
- 优化：编辑器弹窗界面显示和颜色优化
- 2025-02-20：
- 已知问题修复，表格自适应，全屏编辑优化
- 修复：编辑器全屏编辑特定情况下异常问题
- 修复：通过url添加某些视频，按backspace无法删除视频，示例100%复现
- 优化：移除无用的代码配置
- 2024-12-17：
- 上传gif图片格式后，原图动画被取消，默认禁用gif图片压缩
- 优化：图标样式大小统一调整优化，避免部分图标显示大小不统一
- 2024-11-16 增加代码脑图功能，可在编辑器中插入代码脑图
- 2024-11-14 已增加秀米编辑器可同步微信公众号文章（第三方平台请参考平台）
- 2024-10-01 已增加135编辑器可同步微信公众号文章（第三方平台请参考平台）
- 2024-09-29 已增加图片、文件、视频上传配置化定制增强
- 2024-09-28 已增加文档一键导入，支持Word文档（docx）、Markdown文档（md）文档
- 2024-09-27 已增加全新的UI外观，使用字体图标替换原有图片图标

## 开源协议

- Apache 2.0
