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
        git url: "https://github.com/wordnet-world/config"
        sh 'ls'
      }
    }
  }
}