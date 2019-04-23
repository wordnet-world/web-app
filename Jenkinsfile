pipeline {
  agent any
  stages {
    stage('Env inside') {
      steps {
        sh 'echo Hi'
        script {
          docker.image('node:8.16') {
            sh 'yarn install'
            sh "echo ${GIT_COMMIT}"
          }
        }

      }
    }
  }
}