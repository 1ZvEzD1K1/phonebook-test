export default function validateForm(
  fname,
  lname,
  address,
  city,
  country,
  arrEmail,
  arrNumber
) {
  let error = [];
  let validateEmail = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/
  let validateNumber = /^([0-9]{1,2})\s?(([0-9]{1,3}))\s?([0-9-]{1,9})$/

  if (!fname.length) {
    error.push("Enter valid Name")
  }

  if (!lname.length) {
    error.push("Enter valid Last Name")
  }

  if (!address.length) {
    error.push("Enter valid Address")
  }

  if (!city.length) {
    error.push("Enter valid City")
  }

  if (!country.length) {
    error.push("Enter valid Country")
  }

  arrEmail.forEach((el, id) => {
    if (!validateEmail.test(el.value)) {
        error.push("Enter valid Email " + (id+1))
    }
  });

  arrNumber.forEach((el, id) => {
    if (!validateNumber.test(el.value)) {
        error.push("Enter valid Number " + (id+1))
    }
  });
  

  if (error.length) {
    return {res: false, error}
  } else {
    return {res: true, error}
  }
}
