let navigetion = document.querySelector('.navigetion');
    document.querySelector('.toggle').onclick = function () {
      this.classList.toggle('active')
      navigetion.classList.toggle('active')
    }