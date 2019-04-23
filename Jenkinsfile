pipeline {
  agent {
    docker {
      image 'node:8.16'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }
  }
}