$(document).ready(function () {
    let loadedLikeButton = false;

    function replaceFacebookDummy() {
        if (!loadedLikeButton) {
            $(`<div class="liker"><div id="fb-root"></div>

				<script>(function(d, s, id) {
								var js, fjs = d.getElementsByTagName(s)[0];
								if (d.getElementById(id)) return;
								js = d.createElement(s); js.id = id;
								js.src = 'https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v2.11&appId=214947809010830';
								fjs.parentNode.insertBefore(js, fjs);
						}(document, 'script', 'facebook-jssdk'));<\/script>

				<div class="fb-like" data-href="${document.location.href}" data-layout="button"
						 data-action="like" data-size="small" data-show-faces="false" data-share="false"></div></div>`)
                .insertAfter(".like-dummy");

            loadedLikeButton = true;
        } else {
            $(".liker").show();
        }

        $(".like-dummy").hide();
    }

    $(".like-dummy").click(function() {
        $("#switchFacebook").prop('checked', true).delay(100).change();
    });

    $("#switchFacebook").change(function() {
        if ($(this).is(":checked"))  {
            replaceFacebookDummy();
        } else {
            $(".like-dummy").show();
            $(".liker").hide();
        }
    });
});
