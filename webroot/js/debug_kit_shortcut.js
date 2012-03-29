shortcut.add("Shift+H",function() {
                 // Session
                 debugKitShortcut('history');
             },{
                 'type':'keydown',
                 'propagate':true,
                 'disable_in_input':true,
                 'target':document
             });
shortcut.add("Shift+S",function() {
                 // Session
                 debugKitShortcut('session');
             },{
                 'type':'keydown',
                 'propagate':true,
                 'disable_in_input':true,
                 'target':document
             });
shortcut.add("Shift+R",function() {
                 // Session
                 debugKitShortcut('request');
             },{
                 'type':'keydown',
                 'propagate':true,
                 'disable_in_input':true,
                 'target':document
             });
shortcut.add("Shift+Q",function() {
                 // Session
                 debugKitShortcut('sql_log');
             },{
                 'type':'keydown',
                 'propagate':true,
                 'disable_in_input':true,
                 'target':document
             });
shortcut.add("Shift+T",function() {
                 // Session
                 debugKitShortcut('timer');
             },{
                 'type':'keydown',
                 'propagate':true,
                 'disable_in_input':true,
                 'target':document
             });
shortcut.add("Shift+L",function() {
                 // Session
                 debugKitShortcut('log');
             },{
                 'type':'keydown',
                 'propagate':true,
                 'disable_in_input':true,
                 'target':document
             });
shortcut.add("Shift+V",function() {
                 // Session
                 debugKitShortcut('variables');
             },{
                 'type':'keydown',
                 'propagate':true,
                 'disable_in_input':true,
                 'target':document
             });

shortcut.add("T",function() {
                 debugKitToggle();
             },{
                 'type':'keydown',
                 'propagate':true,
                 'disable_in_input':true,
                 'target':document
             });

function debugKitShortcut(id) {
    var display = DEBUGKIT.Util.Cookie.read('toolbarDisplay');
    if (display == 'hide') {
        DEBUGKIT.toolbarToggle.toggleToolbar();
        if (!DEBUGKIT.toolbar.panels[id].active) {
            DEBUGKIT.toolbar.togglePanel(id);
        }
    } else {
        if (DEBUGKIT.toolbar.panels[id].active) {
            DEBUGKIT.toolbarToggle.toggleToolbar();
        } else {
            DEBUGKIT.toolbar.togglePanel(id);
        }
    }
}

function debugKitToggle() {
    for (id in DEBUGKIT.toolbar.panels) {
        if (DEBUGKIT.toolbar.panels[id].active) {
            var panel = DEBUGKIT.toolbar.panels[id];
            var element = panel.element.getElementsByClassName('panel-toggle')[0];
            var clickEvent = window.document.createEvent("MouseEvent");
            clickEvent.initEvent("click", false, true);
            element.dispatchEvent(clickEvent);
        }
    }
}