describe('set', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should be able to handle integers', function() {
    set.add(4);
    expect(set.contains(4)).to.equal(true);
    set.add(5);
    expect(set.contains(5)).to.equal(true);
    set.remove(4);
    expect(set.contains(4)).to.equal(false);
  });

    it('should be able to handle inputs of any type', function() {
    set.add(true);
    expect(set.contains(true)).to.equal(true);
     var obj = {a:4};
    set.add(obj);
    expect(set.contains(obj)).to.equal(true);
     var fnc  = function (val) {return val;} 
    set.add(fnc);
    expect(set.contains(fnc)).to.equal(true);
    set.remove({a:4});
    expect(set.contains({a:4})).to.equal(false);
    set.remove(fnc);
    expect(set.contains(fnc)).to.equal(false);

  });

});
