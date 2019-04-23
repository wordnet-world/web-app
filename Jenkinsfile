pipeline {
  agent any
  stages {
    stage('Yarn Build') {
      parallel {
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
        stage('Env') {
          agent any
          steps {
            sh 'env'
          }
        }
      }
    }
    stage('Docker Build') {
      agent {
        docker {
          image 'docker:dind'
          args '''--privileged
-v /var/run/docker.sock:/var/run/docker.sock'''
        }

      }
      environment {
        GIT_COMMIT = '$GIT_COMMIT'
      }
      steps {
        sh 'docker build . -t cjblink1/wordnet-world-web-app:latest'
      }
    }
    stage('Docker Push') {
      agent {
        docker {
          image 'docker:18.09'
          args '''--privileged
-d docker:dind'''
        }

      }
      environment {
        GIT_COMMIT = '$GIT_COMMIT'
      }
      steps {
        sh 'docker push cjblink1/wordnet-world-web-app:latest'
      }
    }
  }
}