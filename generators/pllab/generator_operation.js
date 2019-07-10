Blockly.JavaScript['my_operation'] = function(block) {
  var code = '';
	
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_my_operation = block.getFieldValue('my_operation');
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  code = value_name + dropdown_my_operation + "= " + value_number
  code = code + '\n'
  return code;
};


