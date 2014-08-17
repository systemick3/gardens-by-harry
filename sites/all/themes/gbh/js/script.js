/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    $('.header__site-slogan').css('visibility', 'hidden');

    if ($('#block-views-gallery-block').length) {

      $('.views-row img').hover(function(event, context) {
        //$(this).css('opacity', '0.4');
        //$(this).parents('.views-row').children('.views-field-title').css('visibility', 'visible');
      });

      $('.views-row img').mouseout(function(event, context) {
        //$(this).css('opacity', '1');
        //$(this).parents('.views-row').children('.views-field-title').css('visibility', 'hidden');
      });

      // Prevent flickering when the cursor moves over the title field
      $('.views-row .views-field-title').hover(function(event, context) {
        $(this).css('visibility', 'visible');
        $(this).parents('.views-row').find('img').css('opacity', 0.4);
      });
    }

  }
};


})(jQuery, Drupal, this, this.document);
