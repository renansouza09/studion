$(document).ready(() => {
  const slickOptions = {
    autoplay: true,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Next</button>;'
  };
  const counterOptions = {
    delay: 20,
    time: 2000
  };
  $('.slider').slick(slickOptions);
  $('.counter__number').counterUp(counterOptions);
  $('#btn-footer').on('click', () => {
    const email = $('#email').val();
    const emailOptions = {
      Host : "smtp.elasticemail.com",
      Username : "username",
      Password : "password",
      To : 'contato@studion.com',
      From : email,
      Subject : "This is the subject",
      Body : "And this is the body"
    };

    Email.send(emailOptions).then(message => alert(message));
  });
});