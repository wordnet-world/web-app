pipeline {
  agent any
  // def scmVars = checkout scm
  stages {
    stage('Env outside') {
      steps {
        sh "${GIT_COMMIT}"
      }
    }
  }
}

// node {
//     def scmVars = checkout scm
//     x
//     /* Requires the Docker Pipeline plugin to be installed */
//     docker.image('node:7-alpine').inside {
//         stage('Env inside') {
//             sh 'env'
//         }
//     }
// }