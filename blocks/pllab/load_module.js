Blockly.Blocks['load_module'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("module")
        .appendField(new Blockly.FieldTextInput("name"), "module_name");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};