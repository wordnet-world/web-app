pipeline {
  agent {
    docker {
      image 'node:8.16'
      args '-w web-app'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn install'
      }
    }
  }
}