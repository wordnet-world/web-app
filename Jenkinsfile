pipeline {
  agent any
  stages {
    stage('Update Kubernetes Config') {
      steps {
        git 'git@github.com:wordnet-world/config.git'
        sh 'ls'
      }
    }
  }
}