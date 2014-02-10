// $(document).ready(function() {
//   var $cards = $(".card").not(".cat-card"); //1

//   $cards.on("click", function(){ //2
//     var $this = $(this);

//     Borges zoologica memory:
// first click: reveal image
// second click, second column: reveal text
// if match, remaining visible; if not, reset clicked cards

$(document).ready(function() {
  var $cards = $(".card").not(".cat-card"); //1
  
  $(".illus").hide();

  $cards.on("click", function(){ //2
    var $this = $(this);



      if(!$this.hasClass("played") && !$this.hasClass("disabled")) {
      if(!$this.hasClass("chosen")) {
        // 3 change to state chosen
        $this.addClass("chosen"); 
        if($this.find(".illus").val() != ''){
          $this.find(".illus").fadeIn();
        });
        else 
          $this.find(".pltext").fadeIn();
         //show question //if illus is empty show pltext

        $this.find(".value").fadeOut();    //hide value
        // 3 change others state to disabled
        $cards.not(".chosen").addClass("disabled");
      } else if($this.find(".illus").is(":visible")) {
        // 4 chosen sub-state
        $this.find(".illus").fadeOut(); //hide question
        $this.find(".answer").fadeIn();    //show answer
      } else {
        // 5 change to state played
        $this.addClass("played").removeClass("chosen");
        $this.find(".answer").fadeOut();

        //change disabled cards to normal
        $cards.not(".played").removeClass("disabled");
      }
    }

  });
});

