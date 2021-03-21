const countEl = document.getElementById("userVisits");

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/hit/baily.at/visits')
    .then(res => res.json())
    .then(res => {
        countEl.textContent = res.value;
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    })
}