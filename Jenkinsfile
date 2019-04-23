pipeline {
  agent any
  stages {
    stage('Docker Build') {
      steps {
        sh 'docker build . -t cjblink1/wordnet-world-web-app:$GIT_COMMIT'
      }
    }
    stage('Docker Push') {
      steps {
        sh 'docker push cjblink1/wordnet-world-web-app:latest'
      }
    }
  }
}