Blockly.JavaScript['import'] = function(block, file) {
  //var value_library_name = Blockly.JavaScript.valueToCode(block, 'library_name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var text_url = block.getFieldValue('url_name');
  
 
  
  var code = '';

  
  console.log(text_url);

  
   code += text_url;
   
   getScript(text_url);
   console.log('okokok');
   
  return code + '\n';
};

function getScript(url) {
	
	var scripttag = document.createElement("script");
	scripttag.setAttribute("type", "text/javascript");
	scripttag.setAttribute("src",url);
	document.getElementsByTagName("head")[0].appendChild(scripttag);
		
}	