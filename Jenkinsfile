pipeline {
  agent any
  stages {
    stage('Update Kubernetes Config') {
      steps {
        sh 'whoami'
        git 'git@github.com:wordnet-world/config.git'
      }
    }
  }
}