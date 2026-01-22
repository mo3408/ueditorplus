(function () {
// 集成135编辑器
	UE.registerUI('135editor', function(editor, uiName) {
	    // var dialog = new UE.ui.Dialog({
	    //     iframeUrl: editor.options.UEDITOR_HOME_URL+'dialogs/135editor/135EditorDialogPage.html',
	    //     cssRules:"width:"+ parseInt(document.body.clientWidth*0.9) +"px;height:"+(window.innerHeight -50)+"px;",
	    //     editor:editor,
	    //     name:uiName,
	    //     title:"135编辑器"
	    // });
	    // dialog.fullscreen = false;
	    // dialog.draggable = false;
	
	    var editor135;
	    function onContentFrom135(event) {
	        if (typeof event.data !== 'string') {
	            if (event.data.ready) {
	                editor135.postMessage(editor.getContent(), '*');
	            }
	            return;
	        }
	        ;
	        if (event.data.indexOf('<') !== 0)
	            return;
	
	        editor.setContent(event.data);
	        editor.fireEvent("catchRemoteImage");
	        window.removeEventListener('message', onContentFrom135);
	    }
	
	    var btn = new UE.ui.Button({
	        name: 'btn-dialog-' + uiName,
	        className: 'edui-for-135editor',
	        title: '135编辑器',
	        onclick: function() {
	            // dialog.render();
	            // dialog.open();
	
	            // 由于内嵌iframe登录存在跨域问题，禁用了cookie, 使用window.open方式调用135编辑器
	            editor135 = window.open('https://www.135editor.com/beautify_editor.html?callback=true&appkey=', '135editor', 'height=' + (window.screen.availHeight - 100) + ',width=' + (window.screen.availWidth - 100) + ',top=50,left=50,help=no,resizable=no,status=no,scroll=no')
	
	            window.removeEventListener('message', onContentFrom135);
	            window.addEventListener('message', onContentFrom135, false);
	        }
	    });
	    return btn;
	}, undefined);
	UE.registerUI('dialog', function (editor, uiName) {
	    var btn = new UE.ui.Button({
	        name   : 'xiumi-connect',
	        title  : '秀米',
	        onclick: function () {
	            var dialog = new UE.ui.Dialog({
	                iframeUrl: 'https://ent.xiumius.cn/ue/xiumi-ue-dialog-v5.html',
	                editor   : editor,
	                name     : 'xiumi-connect',
	                title    : "秀米图文消息助手",
	                cssRules : "width: " + (window.innerWidth - 60) + "px;" + "height: " + (window.innerHeight - 60) + "px;",
	            });
	            dialog.render();
	            dialog.open();
	        }
	    });
	
	    return btn;
	});
})();
