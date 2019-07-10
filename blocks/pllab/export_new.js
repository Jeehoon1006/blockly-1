Blockly.Blocks['export'] = {
  init: function() {
    this.appendValueInput("export_value")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("block"), "block_name")
        .appendField("Export");
    this.appendStatementInput("export_state")
        .setCheck(null);
    this.setInputsInline(false);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};