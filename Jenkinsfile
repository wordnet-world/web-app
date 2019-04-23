pipeline {
  agent any
  stages {
    stage('Env inside') {
      steps {
        sh 'echo Hi'
        // script {
        //   docker.image('node:8.16') {
        //     sh 'yarn install'
        //     sh "echo ${GIT_COMMIT}"
        //   }
        // }
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