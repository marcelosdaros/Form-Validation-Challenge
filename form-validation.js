const regex = /[0-9]/

const validation = {
  valid: 'valid',
  invalid: 'invalid',
  neutral: 'neutral'
}

const fields = {
  name: {
    content: document.querySelector('#name'),
    status: validation.neutral,
    filled: false
  },
  telephone: {
    content: document.querySelector('#telephone'),
    status: validation.neutral,
    filled: false
  },
  email: {
    content: document.querySelector('#email'),
    status: validation.neutral,
    filled: false
  },
  pwd: {
    content: document.querySelector('#pwd'),
    status: validation.neutral,
    filled: false
  }
}

Object.entries(fields).forEach(([key, field]) => {
  field.content.value = localStorage.getItem(key)

  field.content.addEventListener('input', (event) => {
    localStorage.setItem(key, event.target.value)
    fieldValidation(event.target, key, field.filled)
  })
  field.content.addEventListener('blur', (event) => {
    field.filled = true
    fieldValidation(event.target, key, field.filled)
  })
})

const fieldValidation = (fieldHTML, key, isFilled) => {

  switch (key) {
    case 'name':
      labelName = document.querySelector('#labelName')

      if (!regex.test(fieldHTML.value) && fieldHTML.value != '') {
        changeToValid(fields.name, fieldHTML, labelName)
      } else if (isFilled) {
          changeToInvalid(fields.name, fieldHTML, labelName)
      } else {
          changeToNeutral(fields.name, fieldHTML, labelName)
      }
      break
    
    case 'telephone':
      labelTelephone = document.querySelector('#labelTelephone')

      if (!isNaN(fieldHTML.value) && fieldHTML.value != '') {
        changeToValid(fields.telephone, fieldHTML, labelTelephone)
      } else if (isFilled) {
          changeToInvalid(fields.telephone, fieldHTML, labelTelephone)
      } else {
          changeToNeutral(fields.telephone, fieldHTML, labelTelephone)
      }
      break

    case 'email':
      labelEmail = document.querySelector('#labelEmail')

      if (fieldHTML.value.includes('@') && fieldHTML.value != '') {
        changeToValid(fields.email, fieldHTML, labelEmail)
      } else if (isFilled) {
          changeToInvalid(fields.email, fieldHTML, labelEmail)
      } else {
          changeToNeutral(fields.email, fieldHTML, labelEmail)
      }
      break
    
    case 'pwd':
      labelPwd = document.querySelector('#labelPwd')

      if ((fieldHTML.value.length >= 8) && fieldHTML.value != '') {
        changeToValid(fields.pwd, fieldHTML, labelPwd)
      } else if (isFilled) {
          changeToInvalid(fields.pwd, fieldHTML, labelPwd)
      } else {
          changeToNeutral(fields.pwd, fieldHTML, labelPwd)
      }
      break
  }
}

const changeToValid = (fieldAttribute, fieldHTML, labelHTML) => {
  fieldAttribute.status = validation.valid
  fieldHTML.style = 'border: 1px solid green'
  labelHTML.style = 'color: green'
}

const changeToInvalid = (fieldAttribute, fieldHTML, labelHTML) => {
  fieldAttribute.status = validation.invalid
  fieldHTML.style = 'border: 1px solid red'
  labelHTML.style = 'color: red'
}

const changeToNeutral = (fieldAttribute, fieldHTML, labelHTML) => {
  fieldAttribute.status = validation.neutral
  fieldHTML.style = 'border: 1px solid black'
  labelHTML.style = 'color: black'
}