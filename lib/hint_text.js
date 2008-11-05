// HintText Class
//------------------------------------------------------------------------------
var HintText = Class.create();
HintText.prototype = {
  initialize: function() {
    // Requirements
    if (typeof Prototype=='undefined' || (parseFloat(Prototype.Version.split(".")[0] + "." + Prototype.Version.split(".")[1]) < 1.6)) throw('HintText requires Prototype 1.6.0+');
    
    // Pause for browser auto-fill
    var obj = this;
    setTimeout(obj.initializeElements.bind(obj), 100);
  },
  
  initializeElements: function() {
    var labels = $$('label.hint');
    for (var i=0; i<labels.length; i++) {
      var input = false;
      if (input = $(labels[i].readAttribute('for'))) {
        // Give ID so we can refer to it directly later
        labels[i].id = "label_"+input.readAttribute('id');
        
        // Hover label
        labels[i].className = 'hint-apply';
        if (input.value.blank()) this._showLabel(labels[i]);
        else this._hideLabel(labels[i]);
        
        // Apply event listeners
        var obj = this;
        labels[i].observe("click", obj.labelClick.bind(obj));
        input.observe("focus", obj.inputFocus.bind(obj));
        input.observe("blur", obj.inputBlur.bind(obj));
      }
    }
  },
  
  labelClick: function(ev) {
    var el = ev.element();
    $(el.readAttribute('for')).focus();
  },
  
  inputFocus: function(ev) {
    var el = ev.element();
    var label = $('label_'+el.readAttribute('id'));
    
    this._hideLabel(label);
  },
  
  inputBlur: function(ev) {
    var el = ev.element();
    var label = $('label_'+el.readAttribute('id'))
    
    if (el.value.blank()) this._showLabel(label);
    else this._hideLabel(label);
  },
  
  // Privatez
  _hideLabel: function(el) {
    el.setStyle({textIndent: '-9999px'})
  },
  
  _showLabel: function(el) {
    el.setStyle({textIndent: '0px'})
  }
}