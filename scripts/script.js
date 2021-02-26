$('img.img-svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
    }, 'xml');
});


function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
document.getElementById('show-pass').onclick = () => {
    let elem = document.querySelector('.input-pass')
    if (elem.getAttribute('type') == 'password') {
        elem.setAttribute('type', 'text');
    } else {
        elem.setAttribute('type', 'password');
    }
}

document.querySelector('.log-in').onclick = (event) => {
    let input = document.getElementById('input-email');
    if (emailIsValid(input.value) == true) {
        input.classList.remove('validate');
        true;
    } else {
        event.preventDefault();
        input.classList.add('validate');
    }
}
