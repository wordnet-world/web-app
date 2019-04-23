pipeline {
  agent any
  stages {
    agent docker
    stage('Yarn Build') {
      steps {
        sh 'yarn install && yarn build'
      }
    }
    stage('Docker Build') {
      steps {
        sh 'docker build . -t cjblink1/wordnet-world-web-app:latest'
      }
    }
    stage('Docker Push') {
      steps {
        sh 'docker push cjblink1/wordnet-world-web-app:latest'
      }
    }
  }
}