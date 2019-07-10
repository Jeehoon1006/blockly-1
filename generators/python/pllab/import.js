Blockly.Python['import'] = function(block) {
  var text_library_name = block.getFieldValue('url_name');
  // TODO: Assemble Python into code variable.
  var code = '';
  
  code += 'import ' + text_library_name; 
  
  console.log(code);
  
  return code+'\n';
};