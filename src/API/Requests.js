const managementInfo = require('./managementInfo.js')

const contentstack = require('@contentstack/management')
const contentstackClient = contentstack.client() 

// clogin to contentstack
// contentstackClient.login({ email: 'brady.brown@contentstack.com', password: managementInfo.CONTENTSTACK_PASSWORD})
// .then((response) => {
//     console.log(response.notice)
//     console.log(response.user)
// }) 

// create an entry
// var entry  = {
//   title: 'Sample Entry',
//   url: '/sampleEntry'
// }

// contentstackClient.stack({ api_key: managementInfo.REACT_APP_APIKEY }).contentType('projects').entry().create({ entry })
// .then((entry) => {
//   console.log(entry)
// })

export default {
  // should be able to call from managementForm.jsx
  createEntry(entry){
    return new Promise((resolve, reject) => {
      contentstackClient.stack({ api_key: managementInfo.REACT_APP_APIKEY })
      .contentType('projects')
      .entry()
      .create({ entry })
      .then(
        (result) => {
          resolve(result[0])
        },
        (error) => {
          reject(error)
        }
      )
    })
  },

  login(){
    contentstackClient.login({ email: 'brady.brown@contentstack.com', password: managementInfo.CONTENTSTACK_PASSWORD})
    .then((response) => {
        console.log(response.notice)
        console.log(response.user)
    }) 
  }
    

}