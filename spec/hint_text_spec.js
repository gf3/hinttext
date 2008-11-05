Screw.Unit(function() {
  describe('HintText', function() {
    var hints;
    var input;
    var label;
    
    before(function() {
      // Reset HTML & Initialize
      hints = new HintText();
      document.getElementById('dom_test').innerHTML = '<div id="container" style="position: relative;"><label class="hint" for="form-element">HintText</label><input id="form-element" name="form[element]" type="text" /></div>';
      hints.initializeElements();
      
      // Grab input & label
      input = document.getElementById('form-element');
      label = document.getElementById('label_form-element');
    });
    
    after(function() {
      document.getElementById('dom_test').innerHTML = '';
      input = null;
      label = null;
    });
    
    describe('@focus', function(){
      it("should hide the hint label", function(){
        input.focus();
        expect(label.style.textIndent).to(equal, "-9999px");
      }); // ti
    });
    
    describe('@blur', function(){
      it("should show the hint label if the input is blank", function(){
        input.focus();
        input.blur();
        expect(label.style.textIndent).to(equal, "0px");
      }); // ti
      
      it("should do nothing if the input has data", function(){
        input.focus();
        input.value = "LOL";
        input.blur();
        expect(label.style.textIndent).to(equal, "-9999px");
      }); // ti
    });
    
    describe('@click', function(){
      it("should hide the hint label", function(){
        throw("Pending")
        
        jQuery(label.id).click(); // Not working
        expect(label.style.textIndent).to(equal, "-9999px");
      }); // ti
    });
    
  });
});