Blockly.JavaScript['export'] = function(block) {
  var text_block_name = block.getFieldValue('block_name');
  var value_export_value = Blockly.JavaScript.valueToExportCode(block, 'export_value', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_export_state = Blockly.JavaScript.statementToExportCode(block, 'export_state');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  
  code += value_export_value + statements_export_state;
  
  
  return code + '\n';
};

Blockly.Python['export'] = function(block) {
  var text_block_name = block.getFieldValue('block_name');
  var value_export_value = Blockly.Python.valueToExportCode(block, 'export_value', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_export_state = Blockly.Python.statementToExportCode(block, 'export_state');
  // TODO: Assemble Python into code variable.
  var code = '';
  
  code += value_export_value + statements_export_state;
  
  
  return code + '\n';
};