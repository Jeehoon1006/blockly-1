MyFieldImage.prototype = new Blockly.FieldImage();
MyFieldImage.prototype.constructor = MyFieldImage;
function MyFieldImage(src, width, height, opt_alt,isClickListener){
    this.clickEventListener  = isClickListener;
    this.sourceBlock_ = null;
  // Ensure height and width are numbers.  Strings are bad at math.
  this.height_ = Number(height);
  this.width_ = Number(width);
  this.size_ = new goog.math.Size(this.width_,
      this.height_ + 2 * Blockly.BlockSvg.INLINE_PADDING_Y);
  this.text_ = opt_alt || '';
  this.setValue(src);
}

MyFieldImage.prototype.init = function(block) {
  if (this.sourceBlock_) {
    // Image has already been initialized once.
    return;
  }
  this.sourceBlock_ = block;
  // Build the DOM.
  /** @type {SVGElement} */
  this.fieldGroup_ = Blockly.createSvgElement('g', {}, null);
  if (!this.visible_) {
    this.fieldGroup_.style.display = 'none';
  }
  /** @type {SVGElement} */
  this.imageElement_ = Blockly.createSvgElement('image',
      {'height': this.height_ + 'px',
       'width': this.width_ + 'px'}, this.fieldGroup_);
  this.setValue(this.src_);
  if (goog.userAgent.GECKO) {
    /**
     * Due to a Firefox bug which eats mouse events on image elements,
     * a transparent rectangle needs to be placed on top of the image.
     * @type {SVGElement}
     */
    this.rectElement_ = Blockly.createSvgElement('rect',
        {'height': this.height_ + 'px',
         'width': this.width_ + 'px',
         'fill-opacity': 0}, this.fieldGroup_);
  }
  block.getSvgRoot().appendChild(this.fieldGroup_);

  // Configure the field to be transparent with respect to tooltips.
  var topElement = this.rectElement_ || this.imageElement_;
  topElement.tooltip = this.sourceBlock_;
  Blockly.Tooltip.bindMouseEvents(topElement);
  if(this.clickEventListener){
    this.imageElement_.addEventListener("click", callingClick); 
  }

};