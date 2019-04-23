pipeline {
  agent any
  stages {
    stage('Build and Push') {
      agent {
        node {
          label 'master'
        }

      }
      steps {
        sh 'echo "Hello World"'
      }
    }
  }
}