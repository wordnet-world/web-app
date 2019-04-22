pipeline {
  agent {
    docker {
      image 'node:8.16'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn install web-app'
      }
    }
  }
}