Blockly.Blocks['export'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Export");
    this.appendValueInput("export_value")
        .setCheck(null);
    this.appendStatementInput("export_state")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};