<script src="<?php echo $html->url('/debug_kit_shortcut/js/shortcut.js'); ?>" type="text/javascript"></script>
<script src="<?php echo $html->url('/debug_kit_shortcut/js/debug_kit_shortcut.js'); ?>" type="text/javascript"></script>
<div class="debug-info">
    <h2>Shortcut</h2>

    <?php echo $toolbar->makeNeatArray(array(
      'Shift+H' => __('Show History Panel', true),
      'Shift+S' => __('Show Session Panel', true),
      'Shift+R' => __('Show Request Panel', true),
      'Shift+Q' => __('Show Sql Panel', true),
      'Shift+T' => __('Show Timer Panel', true),
      'Shift+L' => __('Show Log Panel', true),
      'Shift+H' => __('Show History Panel', true),
      'Shift+V' => __('Show Valiables Panel', true),
      'Shift+P' => __('Maximize Panel', true),
      'Shift+M' => __('Minimize Panel', true),
      )); ?>

    <h2>shortcut.js</h2>
    <?php echo $toolbar->makeNeatArray(array(
      'Author' => 'Binny V A',
      'Version' => '2.01.B',
      'License' => 'BSD',
      'URL' => 'http://www.openjs.com/scripts/events/keyboard_shortcuts/'
      )); ?>       
</div>