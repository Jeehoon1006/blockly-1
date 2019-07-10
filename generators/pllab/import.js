Blockly.JavaScript['import'] = function(block, file) {
  //var value_library_name = Blockly.JavaScript.valueToCode(block, 'library_name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var text_library_name = block.getFieldValue('url_name');
  
 
  
  var code = '';
  
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }

  
   code += text_library_name;
  return code + '\n';
};