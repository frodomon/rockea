<?php //Template Name: Columna Izq Page
get_header();  ?>
<section id="fullimage" class="group">
	<div style="width:40%; margin:15% 10% 0 50%; height:70%; background-color:rgba(0,0,0,0.8);">
		<div class="post group">
			<?php 
				dohko_post_title();
				the_content();
		  ?>
		</div>
	</div>
</section>
<?php get_footer(); ?>