// function matarPaneer(matar, paneer) {
//   console.log("paneer is ready");
// }
// matarPaneer("matar");

//currying says: until unless your all parameter of execution are satisfied  you cant run a program

//auto mailer
// function autoMailer(to, sub, body) {
//   console.log(
//     `email has been sent to ${to} with a subject ${sub} with a body ${body}`
//   );
// }
// autoMailer("abc@gmail.com", "Demo");

//functional programming approach

function autoMailer(to) {
  return function (sub) {
    return function (body) {
      console.log(
        `email has been sent to ${to} with a subject ${sub} with a body ${body}`
      );
    };
  };
}
autoMailer("abc@gmail.com")("demo");
