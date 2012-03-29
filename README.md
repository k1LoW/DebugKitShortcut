# DebugKit Shortcut Panel

Set shortcut for DebugKit

## Install

First, Install 'DebugKitShortcut' by [recipe.php](https://github.com/k1LoW/recipe) , and set `CakePlugin::load('DebugKitShortcut')`;
Second, add the following code in AppController.php.

    <?php
       class AppController extends Controller {
           var $components = array('DebugKit.Toolbar' => array('panels' => array('DebugKitShortcut.shortcut')));
       }

## License
MIT License
