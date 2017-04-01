<header class="header">
	<div class="container">
		<div class="header-content">
			<div class="logo">
				<a href="/" title="Главная">Зоофеникс</a>
				<span class="clarification">Служба кремации домашних животных</span>
			</div>
			<nav class="nav">
				<a href="#" id="hamburger" title="Меню">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32"
					     height="32" viewBox="0 0 32 32">
						<path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
					</svg>
				</a>
				<?php
				$menu = menu_tree ('main-menu');
				echo render ($menu);
				?>
				<div class="search">
					<div class="search_button" title="Поиск">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
							<path
								d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
						</svg>
					</div>
					<div class="search_form" style="display: none;">
						<?php
						$block = module_invoke ('views', 'block_view', 'search_result-block');
						echo render ($block['content']);
						?>
					</div>
				</div>
			</nav>
			<div class="phone">
				<a href="tel:+7(4212)645-745" title="Позвонить">
					+7 (4212) <b>645-745</b>
				</a> /
				<a href="tel:8(909)825-57-45" title="Позвонить">
					8 (909) <b>825-57-45</b>
				</a>
			</div>
		</div>
	</div>
</header>
<main class="content">
	<div class="container">
		<?php print $messages; ?>
		<div class="page-title">
			<h1 class="title_block title_block-center"><?php print $title; ?></h1>
		</div>
		<?php print render ($page['content']); ?>
	</div>
</main>
<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<nav>
				<?php
				$menu = menu_tree ('main-menu');
				echo render ($menu);
				?>
			</nav>
			<div class="phone">
				<a href="tel:+7(4212)645-745" title="Позвонить">
					+7 (4212) <b>645-745</b>
				</a> /
				<a href="tel:8(909)825-57-45" title="Позвонить">
					8 (909) <b>825-57-45</b>
				</a>
			</div>
		</div>
	</div>
</footer>