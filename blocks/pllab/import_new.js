Blockly.Blocks['import_new'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Import");
    this.appendDummyInput()
        .appendField("File")
        .appendField(new Blockly.FieldTextInput("URL"), "file_value");
    this.appendDummyInput()
        .appendField("block")
        .appendField(new Blockly.FieldTextInput("block name"), "block_value");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};