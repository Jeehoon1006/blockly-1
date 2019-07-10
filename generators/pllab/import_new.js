Blockly.JavaScript['import_new'] = function(block) {
  var text_file_value = block.getFieldValue('file_value');
  var text_block_value = block.getFieldValue('block_value');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  
  
//  readTextFile("file:///C:/Users/내가_읽을_파일_경로/js/functions.js"); 

  console.log("file:///"+text_file_value);
  
 // readTextFile("file:///" + text_file_value);
  
  
  return code + '\n';
};


function readTextFile(file) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function () {
		if(rawFile.readyState === 4) {
			if(rawFile.status === 200 || rawFile.status == 0)
				{ var allText = rawFile.responseText; alert(allText);
				}
			} 
		};
		
	rawFile.send(null);
			
}
 

