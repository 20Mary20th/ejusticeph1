/**
  * Implements hook_menu()
  */

function my_module_menu() {
  var items = {};
  items['hello world'] = {
     title: 'DrupalGap Me',
     page_callback: 'my_module_hello_world_page'
  };
  
 return items;

}

function my_module_hello_world_page() {
   var content = {};
   content['my_button'] = {
    theme: 'button',
    text: 'Hello world',
    attributes: {
       onclick: "drupalgap_alert('Hi!')"
   }

   };
  return content;
}
