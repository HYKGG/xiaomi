    var nameInp = document.querySelector('#username')
    var passInp = document.querySelector('#password')
    var errorInfo = document.querySelector('.warning')
    var tipInfo = document.querySelector('.please')
    var btn = document.querySelector('button')
   btn.onclick = function (e) {
      e = e || window.event
      e.preventDefault()
      var uname = nameInp.value
      var upass = passInp.value
      if (!uname || !upass) {
        tipInfo.style.display = 'block'
        errorInfo.style.display = 'none'
        return
      }
    $.ajax({
        url: '/login',
        type: 'post',
        data: {
          username: uname,
          password: upass
        },
        dataType: 'json',
        success: function (res) {
            if (res.code === 0) {
                      tipInfo.style.display = 'none'
                      errorInfo.style.display = 'block'
                    } else {
                      window.location.href = './index.html'
                    }
        }
      })
    }
    