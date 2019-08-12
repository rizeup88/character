$(document).ready(function() {
  $("form#choices").submit(function(event) {
    var gender = $("select#gender").val();
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();
    var question6 = $("select#question6").val();
    var question7 = $("select#question7").val();

    if (gender) {
      var character = gender;
      if (gender === 'female' && (question1 === 'extro') && (question2 === 'fan') && (question3 === 'run') && ((question4 === 'hide') || (question4  === 'unsure')) && (question5 === 'live') && (question6 === 'english') && (question7 === 'not')) {
        character = ('Yumi Ishiyama');
        image = ('#yumi');
      } else if (gender === 'male' && (question1 === 'switch') && (question2 === 'sword') && (question3 === 'run') && ((question4 === 'hide') || (question4  === 'unsure')) && (question5 === 'half') && (question6 === 'physical') && (question7 === 'masc')) {
        character = ('Ulrich Stern');
        image = ('#ulrich');
      } else if (gender === 'male' && (question1 === 'extro') && (question2 === 'arrow') && ((question3 === 'excuse') || (question3 === 'distract')) && (question4 === 'flirt') && (question5 === 'dog') && (question6 === 'love') && (question7 === 'masc')) {
        character = ('Odd Della Robbia');
        image = ('#odd');
      } else if (gender === 'male' && (question1 === 'intro') && (question2 === 'keyboard') && (question3 === 'distract') && (question4 === 'sneak') && (question5 === 'close') && (question6 === 'science') && (question7 === 'masc')) {
        character = ('Jeremie Belpois');
        image = ('#jeremie');
      } else if (gender === 'female' && (question1 === 'intro') && (question2 === 'beam') && (question3 === 'excuse') && (question4 === 'sneak') && (question5 === 'none') && (question6 === 'math') && (question7 === 'fem')) {
        character = ('Aelita Schaeffer');
        image = ('#aelita');
      } else if (gender === 'male' && (question1 === 'extro') && (question2 === 'blade') && (question3 === 'distract') && (question4 === 'flirt') && (question5 === 'trouble') && (question6 === 'love') && (question7 === 'masc')) {
        character = ('William Dunbar');
        image = ('#william');
      } else if (gender === 'female' && (question1 === 'extro') && (question2 === 'voice') && ((question3 === 'submit') || (question3 === 'excuse')) && (question4 === 'flirt') && (question5 === 'spoiled') && (question6 === 'love') && (question7 === 'fem')) {
        character = ('Sissi Delmas');
        image = ('#sissi');
      } else if (gender === 'female' && (question1 === 'extro') && (question2 === 'skateboard') && (question3 === 'run') && (question4 === 'sneak') && (question5 === 'trouble') && (question6 === 'art') && (question7 === 'masc')) {
        character = ('Samantha Knight');
        image = ('#samantha');
      }

      $("#result").empty().append(character);
      $("#character").show();
      $(image).show();
    } else {
      alert('Please finish providing your answers.');
    }

    event.preventDefault();
  });
});