window.addEventListener('load', () => {
    var box = document.querySelector('.box')
    var span = document.querySelectorAll('.da')
    var index = 0
    var width = box.offsetWidth
    var startX = 0
    var moveX = 0
    var timer = setInterval(function () {
        index++
        var move = -width * index
        box.style.transition = '.3s all'
        box.style.transform = `translateX(${move}px)`
    }, 2000)
    box.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0
        } else if (index <= -1) {
            index = 2
        }
        var move = -width * index
        box.style.transition = 'none'
        box.style.transform = `translateX(${move}px)`
        span.forEach((item, i) => {
            item.style.transition = '.3s all'
            item.className = ""
            if (i === index) {
                item.className = "active"
            }
        });
    })
    box.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX
        clearInterval(timer)
    })
    box.addEventListener('touchmove', (e) => {
        moveX = e.touches[0].pageX - startX
        var move = -(width * index - moveX)
        box.style.transition = 'none'
        box.style.transform = `translateX(${move}px)`
    })
    box.addEventListener('touchend', () => {
        if (moveX <= 50 && moveX >= -50) {
            index = index
        } else if (moveX > 50) {
            index--
        } else if (moveX < -50) {
            index++
        }
        var move = -width * index
        box.style.transition = '.3s all'
        box.style.transform = `translateX(${move}px)`
        timer = setInterval(function () {
            index++
            var move = width * index
            box.style.transition = '.3s all'
            box.style.transform = `translateX(-${move}px)`
        }, 2000)
    })
})