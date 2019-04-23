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
      agent {
        docker {
          image 'docker:18.09'
        }

      }
      steps {
        sh 'docker build . -t cjblink1/wordnet-world-web-app:latest'
      }
    }
    stage('Docker Push') {
      agent {
        docker {
          image 'docker:18.09'
        }

      }
      steps {
        sh 'docker push cjblink1/wordnet-world-web-app:latest'
      }
    }
  }
}