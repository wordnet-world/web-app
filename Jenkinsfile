pipeline {
  agent any
  stages {
    stage('Yarn Build') {
      agent {
        docker {
          image 'node:8.16'
        }

      }
      steps {
        sh 'yarn install && yarn build'
      }
    }
    stage('Docker Build') {
      agent any
      steps {
        sh 'docker build . -t cjblink1/wordnet-world-web-app:latest'
      }
    }
    stage('Docker Push') {
      agent any
      steps {
        sh 'docker push cjblink1/wordnet-world-web-app:latest'
      }
    }
  }
}