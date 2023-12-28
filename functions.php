<?php
/**
 * Theme functions and definitions.
 *
 * For additional information on potential customization options,
 * read the developers' documentation:
 *
 * https://developers.elementor.com/docs/hello-elementor-theme/
 *
 * @package HelloElementorChild
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'HELLO_ELEMENTOR_CHILD_VERSION', '2.0.0' );

/**
 * Load child theme scripts & styles.
 *
 * @return void
 */
function hello_elementor_child_scripts_styles() {

	wp_enqueue_style(
		'hello-elementor-child-style',
		get_stylesheet_directory_uri() . '/style.css',
		[
			'hello-elementor-theme-style',
		],
		HELLO_ELEMENTOR_CHILD_VERSION
	);

}
add_action( 'wp_enqueue_scripts', 'hello_elementor_child_scripts_styles', 20 );


/* footer shortcode style */
add_action('wp_head', function () { ?>
  <style>
    #US-footer-default {
      width: 100%;
      background: white;
      border-top: 1px solid #E2E8F3;
      padding: 20px 0;
    }
    #US-footer-default .US-footer-container {
      width: 100%;
      max-width: 1140px;
      margin: 0 auto;
      display: flex;
      align-content: center;
      justify-content: space-between;
    }
    #US-footer-default .US-footer-container p {
      font-size: 12px;
      font-weight: 300;
    }
    #US-footer-default .US-footer-container p strong{
      font-weight: 900;
    }
  </style>
<?php });
/* end:footer shortcode style */

/* footer shortcode */
function US_footer_default()
{
  ob_start();
?>
<div id="US-footer-default">
  <div class="US-footer-container">
    <p><?= date("Y"); ?> <?= __('Todos os direitos reservados', 'US-footer-default'); ?></p>
    <p><a href="https://upsites.digital/?origin=<?= get_bloginfo( 'name' ) ?>" target="_blank"><?= __('Criação de Sites por', 'US-footer-default'); ?><strong> UPSITES </strong></a></p>
  </div>
</div>
<?php
  return ob_get_clean();
}
add_shortcode('US_footer_default', 'US_footer_default');
/* end:footer shortcode */

function US_customizer_add_colorPicker( $wp_customize){
    
  // Add New Section: footer Colors
  $wp_customize->add_section( 'US_footer_color_section', array(
    'title' => 'Footer Color',
    'description' => 'Set Color For footer',
    'priority' => '40'
  ));
  
  // Add Settings
  $wp_customize->add_setting( 'US_footer_color', array(
    'default' => '#000000',
  ));
  $wp_customize->add_setting( 'US_footer_color_link', array(
    'default' => '#000000',
  ));
  $wp_customize->add_setting( 'US_footer_color_hover', array(
    'default' => '#FF0000',
  ));
  
  // Add Controls
  $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'US_footer_color', array(
    'label' => 'Choose Color Paragraph',
    'section' => 'US_footer_color_section',
    'settings' => 'US_footer_color'
  ))); 
  $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'US_footer_color_link', array(
    'label' => 'Choose Color Link',
    'section' => 'US_footer_color_section',
    'settings' => 'US_footer_color_link'
  )));  
  $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'US_footer_color_hover', array(
    'label' => 'Choose Color Hover',
    'section' => 'US_footer_color_section',
    'settings' => 'US_footer_color_hover'
  )));  
}

add_action( 'customize_register', 'US_customizer_add_colorPicker' );
// displays custom footer color
function US_generate_theme_option_css() {
    
  $pColor = get_theme_mod( 'US_footer_color' );
  $lColor = get_theme_mod( 'US_footer_color_link' );
  $hColor = get_theme_mod( 'US_footer_color_hover' );
  
  if ( ! empty( $pColor ) ):
      
      ?>
      <style type="text/css" id="diwp-theme-option-css">
          #US-footer-default .US-footer-container p {
            color: <?php echo esc_html($pColor); ?>
          }
          #US-footer-default .US-footer-container a {
            color: <?php echo esc_html($lColor); ?>
          }
          #US-footer-default .US-footer-container a:hover {
            color: <?php echo esc_html($hColor); ?>
          }
      
      </style>
  
  <?php
  
  endif;
}

add_action( 'wp_head', 'US_generate_theme_option_css' );

/* footer shortcode script */
add_action('wp_footer', function () { ?>
<?php });
/* end:footer shortcode script */