<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
	<h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
	<div<?php if ($classes_array[$id]) {
		print ' class="' . $classes_array[$id] . '"';
	} ?>>
		<?php if (empty($rows)): ?>
			<p>По вашему запросу ничего не найдено</p>
		<?php else: ?>
			<?php print $row; ?>
		<?php endif; ?>
	</div>
<?php endforeach; ?>
