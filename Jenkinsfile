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
          args '--privileged'
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
          image 'docker:dind'
          args '''--privileged
-v /root:$WORKSPACE'''
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