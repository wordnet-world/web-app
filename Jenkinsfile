pipeline {
  agent any
  stages {
    def scmVars = checkout scm
    stage('Env outside') {
      sh "${scmVars.GIT_COMMIT}"
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