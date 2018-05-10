    // var people = $('ul.control-sidebar-menu .box-body div');
    // var person;
    // console.log(people);
    // $(function () {
    //     people.mouseenter(function (){
    //         $(this).css('cursor', 'pointer');
    //     });
    //     people.click(function() {
    //         people.each(function() {
    //             $(this).find('span').attr('class', 'glyphicon glyphicon-volume-off');
    //             $(this).css('color', '#b8c7ce');
    //         });
    //         $(this).css('color', '#000').find('span').attr('class', 'glyphicon glyphicon-volume-up');
    //         person = $(this).text();
    //     });
    
    // });

    // var select = $('ul.control-sidebar-menu button:first-child');
    // $(function () {
        
    //     select.click(function() {
    //         if(confirm("Are You Sure ?")){
    //             $('#name').text(person);
    //         }
    //     });
    // });

    // var next = $('ul.control-sidebar-menu button:last-child');
    // $(function () {
    //     next.click(function() {
    //         if(confirm("Are You Sure ?")){
    //             window.location.href = "3+.html";
    //         }
    //     })
    // })


{/* <script src="../dist/js/preesent.js"></script> */}
var people = $('ul.control-sidebar-menu .box-body div span:last-child');
var a = [ "CMPorts", "Sri Lanka Gov",  "HRI", "SAARC"];
var generate = $('ul.control-sidebar-menu button:first-child');
people.mouseenter(function (){
    $(this).css('cursor', 'pointer');
});
$(function() {
    generate.click(function() {
        var new_people = _.shuffle(a);
        for (var i = 0; i < 4; i++){
            people[i].innerText = new_people[i];
        }
    });
});

var m = $('.speaker');

var release = generate.next();
console.log(release);
$(function() {
    release.click(function() {
        if(confirm("Are You Sure ?")){
            var people = $('ul.control-sidebar-menu .box-body div span:last-child')
            for (var i = 0; i < 4; i++){
                m[i].innerText = people[i].innerText;
            }
            $('#name').text(people[0].innerText);
        }
    });
});
