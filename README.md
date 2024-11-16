# UEditor Plus

基于 UEditor 二次开发的富文本编辑器，让UEditor重新焕发活力

![输入图片说明](%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20241116195402.png)

> `/dist/` 和 `/dist-min/` 目录分别为构建的非压缩和压缩版代码，可直接使用

## 功能亮点

- 支持文档一键导入，支持Word文档（docx）、Markdown文档（md）文档
- 全新的UI外观，使用字体图标替换原有图片图标
- 移除过时、无用的插件支持，不断完善使用体验
- 图片、文件、视频上传配置化定制增强
- 演示界面重构，右上角可直接查看当前演示界面代码
- 兼容现有UEditor，实现无缝切换
- Vue版本暂定中

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

## 二次开发

### 第一步，clone代码到本地

```shell
git clone https://gitee.com/mo3408/ueditorplus
```

### 第二步，开始功能开发

使用浏览器打开 `dist或者dist-min/index.html` 页面相关内容，完成功能开发

## UEditor相关链接

- UEditor 官网：[http://ueditor.baidu.com](http://ueditor.baidu.com)
- UEditor API 文档：[http://ueditor.baidu.com/doc](http://ueditor.baidu.com/doc)
- UEditor 文档：[http://fex.baidu.com/ueditor/](http://fex.baidu.com/ueditor/)
- UEditor API 文档：[http://ueditor.baidu.com/doc](http://ueditor.baidu.com/doc)
- UEditorplus第三方链接：[https://gitee.com/modstart-lib/ueditor-plus](https://gitee.com/modstart-lib/ueditor-plus)

## 更新日志
- 2024-11-16 增加代码脑图功能，可在编辑器中插入代码脑图
- 2024-11-14 已增加秀米编辑器可同步微信公众号文章（第三方平台请参考平台）
- 2024-10-01 已增加135编辑器可同步微信公众号文章（第三方平台请参考平台）
- 2024-09-29 已增加图片、文件、视频上传配置化定制增强
- 2024-09-28 已增加文档一键导入，支持Word文档（docx）、Markdown文档（md）文档
- 2024-09-27 已增加全新的UI外观，使用字体图标替换原有图片图标

## 开源协议

- Apache 2.0
