<?php

function bus_preprocess_page(&$variables)
{
	$variables['path_to_theme'] = '/' . path_to_theme();
}

function zoophoenix_preprocess_node(&$variables){
	if(!$variables['teaser']) {
		foreach (array('filter') as $region) {
			$variables[$region] = theme('blocks', $region);
		}
	}
}