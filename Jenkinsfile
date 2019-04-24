pipeline {
  agent any
  stages {
    // stage('Docker Build and Push') {
    //   steps {
    //     script {
    //       def webAppImage = docker.build("cjblink1/wordnet-world-web-app:${GIT_COMMIT}")
    //       webAppImage.push()
    //     }
    //   }
    // }
    stage('Update Kubernetes Config') {
      steps {
        git 'git@github.com:wordnet-world/config.git'
        script {
          docker.image('busybox:1.30').inside('-v $HOME:/root') {
            sh 'echo version'
          }
        }
      }
    }
  }
}