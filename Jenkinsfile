pipeline {
  agent any
  stages {
    stage('Update Kubernetes Config') {
      steps {
        git 'git@github.com:wordnet-world/config.git'
        script {
          docker.image('bitnami/kubectl:1.14.1').inside('--entrypoint bash') {
            sh 'ls'
          }
        }

      }
    }
  }
}