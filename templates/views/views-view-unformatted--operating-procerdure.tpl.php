<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
	<div class="b-title">
		<h2><?php print $title; ?></h2>
	</div>
<?php endif; ?>
<?php $cols = array_chunk ($rows, 3, TRUE); ?>
<?php foreach ($cols as $col): ?>
	<div class="row">
		<?php foreach ($col as $id => $row): ?>
				<div class="col-lg-4 col-md-4 col-sm-12">
					<?php print $row; ?>
				</div>
		<?php endforeach; ?>
	</div>
<?php endforeach; ?>

