$(function() {
    var pickedDates;
    var dateStart = "";
    var dateEnd = "";
    var index
    var nbMail
    var mailList = [];

    // Exemple to add a new mail in the list:
    //var newMail = new mail("from", "to", "subject", true/false, "YYYY-MM-YYTHH-mm", "body")
    var mail1 = new mail("aaa@example.com", "zzz.zzz@example.com", "[HR-888] Notice of official announcement", "", "2020-10-05T00:20", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non cursus ipsum, sed suscipit urna. Phasellus sollicitudin massa sit amet justo convallis ullamcorper. Phasellus feugiat eros a diam consequat, in posuere augue accumsan. Phasellus placerat, turpis sed vulputate feugiat, justo orci lacinia mi, id aliquet erat elit quis tortor. Curabitur vehicula lacus non nisl cursus imperdiet. Morbi congue eleifend erat at consequat. Sed vestibulum dolor vel eros sagittis, in pulvinar est convallis. Morbi efficitur ante eget tellus euismod egestas. Duis laoreet feugiat nibh, a suscipit mi pellentesque ac. Duis est velit, iaculis eu lacinia cursus, finibus eget elit. In enim justo, mollis bibendum venenatis sit amet, scelerisque ac mi. Proin at fringilla purus, sed aliquet sem. Aenean vehicula, arcu vel pharetra hendrerit, dolor nunc gravida sem, at sagittis tellus sapien vitae risus. Donec sit amet aliquam ipsum. Maecenas et tellus fermentum, pretium ligula vel, elementum tortor.Nulla justo nulla, hendrerit eget turpis eu, bibendum pulvinar urna. Etiam luctus nibh ut enim cursus, id varius dui cursus. Maecenas ornare semper neque id pellentesque. Integer eu interdum nisi. Suspendisse imperdiet ligula id eleifend ullamcorper. Mauris sit amet sapien vel quam fermentum fringilla ut a tortor. Vivamus sit amet neque orci. Curabitur gravida vulputate ipsum, eu molestie sapien molestie ut. Maecenas placerat, risus nec scelerisque commodo, sapien mi euismod metus, vitae rutrum tortor eros eget risus. Nunc ac elementum augue, at rutrum libero. Quisque scelerisque urna ac mi euismod, nec ultricies dolor scelerisque. Fusce vitae bibendum nisl. Morbi ullamcorper et ante sed volutpat. Mauris dapibus, nunc eget dictum porttitor, magna dui placerat purus, a dapibus augue mauris finibus urna. Morbi id egestas erat. Proin semper orci lacus, et pulvinar erat blandit ac. Sed consequat efficitur malesuada. Aliquam porttitor risus odio, eu iaculis risus ultrices nec. Vestibulum maximus enim at elit tempor condimentum. Sed lacinia rutrum ipsum, tempor dignissim eros pharetra vel.");
    var mail2 = new mail("bbb.bbbb@example.com", "yyy@example.com", '[web:333] "Web Contact"', "", "2020-10-05T12:37", "Piquons vite, colonel, que nous rencontrâmes, fort heureusement brefs, sans vraiment d'aménité. Reçois l'hommage de mon respect et de crainte, pas le leur. Six minutes, une confusion extraordinaire. Troisième tableau : dans des mers de sang qu'eux ; il est vrai qu'un attachement assez élevé pour être en bas. Défiez-vous de la fille entrait pour beaucoup dans mon bonheur. Dites-nous maintenant toute l'amertume de cet échec, et bien certainement il ne tarderait pas à rentrer en lui-même. Beau succès que l'esprit du poète qui la compose. Assuré de son débit, où les gardes de l'escorte et les sergents de ville !");
    var mail3 = new mail("ccc@example.com", "xxx@example.com, www@example.com", "Happy New Year! Greetings for the New Year.", "Gift_card.pdf" ,"2020-10-16T16:48", "私たちが出会った大佐の人生を一口食べましょう。幸いなことに、本当に快適ではありません。彼らのものではなく、私の尊敬と恐れへのオマージュ。 6分、異常な混乱。彼らよりも海の血を与える3番目の絵。アタッチメントが十分に高くて低くなるのは事実です。女の子に注意することは私の幸せの大きな部分でした。この失敗のすべてが今私たちを苦しめています、そして確かにそれはそれ自身に戻るのに長くはかからないでしょう。詩人の精神が構成する美しい成功。借金の息子、または町の外の護衛と軍人に保険をかけなさい！TIEは、コンシェルジュと一緒にスラッグを探しますか？卓越性、その関心の力を納得させた。スウェットシャツ、ジーンズ、建物に描かれたドレス、時には50年、私たちは部屋で発見しました...私がダスと仮定して不正確を犯した人は、芸術家にすべての分野に処方された材料を持っていることを祝福します。パスワードを確認する方法がない固定部分を想像してみてください。ドローイングルームが来るのに長い時間があり、もはや生命がなく、土地の素早い一歩であるならば、ルーレットの頭は優雅な社会のすべてを愛撫します。彼女は右側の同じペアのvigiljudemeutにいます。地平線の精神的な範囲に喜び、それを炉に変えた、これらのローリングオイルはあなたの女性を閉じ込めます！あなたはまだ全速力で直線やより一般的なアルファベット順の作成の痕跡を描く人であり、私たちは年をとっていて、おそらく提供されていないことを約束してください");
    var mail4 = new mail("ddd.dddd@example.com", "vvv.vvv@exemple.com, uuu@exemple.com", "[HR-887(Revised: Office Expansion Project Team)] Notice of off Lorem Ipsum bla bla", "", "2020-09-05T00:20", "Obligé alors de chercher des limaces avec un cierge ? Excellence, on est convaincu qu'à force d'usure. Sweat-shirt, jean, veste de peintre en bâtiment, dès cinquante ans parfois, on découvrait dans une chambre... Béni soit celui qui a commis une inexactitude en supposant que je dusse, pour avoir prescrit à l'artiste une matière artistique tout élaborée. Imaginons que les parties fixes qui n'ont pas oublié la façon de voir. Ce salon est si long à revenir, plus vite, pressant le pas d'un lopin de terre, la tête roulée dans une caresse tout à la société élégante ; elle est à la veille même du jugement par jurés. Ravi en esprit aux confins de l'horizon et se changeaient en fournaise, ces cases roulantes où l'on enferme les femmes ! Promettez-moi que vous serez toujours une personne de tracer une ligne droite à pleine vitesse le tracé d'une écriture alphabétique ou plus généralement, l'on se fait vieux, et peut-être pas même curé.");
    var mail5 = new mail("eee@example.com", "sss@example.com, rrr@example.com, ttt@example.com", "[Github] Logout page", "", "2020-09-31T00:20", "Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers forensium rerum; Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, non iudicium clamans.");
    var mail6 = new mail("fff.ffff@example.com", "qqq.qqq@example.com", "[dev］ Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5", "", "2020-10-12T00:20", "Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? cum praesertim illa perdiscere ludus esset. Quam ob rem dissentientium inter se reprehensiones non sunt vituperandae, maledicta, contumeliae, tum iracundiae, contentiones concertationesque in disputando pertinaces indignae philosophia mihi videri solentEt hanc quidem praeter oppida multa duae civitates exornant Seleucia opus Seleuci regis, et Claudiopolis quam deduxit coloniam Claudius Caesar. Isaura enim antehac nimium potens, olim subversa ut rebellatrix interneciva aegre vestigia claritudinis pristinae monstrat admodum pauca.Et est admodum mirum videre plebem innumeram mentibus ardore quodam infuso cum dimicationum curulium eventu pendentem. haec similiaque memorabile nihil vel serium agi Romae permittunt. ergo redeundum ad textum.");
    var mail7 = new mail("ggg@example.com", "ppp@example.com", "Re: [Github] Brush-up on loading animation ", "", "2019-12-31T00:20", "Lorem Ipsum bla bla");
    var mail8 = new mail("hhh.hhh@example.com", "ooo.ooo@example.com", "Workplace Summary for sample, Inc.: Jun 2 - Jun 9", "brush-up_animation.zip", "2019-01-20T00:20", "Lorem Ipsum bla bla");
    var mail9 = new mail("iii@example.com", "nnn@example.com", "I love you", "love.jpg", "2020-08-24T00:20", "Lorem Ipsum bla bla");
    var mail10 = new mail("Pablo-Diego-Francesco@example.com", "Pablo-Diego-Francesco@example.com", "[info:888] ABC EQUIPMENT COMPANY", "", "2020-09-11T00:20", "Lorem Ipsum bla bla");
    

    function mail (from, to, subject, clip, date, body){
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.clip = clip;
        this.date = date;
        this.body = body;
        mailList.push(this)
        
        //Automatic integration to the mail list for any new objects(mail)
        this.integrateMails = function integrateMails(){
            var to = this.to;
            var nbOfTo = 0;
            var additionalTo = ""; 
            var clip = this.clip;
            this.date = new Date(this.date)
            var date = this.date.getFullYear()+"/"+ (this.date.getMonth()+1) +"/"+ this.date.getDate() + " " + this.date.getHours() + ":" + this.date.getMinutes();

            //Additional + (ex: +1, +2, +3 etc... if there is more than 1 mail)
            function addAdditionalTo(){
                String.prototype.count=function(s1) { 
                    return (this.length - this.replace(new RegExp(s1,"g"), '').length) / s1.length;
                }
                nbOfTo = to.count(',');
                
                if (nbOfTo > 0){
                    additionalTo = "<p>+"+ nbOfTo +"</p>";
                    to = to.split(' ')[0] + " ..." ;
                } 
            }

            //Clip adding if there are any files into the mail
            function addClip(){
                if (clip !== ""){
                    clip = "<img class='clip-img' src='assets/icon_clip.svg'></img>"
                } else {
                    clip = "";
                }
            } 
            addAdditionalTo();
            addClip();
            
            if(this.date >= dateStart && this.date <= dateEnd || dateStart == "" && dateEnd == ""){
                $('.desktop').append(
                    "<div class='mail desktop-mail'>"+
                        "<div class='from'><p>"+this.from+"</p></div>"+
                        "<div class='to'><p>"+to+"</p></div>"+
                        "<div class='addTo'><p>"+additionalTo+"</p></div>"+
                        "<div class='subject'><p>"+this.subject+"</p></div>"+
                        "<div class='clip'><a class='clip-link hide'>"+this.clip+"</a>"+clip+"</div>"+
                        "<div class='date'><p>"+date+"</p></div>"+
                        "<div class='bodyMessage hide'><p>"+this.body+"</p></div>"+
                    "</div>")

                $('.small').append(
                    "<div class='small-mail'>"+
                    "<div class='firstBox fromDateBox'>"+
                        "<div class='from'><img src='assets/icon_mail_sp.svg' class='mail-icon'><p>"+this.from+"</p></div>"+
                        "<div class='dateClipBox'>"+
                        "<div class='clip'>"+clip+"</div>"+
                        "<div class='date'><p>"+date+"</p><img src='assets/icon_arrow02.svg'></div>"+
                    "</div>"+
                    "</div>"+
                    "<div class='firstBox toAddToBox'>"+
                        "<div class='to'><p>"+this.to+"</p></div>"+
                        "<div class='addTo'>"+additionalTo+"</div>"+
                    "</div>"+ 
                    "<div class='subject'><p>"+this.subject+"</p></div>"+
                "</div>")
            } 
        }  
    }
    
    //Function to sort the mails inside the array mailList[]
    function compareDateDec(a, b) {
        var a = a.date;
        var b = b.date;
        
        let comparison = 0;
        if (a > b) {
            comparison = -1;
        } else if (a < b) {
            comparison = 1;
        }
        return comparison;
        }
        
    function compareDateInc(a, b) {
        var a = a.date;
        var b = b.date;
        
        let comparison = 0;
        if (a > b) {
            comparison = 1;
        } else if (a < b) {
            comparison = -1;
        }
        return comparison;
        }
    
    function compareFromDec(a, b) {
        var a = a.from.toUpperCase();
        var b = b.from.toUpperCase();
        
        let comparison = 0;
        if (a > b) {
            comparison = 1;
        } else if (a < b) {
            comparison = -1;
        }
        return comparison;
        }

    function compareFromInc(a, b) {
        var a = a.from.toUpperCase();
        var b = b.from.toUpperCase();
        
        let comparison = 0;
        if (a > b) {
            comparison = -1;
        } else if (a < b) {
            comparison = 1;
        }
        return comparison;
        }

    function compareToDec(a, b) {
        var a = a.to.toUpperCase();
        var b = b.to.toUpperCase();
        
        let comparison = 0;
        if (a > b) {
            comparison = 1;
        } else if (a < b) {
            comparison = -1;
        }
        return comparison;
        }

    function compareToInc(a, b) {
        var a = a.to.toUpperCase();
        var b = b.to.toUpperCase();
        
        let comparison = 0;
        if (a > b) {
            comparison = -1;
        } else if (a < b) {
            comparison = 1;
        }
        return comparison;
        }

    function compareSubjectDec(a, b) {
        var a = a.subject.toUpperCase();
        var b = b.subject.toUpperCase();
        
        let comparison = 0;
        if (a > b) {
            comparison = 1;
        } else if (a < b) {
            comparison = -1;
        }
        return comparison;
        }

    function compareSubjectInc(a, b) {
        var a = a.subject.toUpperCase();
        var b = b.subject.toUpperCase();
        
        let comparison = 0;
        if (a > b) {
            comparison = -1;
        } else if (a < b) {
            comparison = 1;
        }
        return comparison;
        }
    
    //Function to build the objects inside the array mailList[]
    function refreshList(){
        $('.mail, .small-mail').remove();
        for (let i = 0; i < mailList.length; i++)
        mailList[i].integrateMails();
        if ($('.title .date > p').hasClass('boldTxt')){
            $('.date > p').addClass('boldTxt')
        } else if($('.title .from > p').hasClass('boldTxt')){
            $('.from > p').addClass('boldTxt')
        } else if($('.title .to > p').hasClass('boldTxt')){
            $('.to > p').addClass('boldTxt')
        } else if($('.title .subject > p').hasClass('boldTxt')){
            $('.subject > p').addClass('boldTxt')
        }
        $(".total-mail").text($(".mail").length);
    }

    

    //Init the on load display
    function init(){
        mailList.sort(compareDateDec);
        refreshList()
        $('.date > p').addClass('boldTxt')
        nbMail = $('.mail').length;
        changeNbMails();
    }
    init()

    //Function to change the mails displayed number
    function changeNbMails(){
        $('.resultnb').text(nbMail);
        if(nbMail <= 0){
            $('.search-result').hide();
            $('.no-mail').show();
        } else {
            $('.no-mail').hide();
            $('.search-result').show();
        }
    }
    
    function datePicker(){
        $('input[name="datefilter"]').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });
    
        $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('YYYY/MM/DD') + ' - ' + picker.endDate.format('YYYY/MM/DD'));
        });
    
        $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });
    };
    datePicker();

    $('.search-left, .search-right').click(function (e) {
        $('.search-middle-dates').trigger('click');
    });
    
    $('.applyBtn').click(function (e) {
        e.preventDefault();
        $(".switch").trigger('click')
        pickedDates = $('.drp-selected')[0].innerText || $('.drp-selected')[0].textContent;
        dateStart = new Date(pickedDates.split(" ")[0]);
        dateEnd = new Date(pickedDates.split(" ")[2] + " 23:59");
        refreshList();
        nbMail = $('.mail').length ;
        changeNbMails();
        dateFormating();
      });

    $('.cancelBtn').click(function (e) {
        dateStart = "";
        dateEnd = "";
        e.preventDefault();
        $(".switch").trigger('click')
        refreshList();
        nbMail = $('.mail').length ;
        changeNbMails();
        dateFormating();
    });

    // Date Formating
    function dateFormating(){
        var thisDate = $('.desktop-mail .date > p');
        var thisSmDate = $('.small-mail .date > p'); 
        for (let i = 0; i < nbMail; i++) {
            var dateTxt = new Date(thisDate[i].innerText);
            var currentDate = new Date();
            var formatedDate;

            if (currentDate.getFullYear() !== dateTxt.getFullYear()){
                formatedDate = dateTxt.getFullYear()+"/"+ (dateTxt.getMonth()+1) +"/"+ dateTxt.getDate()+" ";
            }else if(currentDate.getFullYear() === dateTxt.getFullYear() && currentDate.getMonth() === dateTxt.getMonth() && currentDate.getDate() === dateTxt.getDate()){
                formatedDate = dateTxt.getHours()+ ":" + dateTxt.getMinutes()+" ";
            }else if(currentDate.getFullYear() === dateTxt.getFullYear()){
                var month = new Array();
                month[0] = "Jan";
                month[1] = "Feb";
                month[2] = "Mar";
                month[3] = "Apr";
                month[4] = "May";
                month[5] = "Jun";
                month[6] = "Jul";
                month[7] = "Aug";
                month[8] = "Sep";
                month[9] = "Oct";
                month[10] = "Nov";
                month[11] = "Dec";
                formatedDate = month[dateTxt.getMonth()]+" "+dateTxt.getDate()+" ";
            } 
            thisDate[i].innerText = formatedDate;
            thisSmDate[i].innerText = formatedDate;
        }
    }
    dateFormating();

    // Sorting function
    $('.sort').click(function() {
        $(".switch").trigger('click')
        var clicks = $(this).data('clicks');
            // clearMails();
        if (clicks) {
            var thisTd = $(this).index();
                if(thisTd == 0){
                    mailList.sort(compareFromDec)
                } else if(thisTd == 1){
                    mailList.sort(compareToDec)
                } else if(thisTd == 2){
                    mailList.sort(compareSubjectDec)
                } else if(thisTd == 3){
                    mailList.sort(compareDateDec);
                }
            $('.title p > img').removeClass('arrow-down')
        } else {
            var thisTd = $(this).index();
                if(thisTd == 0){
                    mailList.sort(compareFromInc);
                } else if(thisTd == 1){
                    mailList.sort(compareToInc);
                } else if(thisTd == 2){
                    mailList.sort(compareSubjectInc);
                } else if(thisTd == 3){
                    mailList.sort(compareDateInc);
                }
            $('.title p > img').addClass('arrow-down')
        }
        refreshList();
        $('.arrow').remove();
        $("div p").removeClass("boldTxt")
        $(this).children("p").append('<img class="arrow" src="assets/icon_arrow01.svg">')
        if (clicks) {
            $('.title p > img').removeClass('arrow-down')
        } else {
            $('.title p > img').addClass('arrow-down')
        }
        var thisTd = $(this).index();
                if(thisTd == 0){
                    $(".from > p").addClass("boldTxt")
                } else if(thisTd == 1){
                    $(".to > p").addClass("boldTxt")
                } else if(thisTd == 2){
                    $(".subject > p").addClass("boldTxt")
                } else if(thisTd == 3){
                    $(".date > p").addClass("boldTxt")
                }
        dateFormating();
        $(this).data("clicks", !clicks);
    });

    // Reload the page when the display is changing
    var threshold = 752; //Need to minus 17 if you want the exact size you wish in px
    var initialDiff = ($(window).width() > threshold) ? 1:-1;

    $(window).on('resize',function(e){
        var w = $(window).width();
        var currentDiff = w - threshold;
        if(currentDiff*initialDiff < 0) {
            location.reload();
        }
    });



    function bodyPrinting(){
        var thisBody
        var thisBodySubject
        var thisBodyDate
        var thisBodyFrom
        var thisBodyClip
        var thisTo
        var thisSmall
        var thisIndex

        function bodyBuilding(a){
            $('.body-subject > p, .message > p, .body-from > p, .body-to > p, .body-addTo > p, .body-date > p, .body-clip').remove();
            $('.body-subject').append("<p>"+thisBodySubject[a].innerText+"</p>");
            $('.body-from').append("<p>"+thisBodyFrom[a].innerText+"</p>");
            $('.body-to').append("<p>"+thisTo[a].innerText+"</p>");
            $('.body-date').append("<p>"+thisBodyDate[a].innerText+"</p>");
            $('.message').append("<p>"+thisBody[a].innerText+"</p>");
            if(thisBodyClip[a].innerText !== ""){
                $('.body-content').append( "<div class='body-clip'><hr><p>"+thisBodyClip[a].innerText+"<i class='fas fa-download'></i></p></div>");
            }
        }
        
        if (window.matchMedia("(max-width: 768px)").matches) {
            // For Small Devices only, under 769px of large
            $(document.body).on("click", ".small-mail", function(){
                thisBody = $(".mail .bodyMessage > p")
                thisBodySubject = $(".mail .subject > p")
                thisBodyDate = $(".mail .date > p")
                thisBodyFrom = $(".mail .from > p")
                thisBodyClip = $(".mail .clip > a")
                thisTo = $(".small-mail .to > p");
                thisSmall = $(".small-mail");
                $(".index-mail").text($(this).index())
                $(this).addClass('mail-focus');
                bodyBuilding($(this).index()-1);
                $("#body-mail").show(function(){
                    $(".small, .result, .search").css("transition", "all 0.5s")
                    $(".small, .result, .search").css("margin-left","-100%")
                    $("#body-mail").animate({right: '0%'}, 300, function(){
                        $("html").css("overflow", "hidden");
                    })
                });
                if($(this).index() === 1){
                    $(".previous").addClass('disable')
                } else{
                    $(".previous").removeClass('disable')
                }
                if($(this).index() === $(".mail").length){
                    $(".next").addClass('disable')
                } else{
                    $(".next").removeClass('disable')
                }
            });
            
            $(".switch").click(function(){
                $(".small-mail").removeClass('mail-focus');
                $(".small, .result, .search").css("margin-left","0")
                $("#body-mail").animate({right: '-100%'}, 400, function(){
                    $("#body-mail").hide()
                    $("html").css("overflow", "auto");
                    $(".small, .result, .search").css("transition", "all 0s")
                });
            });
        }else if(window.matchMedia("(min-width: 769px)").matches){
            // For Desktop display only
            $(document.body).on("click", ".mail, .small-mail", function(){
                thisBody = $(".mail .bodyMessage > p")
                thisBodySubject = $(".mail .subject > p")
                thisBodyDate = $(".mail .date > p")
                thisBodyFrom = $(".mail .from > p")
                thisBodyClip = $(".mail .clip > a")
                thisTo = $(".small-mail .to > p");
                thisSmall = $(".small-mail");
                $(".index-mail").text($(this).index())
                $(".small-mail, .mail").removeClass('mail-focus');
                $(this).addClass('mail-focus');
                $(thisSmall[$(this).index()-1]).addClass('mail-focus');
                bodyBuilding($(this).index()-1);
                $("#body-mail").show(function(){
                    $(".desktop").css("transition", "all 0.5s")
                    $(".desktop").css("width","40%")
                    $("#body-mail").animate({right: '0%'}, 300, function(){
                        $(".desktop").hide();
                        $(".small").show();
                    })
                });
                if($(this).index() === 1){
                    $(".previous").addClass('disable')
                } else{
                    $(".previous").removeClass('disable')
                }
                if($(this).index() === $(".mail").length){
                    $(".next").addClass('disable')
                } else{
                    $(".next").removeClass('disable')
                }
            });

            $(".switch").click(function(){
                $(".small-mail, .mail").removeClass('mail-focus');
                $(".small").hide();
                $(".desktop").show();
                $(".desktop").css("width","100%")
                $("#body-mail").animate({right: '-100%'}, 400, function(){
                    $("#body-mail").hide()
                    $(".small, .result, .search").css("transition", "all 0s")
                });
            });
        }
        
        $(".previous").click(function(){
            var thisNewIndex = $(".index-mail")[0].innerText;
            if(thisNewIndex > 1){
                thisNewIndex--;
                $(".index-mail").text(thisNewIndex);
                $(".small-mail").removeClass('mail-focus');
                bodyBuilding(thisNewIndex-1);
                $(".small-mail").eq(thisNewIndex-1).addClass('mail-focus');
                if(thisNewIndex !== 1){
                    $(".next").removeClass('disable')
                    $(".previous").removeClass('disable')
                } else{
                    $(".next").removeClass('disable')
                    $(".previous").addClass('disable')
                }
            }
        })

        $(".next").click(function(){
            var thisNewIndex = $(".index-mail")[0].innerText;
            if(thisNewIndex < $(".mail").length){
                thisNewIndex++;
                $(".index-mail").text(thisNewIndex);
                $(".small-mail").removeClass('mail-focus');
                bodyBuilding(thisNewIndex-1);
                $(".small-mail").eq(thisNewIndex-1).addClass('mail-focus');
                if(thisNewIndex !== $(".mail").length){
                    $(".next").removeClass('disable')
                    $(".previous").removeClass('disable')
                } else{
                    $(".previous").removeClass('disable')
                    $(".next").addClass('disable')
                }
            }
        }) 
    }
    bodyPrinting();
});